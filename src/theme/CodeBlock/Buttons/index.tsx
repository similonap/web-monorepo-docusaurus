import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CopyButton from '@theme/CodeBlock/Buttons/CopyButton';
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton';
import type {Props} from '@theme/CodeBlock/Buttons';
import {usePlayground} from '../PlaygroundContext';
import styles from './styles.module.css';

function PlaygroundButton() {
  const {kind, previewVisible, loading, togglePreview} = usePlayground();
  if (!kind) return null;

  const product = kind === 'codesandbox' ? 'CodeSandbox' : 'Expo Snack';
  const title = loading
    ? `${product} laden…`
    : previewVisible
      ? `Verberg ${product}`
      : `Open in ${product}`;

  return (
    <button
      type="button"
      className={clsx('clean-btn', loading && styles.loading)}
      title={title}
      aria-label={title}
      onClick={togglePreview}
      disabled={loading}
    >
      <span className={styles.buttonIcon} aria-hidden="true">
        {previewVisible ? (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        )}
      </span>
    </button>
  );
}

export default function CodeBlockButtons({className}: Props): ReactNode {
  const {kind, previewVisible} = usePlayground();
  return (
    <BrowserOnly>
      {() => (
        <div className={clsx(className, styles.buttonGroup)}>
          {!previewVisible && <WordWrapButton />}
          {!previewVisible && <CopyButton />}
          {kind && <PlaygroundButton />}
        </div>
      )}
    </BrowserOnly>
  );
}
