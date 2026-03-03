import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Chimney Sweep & Inspection in Seattle, WA | Mad Hatter Chimney Sweep",
  description: "Professional chimney sweep, inspection & repair in Greater Seattle since 1979. Licensed, bonded & insured. WA License MADHAHL790LW. Call (206) 274-6409 for a free estimate.",
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
        "text": "A standard chimney sweep and inspection in Seattle typically costs $150–$250. Mad Hatter Chimney Sweep offers upfront pricing with no hidden fees. Call (206) 274-6409 for a free estimate."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get my chimney cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CSIA recommends annual chimney inspections and cleaning for any chimney that is used regularly. If you burn wood frequently, cleaning may be needed more often."
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
        "text": "Yes. We perform CSIA-standard Level 1, Level 2, and Level 3 chimney inspections. A Level 1 inspection is included with every sweep."
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
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
