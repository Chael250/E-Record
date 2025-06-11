import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/landing/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Record Management System',
  description: 'A comprehensive e-record management system for schools',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
        {children}
      </body>
    </html>
  )
}
