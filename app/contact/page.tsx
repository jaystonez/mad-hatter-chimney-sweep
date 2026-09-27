import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import CTA from "@/components/cta"

export const metadata: Metadata = pageMetadata("Contact Mad Hatter Chimney Sweep | Seattle, WA", "Call, email, or request service from Mad Hatter Chimney Sweep. Serving Seattle, Bellevue, Redmond, and the greater Puget Sound area since 1979. WA License MADHAHL790LW.", "/contact")

export default function ContactPage() {
  return (
    <>
      <h1 className="container mx-auto px-4 pt-12 text-3xl md:text-4xl font-bold">Contact Mad Hatter Chimney Sweep</h1>
      <CTA />
    </>
  )
}
