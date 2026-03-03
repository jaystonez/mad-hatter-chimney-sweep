/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Service pages
      { source: '/services/dryer-vent-cleaning/', destination: '/services/dryer-vent-cleaning', permanent: true },
      { source: '/services/chimney-sweep/', destination: '/services/chimney-sweeping', permanent: true },
      { source: '/services/chimney-inspection/', destination: '/services/chimney-inspection', permanent: true },
      { source: '/services/chimney-repair/', destination: '/services/chimney-repairs', permanent: true },
      { source: '/services/chimney-cap-installation/', destination: '/services/chimney-caps', permanent: true },
      { source: '/services/chimney-flashing/', destination: '/services/leak-repair', permanent: true },
      { source: '/services/chimney-liner/', destination: '/services/chimney-relining', permanent: true },
      { source: '/services/masonry-repair/', destination: '/services/rebuilds-restorations', permanent: true },
      { source: '/services/wood-stove-cleaning/', destination: '/services', permanent: true },
      // Legacy blog/content pages
      { source: '/mad-hatter-chimney-sweep-seattle/', destination: '/', permanent: true },
      { source: '/fireplace-chimney-cleaning-seattle/', destination: '/services/chimney-sweeping', permanent: true },
      { source: '/about-mad-hatter-chimney-sweep/', destination: '/about', permanent: true },
      { source: '/contact-us/', destination: '/#contact', permanent: true },
      { source: '/privacy-policy/', destination: '/', permanent: true },
      // Old tag/archive pages
      { source: '/tag/chimney-repair/', destination: '/services/chimney-repairs', permanent: true },
      { source: '/tag/chimney-sweep/', destination: '/services/chimney-sweeping', permanent: true },
      { source: '/tag/fireplace-cleaning/', destination: '/services/chimney-sweeping', permanent: true },
      { source: '/tag/fireplace-repair/', destination: '/services/chimney-repairs', permanent: true },
      { source: '/tag/dryer-vent-cleaning/', destination: '/services/dryer-vent-cleaning', permanent: true },
      { source: '/tag/roof-snow-removal/', destination: '/services', permanent: true },
      { source: '/category/chimney-services/', destination: '/services', permanent: true },
      { source: '/author/drmoh/', destination: '/', permanent: true },
      // Feed URLs
      { source: '/feed/', destination: '/', permanent: true },
      { source: '/tag/chimney-sweep/feed/', destination: '/', permanent: true },
      { source: '/tag/fireplace-cleaning/feed/', destination: '/', permanent: true },
      { source: '/tag/dryer-vent-cleaning/feed/', destination: '/', permanent: true },
      { source: '/tag/roof-snow-removal/feed/', destination: '/', permanent: true },
    ]
  },
  images: {
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
