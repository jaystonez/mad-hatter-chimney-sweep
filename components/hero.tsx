import { Button } from "@/components/ui/button"
import { Phone, Calendar, Shield, Flame } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Since 2014</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Seattle&apos;s Trusted{" "}
              <span className="text-primary">Chimney Experts</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Expert chimney sweeping, inspections, and repairs throughout the Greater Seattle area. Real local business, real credentials, real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call (206) 274-6409
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-8 border-t">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Licensed &amp; Insured</p>
                  <p className="text-xs text-muted-foreground">WA State L&amp;I</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Years Experience</p>
                  <p className="text-xs text-muted-foreground">Serving King County</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-48 bg-gradient-to-b from-stone-400 to-stone-600 rounded-t-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-48 bg-gradient-to-t from-orange-500 via-amber-400 to-transparent rounded-t-full"></div>
              </div>
              <div className="text-center px-8 relative z-10">
                <Flame className="w-24 h-24 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-3">The Mad Hatter</h2>
                <p className="text-lg text-slate-300">Chimney Sweep</p>
                <p className="text-sm text-slate-400 mt-4">Professional Service Since 2014</p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">2,500+</p>
                    <p className="text-xs text-slate-400">Customers</p>
                  </div>
                  <div className="w-px bg-slate-600"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">5.0</p>
                    <p className="text-xs text-slate-400">Star Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Not a Lead-Gen Scam</p>
                  <p className="text-sm text-muted-foreground">Real local business, verifiable credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
