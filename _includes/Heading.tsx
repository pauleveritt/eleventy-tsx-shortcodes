export type Context = {};

export type ThisHeading = {
  context: Context;
};

export type HeadingProps = {
  title: string;
};

export function Heading(this: ThisHeading, { title }: HeadingProps) {
  // This actually retrieves a callable
  return <h2>{title}</h2>;
}
