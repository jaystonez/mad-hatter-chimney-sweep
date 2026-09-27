import type { Metadata } from 'next'

export const SITE_URL = 'https://www.themadhatterchimneysweep.com'
export const SOCIAL_IMAGE = '/images/hero-fireplace.jpg'

/** Keep each page's canonical and share preview aligned with its own content. */
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'website', locale: 'en_US', siteName: 'Mad Hatter Chimney Sweep',
      title, description, url: pathname,
      images: [{ url: SOCIAL_IMAGE, alt: 'Mad Hatter Chimney Sweep, serving Greater Seattle since 1979' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [SOCIAL_IMAGE] },
  }
}
