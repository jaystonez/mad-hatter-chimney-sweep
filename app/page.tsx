import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import HomeFaq, { faqItems } from "@/components/home-faq"
import HomeEntityDepth from "@/components/home-entity-depth"
import CTA from "@/components/cta"

export const metadata: Metadata = pageMetadata("Seattle & Bellevue Chimney Sweep Since 1979 | Mad Hatter", "Seattle chimney sweep, inspection and repair since 1979. Licensed, bonded and insured. Serving Seattle, Bellevue and nearby areas. Call (206) 274-6409.", "/")

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
