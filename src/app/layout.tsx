import './globals.css'
import { Azeret_Mono } from 'next/font/google'

const mono = Azeret_Mono({
  weight: ['200', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'enbao.me',
  description: 'status, links, visitors, about me, posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-custom-gray  bg-dot-pattern bg-dot-pattern min-h-screen flex justify-center`}>
        <div className="bg-white w-full md:w-[50vw] lg:w-[50vw] h-full p-4 flex flex-col mt-12"> 
          {children}
        </div>
      </body>
    </html>
  )
}