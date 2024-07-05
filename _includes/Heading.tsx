import { useContext, useState } from "preact/compat";
import { Theme } from "./BaseLayout";

export type Context = {};

export type ThisHeading = {
  context: Context;
};

export type HeadingProps = {
  title: string;
};

export function Heading(this: ThisHeading, { title }: HeadingProps) {
  const [theme, setTheme] = useState("dark");
  setTheme("NOOOOO");
  return (
    <h2>
      {title}: {theme}
    </h2>
  );
}
