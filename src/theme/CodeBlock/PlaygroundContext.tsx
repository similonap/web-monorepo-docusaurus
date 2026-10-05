import React from 'react';

export type PlaygroundKind = 'codesandbox' | 'expo' | null;

interface PlaygroundContextValue {
  kind: PlaygroundKind;
  previewVisible: boolean;
  loading: boolean;
  togglePreview: () => void;
}

const PlaygroundContext = React.createContext<PlaygroundContextValue>({
  kind: null,
  previewVisible: false,
  loading: false,
  togglePreview: () => {},
});

export const usePlayground = () => React.useContext(PlaygroundContext);

export default PlaygroundContext;
