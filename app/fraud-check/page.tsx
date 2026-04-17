import type { Metadata } from "next"
import VerifyBusinessPage from "@/app/verify-business/page"

export const metadata: Metadata = {
  title: "Verify a Chimney Sweep Business | Mad Hatter Chimney Sweep",
  description:
    "Check if a chimney sweep company is legitimate before you hire. Use our fraud check tool to spot common scam signals and verify contractor credibility.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I tell if a chimney sweep business is legitimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verify the contractor license, confirm a real business address, review recent customer feedback, and watch for red flags like fake reviews or misleading location claims.",
      },
    },
    {
      "@type": "Question",
      name: "What are common chimney sweep fraud warning signs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common warning signs include unrealistic discounts, pressure to pay immediately, unverifiable license information, suspicious review patterns, and websites that hide important business details.",
      },
    },
    {
      "@type": "Question",
      name: "Should I verify contractor licensing before scheduling service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Always verify active state licensing and insurance before hiring any contractor to help reduce the risk of fraud or poor-quality work.",
      },
    },
  ],
}

export default function FraudCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VerifyBusinessPage />
    </>
  )
}
