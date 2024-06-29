export type Context = {};

export type ThisHeading = {
  context: Context;
};

export function Heading(this: ThisHeading, data: any) {
  // This actually retrieves a callable
  return <h2>The Heading</h2>;
}
