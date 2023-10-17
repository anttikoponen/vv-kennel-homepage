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
      <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
        <div className='max-w-screen flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/pystykorva.jpg'
              className='h-8 mr-3 rounded-lg'
              alt='Pystykorva Logo'
              height={40}
              width={40}
            ></Image>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Vuorivillen Kennel
            </span>
          </Link>

          <div className='hidden w-full md:block md:w-auto mr-3'>
            <ul
              className='flex flex-col font-medium text-2xl p-4 md:p-0 mt-4 border 
            border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 
            md:my-2 md:border-0 md:bg-white dark:bg-gray-800 
            md:dark:bg-gray-900 dark:border-gray-700'
            >
              <li>
                <Link
                  href='/'
                  className='block py-2 pl-3 pr-4 text-white 
                  bg-blue-700 rounded md:bg-transparent 
                  md:text-blue-700 md:p-0 md:dark:text-blue-500 
                  dark:bg-blue-600 md:dark:bg-transparent'
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
    <footer>
      <div>
        <h1>Antti Koponen TMI</h1>
      </div>
    </footer>
  )

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
