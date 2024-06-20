import { Heading } from "./Heading";

export type RenderData = {
  getBundle(name: string): string;
};

type IndexProps = {
  content: string;
};

export function render(this: RenderData, { content }: IndexProps) {
  const cssBundle = this.getBundle("css");
  return (
    <html>
      <head>
        <title>Hello TSX</title>
        <style>{this.getBundle("css")}</style>
      </head>
      <body>
        <Heading />
        {content}
      </body>
    </html>
  );
}
