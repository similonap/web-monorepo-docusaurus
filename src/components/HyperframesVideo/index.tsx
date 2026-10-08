import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Toont een video uit videos/<name>/, gerenderd met `npm run videos`
// naar static/videos/<name>.mp4 (+ poster <name>.jpg).
export default function HyperframesVideo({name, title}: {name: string; title?: string}) {
  const src = useBaseUrl(`/videos/${name}.mp4`);
  const poster = useBaseUrl(`/videos/${name}.jpg`);

  return (
    <video
      src={src}
      poster={poster}
      title={title ?? name}
      controls
      preload="metadata"
      playsInline
      style={{display: 'block', width: '100%', maxWidth: 800, aspectRatio: '16 / 9', marginBottom: '1rem'}}
    />
  );
}
