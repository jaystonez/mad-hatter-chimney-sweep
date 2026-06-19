import Link from "next/link"
import { pricing } from "@/lib/pricing"

const faqItems = [
  {
    question: "How much does a chimney sweep cost in Seattle?",
    answer: `Mad Hatter lists standard chimney cleaning with a Level 1 inspection at $${pricing.services.chimneyCleaning.standard}. We also run seasonal promotions when available. Every appointment includes a written scope, safety notes, and clear next steps so homeowners are not surprised by vague upsells.`,
  },
  {
    question: "How often should I schedule a chimney inspection?",
    answer:
      "Most Seattle-area homes should schedule annual chimney inspections under NFPA 211 guidance. If your home burns wood frequently, has older masonry, or had smoke drafting issues last winter, we may recommend more frequent service to keep the flue safe and operating efficiently.",
  },
  {
    question: "Do you provide chimney repair in Seattle and Bellevue?",
    answer:
      "Yes. We handle chimney repair work including crown damage, flashing leaks, tuckpointing, masonry restoration, and liner recommendations. Repair photos and findings are documented so you can compare options before approving work.",
  },
  {
    question: "Do you clean dryer vents and fireplaces too?",
    answer:
      "Yes. In addition to chimney sweep and inspection work, we provide dryer vent cleaning and fireplace cleaning services for Seattle-area homes. This helps reduce lint and creosote fire risk while improving airflow and appliance performance.",
  },
  {
    question: "What is included in your 21-point chimney inspection process?",
    answer:
      "Our process checks flue condition, visible creosote, crown and cap condition, flashing, masonry joints, smoke chamber, damper operation, and other key safety indicators. You receive practical notes that explain what is urgent, what can be planned, and what is currently serviceable.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We operate as a service-area business based in Bothell and serve Seattle, Bellevue, Kirkland, Redmond, Woodinville, Shoreline, Lynnwood, Everett, and nearby communities across King and Snohomish counties.",
  },
]

export default function HomeFaq() {
  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Seattle Chimney Sweep FAQ
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Clear answers on chimney cleaning, inspections, repairs, and safety standards for
              Seattle and Eastside homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.question}</h3>
                <p className="text-stone-600 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-stone-900 text-white p-8">
            <h3 className="text-2xl font-bold mb-3">Need a second opinion before major chimney work?</h3>
            <p className="text-stone-300 mb-6 leading-relaxed">
              If another company says your chimney needs urgent repairs, request photos, license
              details, and a written scope. We can provide an independent inspection so you can make
              a decision with real documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/verify-contractor"
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
              >
                Verify Contractor Checklist
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300/70 px-6 py-3 font-semibold text-stone-100 hover:bg-stone-800 transition-colors"
              >
                Request a Written Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
