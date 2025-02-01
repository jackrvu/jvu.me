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
            <h2 className="font-semibold">Prose</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <p>i absolutely love good prose. here's are some of my favorites.</p>
          </div>

          <div className="border border-black p-2">
            <h2 className="font-semibold">Favorites</h2>
          </div>
          <div className="mb-2 border border-black border-t-0 p-2">
            <div className="mb-6"> {/* Container for each quote + attribution */}
              <p className="mb-2">"Natural selection, in the Darwinian sense, could not explain the miraculous coincidence of imitative aspect and imitative behavior, nor could one appeal to the theory of "the struggle for life" when a protective device was carried to a point of mimetic subtlety, exuberance, and luxury far in excess of a predator's power of appreciation. I discovered in nature the nonutilitarian delights that I sought in art. Both were a form of magic, both were a game of intricate enchantment and deception."</p>
              <p className="text-right">— Vladimir Nabokov (Speak, Memory)</p>
            </div>

            <div className="mb-6">
              <p className="mb-2">"No one wants to go home. Sometimes Young wishes he could bury his face in the chemistry or the math and not have to think about Liang and Jing and the golden boys, because it all becomes so dreary. He can lean now, slow. He can trace numbers with his toe, and when he tries, he can even see the stars and the sky.  They go somewhere, like the Yellow River during the festival, they feed into some bigger place, they _erode_.  Sometimes, with his mind to heavy with information, he looks up at recites.  There are billions of galaxies in the universe. Einstein's photoelectric effect, atoms, we, emit electrons. We keep the positive inside. Descartes's Rule of Signs and the Fundamental Theorem of Algebra. He recites everything, book as a pillow under his head, to the stars who will hear, who will deliver."</p>
              <p className="text-right">— Christina Qiu (The Hubei Boys)</p>
            </div>

            <div className="mb-6">
              <p className="mb-2">"When you work you are a flute through whose heart the whispering of the hours turns to music."</p>
              <p className="text-right">— Kahlil Gibran (The Prophet)</p>
            </div>

            <div className="mb-6">
              <p className="mb-2">"Mack and the boys avoid the trap, walk around the poison, step over the noose while a generation of trapped, poisoned, and trussed-up men scream at them and call them no-goods, come-to-bad-ends, blots-on-the-town, thieves, rascals, bums. Our Father who art in nature, who has given the gift of survival to the coyote, the common brown rat, the English sparrow, the housefly and the moth, must have a great and overwhelming love for no-goods and blots-on-the-town and bums, and Mack and the boys. Virtues and graces and laziness and zest. Our Father who art in nature."</p>
              <p className="text-right">— John Steinbeck (Cannery Row)</p>
            </div>

            <div className="mb-6">
              <p className="mb-2">"The secret of happiness is to see all the marvels of the world, and never to forget the drops of oil on the spoon."</p>
              <p className="text-right">— Pablo Coelho (The Alchemist)</p>
            </div>

            <div className="mb-6">
              <p className="mb-2">"He had said, “I am a man,” and that meant certain things to Juana. It meant that he was half insane and half god. It meant that Kino would drive his strength against a mountain and plunge his strength against the sea. Juana, in her woman's soul, knew that the mountain would stand while the man broke himself; that the sea would surge while the man drowned in it. And yet it was this thing that made him a man, half insane and half god."</p>
              <p className="text-right">— John Steibeck (The Pearl)</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}