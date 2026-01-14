import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irish-English-Ukrainian Learner',
  description: 'Learn essential English vocabulary for Ireland with Irish and Ukrainian translations',
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
