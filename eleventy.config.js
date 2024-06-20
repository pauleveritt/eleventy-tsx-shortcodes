import "tsx/esm";
import { render } from "preact-render-to-string";

import pluginBundle from "@11ty/eleventy-plugin-bundle";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addBundle("css");
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        const content = await this.defaultRenderer(data);
        const result = render(content, {
          data,
          shortcodes: eleventyConfig.javascriptFunctions,
        });
        return `<!doctype html>\n${result}`;
      };
    },
  });

  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");

  return {
    dir: {
      includes: "../_includes",
      input: "content",
      output: "_site",
    },
  };
}
