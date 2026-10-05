import React, {type ReactNode, useMemo, useState} from 'react';
import clsx from 'clsx';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import ExternalPreviewFrame from '@site/src/components/ExternalPreviewFrame';
import {useCodeSandbox} from '@site/src/components/CodeSandbox/useCodeSandbox';
import PlaygroundContext, {type PlaygroundKind} from './PlaygroundContext';
import Buttons from './Buttons';
import styles from './styles.module.css';

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
  metastring?: string;
  [key: string]: unknown;
}

interface CodeSandboxMetadata {
  template: string;
  filename: string;
}

interface ExpoMetadata {
  dependencies?: string;
}

function metadata<T>(metastring: string | undefined, name: string): T | null {
  if (!metastring) return null;
  const match = new RegExp(`${name}=(\\{.*?\\})(?:\\s|$)`).exec(metastring);
  if (!match) return null;
  try {
    return JSON.parse(match[1]) as T;
  } catch (error) {
    console.error(`Invalid ${name} code-block metadata`, error);
    return null;
  }
}

function visibleCode(code: string) {
  return code
    .replace(/\/\/hide-start\n[\s\S]*?\/\/hide-end\n?/g, '')
    .replace(/\n+$/, '');
}

function runnableCode(code: string) {
  return code
    .replaceAll('//hide-start\n', '')
    .replaceAll('//hide-end\n', '')
    .replaceAll('//hide-start', '')
    .replaceAll('//hide-end', '');
}

function ExpoPreview({code, config}: {code: string; config: ExpoMetadata}) {
  const files = {'App.tsx': {type: 'CODE', contents: code}};
  const query = new URLSearchParams({
    platform: 'web',
    preview: 'true',
    theme: 'light',
    files: JSON.stringify(files),
  });
  if (config.dependencies) query.set('dependencies', config.dependencies);
  return <ExternalPreviewFrame className={styles.frame} src={`https://snack.expo.dev/embedded?${query}`} title="Expo Snack" />;
}

function CodeSandboxPreview({sandboxId, filename}: {sandboxId: string; filename: string}) {
  const query = new URLSearchParams({
    fontsize: '14',
    hidenavigation: '1',
    theme: 'light',
    view: 'preview',
    autoresize: '1',
    expanddevtools: '1',
    module: `/${filename}`,
  });
  return <ExternalPreviewFrame className={styles.frame} src={`https://codesandbox.io/embed/${sandboxId}?${query}`} title="CodeSandbox" />;
}

export default function CodeBlock({children, metastring, ...props}: CodeBlockProps) {
  const code = typeof children === 'string' ? children : '';
  const codeSandbox = useMemo(
    () => metadata<CodeSandboxMetadata>(metastring, 'codesandbox'),
    [metastring],
  );
  const expo = useMemo(() => metadata<ExpoMetadata>(metastring, 'expo'), [metastring]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [sandboxId, setSandboxId] = useState('');
  const fullCode = useMemo(() => runnableCode(code), [code]);
  const [createSandbox, sandboxState] = useCodeSandbox({
    code: fullCode,
    template: codeSandbox?.template,
    filename: codeSandbox?.filename,
    onCreated: setSandboxId,
  });
  const kind: PlaygroundKind = codeSandbox ? 'codesandbox' : expo ? 'expo' : null;

  async function togglePreview() {
    if (previewVisible) {
      setPreviewVisible(false);
      return;
    }
    if (codeSandbox && !sandboxId) {
      const created = await createSandbox();
      if (!created) return;
    }
    setPreviewVisible(true);
  }

  const context = useMemo(() => ({
    kind,
    previewVisible,
    loading: sandboxState.loading,
    togglePreview: () => { void togglePreview(); },
  }), [kind, previewVisible, sandboxState.loading, sandboxId]);

  return (
    <PlaygroundContext.Provider value={context}>
      <div className={styles.wrapper}>
        {!previewVisible && (
          <OriginalCodeBlock {...props} metastring={metastring}>
            {kind ? visibleCode(code) : children}
          </OriginalCodeBlock>
        )}
        {previewVisible && (
          <div className={clsx('theme-code-block', styles.preview)}>
            <div className={styles.previewContent}>
              {expo && <ExpoPreview code={fullCode} config={expo} />}
              {codeSandbox && sandboxId && (
                <CodeSandboxPreview sandboxId={sandboxId} filename={codeSandbox.filename} />
              )}
              <Buttons />
            </div>
          </div>
        )}
        {sandboxState.error && <div className={styles.error} role="alert">{sandboxState.error}</div>}
      </div>
    </PlaygroundContext.Provider>
  );
}
