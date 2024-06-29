import { Heading } from "./Heading";
import { ComponentChildren } from "preact";

export type RenderData = {};

type IndexProps = {
  children: ComponentChildren;
};

export function BaseLayout(this: RenderData, { children }: IndexProps) {
  return (
    <html>
      <head>
        <title>Hello TSX</title>
      </head>
      <body>
        <Heading />
        {children}
      </body>
    </html>
  );
}

export const render = BaseLayout;
