import React from 'react';

const credentiallessAttribute = {credentialless: ''} as Record<string, string>;

function videoId(source: string) {
  try {
    const url = new URL(source);
    if (url.hostname === 'youtu.be') return url.pathname.slice(1);
    if (url.pathname.startsWith('/embed/')) return url.pathname.split('/')[2];
    if (url.pathname.startsWith('/shorts/')) return url.pathname.split('/')[2];
    return url.searchParams.get('v');
  } catch {
    return null;
  }
}

export default function YouTubeVideo({src, title = 'YouTube-video'}: {src: string; title?: string}) {
  const id = videoId(src);
  if (!id) return <a href={src}>{title}</a>;

  return (
    <iframe
      {...credentiallessAttribute}
      src={`https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0`}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{display: 'block', width: '100%', maxWidth: 800, aspectRatio: '16 / 9', border: 0}}
    />
  );
}
