import React from 'react';
import ExternalPreviewFrame from '../ExternalPreviewFrame';

export default function ExpoSnack({snackId}: {snackId: string}) {
  const normalizedId = snackId.replace(/^https:\/\/snack\.expo\.dev\//, '').replace(/^\//, '');
  const source = `https://snack.expo.dev/embedded/${normalizedId}?platform=web&preview=true&theme=light`;
  return <ExternalPreviewFrame
    src={source}
    style={{width: '100%', height: 505, border: 0, borderRadius: 4, overflow: 'hidden'}}
    title={`Expo Snack: ${snackId}`}
  />;
}
