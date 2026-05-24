import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToastContainer from '@/components/Toast'

export const metadata: Metadata = {
  title: 'Docsy - AI PDF Toolkit & OCR Scanner',
  description:
    'Professional website for Docsy Android app. AI-powered PDF toolkit with OCR scanning, AI summaries, secure vault, and Google Drive sync.',
  keywords: [
    'PDF',
    'OCR',
    'AI',
    'Scanner',
    'Secure Vault',
    'Document Management',
    'Google Drive',
  ],
  authors: [{ name: 'Abhi Gandhi' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Docsy - AI PDF Toolkit & OCR Scanner',
    description:
      'AI-powered PDF management with OCR scanning, AI summaries, and secure encryption.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect fill='%236366f1' width='32' height='32'/><text x='50%' y='50%' font-size='20' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='white'>D</text></svg>" />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
