import { BaseLayout } from "./BaseLayout";
import { JSX } from "preact";

export type MainLayoutProps = {
  title: string;
};

export function MainLayout({ title }: MainLayoutProps): JSX.Element {
  return (
    <BaseLayout title={title}>
      <div>hello</div>
    </BaseLayout>
  );
}

export const render = MainLayout;
