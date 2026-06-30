import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  Clock,
  Droplets,
  FileCheck,
  Flame,
  Home,
  MapPin,
  Phone,
  Shield,
  Wind,
  Wrench,
} from "lucide-react"
import { pricing } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Chimney Sweep Everett WA | Cleaning, Inspection & Repair",
  description:
    "Professional chimney sweep services in Everett, WA. Certified cleaning, 21-point inspection, and chimney repair for Everett homes. Licensed, bonded, insured. Call (206) 274-6409.",
  alternates: {
    canonical: "/chimney-sweep-everett",
  },
}

const everettNeighborhoods = [
  {
    name: "Port Gardner",
    detail: "Waterfront-adjacent homes with extra moisture exposure",
  },
  {
    name: "Bayside",
    detail: "Older homes where masonry and flashing deserve close inspection",
  },
  {
    name: "Lowell",
    detail: "Established properties with aging chimney systems",
  },
  {
    name: "Riverside",
    detail: "Historic homes and classic masonry chimneys",
  },
  {
    name: "Silver Lake",
    detail: "Family homes with regularly used fireplaces and wood stoves",
  },
  {
    name: "Glacier View",
    detail: "Hillside exposure and wind-driven rain considerations",
  },
  {
    name: "Boulevard Bluffs",
    detail: "Puget Sound weather exposure and leak prevention",
  },
  {
    name: "Evergreen",
    detail: "Mixed-era homes needing cleaning, inspection, and repair",
  },
  {
    name: "Holly",
    detail: "Routine maintenance for practical, hardworking homes",
  },
  {
    name: "Twin Creeks",
    detail: "Modern and established chimney systems",
  },
  {
    name: "Northwest Everett",
    detail: "Older residential blocks with moisture-sensitive masonry",
  },
  {
    name: "Delta",
    detail: "Fireplace and chimney care near north Everett corridors",
  },
]

const repairServices = [
  "Chimney crown repair and rebuilds",
  "Flashing repair and leak correction",
  "Mortar repointing and brick replacement",
  "Chimney cap and spark arrestor installation",
  "Stainless steel liner installation",
  "Waterproofing for exposed masonry",
]

const warningSigns = [
  "It has been more than one year since your last sweep or inspection",
  "Smoke spills into the room when the fireplace is in use",
  "You smell smoky, musty, or tar-like odors from the fireplace",
  "White staining appears on exterior brick or mortar",
  "Water stains show near the chimney, ceiling, or firebox",
  "The chimney crown is cracked, flat, or visibly deteriorated",
  "Mortar is crumbly, missing, or washing out between bricks",
  "Birds, squirrels, or nesting debris are suspected in the flue",
]

