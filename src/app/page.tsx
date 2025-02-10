import Header from '@/components/header';
import Pokemon from '@/components/pokemon';
import PostsList from '@/components/postslist';
import { posts, getRecentPosts } from '@/data/posts';

export default function HomePage() {
  return (
    <div className="no-select flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-grow text-3xs lg:text-2xs">

        <aside className="w-1/3 h-full mr-2">
        
          <div className="border border-black p-2">
            <h2 className="font-semibold">Status</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2 flex items-center gap-2">
            pivoting! <Pokemon /> 
          </div>
          
          <div className="border border-black p-2">
            <h2 className="font-semibold">Links</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li><a href="https://github.com/enbaocao" className="hover:text-fuchsia-400">github.com/enbaocao</a></li>
              <li><a href="mailto:enbaocao@gmail.com" className="hover:text-indigo-400">enbaocao[at]gmail[dot]com</a></li>
            </ul>
          </div>

        </aside>

        <main className="w-2/3 h-full">

          <div className="border border-black p-2">
            <h2 className="font-semibold">About me</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p className="tracking-very-tight">howdy!</p>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Recent posts</h2>
          </div>
          <PostsList posts={getRecentPosts()} />  

          <div className="border border-black p-2">
            <h2 className="font-semibold">Projects</h2>
          </div>
          <div className="mb-4 border border-black border-t-0 p-2">
          </div>
        </main>
      </div>
    </div>
  )
}