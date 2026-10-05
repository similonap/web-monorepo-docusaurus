'use client';

import {useState} from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button type="button" aria-pressed={liked} onClick={() => setLiked((value) => !value)}>
      {liked ? '♥ Geliket' : '♡ Like'}
    </button>
  );
}
