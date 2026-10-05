import type {Post} from '@/types';
import LikeButton from './LikeButton';

export default function PostCard({post}: {post: Post}) {
  return (
    <article className="post">
      <header className="profile">
        <img src={post.profile.avatarUrl} alt="" />
        <div>
          <strong>{post.profile.name}</strong>
          <p>@{post.profile.username}</p>
        </div>
      </header>
      <p>{post.text}</p>
      <p className="date">{new Date(post.createdOn).toLocaleString('nl-BE')}</p>
      <LikeButton />
    </article>
  );
}
