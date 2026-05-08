import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.themadhatterchimneysweep.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/blog/fake-chimney-sweep-companies-seattle',
    '/blog/chimney-inspection-levels-explained',
    '/blog/chimney-sweep-cost-seattle',
    '/blog/when-to-clean-chimney-seattle',
    '/blog/carbon-monoxide-chimney-safety',
    '/blog/creosote-buildup-dangers',
    '/blog/how-often-chimney-inspection',
    '/blog/chimney-repair-signs',
    '/blog/chimney-sweep-vs-diy',
    '/blog/best-time-chimney-sweep-seattle',
    '/services',
    '/locations',
    '/fraud-check',
    '/verify-contractor',
    '/verify-business',
  ]

  const locationSubpages = [
    '/locations/seattle',
    '/locations/bellevue',
    '/locations/redmond',
    '/locations/kirkland',
    '/locations/issaquah',
    '/locations/sammamish',
    '/locations/shoreline',
    '/locations/burien',
    '/locations/bothell',
    '/locations/everett',
    '/locations/mukilteo',
    '/locations/marysville',
    '/locations/lake-stevens',
    '/locations/snohomish',
    '/locations/lynnwood',
    '/locations/edmonds',
    '/locations/mountlake-terrace',
    '/locations/arlington',
  ]

  // Service pages
  const services = [
    '/chimney-cleaning',
    '/chimney-inspection',
    '/troubleshooting-chimney',
    '/smoky-fireplace-solutions',
    '/firebox-repair',
    '/chimney-crown-repair',
    '/creosote-removal',
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
    ...locationSubpages,
    ...services,
    ...cities,
    ...serviceCityCombos,
  ]

  const getPriority = (route: string) => {
    if (route === '') return 1
    if (route.startsWith('/locations/')) return 0.8
    if (route === '/fraud-check') return 0.6
    if (route.includes('sweep-') || route.includes('cleaning')) return 0.8
    return 0.6
  }

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: getPriority(route),
  }))
}
