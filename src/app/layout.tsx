import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morpheus Podcast',
  description: 'A podcast about dreams and their meanings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}