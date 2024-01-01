import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { landingPage } from '../data/staticData.json'
import Theme from '@/components/Theme'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: landingPage.title,
  description: landingPage.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 px-2 md:px-20 `}>
        <div className="">
          <Navbar/>
        {children}
        </div>
      </body>
    </html>
  )
}
