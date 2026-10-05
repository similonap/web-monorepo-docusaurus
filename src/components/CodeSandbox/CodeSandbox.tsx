import React, {useEffect, useState} from 'react';
import ExternalPreviewFrame from '../ExternalPreviewFrame';
import {useCodeSandbox} from './useCodeSandbox';

export default function CodeSandbox({template}: {template: string}) {
  const [sandboxId, setSandboxId] = useState('');
  const [createSandbox, state] = useCodeSandbox({template, onCreated: setSandboxId});

  useEffect(() => {
    void createSandbox();
  }, [createSandbox]);

  if (state.error) return <p role="alert">{state.error}</p>;
  if (!sandboxId) return <p>CodeSandbox laden…</p>;
  return <ExternalPreviewFrame
    src={`https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=light`}
    style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}}
    title={`CodeSandbox: ${template}`}
  />;
}
