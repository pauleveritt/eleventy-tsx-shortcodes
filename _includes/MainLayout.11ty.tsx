import { Heading } from "./Heading";

export type MainLayoutProps = {
  title: string;
};

export function MainLayout({ title }: MainLayoutProps) {
  const thisCss = this.getBundle("css");
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Heading title={title} />
        <div>hello</div>
        <style>{thisCss}</style>
      </body>
    </html>
  );
}

export const render = MainLayout;
