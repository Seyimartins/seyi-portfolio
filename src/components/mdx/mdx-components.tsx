import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-accent pl-6 italic text-foreground"
      {...props}
    />
  ),
};
