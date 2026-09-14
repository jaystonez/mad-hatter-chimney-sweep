import { Phone, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"
import { pricing, isPromoActive } from "@/lib/pricing"

function formatPromoDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default function Hero() {
  const promoOn = isPromoActive()
  const promoPrice = pricing.promo.chimneyCleaning.toFixed(2)
  const standardPrice = pricing.services.chimneyCleaning.standard.toFixed(2)

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fireplace.webp"
          alt="Professional chimney sweep services - Mad Hatter Chimney Sweep Seattle"
          fill
          className="object-cover opacity-30"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/55" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Trusted Since 1979 — Family Owned & Operated
          </div>

          {promoOn && (
            <div className="inline-flex items-center gap-2 bg-red-600/90 border border-red-400 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wide mb-6 shadow-lg">
              <CheckCircle className="w-4 h-4" />
              {pricing.promo.label} — ${promoPrice} through {formatPromoDate(pricing.promo.expiresAt)}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Seattle & Bellevue Chimney Sweep Since 1979
          </h1>

          <p className="text-xl md:text-2xl text-stone-100 leading-relaxed mb-8 max-w-2xl">
            Family owned and trusted since 1979. Serving Seattle, Bellevue, and the Greater Eastside with honest chimney service. Licensed WA #{pricing.contractorLicense.number}.
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-stone-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Licensed, Bonded & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Standard sweep ${standardPrice}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Level 1 inspection included</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${pricing.phoneE164}`}
              className="inline-flex h-11 items-center justify-center rounded-md bg-amber-500 px-8 py-6 text-lg font-bold text-stone-900 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:bg-amber-400 hover:shadow-amber-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {pricing.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border-2 border-amber-200 bg-stone-950/80 px-8 py-6 text-lg font-semibold text-amber-50 backdrop-blur-sm transition-colors hover:bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
