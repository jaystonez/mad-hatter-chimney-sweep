type BreadcrumbItem = {
  name: string
  item?: string
}

const BASE_URL = "https://www.themadhatterchimneysweep.com"

function toAbsoluteUrl(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }

  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: toAbsoluteUrl(item.item) } : {}),
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export type { BreadcrumbItem }
