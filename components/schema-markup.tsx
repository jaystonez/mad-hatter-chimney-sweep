export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://madhatterchimney.com",
    "name": "Mad Hatter Chimney Sweep",
    "alternateName": "The Mad Hatter Chimney Sweep",
    "description": "Professional chimney sweep services in Greater Seattle since 1979. Expert chimney cleaning, inspection, repair, and maintenance.",
    "url": "https://madhatterchimney.com",
    "telephone": "+1-425-409-2344",
    "email": "info@madhatterchimney.com",
    "foundingDate": "1979",
    "priceRange": "$$",
    "image": "https://madhatterchimney.com/logo.png",
    "logo": "https://madhatterchimney.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Your Street Address]",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "[Your Zip]",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.6062",
      "longitude": "-122.3321"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Seattle"
      },
      {
        "@type": "City",
        "name": "Bellevue"
      },
      {
        "@type": "City",
        "name": "Redmond"
      },
      {
        "@type": "City",
        "name": "Kirkland"
      },
      {
        "@type": "City",
        "name": "Renton"
      },
      {
        "@type": "City",
        "name": "Kent"
      },
      {
        "@type": "City",
        "name": "Sammamish"
      },
      {
        "@type": "City",
        "name": "Issaquah"
      },
      {
        "@type": "City",
        "name": "Bothell"
      },
      {
        "@type": "City",
        "name": "Woodinville"
      },
      {
        "@type": "City",
        "name": "Shoreline"
      },
      {
        "@type": "City",
        "name": "Mercer Island"
      },
      {
        "@type": "City",
        "name": "Newcastle"
      },
      {
        "@type": "City",
        "name": "Kenmore"
      },
      {
        "@type": "City",
        "name": "Lake Forest Park"
      }
    ],
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
        "opens": "09:00",
        "closes": "16:00"
      }
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
            "description": "Professional chimney cleaning and creosote removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Inspection",
            "description": "Comprehensive chimney inspection with video camera"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimney Repair",
            "description": "Masonry repair, crown repair, and tuckpointing"
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
            "description": "Professional waterproofing to protect masonry"
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
            "name": "Masonry Repair",
            "description": "Brick and mortar restoration services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/madhatterchimney",
      "https://www.yelp.com/biz/mad-hatter-chimney-sweep",
      "https://www.google.com/maps/place/mad-hatter-chimney-sweep"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
