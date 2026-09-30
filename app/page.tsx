import { pageMetadata } from "@/lib/seo"
import { pricing, formatPrice } from "@/lib/pricing"
import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import HomeFaq, { faqItems } from "@/components/home-faq"
import HomeEntityDepth from "@/components/home-entity-depth"
import CTA from "@/components/cta"

const sweepPrice = `$${formatPrice(pricing.services.chimneyCleaning.standard)}`

export const metadata: Metadata = pageMetadata(
  `Seattle Chimney Sweep ${sweepPrice} | Mad Hatter`,
  `Seattle chimney sweep from ${sweepPrice}, including a Level 1 inspection. Licensed, bonded and insured since 1979. WA #${pricing.contractorLicense.number}. Call ${pricing.phone}.`,
  "/",
)

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <HomeEntityDepth />
      <Testimonials />
      <HomeFaq />
      <CTA />
    </>
  )
}
