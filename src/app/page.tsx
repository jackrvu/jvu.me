export default function HomePage() {
  return (
    <div className="no-select flex flex-col w-full h-full">
      <header className="pl-0 pt-4 pb-4 mb-4 border border-black border-t-0 border-l-0 border-r-0">
        <p className="text-lg font-semibold">enbao</p>
        <p className="text-sm">personal website.</p>
      </header>
      <div className="flex flex-grow text-2xs">

        <aside className="w-1/3 h-full mr-2">
          <div className="border border-black p-2">
            <h2 className="font-semibold">Status</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p>BALL</p>
          </div>
          
          <div className="border border-black p-2">
            <h2 className="font-semibold">Links</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li><a href="https://x.com/fast4ea" className="hover:text-fuchsia-400">x.com/fast4ea</a></li>
              <li><a href="https://github.com/ecao77" className="hover:text-fuchsia-400">github.com/ecao77</a></li>
              <li><a href="mailto:ecao787@gmail.com" className="hover:text-fuchsia-400">ecao787@gmail.com</a></li>
            </ul>
          </div>

        </aside>

        <main className="w-2/3 h-full">

          <div className="border border-black p-2">
            <h2 className="font-semibold">About me</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p className="tracking-very-tight">howdy! im studying at st. johns school in houston, tx with an interest in math (abstract algebra, model theory) and computer science (rl). i enjoy listening to music (jazz, breakcore, psych rock), reading (nabokov, steinbeck, nietzsche), and running.</p>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Recent posts</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <ul>
              <li>24-07-28 :: supplements</li>
              <li>24-07-23 :: homelab</li>
              <li>24-07-23 :: new website</li>
              <li>24-07-14 :: digital gardens</li>
            </ul>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Projects</h2>
          </div>
          <div className="mb-4 border border-black border-t-0 p-2">
            <p> problem solving initiative (psi) [github] cordgrass wave reduction [github][preprint] metachronal propulsion
              [github][paper] terminal-based website [github] pds projects [github] gradient descent [github]
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}