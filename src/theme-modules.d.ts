declare module '@theme-original/CodeBlock' {
  import type {ComponentType} from 'react';
  const CodeBlock: ComponentType<Record<string, unknown>>;
  export default CodeBlock;
}

declare module '@theme/CodeBlock' {
  import type {ComponentType} from 'react';
  const CodeBlock: ComponentType<Record<string, unknown>>;
  export default CodeBlock;
}

declare module '@theme/CodeBlock/Buttons' {
  import type {ComponentType} from 'react';
  export interface Props { className?: string }
  const Buttons: ComponentType<Props>;
  export default Buttons;
}

declare module '@theme/CodeBlock/Buttons/CopyButton' {
  import type {ComponentType} from 'react';
  const CopyButton: ComponentType;
  export default CopyButton;
}

declare module '@theme/CodeBlock/Buttons/WordWrapButton' {
  import type {ComponentType} from 'react';
  const WordWrapButton: ComponentType;
  export default WordWrapButton;
}

declare module '@theme/Heading' {
  import type {ComponentType, HTMLAttributes} from 'react';
  const Heading: ComponentType<HTMLAttributes<HTMLHeadingElement> & {as: `h${1 | 2 | 3 | 4 | 5 | 6}`}>;
  export default Heading;
}
