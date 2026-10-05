import type {Post, Profile} from '@/types';
import PostCard from './PostCard';

const POSTS_URL = 'https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/posts.json';
const PROFILES_URL = 'https://raw.githubusercontent.com/similonap/json/refs/heads/master/y-clone/profiles.json';

export default async function PostList() {
  const [postsResponse, profilesResponse] = await Promise.all([
    fetch(POSTS_URL),
    fetch(PROFILES_URL),
  ]);
  if (!postsResponse.ok || !profilesResponse.ok) throw new Error('De Y-clone-data kon niet worden geladen.');

  const posts = await postsResponse.json() as Omit<Post, 'profile'>[];
  const profiles = await profilesResponse.json() as Profile[];
  const postsWithProfiles = posts.flatMap((post) => {
    const profile = profiles.find((candidate) => candidate.username === post.username);
    return profile ? [{...post, profile}] : [];
  });

  return postsWithProfiles.map((post) => <PostCard key={`${post.username}-${post.createdOn}`} post={post} />);
}
