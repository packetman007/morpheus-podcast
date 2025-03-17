import './globals.css'

export const metadata = {
  title: 'Morpheus Podcast',
  description: 'Welcome to the Morpheus Podcast',
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