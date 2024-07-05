import { Heading } from "./Heading";
import { ComponentChildren } from "preact";

export type RenderData = {};

type IndexProps = {
  children: ComponentChildren;
  title: string;
};

export function BaseLayout(this: RenderData, { title, children }: IndexProps) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Heading title={title} />
        {children}
      </body>
    </html>
  );
}

export const render = BaseLayout;
