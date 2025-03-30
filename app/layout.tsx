import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sales Dashboard',
  description: 'An interactive sales dashboard page',
  generator: 'riturajdey',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
