import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Superintelligence Service: governed AI agents across your platforms',
  description: 'Run AI agents natively inside 23 enterprise platforms, under one policy, one audit trail and human approval, using the vendor AI you already license.',
  openGraph: {
    title: 'Superintelligence Service: governed AI agents across your platforms',
    description: 'Run AI agents natively inside 23 enterprise platforms, under one policy, one audit trail and human approval, using the vendor AI you already license.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-paper text-ink antialiased">
      <body>{children}</body>
    </html>
  )
}
