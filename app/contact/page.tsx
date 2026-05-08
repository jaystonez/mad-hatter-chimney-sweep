import type { Metadata } from "next"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "Contact Mad Hatter Chimney Sweep | Seattle, WA",
  description:
    "Call, email, or request service from Mad Hatter Chimney Sweep. Serving Seattle, Bellevue, Redmond, and the greater Puget Sound area since 1979. WA License MADHAHL790LW.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <CTA />
}
