import { BaseLayout, Theme } from "./BaseLayout";
import { JSX } from "preact";
import { useState } from "preact/compat";

export type MainLayoutProps = {
  title: string;
};

export function MainLayout({ title }: MainLayoutProps): JSX.Element {
  const [theme, setTheme] = useState("dark");
  return (
    <Theme.Provider value={theme}>
      <BaseLayout title={title}>
        <div>hello</div>
      </BaseLayout>
    </Theme.Provider>
  );
}

export const render = MainLayout;
