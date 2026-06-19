import { pricing, getSchemaPrice, isPromoActive } from '@/lib/pricing'
import { businessProfileUrls } from '@/lib/business-profiles'

export default function SchemaMarkup() {
  const schemaPrice = getSchemaPrice()
  const showPromo = isPromoActive()

  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://www.themadhatterchimneysweep.com/#organization",
    "name": "Mad Hatter Chimney Sweep",
    "legalName": "The Mad Hatter Chimney Sweep, LLC",
    "url": "https://www.themadhatterchimneysweep.com",
    "logo": "https://www.themadhatterchimneysweep.com/icon.svg",
    "telephone": pricing.phoneE164,
    "email": "services@themadhatterchimneysweep.com",
    "foundingDate": "1979",
    "sameAs": businessProfileUrls,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": pricing.businessLocation.locality,
      "addressRegion": pricing.businessLocation.region,
      "postalCode": pricing.businessLocation.postalCode,
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "King County, WA" },
      { "@type": "AdministrativeArea", "name": "Snohomish County, WA" }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": pricing.phoneE164,
        "email": "services@themadhatterchimneysweep.com",
        "availableLanguage": ["English"]
      }
    ]
  }

  const localBusinessSchema = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://www.themadhatterchimneysweep.com/#business",
    "name": "Mad Hatter Chimney Sweep",
    "alternateName": "The Mad Hatter Chimney Sweep",
    "description": "Family-owned chimney sweep, inspection, repair and masonry restoration serving Greater Seattle since 1979. Licensed, bonded & insured in Washington State.",
    "url": "https://www.themadhatterchimneysweep.com",
    "telephone": pricing.phoneE164,
    "email": "services@themadhatterchimneysweep.com",
    "foundingDate": "1979",
    "priceRange": "$$",
    "image": "https://www.themadhatterchimneysweep.com/images/hero-fireplace.jpg",
    "logo": "https://www.themadhatterchimneysweep.com/icon.svg",
    "hasMap": businessProfileUrls[0],
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "WA Contractor License",
      "value": pricing.contractorLicense.number
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": pricing.businessLocation.locality,
      "addressRegion": pricing.businessLocation.region,
      "postalCode": pricing.businessLocation.postalCode,
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Greater Seattle, WA"
    },
    "parentOrganization": {
      "@id": "https://www.themadhatterchimneysweep.com/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Seattle" },
      { "@type": "City", "name": "Bellevue" },
      { "@type": "City", "name": "Bothell" },
      { "@type": "City", "name": "Kirkland" },
      { "@type": "City", "name": "Redmond" },
      { "@type": "City", "name": "Sammamish" },
      { "@type": "City", "name": "Issaquah" },
      { "@type": "City", "name": "Mercer Island" },
      { "@type": "City", "name": "Woodinville" },
      { "@type": "City", "name": "Edmonds" },
      { "@type": "City", "name": "Lynnwood" },
      { "@type": "City", "name": "Everett" },
      { "@type": "City", "name": "Kenmore" },
      { "@type": "City", "name": "Shoreline" },
      { "@type": "City", "name": "Renton" },
      { "@type": "City", "name": "Kent" },
      { "@type": "City", "name": "Newcastle" },
      { "@type": "City", "name": "Lake Forest Park" },
      { "@type": "City", "name": "Marysville" },
      { "@type": "City", "name": "Snohomish" },
      { "@type": "City", "name": "Monroe" },
      { "@type": "City", "name": "Mill Creek" },
      { "@type": "City", "name": "Mountlake Terrace" },
      { "@type": "City", "name": "Mukilteo" },
      { "@type": "AdministrativeArea", "name": "King County, WA" },
      { "@type": "AdministrativeArea", "name": "Snohomish County, WA" }
    ],
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "knowsAbout": [
      "Chimney sweeping",
      "Chimney inspections",
      "Chimney repair",
      "Chimney caps and dampers",
      "Fireplace cleaning",
      "Dryer vent cleaning",
      "Masonry restoration",
      "Creosote prevention",
      "NFPA 211 chimney safety standards",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chimney Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Sweep and Cleaning",
            "description": `Professional chimney cleaning and creosote removal starting at $${schemaPrice}`
          },
          ...(showPromo && {
            "priceValidUntil": pricing.promo.expiresAt,
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": pricing.promo.chimneyCleaning,
              "priceCurrency": "USD",
              "name": pricing.promo.label,
              "validFrom": new Date().toISOString().split('T')[0],
              "validThrough": pricing.promo.expiresAt,
            }
          })
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Inspection",
            "description": "Level 1, 2, and 3 chimney inspections with video camera"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Repair",
            "description": "Masonry repair, crown repair, tuckpointing, and flashing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Liner Installation",
            "description": "Stainless steel and cast-in-place liner installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Waterproofing",
            "description": "Professional waterproofing to protect PNW masonry from moisture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fireplace Cleaning",
            "description": "Complete fireplace cleaning and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Restoration",
            "description": "Historic brick and mortar chimney rebuilds and restoration — 45+ years of PNW masonry"
          }
        }
      ]
    },
    "sameAs": businessProfileUrls
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, localBusinessSchema]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
