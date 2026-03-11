import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "How Much Does a Chimney Sweep Cost in Seattle? (2026 Guide) | Mad Hatter",
  description: "Chimney sweep costs in Seattle range from $150-$500. Learn what affects pricing, what's included in professional service, and Mad Hatter's transparent rates.",
}

export default function ChimneySweepCostPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/resources" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          <span className="text-primary font-medium text-sm uppercase tracking-wide">Pricing Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            How Much Does a Chimney Sweep Cost in Seattle?
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A straightforward breakdown of chimney sweep pricing in the greater Seattle area so you know exactly what to expect before you call.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Short Answer</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Professional chimney sweep service in the Seattle area typically costs between <strong>$150 and $500</strong>, depending on the type of chimney, level of buildup, and what services are included. Most homeowners with a standard open-ended fireplace pay between $200 and $350 for a thorough cleaning with inspection.
            </p>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center my-8">
              <p className="text-lg text-slate-700 mb-2">Mad Hatter&apos;s standard cleaning &amp; 21-point inspection</p>
              <p className="text-4xl font-bold text-primary">Starting at $289.95</p>
              <p className="text-sm text-slate-500 mt-2">For standard open-ended fireplaces in the greater Seattle area</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">What Affects Chimney Sweep Cost?</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Chimney Type</h3>
                  <p className="text-sm text-slate-600">Open fireplaces are the simplest to clean. Wood stoves, fireplace inserts, and prefabricated chimneys often require more time and specialized equipment, which can increase cost.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Creosote Buildup Level</h3>
                  <p className="text-sm text-slate-600">Stage 1 creosote (dusty, flaky) is routine. Stage 2 (tar-like) and Stage 3 (glazed, hardened) require significantly more effort and may need chemical treatment.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Access &amp; Height</h3>
                  <p className="text-sm text-slate-600">Chimneys on steep roofs, multi-story homes, or with limited access may require additional time and safety equipment.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Inspection Level</h3>
                  <p className="text-sm text-slate-600">A Level 1 inspection is typically included. Level 2 (with video camera) and Level 3 (invasive) inspections are additional and cost more.</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">What Should Be Included in the Price?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A legitimate chimney sweep service should include all of the following at the quoted price. If any of these are missing, you may be getting a budget service that cuts corners.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Complete cleaning of firebox, smoke chamber, flue, and damper area",
                "HEPA-filtered vacuum to prevent mess in your home",
                "Level 1 visual inspection of all accessible areas",
                "Written report with findings and recommendations",
                "Certified technician with proper insurance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Red Flags in Chimney Sweep Pricing</h2>
            <div className="space-y-3 mb-8">
              {[
                "Prices under $100 almost always mean corners are being cut",
                "Door-to-door solicitation with low introductory prices that lead to upselling",
                "No written estimate before work begins",
                "Verbal-only findings with no documentation",
                "Pressure for immediate expensive repairs during the appointment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">How Often Do You Need a Chimney Sweep?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The National Fire Protection Association (NFPA) recommends annual chimney inspection and cleaning when inspection reveals it is needed. For most Seattle homeowners who use their fireplace regularly during the rainy season, that means annual cleaning. Heavy users (daily fires) should consider cleaning every 6 to 8 months.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Is a Chimney Sweep Worth the Cost?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The average chimney fire causes $20,000 to $30,000 in damage. An annual chimney sweep costs a fraction of that and is the single most effective way to prevent chimney fires. It also catches developing problems like cracked liners, water damage, and structural deterioration before they become expensive emergency repairs.
            </p>

          </div>
        </div>
      </article>

            {/* Related Services */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/services/chimney-inspection-sweeping" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Chimney Inspection & Sweeping</h3>
              <p className="text-sm text-slate-600">Professional chimney inspection and cleaning services</p>
            </Link>
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Chimney Sweep?</h2>
          <p className="text-xl mb-8 opacity-90">Transparent pricing. No hidden fees. Written estimates before work begins.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors">
              Get Free Estimate
            </Link>
            <a href="tel:+12062746409" className="inline-flex items-center justify-center rounded-md border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-primary transition-colors">
              Call (206) 274-6409
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
