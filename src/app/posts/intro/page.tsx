import Link from 'next/link';
import Header from '../../../components/header';

export default function Specs() {
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
              <li><Link href="/posts" className="hover:text-fuchsia-400">All Posts</Link></li>
            </ul>
          </div>
          {/* You can keep other aside elements from the homepage if desired */}
        </aside>

        <main className="w-2/3 h-full">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Setups</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p className="italic mb-4">my setups! how I work and focus and relax.</p>
            <p>computer: m1 macbook. 1 lambda gh200 for heavy machinery.</p>
            <p>keeb: womier aluminum sk71 or the mac butterfly keyboard.</p>
            <p>math: blue bic pen on blank printer paper. classic combo.</p>
            <p>writing: black zebra sarasa on campus a5 ringed notebook.</p>
            <p>music: steady rotation between sony xm3s and airpod pros.</p>
          </div>
        </main>
      </div>
    </div>
  )
}