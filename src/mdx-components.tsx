import type { MDXComponents } from 'mdx/types';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-semibold mt-12 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-4">{children}</h2>,
    p: ({ children }) => <p className="text-lg text-foreground/80 leading-relaxed mb-6">{children}</p>,
    ...components,
  };
}
