import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "White Stuff on Chimney? What Efflorescence Means | Mad Hatter Chimney Sweep",
  description: "White stains on your chimney bricks are called efflorescence. Learn what causes it, whether it signals a serious problem, and when you need professional repair.",
}

export default function WhiteStuffOnChimneyPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/resources" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
          </Link>
          <span className="text-primary font-medium text-sm uppercase tracking-wide">Troubleshooting</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">White Stuff on Your Chimney? What Efflorescence Means</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Those white, chalky stains appearing on your chimney bricks have a name: efflorescence. It is not just a cosmetic issue. It is a warning sign that moisture is moving through your masonry.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is Efflorescence?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Efflorescence is a white, crystalline deposit of water-soluble salts that forms on masonry surfaces. When water penetrates brick or mortar, it dissolves naturally occurring salts inside the material. As the water migrates to the surface and evaporates, it leaves those salts behind as a visible white residue.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              The white stains themselves are not harmful. But their presence always means water is getting into and moving through your chimney masonry, and <strong>that</strong> is the real problem.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Why Efflorescence Is a Warning Sign</h2>
            <p className="text-slate-700 leading-relaxed mb-4">Water moving through masonry causes progressive damage:</p>
            <div className="space-y-3 mb-8">
              {[
                "Mortar joint deterioration: water dissolves the binding agents in mortar, causing joints to crumble",
                "Freeze-thaw damage: water trapped in bricks expands when it freezes, cracking the brick from inside. This is called spalling.",
                "Liner damage: moisture reaching the flue liner can cause clay tiles to crack or metal liners to corrode",
                "Structural weakening: prolonged water intrusion undermines the structural integrity of the entire chimney",
                "Mold and mildew: moisture inside the chimney structure can lead to mold growth that affects indoor air quality",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">Common Causes in Seattle</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Seattle&apos;s climate makes chimneys particularly vulnerable to moisture problems. The combination of heavy rainfall, mild temperatures, and high humidity creates ideal conditions for water intrusion.
            </p>
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Damaged or Missing Chimney Crown</h3>
                <p className="text-slate-700">The crown is the concrete cap at the top of your chimney. Cracks in the crown allow rain to seep directly into the masonry structure.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Failed Flashing</h3>
                <p className="text-slate-700">The metal seal where the chimney meets the roof. When flashing deteriorates, water runs down between the chimney and roof into the structure.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Deteriorated Mortar Joints</h3>
                <p className="text-slate-700">Mortar has a shorter lifespan than brick. As joints erode, water penetrates deeper into the chimney structure with each rain.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">No Waterproofing</h3>
                <p className="text-slate-700">Brick is porous by nature. Without a breathable waterproofing treatment, it absorbs water like a sponge during Seattle&apos;s long rainy seasons.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Missing Chimney Cap</h3>
                <p className="text-slate-700">Without a cap, rain falls directly into the flue, saturating the liner and interior masonry from the inside out.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-12">What to Do About It</h2>
            <div className="space-y-3 mb-8">
              {[
                "Schedule a professional chimney inspection to identify the source of moisture intrusion",
                "Do not just clean the white stains. Removing efflorescence without fixing the water source means it will return.",
                "Address the root cause: crown repair, flashing replacement, tuckpointing, waterproofing, or cap installation",
                "Consider breathable waterproofing sealant after repairs are complete to prevent future moisture penetration",
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
            <Link href="/services/chimney-repairs" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Chimney Repairs</h3>
              <p className="text-sm text-slate-600">Expert masonry and structural chimney repairs</p>
            </Link>
            <Link href="/services/waterproofing-leak-repair" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Waterproofing & Leak Repair</h3>
              <p className="text-sm text-slate-600">Comprehensive chimney leak detection and waterproofing</p>
            </Link>
            <Link href="/services/rebuilds-restorations" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Rebuilds & Restorations</h3>
              <p className="text-sm text-slate-600">Complete chimney rebuilding and restoration services</p>
            </Link>
          </div>
        </div>
      </section>

<section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Concerned About White Stains on Your Chimney?</h2>
          <p className="text-xl mb-8 opacity-90">A professional inspection will identify the moisture source and recommend the right repair.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors">Schedule Inspection</Link>
            <a href="tel:+12062746409" className="inline-flex items-center justify-center rounded-md border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-primary transition-colors">Call (206) 274-6409</a>
          </div>
        </div>
      </section>
    </main>
  )
}
