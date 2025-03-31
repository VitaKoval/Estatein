import { Footer, Header } from '@/blocks'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Estatein - Real Estate',
  description: 'Discover Your Dream Property with Estatein',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
