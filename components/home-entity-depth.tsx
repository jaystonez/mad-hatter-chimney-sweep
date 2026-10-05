import Link from "next/link"
import { businessProfiles } from "@/lib/business-profiles"

const serviceLinks = [
  { label: "Chimney Sweeping and Cleaning", href: "/chimney-cleaning" },
  { label: "Chimney Inspections", href: "/chimney-inspection" },
  { label: "Chimney Repair", href: "/chimney-repair-seattle" },
  { label: "Chimney Cap Installation", href: "/chimney-cap-installation" },
  { label: "Chimney Liner Installation", href: "/chimney-liner-installation" },
  { label: "Chimney Waterproofing", href: "/chimney-waterproofing" },
  { label: "Fireplace Cleaning", href: "/fireplace-cleaning" },
]

const locationLinks = [
  { label: "Seattle", href: "/chimney-sweep-seattle" },
  { label: "Bellevue", href: "/chimney-sweep-bellevue" },
  { label: "Kirkland", href: "/chimney-sweep-kirkland" },
  { label: "Redmond", href: "/chimney-sweep-redmond" },
  { label: "Bothell", href: "/chimney-sweep-bothell" },
  { label: "Shoreline", href: "/chimney-sweep-shoreline" },
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
              Chimney Cleaning, Repairs and Leak Help in Greater Seattle
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Soot buildup, smoke entering the room, damp masonry and a damaged chimney cap
              call for different kinds of service. Tell us what you are seeing and we will help
              you choose a cleaning, inspection or repair appointment. You receive written
              findings and a clear scope before deciding on additional work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Find the Right Service for Your Chimney
              </h3>
              <p className="text-stone-600 leading-relaxed mb-5">
                Book a sweep for soot and creosote removal, an inspection for condition questions,
                or a repair visit for cracked mortar, crown damage and leaks. For water entering
                around the fireplace, we check the cap, crown, flashing and masonry to identify
                the source before recommending a repair.
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
                What We Check During an Inspection
              </h3>
              <p className="text-stone-600 leading-relaxed mb-5">
                A standard sweep includes a Level 1 inspection. The checks below are examples,
                rather than the complete inspection checklist. Ask about the appropriate
                inspection level when buying a home, changing an appliance or investigating damage.
              </p>
              <ol className="space-y-3 list-decimal list-inside text-stone-700">
                {inspectionChecklist.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-stone-600 leading-relaxed">
                We explain the findings, which issues need attention and what work can be planned.
                Ask for photos and a written estimate before approving a repair.
              </p>
            </article>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-900 text-white p-8 mb-10">
            <h3 className="text-2xl font-bold mb-4">Serving Seattle, Bellevue and Nearby Communities</h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              We travel to homes across King and Snohomish counties. Find information for your
              city below, or call to confirm coverage and appointment availability. You can also
              visit our business profiles to read customer reviews.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-amber-400 mb-3">Chimney Service Near You</h4>
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
                <h4 className="font-semibold text-amber-400 mb-3">Reviews and Business Profiles</h4>
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
              Request Chimney Service or a Repair Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
