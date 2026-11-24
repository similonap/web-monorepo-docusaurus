import {Suspense} from 'react';
import PostList from '@/components/PostList';

export default function Home() {
  return (
    <main>
      <h1>Y</h1>
      <Suspense fallback={<p>Posts laden...</p>}>
        <PostList />
      </Suspense>
    </main>
  );
}
