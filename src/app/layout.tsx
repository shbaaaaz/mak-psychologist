import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { landingPage } from '../data/staticData.json'

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