export default function ChimneySweepEverettPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Serving Everett Since 1979
            </div>
            <h1 className="mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
              Chimney Sweep Everett: Professional Cleaning, Inspection & Repair
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90 text-pretty md:text-2xl">
              Certified chimney service for Everett homes, from Port Gardner and Bayside to Silver Lake, Lowell, and Boulevard Bluffs. We clean, inspect, and repair chimney systems built for real Pacific Northwest weather.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Schedule Service
              </Link>
              <a
                href={pricing.phoneE164 ? `tel:${pricing.phoneE164}` : "tel:+12062746409"}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="h-5 w-5" />
                {pricing.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-8 text-muted-foreground">
              Everett has one of the most varied housing mixes in Snohomish County: older masonry chimneys near the waterfront, mid-century homes across north and central Everett, and newer fireplace systems around Silver Lake and south Everett. That variety is exactly why a one-size-fits-all sweep is not enough. A proper visit should clean the system, document its condition, and catch moisture or venting problems before they become expensive repairs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
              Why Everett Chimneys Need Annual Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Everett weather is rough on chimney systems. Rain, salt air, wind exposure, and regular fireplace use all leave a mark.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6">
              <Droplets className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Waterfront Moisture</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Homes near Port Gardner Bay and Puget Sound see persistent dampness that can accelerate mortar decay, rust metal components, and expose weak flashing.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Wind className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Wind-Driven Rain</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Everett storms can push water under failing flashing, into crown cracks, and through worn mortar joints. Small leaks often become interior damage.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Home className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Older Housing Stock</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Historic and mid-century Everett homes often have original masonry, clay tile liners, or older fireboxes that need careful inspection.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Flame className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Regular Winter Use</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Every wood fire leaves creosote. Annual sweeping removes combustible deposits and helps your fireplace draft cleanly and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" id="services">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Complete Chimney Services in Everett
            </h2>
            <p className="text-lg text-muted-foreground">
              Cleaning, inspection, and repair from one licensed, bonded, and insured chimney company.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Chimney Cleaning</h3>
              <p className="mb-6 leading-7 text-muted-foreground">
                We remove creosote and soot from the flue, smoke chamber, damper area, and firebox using professional equipment and containment to protect your home.
              </p>
              <div className="mb-6 rounded-lg border border-primary/20 bg-primary/10 p-4">
                <div className="text-sm font-semibold text-primary">Standard cleaning</div>
                <div className="text-3xl font-bold">${pricing.services.chimneyCleaning.standard}</div>
                <div className="text-sm text-muted-foreground">Includes Level 1 inspection</div>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Full-length flue brushing
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Smoke chamber and firebox cleaning
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Home protection and cleanup
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">21-Point Inspection</h3>
              <p className="mb-6 leading-7 text-muted-foreground">
                Every cleaning includes a documented condition check of the chimney exterior, firebox, damper, liner, crown, cap, flashing, and visible masonry.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Crown, cap, and flashing assessment
                </li>
                <li className="flex gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Creosote, draft, and obstruction check
                </li>
                <li className="flex gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Liner and firebox condition notes
                </li>
                <li className="flex gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  Plain-English findings and next steps
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Chimney Repair</h3>
              <p className="mb-6 leading-7 text-muted-foreground">
                If we find damage, we explain what is urgent, what can wait, and what repair options make sense for the age and condition of your Everett home.
              </p>
              <ul className="space-y-3 text-sm">
                {repairServices.map((service) => (
                  <li key={service} className="flex gap-3">
                    <Wrench className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Signs Your Everett Chimney Needs Service
            </h2>
            <p className="text-lg text-muted-foreground">
              These symptoms usually mean the chimney needs cleaning, inspection, repair, or all three.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex gap-3 rounded-lg border bg-card p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <p className="text-sm leading-6 text-muted-foreground">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Everett Neighborhoods We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Local chimney service throughout Everett and nearby Snohomish County communities.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {everettNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className="rounded-lg border bg-card p-5">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">{neighborhood.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{neighborhood.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Also serving Mukilteo, Marysville, Lake Stevens, Snohomish, Mill Creek, Lynnwood, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Everett Homeowners Choose Mad Hatter
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Straightforward service, real credentials, and chimney work explained without scare tactics.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <Award className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">Serving Since 1979</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                More than four decades of chimney cleaning, inspection, and repair experience across greater Seattle and Snohomish County.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <Shield className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">Licensed & Insured</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                Washington contractor license {pricing.contractorLicense.number}. Licensed, bonded, and insured for professional chimney work.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <FileCheck className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">Documented Findings</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                You get clear notes on what we found, what matters now, and what maintenance can be planned later.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <Clock className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">Practical Scheduling</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                We serve Everett and surrounding communities with seasonal maintenance, pre-sale inspections, and repair estimates.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <CheckCircle2 className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">No Hidden Fees</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                Standard cleaning pricing is clear, and repair recommendations are explained before additional work begins.
              </p>
            </div>
            <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6">
              <Home className="mb-4 h-8 w-8" />
              <h3 className="mb-2 text-xl font-semibold">Local Home Knowledge</h3>
              <p className="text-sm leading-6 text-primary-foreground/80">
                Everett homes range from old brick chimneys to modern inserts. We adjust the inspection to the actual system in front of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Schedule Chimney Service in Everett
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Annual chimney cleaning and inspection helps prevent chimney fires, improves draft, catches water damage early, and keeps your fireplace ready for the next cold season.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Service
              </Link>
              <a
                href={pricing.phoneE164 ? `tel:${pricing.phoneE164}` : "tel:+12062746409"}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-card px-8 py-4 text-lg font-semibold transition-colors hover:bg-muted"
              >
                <Phone className="h-5 w-5" />
                {pricing.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
