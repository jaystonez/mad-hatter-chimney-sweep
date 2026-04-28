/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Service pages (trailing slash -> no trailing slash)
      { source: '/services/dryer-vent-cleaning/', destination: '/', permanent: true },
      { source: '/services/chimney-sweep/', destination: '/services/chimney-sweeping', permanent: true },
      { source: '/services/chimney-inspection/', destination: '/services/chimney-inspection', permanent: true },
      { source: '/services/chimney-repair/', destination: '/services/chimney-repairs', permanent: true },
      { source: '/services/chimney-cap-installation/', destination: '/services/chimney-caps', permanent: true },
      { source: '/services/chimney-flashing/', destination: '/services/leak-repair', permanent: true },
      { source: '/services/chimney-liner/', destination: '/services/chimney-relining', permanent: true },
      { source: '/services/masonry-repair/', destination: '/services/rebuilds-restorations', permanent: true },
      { source: '/services/wood-stove-cleaning/', destination: '/services', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },

      // Legacy blog/content pages (with AND without trailing slash)
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/mad-hatter-chimney-sweep-seattle/', destination: '/about', permanent: true },
      { source: '/mad-hatter-chimney-sweep-seattle', destination: '/about', permanent: true },
      { source: '/fireplace-chimney-cleaning-seattle/', destination: '/chimney-cleaning', permanent: true },
      { source: '/fireplace-chimney-cleaning-seattle', destination: '/chimney-cleaning', permanent: true },
      { source: '/get-cleaner-chimney-fireplace-today/', destination: '/chimney-cleaning', permanent: true },
      { source: '/get-cleaner-chimney-fireplace-today', destination: '/chimney-cleaning', permanent: true },
      { source: '/about-mad-hatter-chimney-sweep/', destination: '/about', permanent: true },
      { source: '/about-mad-hatter-chimney-sweep', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/contact-us/', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy-policy', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },

      // Legacy WordPress category/author archives (tag, feed, and wp-* are handled in middleware)
      { source: '/category/chimney-services/', destination: '/services', permanent: true },
      { source: '/author/drmoh/', destination: '/about', permanent: true },
      { source: '/author/drmoh', destination: '/about', permanent: true },

      // Catch-all legacy WordPress author archives
      { source: '/author/:slug*', destination: '/about', permanent: true },
      { source: '/services/:slug*', destination: '/', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themadhatterchimneysweep.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themadhatterchimneysweep.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '10046',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

module.exports = nextConfig
