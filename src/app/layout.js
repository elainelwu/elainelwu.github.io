import { Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Elaine Wu',
  description: 'Updated for 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  )
}
