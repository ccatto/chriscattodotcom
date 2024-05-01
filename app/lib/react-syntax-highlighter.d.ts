/// <reference path="/node_modules/@types/react-syntax-highlighter/index.d.ts" />
// https://github.com/storybookjs/storybook/issues/11684
// Thanks to Jessidhia on Github
declare module 'react-syntax-highlighter/dist/cjs/create-element' {
  import React from 'react';

  export type SyntaxHighlightNode =
    | (TextNode & Partial<Record<keyof TagNode<any>, never>>)
    | (TagNode<any> & Partial<Record<keyof TextNode, never>>);

  export interface TextNode {
    type: 'text';
    value: string;
  }

  export interface TagNode<T extends React.ElementType> {
    tagName: T;
    properties: React.ComponentProps<T>;
  }

  export interface CreateElementProps {
    node: SyntaxHighlightNode;
    stylesheet: import('react-syntax-highlighter').SyntaxHighlighterProps['customStyle'];
    style?: React.CSSProperties;
    useInlineStyles?: boolean;
    key: string | number;
  }

  export default function createElement(
    props: CreateElementProps,
  ): string | JSX.Element;
}
