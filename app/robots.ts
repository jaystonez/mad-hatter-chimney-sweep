import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.themadhatterchimneysweep.com/sitemap.xml',
  }
}
