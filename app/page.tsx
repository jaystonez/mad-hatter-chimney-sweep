import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import HomeFaq from "@/components/home-faq"
import HomeEntityDepth from "@/components/home-entity-depth"
import CTA from "@/components/cta"
import { pricing } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Seattle & Bellevue Chimney Sweep Since 1979 | Mad Hatter",
  description: "Seattle chimney sweep, inspection and repair since 1979. Licensed, bonded and insured. Serving Seattle, Bellevue and nearby areas. Call (206) 274-6409.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.themadhatterchimneysweep.com",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a chimney sweep cost in Seattle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Mad Hatter Chimney Sweep lists standard chimney cleaning with Level 1 inspection at $${pricing.services.chimneyCleaning.standard}. Seasonal promotions may be available when active. Call (206) 274-6409 to confirm eligibility and scheduling.`
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get my chimney cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NFPA 211 recommends annual chimney inspections and cleaning for any chimney that is used regularly. If you burn wood frequently, cleaning may be needed more often."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mad Hatter Chimney Sweep licensed in Washington State?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mad Hatter Chimney Sweep holds WA Contractor License MADHAHL790LW and is fully licensed, bonded, and insured in Washington State."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Mad Hatter Chimney Sweep serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve the Greater Seattle area including Bothell, Kirkland, Redmond, Bellevue, Everett, Woodinville, Kenmore, Shoreline, Edmonds, Lynnwood, and Marysville."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer chimney inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We perform NFPA 211 Level 1, Level 2, and Level 3 chimney inspections. A Level 1 inspection is included with every sweep."
      }
    },
    {
      "@type": "Question",
      "name": "What is a chimney cap and do I need one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A chimney cap covers the top of your flue to keep out rain, animals, and debris. Most homes need one and it can prevent costly water damage. We install and replace chimney caps."
      }
    },
    {
      "@type": "Question",
      "name": "Can a dirty chimney cause a house fire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Creosote buildup inside the flue is highly flammable and is the leading cause of chimney fires. Annual cleaning removes creosote and dramatically reduces fire risk."
      }
    }
  ]
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
