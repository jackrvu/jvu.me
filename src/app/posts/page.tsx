import Link from 'next/link';
import Header from '@/components/header';
import PostsList from '@/components/postslist';
import { posts, getRecentPosts } from '@/data/posts';

export default function PostsPage() {
  return (
    <div className="no-select flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-grow text-3xs lg:text-2xs">

        <aside className="w-1/3 h-full mr-2">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Navigation</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li><Link href="/" className="hover:text-fuchsia-400">Home</Link></li>
            </ul>
          </div>
          {/* You can keep other aside elements from the homepage if desired */}
        </aside>

        <main className="w-2/3 h-full">
          <div className="border border-black p-2">
            <h2 className="font-semibold">All Posts</h2>
          </div>
          <PostsList posts={posts} />
        </main>
      </div>
    </div>
  )
}