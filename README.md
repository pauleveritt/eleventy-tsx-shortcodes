# 11ty, TSX, Components, and shortcodes

TSX components and subcomponents don't have access to shortcodes. The
`this.context.shortcodes.css()` function runs, but doesn't put its content into the bundle.

## 11ty, TSX, and Preact

The 11ty docs cover the [setup of TypeScript and TSX](https://www.11ty.dev/docs/languages/typescript/).
That page shows the use of `renderToStaticMarkup` from `react-dom/server`. This repo uses
Preact and [preact-render-to-string](https://github.com/preactjs/preact-render-to-string).
Its `render` function takes
[a second argument](https://github.com/preactjs/preact-render-to-string/blob/ae6450b8b4592493e110b1bb648ed2b605bffbb7/src/index.js#L39)
as a "context" which is an object that is available as `this.context` on all components.

## Components and shortcodes

I'd like shortcodes such as the Nunjucks `{% css %}em { font-style: italic; }{% endcss %}`
to be available in JSX/TSX. It doesn't have to be in the markup. It can be done in a JavaScript call in the component.

I'd like this to be available in both the layout component and any subcomponents. I make this distinction because 11ty
manages the first, but not the second.

When a layout component is called, it's just a normal JavaScript template. 11ty handles it by doing a `bind()` and
making the `this` into an object managed by 11ty. The `this` then has access to all the goodness a template might want.

Subcomponents are different though. They are instantiated by Preact. They get a `this` that is manage by Preact. As a
note, this also means that layouts don't get `this.context` as Preact didn't create that instance.

## This repo's setup

The `eleventy.config.js` adds the bundle plugin and a bundle for `css`. In the `compile` function, it shoves the
shortcodes into the Preact context:

```javascript
const content = await this.defaultRenderer(data);
const result = render(content, {
  data,
  shortcodes: eleventyConfig.javascriptFunctions,
});
```

This allows subcomponents to grab the `css()` callable as `this.context.shortcodes.css`. You can see this in the
`_includes/Heading.tsx` subcomponent.

## Example of the problem in `BaseLayout`

`_includes/BaseLayout.11ty.tsx` shows the problem. When this line is run:

```javascript
const cssBundle = this.getBundle("css");
```

...it is executed before the subcomponent is run. Most likely, there's an order-of-execution problem. The JSX
immediately invokes `this.getBundle("css")`.
