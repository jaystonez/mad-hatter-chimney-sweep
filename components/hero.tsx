// @ts-nocheck
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Shield } from "lucide-react"
import Image from "next/image"

const HERO_IMAGE_SRC = process.env.NEXT_PUBLIC_HERO_IMAGE_URL ||
  "https://placehold.co/600x700/1a1a2e/ffffff?text=Professional+Chimney+Services"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Since 1979</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Professional Chimney Services You Can{" "}
              <span className="text-primary">Trust</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Expert chimney sweeping, inspections, and repairs. Keeping your home safe and your fireplace running efficiently since 1979.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#contact">Schedule Service</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="tel:+12062746409">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (206) 274-6409
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Full Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium"><strong>45+</strong> Years Since 1979</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Family Owned</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE_SRC}
                alt="Professional chimney after expert repair and cap installation - Mad Hatter Chimney Sweep Seattle"
                className="w-full h-auto object-cover"
                width={600}
                height={700}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">2,500+ Happy Customers</p>
                  <p className="text-xs text-muted-foreground">5-star rated service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
