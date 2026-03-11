import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wind, ArrowLeft, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Does My Chimney Smell Smoky? Causes & Fixes | Mad Hatter Chimney Sweep",
  description: "Smoky chimney smell in your home? Learn the 6 most common causes of chimney odor, from creosote buildup to draft problems, and how to fix each one.",
}

export default function ChimneySmellsSmokyPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/resources" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
          </Link>
          <span className="text-primary font-medium text-sm uppercase tracking-wide">Troubleshooting</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Why Does My Chimney Smell Smoky?</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A persistent smoky odor coming from your fireplace, even when it is not in use, is one of the most common chimney complaints Seattle homeowners report. Here is what causes it and how to fix it.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Causes of Smoky Chimney Smell</h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Creosote &amp; Soot Buildup</h3>
                <p className="text-slate-700 leading-relaxed">The most common cause. Creosote has a strong, acrid smell that intensifies in warm, humid weather. Seattle&apos;s damp climate makes this especially noticeable in summer when humidity drives the odor into your living space. The solution is professional chimney cleaning to remove the buildup.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Negative Air Pressure</h3>
                <p className="text-slate-700 leading-relaxed">Modern energy-efficient homes can create negative air pressure that pulls air down through the chimney instead of up. Exhaust fans, HVAC systems, and tight building envelopes all contribute. A top-sealing damper or dedicated combustion air supply can resolve this.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Missing or Damaged Chimney Cap</h3>
                <p className="text-slate-700 leading-relaxed">Without a cap, rain enters the flue and mixes with creosote deposits, creating a strong, musty odor. A properly fitted chimney cap stops rain, prevents animal entry, and reduces downdrafts.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Damper Not Sealing Properly</h3>
                <p className="text-slate-700 leading-relaxed">If your throat damper does not close completely, chimney air flows freely into your home. Warped, rusted, or damaged dampers are common in older Seattle homes and should be repaired or replaced with a top-sealing damper.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">5. Animal Nesting or Debris</h3>
                <p className="text-slate-700 leading-relaxed">Birds, raccoons, and squirrels frequently nest in uncapped chimneys in the Seattle area. Decomposing nesting material and animal waste produce strong odors that require professional removal.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">6. Water Intrusion &amp; Moisture</h3>
                <p className="text-slate-700 leading-relaxed">Water mixing with soot and creosote produces a particularly unpleasant odor. In Seattle&apos;s rainy climate, water intrusion through cracked crowns, damaged flashing, or deteriorated mortar joints is extremely common.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">When to Call a Professional</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Contact a certified chimney sweep if you notice any of the following:</p>
            <div className="space-y-3 mb-8">
              {[
                "Smoky odor that persists even when the fireplace is not in use",
                "Smell that worsens in warm or humid weather",
                "Visible dark staining on the firebox or above the fireplace",
                "Any odor accompanied by visible moisture or water stains",
                "Strange animal sounds or debris falling into the firebox",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Quick Fixes While You Wait for Service</h2>
            <div className="space-y-3 mb-8">
              {[
                "Close the damper tightly if it still functions",
                "Place a box fan in the firebox blowing up the flue to reverse the downdraft",
                "Set baking soda or activated charcoal in the firebox to absorb odor",
                "Avoid air fresheners, which mask the smell without solving the underlying problem",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

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
            <Link href="/services/chimney-relining" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Chimney Relining</h3>
              <p className="text-sm text-slate-600">Professional chimney liner installation and repair</p>
            </Link>
          </div>
        </div>
      </section>

<section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Rid of That Smoky Smell</h2>
          <p className="text-xl mb-8 opacity-90">A professional cleaning and inspection will identify and resolve the source of chimney odor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors">Schedule Inspection</Link>
            <a href="tel:+12062746409" className="inline-flex items-center justify-center rounded-md border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-primary transition-colors">Call (206) 274-6409</a>
          </div>
        </div>
      </section>
    </main>
  )
}
