import { Heading } from "./Heading";
import { ComponentChildren, createContext } from "preact";
import { useContext, useState } from "preact/compat";

export type RenderData = {};

type IndexProps = {
  children: ComponentChildren;
  title: string;
};

export const Theme = createContext("light");

export function BaseLayout(this: RenderData, { title, children }: IndexProps) {
  const [theme, setTheme] = useState("dark");
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Heading title={title} />
        {children}
        <p>Theme: {theme}</p>
      </body>
    </html>
  );
}

export const render = BaseLayout;
