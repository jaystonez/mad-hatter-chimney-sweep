// @ts-nocheck
import { Button } from "@/components/ui/button"
import { Phone, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 overflow-hidden">
      {/* Background image with overlay */}
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
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Trusted Since 1979 — Family Owned & Operated
          </div>

          {/* Promo badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/90 border border-red-400 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wide mb-6 shadow-lg">
            <CheckCircle className="w-4 h-4" />
            Limited-Time Special
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            <span className="block text-amber-400">$99.95</span>
            Chimney Cleaning
            <br />Special
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-stone-100 leading-relaxed mb-8 max-w-2xl">
            Family owned and trusted since 1979. Serving Seattle, Bellevue, and the Greater Eastside with honest chimney service at a price homeowners can afford.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap gap-6 mb-10 text-stone-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Since 1979</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              asChild
            >
              <a href="#contact">Claim $99.95 Special</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white/70 bg-white/10 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+12062746409">
                <Phone className="w-5 h-5 mr-2" />
                (206) 274-6409
              </a>
            </Button>
          </div>
        </div>
      </div>


    </section>
  )
}
