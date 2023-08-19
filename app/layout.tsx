import './globals.css'
import type { Metadata } from 'next'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat"

})

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Simple landing page',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={montserrat.className}>
      <nav>
        <h1>logo</h1>
        <ul>
          <li>
            <a href="#">nav</a>
          </li><li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
      </body>
      </html>
  )
}
