// src/components/PostsList.tsx
import Link from 'next/link';

type Post = {
  date: string;
  title: string;
  slug: string;
};

type PostsListProps = {
  posts: readonly Post[] | Post[];  // now accepts both readonly and regular arrays
};

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="mb-2 border border-black border-t-0 p-2">
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="hover:text-green-400">
              {post.date} :: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}