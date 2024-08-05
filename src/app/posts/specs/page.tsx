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
            <h2 className="font-semibold">Specs</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p>ill share my setups: for work, for music.</p>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Work</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p>computer: macbook, m1 chip.</p>
            <p>keyb: womier aluminum sk71.</p>
            <p>math: bic round stic, blue.</p>
            <p>write: zebra sarasa, black.</p>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Music</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p>clarinet: buffet, r13 b66.</p>
            <p>mouthpiece: m13 lyre. b40. </p>
            <p>ligature: inverted bonade.</p>
            <p>reeds: vandoren v12 3.5+s.</p>
            <p>alto sax: yamaha, 200adii.</p>
          </div>
        </main>
      </div>
    </div>
  )
}