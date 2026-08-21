import { pricing, getSchemaPrice, isPromoActive } from '@/lib/pricing'
import { businessProfileUrls } from '@/lib/business-profiles'

const SITE_URL = 'https://www.themadhatterchimneysweep.com'

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: pricing.businessLocation.streetAddress,
  addressLocality: pricing.businessLocation.locality,
  addressRegion: pricing.businessLocation.region,
  postalCode: pricing.businessLocation.postalCode,
  addressCountry: 'US',
}

const geo = {
  '@type': 'GeoCoordinates',
  latitude: pricing.businessLocation.geo.latitude,
  longitude: pricing.businessLocation.geo.longitude,
}

const areaServed = [
  { '@type': 'City', name: 'Seattle', '@id': `${SITE_URL}/locations/seattle` },
  { '@type': 'City', name: 'Bellevue', '@id': `${SITE_URL}/locations/bellevue` },
  { '@type': 'City', name: 'Bothell', '@id': `${SITE_URL}/locations/bothell` },
  { '@type': 'City', name: 'Kirkland', '@id': `${SITE_URL}/locations/kirkland` },
  { '@type': 'City', name: 'Redmond', '@id': `${SITE_URL}/locations/redmond` },
  { '@type': 'City', name: 'Sammamish', '@id': `${SITE_URL}/locations/sammamish` },
  { '@type': 'City', name: 'Issaquah', '@id': `${SITE_URL}/locations/issaquah` },
  { '@type': 'City', name: 'Mercer Island' },
  { '@type': 'City', name: 'Woodinville' },
  { '@type': 'City', name: 'Edmonds' },
  { '@type': 'City', name: 'Lynnwood' },
  { '@type': 'City', name: 'Everett', '@id': `${SITE_URL}/locations/everett` },
  { '@type': 'City', name: 'Kenmore' },
  { '@type': 'City', name: 'Shoreline', '@id': `${SITE_URL}/locations/shoreline` },
  { '@type': 'City', name: 'Renton' },
  { '@type': 'City', name: 'Kent' },
  { '@type': 'City', name: 'Newcastle' },
  { '@type': 'City', name: 'Lake Forest Park' },
  { '@type': 'City', name: 'Marysville' },
  { '@type': 'City', name: 'Snohomish' },
  { '@type': 'City', name: 'Monroe' },
  { '@type': 'City', name: 'Mill Creek' },
  { '@type': 'City', name: 'Mountlake Terrace' },
  { '@type': 'City', name: 'Mukilteo' },
  { '@type': 'AdministrativeArea', name: 'King County, WA' },
  { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
]

function serviceOffer({
  name,
  description,
  url,
  price,
}: {
  name: string
  description: string
  url: string
  price?: number
}) {
  return {
    '@type': 'Offer',
    url,
    availability: 'https://schema.org/InStock',
    itemOffered: {
      '@type': 'Service',
      name,
      description,
      url,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@id': `${SITE_URL}/#service-area` },
    },
    ...(typeof price === 'number'
      ? {
          price: price.toFixed(2),
          priceCurrency: 'USD',
        }
      : {}),
  }
}

export default function SchemaMarkup() {
  const schemaPrice = getSchemaPrice()
  const showPromo = isPromoActive()

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Mad Hatter Chimney Sweep',
    legalName: 'The Mad Hatter Chimney Sweep & Masonry LLC',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
    },
    image: `${SITE_URL}/images/hero-fireplace.jpg`,
    telephone: pricing.phoneE164,
    email: 'services@themadhatterchimneysweep.com',
    foundingDate: '1979',
    sameAs: businessProfileUrls,
    address: postalAddress,
    geo,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'King County, WA' },
      { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: pricing.phoneE164,
        email: 'services@themadhatterchimneysweep.com',
        availableLanguage: ['English'],
        areaServed: 'US',
      },
    ],
  }

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mad Hatter Chimney Sweep',
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: { '@id': `${SITE_URL}/#business` },
  }

  const serviceAreaSchema = {
    '@type': 'AdministrativeArea',
    '@id': `${SITE_URL}/#service-area`,
    name: 'Greater Seattle, WA',
    containedInPlace: [
      { '@type': 'AdministrativeArea', name: 'King County, WA' },
      { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
    ],
  }

  const localBusinessSchema = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#business`,
    name: 'Mad Hatter Chimney Sweep',
    alternateName: [
      'The Mad Hatter Chimney Sweep',
      'The Mad Hatter Chimney Sweep & Masonry',
    ],
    description:
      'Family-owned chimney sweep, inspection, repair and masonry restoration serving Greater Seattle since 1979. Licensed, bonded & insured in Washington State. WA Contractor License MADHAHL790LW.',
    url: SITE_URL,
    telephone: pricing.phoneE164,
    email: 'services@themadhatterchimneysweep.com',
    foundingDate: '1979',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    image: [
      `${SITE_URL}/images/hero-fireplace.jpg`,
      `${SITE_URL}/images/after-cap-installed.webp`,
      `${SITE_URL}/images/after-new-crown.webp`,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon.svg`,
    },
    hasMap: businessProfileUrls[0],
    address: postalAddress,
    geo,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'WA Contractor License',
      value: pricing.contractorLicense.number,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: `Washington Contractor License ${pricing.contractorLicense.number}`,
      identifier: pricing.contractorLicense.number,
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: pricing.contractorLicense.issuer,
        url: pricing.contractorLicense.lookupUrl,
      },
    },
    serviceArea: { '@id': `${SITE_URL}/#service-area` },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    areaServed,
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-16:00'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    knowsAbout: [
      'Chimney sweeping',
      'Chimney inspections',
      'Chimney repair',
      'Chimney caps and dampers',
      'Fireplace cleaning',
      'Dryer vent cleaning',
      'Masonry restoration',
      'Creosote prevention',
      'NFPA 211 chimney safety standards',
    ],
    slogan: 'Family-owned chimney sweep serving Greater Seattle since 1979',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chimney Services',
      itemListElement: [
        {
          ...serviceOffer({
            name: 'Chimney Sweep and Cleaning',
            description: `Professional chimney cleaning and creosote removal starting at $${schemaPrice}`,
            url: `${SITE_URL}/chimney-cleaning`,
            price: schemaPrice,
          }),
          ...(showPromo && {
            priceValidUntil: pricing.promo.expiresAt,
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: pricing.promo.chimneyCleaning,
              priceCurrency: 'USD',
              name: pricing.promo.label,
              validFrom: new Date().toISOString().split('T')[0],
              validThrough: pricing.promo.expiresAt,
            },
          }),
        },
        serviceOffer({
          name: 'Chimney Inspection',
          description: 'Level 1, 2, and 3 chimney inspections with video camera',
          url: `${SITE_URL}/chimney-inspection`,
        }),
        serviceOffer({
          name: 'Chimney Repair',
          description: 'Masonry repair, crown repair, tuckpointing, and flashing',
          url: `${SITE_URL}/chimney-repair`,
        }),
        serviceOffer({
          name: 'Chimney Liner Installation',
          description: 'Stainless steel and cast-in-place liner installation',
          url: `${SITE_URL}/chimney-liner-installation`,
        }),
        serviceOffer({
          name: 'Chimney Waterproofing',
          description: 'Professional waterproofing to protect PNW masonry from moisture',
          url: `${SITE_URL}/chimney-waterproofing`,
        }),
        serviceOffer({
          name: 'Fireplace Cleaning',
          description: 'Complete fireplace cleaning and maintenance',
          url: `${SITE_URL}/fireplace-cleaning`,
        }),
        serviceOffer({
          name: 'Masonry Restoration',
          description: 'Historic brick and mortar chimney rebuilds and restoration - 45+ years of PNW masonry',
          url: `${SITE_URL}/masonry-repair`,
        }),
        serviceOffer({
          name: 'Chimney Cap Installation',
          description: 'Chimney caps to keep out rain, animals, and debris',
          url: `${SITE_URL}/chimney-cap-installation`,
        }),
      ],
    },
    sameAs: businessProfileUrls,
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE_URL}/contact`,
      name: 'Request chimney service',
    },
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, serviceAreaSchema, localBusinessSchema],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
