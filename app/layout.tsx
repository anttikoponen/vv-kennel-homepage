import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vuorivillen Kennel",
  description: "Metsästyskoiriin erikoistunut Kennel Kuopiossa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <nav className='bg-white border-gray-200 dark:bg-green-950 dark:border-gray-700 min-h-fit opacity-95 items-center'>
        <div className='max-w-screen flex flex-wrap flex-col items-center justify-between mx-auto p-4 md:flex-row'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/pystykorva.jpg'
              className='h-auto w-auto mx-3 rounded-full'
              alt='Pystykorva Logo'
              height={40}
              width={40}
            ></Image>
            <span className='self-center text-2xl whitespace-nowrap dark:text-white'>
              Vuorivillen Kennel
            </span>
          </Link>

          <div className='w-auto mr-3'>
            <ul
              className='flex flex-row font-medium text-xl p-1 mt-2 space-x-3 my-2 md:border-0 md:bg-white 
            md:dark:bg-gray-900'
            >
              <li>
                <Link
                  href='/'
                  className='block py-2 pl-3 pr-4  
                  rounded md:bg-transparent 
                text-blue-700 md:p-0 md:dark:text-blue-500 
                   md:dark:bg-transparent'
                  aria-current='page'
                >
                  Etusivu
                </Link>
              </li>
              <li>
                <Link
                  href='/pentueet'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded 
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white 
                  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Pentueet
                </Link>
              </li>
              <li>
                <Link
                  href='/koirat'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded 
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white 
                  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Meidän koirat
                </Link>
              </li>
              <li>
                <Link
                  href='/galleria'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded 
                  hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white 
                  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                  dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Galleria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 
      <div>
        <Link href='/'>
          <h1 className='text-6xl'>Vuorivillen Kennel</h1>
        </Link>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href='/kindle'>
            <p>Pentueet</p>
          </Link>
          <p>Vanhemmat</p>
          <p>Blog</p>
          <p>Yhteystiedot</p>
        </div>
      </div> */}
    </header>
  )
  const footer = (
    <footer className=' w-screen bottom-0 bg-green-800 h-40'>
      <div className='flex flex-row items-center justify-center h-full'>
        <p className=' font-bold'>Antti Koponen TMI</p>
      </div>
    </footer>
  )

  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col min-w-screen max-w-screen min-h-screen'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
