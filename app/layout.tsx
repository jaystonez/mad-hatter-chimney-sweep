import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SchemaMarkup from '@/components/schema-markup'
import PageBreadcrumbSchema from '@/components/page-breadcrumb-schema'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
export const metadata: Metadata = {
  metadataBase: new URL('https://www.themadhatterchimneysweep.com'),
  title: 'Seattle & Bellevue Chimney Sweep Since 1979 | Mad Hatter',
  description: "Seattle & Bellevue's trusted chimney sweep since 1979. Licensed (WA #MADHAHL790LW), bonded, insured. Inspections, sweeping, repairs, masonry. Call (206) 274-6409.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Mad Hatter Chimney Sweep',
    title: 'Seattle & Bellevue Chimney Sweep Since 1979 | Mad Hatter',
    description: 'Family-owned chimney sweep serving Seattle, Bellevue & King County since 1979. Licensed, bonded & insured. WA License MADHAHL790LW. Call (206) 274-6409.',
    images: [
      {
        url: 'https://www.themadhatterchimneysweep.com/images/hero-fireplace.jpg',
        width: 1200,
        height: 630,
        alt: 'Mad Hatter Chimney Sweep - Seattle & Bellevue Since 1979',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seattle & Bellevue Chimney Sweep Since 1979 | Mad Hatter',
    description: 'Family-owned chimney sweep serving Seattle, Bellevue & King County since 1979. Licensed, bonded & insured. Call (206) 274-6409.',
    images: ['https://www.themadhatterchimneysweep.com/images/hero-fireplace.jpg'],
  },
  icons: {
    icon: '/icon.svg',
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
        <PageBreadcrumbSchema />
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
