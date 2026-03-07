import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SchemaMarkup from '@/components/schema-markup'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
export const metadata: Metadata = {
  metadataBase: new URL('https://www.themadhatterchimneysweep.com'),
  title: 'The Mad Hatter Chimney Sweep | Professional Chimney Services Since 1979',
  description: 'Trusted chimney sweep and fireplace services since 1979. Over 2500 satisfied customers. Professional cleaning, inspections, and repairs throughout Greater Seattle.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.themadhatterchimneysweep.com',
    siteName: 'Mad Hatter Chimney Sweep',
    title: "Mad Hatter Chimney Sweep | Seattle's Most Trusted Since 1979",
    description: 'Professional chimney sweep, inspection & repair in Greater Seattle. Licensed, bonded & insured. WA License MADHAHL790LW. Call (206) 274-6409.',
    images: [
      {
        url: 'https://www.themadhatterchimneysweep.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mad Hatter Chimney Sweep Seattle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mad Hatter Chimney Sweep | Seattle's Most Trusted Since 1979",
    description: 'Professional chimney sweep, inspection & repair in Greater Seattle. Licensed, bonded & insured. Call (206) 274-6409.',
    images: ['https://www.themadhatterchimneysweep.com/images/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
                    <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
