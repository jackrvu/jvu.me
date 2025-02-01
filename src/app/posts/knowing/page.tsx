import Link from 'next/link';

export default function Specs() {
  return (
    <div className="no-select flex flex-col w-full h-full">
      <header className="pl-0 pt-4 pb-4 mb-4 border border-black border-t-0 border-l-0 border-r-0">
        <p className="text-base lg:text-lg font-semibold">enbao</p>
        <p className="text-xs lg:text-sm">personal website.</p>
      </header>
      <div className="flex flex-grow text-3xs lg:text-2xs">

        <aside className="w-1/3 h-full mr-2">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Navigation</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li><Link href="/" className="hover:text-fuchsia-400">Home</Link></li>
              <li><Link href="/posts" className="hover:text-fuchsia-400">All Posts</Link></li>
            </ul>
          </div>
          {/* You can keep other aside elements from the homepage if desired */}
        </aside>

        <main className="w-2/3 h-full">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Knowing</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p className="border-b border-white mb-4">Have you seen the world? Have you seen the incredible things you can do with just a computer, words, and turning shapes over in your mind? Have you seen how you can provide a service to others, something they didn't even know they wanted, and push a noticeable change into the world?</p>
            <p className="border-b border-white mb-4">The worst thing, the ultimate blocker to learning, is something, some course, some person, who explains things to you as if you don't have the capability to understand it yourself. Every person here should be imbued with the innate knowledge that they have the ability to learn and understand anything and everything. If you put the time in. If you devote yourself to it. If you ask the textbook questions and hunt for the answers. If you use the internet to help you on your search. If you find yourself thinking about the problem in the shower.</p>
            <p>If you *ever* feel insecure about the value of this life, try learning something you care deeply about.</p>
          </div>
        </main>
      </div>
    </div>
  )
}