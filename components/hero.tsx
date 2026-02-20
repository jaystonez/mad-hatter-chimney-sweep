// @ts-nocheck
import { Button } from "@/components/ui/button"
import { Phone, Shield, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fireplace.jpg"
          alt="Professional chimney sweep services - Mad Hatter Chimney Sweep Seattle"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Trusted Since 1979 — Family Owned & Operated
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Seattle&apos;s Most{" "}
            <span className="text-amber-400">Trusted</span>
            <br />Chimney Experts
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed mb-8 max-w-2xl">
            Expert chimney sweeping, inspections, and repairs. Keeping Seattle homes safe and fireplaces running beautifully since 1979.
          </p>

          {/* Social proof strip */}
          <div className="flex flex-wrap gap-6 mb-10 text-stone-300">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium">500+ 5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">2,500+ Happy Customers</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-400/40 hover:scale-105"
              asChild
            >
              <a href="#contact">Schedule Free Inspection</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
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

      {/* Floating stats card */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:flex gap-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-center">
          <div className="text-3xl font-bold text-amber-400">45+</div>
          <div className="text-xs text-stone-300">Years Experience</div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-center">
          <div className="text-3xl font-bold text-amber-400">2,500+</div>
          <div className="text-xs text-stone-300">Happy Customers</div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-center">
          <div className="text-3xl font-bold text-amber-400">100%</div>
          <div className="text-xs text-stone-300">Satisfaction</div>
        </div>
      </div>
    </section>
  )
}
