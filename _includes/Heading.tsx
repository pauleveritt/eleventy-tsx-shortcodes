export type Context = {
  // The "this" value has a "context" managed by Preact.
  // In eleventyConfig "compile", we call Preact's "render"
  // function. This argument can take a second value which
  // is then assigned to "this.context" in subcomponents.
  // Note: The layout itself doesn't have this.context from
  // Preact because 11ty re-binds "this".
  shortcodes: {
    css: (content: string) => void;
  };
};

export type ThisHeading = {
  context: Context;
};

export function Heading(this: ThisHeading, data: any) {
  // This actually retrieves a callable
  const { css } = this.context.shortcodes;
  css(".xyz {font-weight: bold}");
  return <h2>The Heading</h2>;
}
