export type Context = {
  shortcodes: any;
  css: any;
  data: {
    page: {
      url: string;
    };
  };
};

export type ThisHeading = {
  context: Context;
};

export type HeadingProps = {
  title: string;
};

export function Heading(this: ThisHeading, { title }: HeadingProps) {
  const { css } = this.context;
  css("h2.xyz {font-weight: bold}");
  return <h2 class="xyz">{title}</h2>;
}
