import type { Metadata } from 'next'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

export const metadata: Metadata = {
  title: 'MarkNotes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
