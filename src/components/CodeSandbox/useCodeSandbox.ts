import {useCallback, useState} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

interface TemplateFile {
  content: string;
  isBinary?: boolean;
}

interface Template {
  files: Record<string, TemplateFile>;
}

interface CodeSandboxPluginData {
  templates: Record<string, Template>;
}

interface CodeSandboxResponse {
  sandbox_id: string;
}

interface Options {
  code?: string;
  template?: string;
  filename?: string;
  onCreated: (sandboxId: string) => void;
}

interface State {
  loading: boolean;
  error: string;
}

export function useCodeSandbox({code, template, filename, onCreated}: Options): [() => Promise<string | null>, State] {
  const {templates} = usePluginData('codesandbox-plugin') as CodeSandboxPluginData;
  const [state, setState] = useState<State>({loading: false, error: ''});

  const createSandbox = useCallback(async () => {
    if (!template) return null;
    const source = templates[template];
    if (!source) {
      setState({loading: false, error: `CodeSandbox-template “${template}” bestaat niet.`});
      return null;
    }
    setState({loading: true, error: ''});
    try {
      const files = {...source.files};
      if (code && filename) files[filename] = {content: code};
      const response = await fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({...source, files}),
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const result = await response.json() as CodeSandboxResponse;
      onCreated(result.sandbox_id);
      setState({loading: false, error: ''});
      return result.sandbox_id;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setState({loading: false, error: `CodeSandbox kon niet worden geladen: ${message}`});
      return null;
    }
  }, [code, filename, onCreated, template, templates]);

  return [createSandbox, state];
}
