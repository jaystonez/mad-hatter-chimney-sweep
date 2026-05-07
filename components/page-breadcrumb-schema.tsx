"use client"

import { usePathname } from "next/navigation"
import BreadcrumbSchema, { type BreadcrumbItem } from "@/components/breadcrumb-schema"

const serviceBreadcrumbs: Record<string, string> = {
  "/chimney-cleaning": "Chimney Cleaning",
  "/chimney-inspection": "Chimney Inspection",
  "/chimney-repair-seattle": "Chimney Repair",
  "/chimney-cap-installation": "Chimney Cap Installation",
  "/chimney-liner-installation": "Chimney Liner Installation",
  "/chimney-waterproofing": "Chimney Waterproofing",
  "/masonry-repair": "Masonry Repair",
  "/fireplace-cleaning": "Fireplace Cleaning",
  "/certified-chimney-sweep": "Certified Chimney Sweep",
}

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function getBreadcrumbItems(pathname: string): BreadcrumbItem[] | null {
  const serviceTitle = serviceBreadcrumbs[pathname]
  if (serviceTitle) {
    return [
      { name: "Home", item: "/" },
      { name: "Services", item: "/services" },
      { name: serviceTitle },
    ]
  }

  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 2 && segments[0] === "locations") {
    return [
      { name: "Home", item: "/" },
      { name: "Locations", item: "/locations" },
      { name: titleCaseSlug(decodeURIComponent(segments[1])) },
    ]
  }

  if (segments.length === 1 && segments[0].startsWith("chimney-sweep-")) {
    const citySlug = segments[0].replace("chimney-sweep-", "")
    if (citySlug) {
      return [{ name: "Home", item: "/" }, { name: `Chimney Sweep ${titleCaseSlug(citySlug)}` }]
    }
  }

  return null
}

export default function PageBreadcrumbSchema() {
  const pathname = usePathname()
  const breadcrumbItems = getBreadcrumbItems(pathname)

  if (!breadcrumbItems) {
    return null
  }

  return <BreadcrumbSchema items={breadcrumbItems} />
}
