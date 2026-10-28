import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const credentiallessAttribute = {credentialless: ''} as Record<string, string>;

// Speelt de HyperFrames-compositie uit videos/<name>/ live af in de browser.
// De course-build zet ze klaar onder /hyperframes/<name>/ (zie
// scripts/bundle-hyperframes.cjs); renderen naar MP4 is niet nodig.
export default function HyperframesVideo({name, title}: {name: string; title?: string}) {
  const src = useBaseUrl(`/hyperframes/${name}/player.html`);

  return (
    <iframe
      {...credentiallessAttribute}
      src={src}
      title={title ?? name}
      loading="lazy"
      allow="autoplay; fullscreen"
      allowFullScreen
      style={{
        display: 'block', width: '100%', maxWidth: 800, aspectRatio: '16 / 9', margin: '0 auto 1rem',
        // Het eerste frame is wit: zonder rand valt de video weg tegen de pagina.
        border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8,
      }}
    />
  );
}
