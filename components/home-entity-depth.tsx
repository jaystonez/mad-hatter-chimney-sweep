import Link from "next/link"
import { businessProfiles } from "@/lib/business-profiles"

const serviceLinks = [
  { label: "Chimney Sweep and Inspection", href: "/chimney-inspection" },
  { label: "Chimney Repair", href: "/chimney-repair-seattle" },
  { label: "Chimney Cap Installation", href: "/chimney-cap-installation" },
  { label: "Chimney Liner Installation", href: "/chimney-liner-installation" },
  { label: "Chimney Waterproofing", href: "/chimney-waterproofing" },
  { label: "Fireplace Cleaning", href: "/fireplace-cleaning" },
]

const locationLinks = [
  { label: "Seattle", href: "/locations/seattle" },
  { label: "Bellevue", href: "/locations/bellevue" },
  { label: "Kirkland", href: "/locations/kirkland" },
  { label: "Redmond", href: "/locations/redmond" },
  { label: "Bothell", href: "/locations/bothell" },
  { label: "Shoreline", href: "/locations/shoreline" },
]

const inspectionChecklist = [
  "Flue condition and visible creosote level review",
  "Crown, cap, flashing, and chimney top water-entry check",
  "Smoke chamber and damper operation safety review",
  "Masonry joints and exterior damage documentation",
  "Draft performance notes and next-step repair priorities",
]

export default function HomeEntityDepth() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Seattle Chimney Service Backed by Real Job Documentation
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Mad Hatter Chimney Sweep operates as a Seattle-area service business with a
              field-first process. Every sweep, inspection, and repair call is documented so
              homeowners can compare findings, understand risks, and make informed decisions. We
              do not rely on vague one-line claims. We provide written notes, photos when needed,
              and practical guidance that separates urgent safety concerns from maintenance that can
              be planned.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Local services homeowners search for most
              </h3>
              <p className="text-stone-600 leading-relaxed mb-5">
                We cover chimney sweep Seattle, chimney repair Seattle, chimney inspection Seattle,
                fireplace cleaning, and dryer vent risk reduction across King and Snohomish county
                communities. If your home has older masonry, recurring smoke drafting issues, or
                signs of moisture damage, we prioritize diagnosis details before recommending
                expensive work.
              </p>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-stone-800 font-medium underline underline-offset-4 hover:text-amber-700 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                21-point inspection reporting approach
              </h3>
              <p className="text-stone-600 leading-relaxed mb-5">
                Our inspection workflow is designed for clarity. You get a practical report that
                identifies safety concerns, documents condition status, and explains why each item
                matters in plain language.
              </p>
              <ol className="space-y-3 list-decimal list-inside text-stone-700">
                {inspectionChecklist.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-stone-600 leading-relaxed">
                This process helps homeowners avoid pressure sales by turning each recommendation
                into a verifiable finding with context.
              </p>
            </article>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-900 text-white p-8 mb-10">
            <h3 className="text-2xl font-bold mb-4">Service area coverage and entity signals</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              We maintain consistent business identity across our website, service pages, and
              profile listings so homeowners can verify who they are hiring. Browse key service
              areas and independent profiles below.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-400 mb-3">Key service area pages</h4>
                <ul className="space-y-2">
                  {locationLinks.map((location) => (
                    <li key={location.href}>
                      <Link
                        href={location.href}
                        className="text-white underline underline-offset-4 hover:text-amber-300 transition-colors"
                      >
                        Chimney service in {location.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-400 mb-3">Business profile references</h4>
                <ul className="space-y-2">
                  {businessProfiles.map((profile) => (
                    <li key={profile.url}>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline underline-offset-4 hover:text-amber-300 transition-colors"
                      >
                        {profile.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-4 font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
            >
              Request a documented inspection and written scope
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
