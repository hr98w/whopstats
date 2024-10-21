import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'next-view-transitions';
import type { MDXComponents } from 'mdx/types';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl sm:text-4xl font-bold mb-0 text-default-900 fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => <h2 className="text-2xl font-semibold mt-8 mb-2 text-default-800" {...props} />,
  h3: (props: HeadingProps) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-default-800" {...props} />,
  h4: (props: HeadingProps) => <h4 className="text-large font-regular text-default-800" {...props} />,
  p: (props: ParagraphProps) => <p className="text-base mb-2 leading-snug text-default-600" {...props} />,
  ol: (props: ListProps) => <ol className="list-decimal pl-5 space-y-2" {...props} />,
  ul: (props: ListProps) => <ul className="list-disc pl-5 space-y-1 text-default-600" {...props} />,
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => <em className="font-regular" {...props} />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => <strong className="font-regular" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="ml-[0.075em] border-l-3 border-gray-300 pl-4" {...props} />
  ),
};

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
