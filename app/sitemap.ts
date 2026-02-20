import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.themadhatterchimneysweep.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/locations',
    '/verify-contractor',
    '/verify-business',
  ]

  // Service pages
  const services = [
    '/chimney-cleaning',
    '/chimney-inspection',
    '/chimney-repair',
    '/chimney-cap-installation',
    '/chimney-liner-installation',
    '/chimney-waterproofing',
    '/masonry-repair',
    '/fireplace-cleaning',
    '/certified-chimney-sweep',
  ]

  // City pages
  const cities = [
    '/chimney-sweep-seattle',
    '/chimney-sweep-bellevue',
    '/chimney-sweep-redmond',
    '/chimney-sweep-kirkland',
    '/chimney-sweep-renton',
    '/chimney-sweep-kent',
    '/chimney-sweep-sammamish',
    '/chimney-sweep-issaquah',
    '/chimney-sweep-bothell',
    '/chimney-sweep-woodinville',
    '/chimney-sweep-shoreline',
    '/chimney-sweep-mercer-island',
    '/chimney-sweep-newcastle',
    '/chimney-sweep-kenmore',
    '/chimney-sweep-lake-forest-park',
    '/chimney-sweep-near-me',
  ]

  // Service + City combinations
  const serviceCityCombos = [
    '/chimney-cleaning-seattle',
    '/chimney-cleaning-bellevue',
    '/chimney-inspection-bellevue',
    '/chimney-repair-seattle',
    '/chimney-repair-bellevue',
    '/apartment-chimney-sweep-seattle',
  ]

  const allPages = [
    ...staticPages,
    ...services,
    ...cities,
    ...serviceCityCombos,
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route.includes('sweep-') || route.includes('cleaning') ? 0.8 : 0.6,
  }))
}
