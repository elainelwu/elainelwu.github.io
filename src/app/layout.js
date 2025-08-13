import { Syne, Poppins } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: '400' 
});

export const metadata = {
  title: 'Elaine Wu',
  description: 'Updated for 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
