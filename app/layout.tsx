import './globals.css'
import type { Metadata } from 'next'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat"

})

export const metadata: Metadata = {
  title: 'Landing Page Films',
  description: 'Simple landing page',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>

      <div>{children}</div>
      </body>
      </html>
  )
}
