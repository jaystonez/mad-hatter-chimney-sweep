import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle, Camera, FileText, Shield, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Inspection in Seattle, WA | Mad Hatter Chimney Sweep",
  description: "Professional Level 1, 2 & 3 chimney inspections in Seattle with video camera technology. Licensed & insured with 45+ years of certified expertise. Call (206) 274-6409.",
}

export default function ChimneyInspectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Chimney Inspection: What to Expect, What It Costs &amp; Why It Matters
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Professional inspection finds hidden problems before they become fires, carbon monoxide leaks, or expensive emergencies. 45+ years of certified inspection expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Inspection
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                Learn About Levels
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              A chimney inspection reveals what&apos;s happening inside a system you can&apos;t see. Cracks, creosote buildup, water damage, structural problems, and safety hazards all hide behind brick walls and inside flue passages that are invisible from your living room. Professional inspection finds these problems before they become fires, carbon monoxide leaks, or expensive emergencies.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The National Fire Protection Association recommends annual chimney inspection for every home with a fireplace, wood stove, or fuel-burning appliance that vents through a chimney. This isn&apos;t an upsell&mdash;it&apos;s a safety standard based on decades of fire investigation data showing that undetected chimney problems cause preventable home fires and carbon monoxide poisoning.
            </p>
          </div>
        </div>
      </section>
      {/* Three Levels of Inspection */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Three Levels of Chimney Inspection
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Level 1 */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Level 1</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Covers all readily accessible areas without specialized tools.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-slate-900">What&apos;s Covered:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>&bull; Chimney exterior inspection</li>
                      <li>&bull; Firebox interior</li>
                      <li>&bull; Visible flue surfaces</li>
                      <li>&bull; Basic draft assessment</li>
                      <li>&bull; Clearances check</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                    <p className="text-sm text-slate-600">
                      Annual maintenance inspection when no changes have been made and no problems are suspected.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-2xl font-bold text-primary">$150&ndash;250</p>
                    <p className="text-sm text-slate-500">Typical cost</p>
                  </div>
                </CardContent>
              </Card>
              {/* Level 2 */}
              <Card className="border-2 border-primary shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Level 2</h3>
                  </div>
                  <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    RECOMMENDED
                  </div>
                  <p className="text-slate-600 mb-4">
                    Includes Level 1 plus video camera inspection of flue interior.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-slate-900">What&apos;s Added:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>&bull; Video camera flue scan</li>
                      <li>&bull; Attic/crawlspace assessment</li>
                      <li>&bull; Clearance verification</li>
                      <li>&bull; Detailed component evaluation</li>
                      <li>&bull; Video documentation</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                    <p className="text-sm text-slate-600">
                      Home sales, after chimney fires, fuel type changes, or whenever thorough evaluation is needed.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-2xl font-bold text-primary">$250&ndash;500</p>
                    <p className="text-sm text-slate-500">Typical cost</p>
                  </div>
                </CardContent>
              </Card>
              {/* Level 3 */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Level 3</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Includes Level 2 plus access to concealed areas requiring component removal.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-slate-900">What&apos;s Added:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>&bull; Removal of chase/wall coverings</li>
                      <li>&bull; Full structural evaluation</li>
                      <li>&bull; Hidden damage assessment</li>
                      <li>&bull; Comprehensive documentation</li>
                      <li>&bull; Code compliance verification</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">When Appropriate:</p>
                    <p className="text-sm text-slate-600">
                      Suspected serious hazards, after significant chimney fires, or when structural damage extent is unclear.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-2xl font-bold text-primary">$500&ndash;2,000+</p>
                    <p className="text-sm text-slate-500">Depending on access required</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-slate-700">
                <strong>Our Recommendation:</strong> Level 2 is our standard recommendation for most homeowners because the video camera inspection reveals conditions that are simply invisible otherwise.
              </p>
            </div>
            {/* NFPA 211 Inspection Levels Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-3">NFPA 211 Inspection Levels at a Glance</h3>
              <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
                Every inspection level is defined by NFPA 211 &mdash; the national standard for chimneys and fireplaces. The level ordered must match the actual conditions present. Recommending a higher level without documented justification is not good practice.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="px-5 py-4 font-semibold w-24">Level</th>
                      <th className="px-5 py-4 font-semibold">NFPA 211 Justification &mdash; When It&apos;s Used</th>
                      <th className="px-5 py-4 font-semibold">What We Inspect</th>
                      <th className="px-5 py-4 font-semibold">Invasiveness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="align-top bg-white hover:bg-green-50 transition-colors">
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 font-bold text-green-700">
                          <CheckCircle className="w-4 h-4" /> Level 1
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        <p className="font-medium mb-1">Routine annual inspection.</p>
                        System has not changed, fuel type is the same, and the appliance is being used as designed with no known problems. No events have occurred that would indicate a need for deeper evaluation.
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Visual check of all readily accessible portions of the chimney exterior, interior, and accessible flue. Confirms clear passageway and basic structural soundness. No removal of panels, doors, or building components.
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">Minimal</span>
                        <p className="text-slate-500 text-xs mt-1">No demolition. No specialized access equipment.</p>
                      </td>
                    </tr>
                    <tr className="align-top bg-gray-50 hover:bg-amber-50 transition-colors">
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 font-bold text-amber-700">
                          <Camera className="w-4 h-4" /> Level 2
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        <p className="font-medium mb-1">Required when conditions have changed or a qualifying event has occurred:</p>
                        <ul className="space-y-0.5 text-slate-600">
                          <li>&bull; Property is being sold or transferred</li>
                          <li>&bull; Appliance, fuel type, or flue liner is being changed</li>
                          <li>&bull; A chimney fire or significant weather event has occurred</li>
                          <li>&bull; Operation has been irregular, discontinued, or resumed after an extended period</li>
                        </ul>
                        <p className="text-slate-500 text-xs mt-2 italic">A Level 2 should not be upsold for a routine annual check on an unchanged system.</p>
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Everything in Level 1, plus video camera scan of the full flue interior and inspection of accessible attic, crawlspace, and basement areas where the chimney passes through. Clearances to combustibles verified.
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full">Moderate</span>
                        <p className="text-slate-500 text-xs mt-1">More access points. No finished walls opened.</p>
                      </td>
                    </tr>
                    <tr className="align-top bg-white hover:bg-red-50 transition-colors">
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 font-bold text-red-700">
                          <AlertTriangle className="w-4 h-4" /> Level 3
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        <p className="font-medium mb-2">Reserved for situations where Levels 1 and 2 cannot adequately evaluate a suspected hazard.</p>
                        <p className="mb-2">NFPA 211 requires clear documented evidence of a hidden safety concern before a Level 3 can be ordered &mdash; such as confirmed structural damage, a serious chimney fire, or findings from a Level 2 that cannot be resolved without opening the structure.</p>
                        <div className="bg-red-50 border border-red-200 rounded p-2.5 mt-2">
                          <p className="text-red-800 text-xs font-semibold">&#9888; Good Practice Warning</p>
                          <p className="text-red-700 text-xs mt-0.5">A Level 3 is rare and should never be recommended as a routine matter or as an upsell. It involves physical removal of building components (drywall, masonry, chase covers) and may result in damage that requires repair. Any contractor recommending a Level 3 without documented findings from a prior Level 2 should be questioned.</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Includes all components of Levels 1 and 2, plus removal or opening of structural components &mdash; such as drywall, masonry, or chimney chase covers &mdash; to access concealed areas that cannot be inspected any other way.
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full">Highly Invasive</span>
                        <p className="text-slate-500 text-xs mt-1">Building components removed. Repairs typically required afterward.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center text-xs text-slate-400 mt-3">Based on NFPA 211: Standard for Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances.</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Inspector Examines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What a Professional Inspector Examines
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Chimney Exterior</h3>
                <ul className="space-y-3">
                  {[{t:"Crown",d:"Cracks, slope, overhang, water pooling signs"},{t:"Chimney Cap",d:"Presence, security, sizing, condition"},{t:"Flashing",d:"Gaps, corrosion, lifting, water penetration"},{t:"Masonry",d:"Brick/mortar condition, cracks, efflorescence"},{t:"Structure",d:"Leaning, shifting, separation, foundation"}].map((item,i)=>(
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{item.t}</p>
                        <p className="text-sm text-slate-600">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Chimney Interior</h3>
                <ul className="space-y-3">
                  {[{t:"Flue Liner",d:"Cracks, gaps, corrosion, proper sizing, integrity"},{t:"Creosote Levels",d:"Accumulation measurement and stage identification"},{t:"Obstructions",d:"Nests, debris, collapsed sections"},{t:"Smoke Chamber",d:"Condition, shape, creosote accumulation"}].map((item,i)=>(
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{item.t}</p>
                        <p className="text-sm text-slate-600">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Firebox &amp; Performance</h3>
                <ul className="space-y-3">
                  {[{t:"Firebox Integrity",d:"Walls, floor, back wall cracks or deterioration"},{t:"Damper",d:"Operation, sealing, overall condition"},{t:"Hearth",d:"Code compliance, size, proper materials"},{t:"Draft",d:"Proper draw verification"},{t:"Clearances",d:"Adequate spacing from combustibles"}].map((item,i)=>(
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">{item.t}</p>
                        <p className="text-sm text-slate-600">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* When You Need Inspection */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              When You Need a Chimney Inspection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Annually", desc: "Every chimney in use should be inspected yearly. This is the NFPA recommendation and the single most effective step for chimney safety." },
                { title: "Before Buying a Home", desc: "Standard home inspections give chimneys minimal attention. Specialized inspection identifies problems general inspectors miss." },
                { title: "Before Selling", desc: "Recent professional inspection showing well-maintained chimney supports asking price and prevents negotiation delays." },
                { title: "After a Chimney Fire", desc: "Even small fires can cause internal damage invisible from outside. Professional inspection determines extent of damage." },
                { title: "After Severe Weather", desc: "Earthquakes, severe wind, and ice storms can damage structures. Post-event inspection verifies integrity." },
                { title: "After Long Inactivity", desc: "If fireplace unused for a year+, inspect before first fire. Conditions change during inactivity." },
                { title: "When You Notice Problems", desc: "Smoke backup, unusual odors, visible damage, water intrusion, or poor draft warrant professional inspection." },
                { title: "Before First Use", desc: "New homeowners should have chimney inspected before using inherited fireplace for the first time." }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* What Report Should Include */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Your Inspection Report Should Include
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: FileText, title: "Component-by-Component Assessment", desc: "Each part of the chimney system evaluated and rated with specific findings for crown, flashing, mortar, bricks, liner, smoke chamber, damper, and firebox." },
                { icon: Camera, title: "Photographs & Video", desc: "Visual documentation of findings, especially problems or areas of concern. Level 2 inspections include still images from camera inspection showing interior flue conditions." },
                { icon: AlertTriangle, title: "Safety Findings", desc: "Any conditions that represent immediate safety concerns, clearly identified and prioritized so you know what needs attention first." },
                { icon: CheckCircle, title: "Recommendations & Estimates", desc: "Specific repair or maintenance recommendations prioritized by urgency, with approximate costs for recommended work allowing you to plan and budget." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-slate-100 rounded-lg">
              <p className="text-slate-700 leading-relaxed">
                This documentation serves multiple purposes&mdash;guiding your maintenance decisions, supporting insurance claims if damage occurs, and providing buyers with professional assessment during home sales.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Inspection vs Home Inspection */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Chimney Inspection vs. Home Inspection
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-300">Home Inspection</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>&bull; Visual check from ground</li>
                  <li>&bull; Quick look inside firebox</li>
                  <li>&bull; Catches obvious problems only</li>
                  <li>&bull; Generalist covering entire home</li>
                  <li>&bull; No specialized tools</li>
                  <li>&bull; Misses most chimney issues</li>
                </ul>
              </div>
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Chimney Inspection</h3>
                <ul className="space-y-2">
                  <li>&bull; Complete exterior assessment</li>
                  <li>&bull; Video camera flue inspection</li>
                  <li>&bull; Finds hidden problems</li>
                  <li>&bull; Specialist chimney knowledge</li>
                  <li>&bull; Professional equipment</li>
                  <li>&bull; Comprehensive evaluation</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-yellow-400">Important:</strong> If you&apos;re buying a home with a fireplace, a dedicated chimney inspection by a certified chimney professional is strongly recommended in addition to the general home inspection.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Mad Hatter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Mad Hatter for Chimney Inspection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "45+ Years of Inspection Experience", desc: "Since 1979, we've inspected thousands of chimneys. Our knowledge of what to look for and what findings mean is unmatched in greater Seattle." },
                { icon: CheckCircle, title: "Master Chimney Sweep Certification", desc: "The highest industry credential. Advanced inspection techniques, current standards, and comprehensive knowledge." },
                { icon: FileText, title: "21-Point Inspection Process", desc: "Systematic evaluation covering every component. Nothing overlooked." },
                { icon: Camera, title: "Video Camera Technology", desc: "We see inside your chimney where the most important conditions hide." },
                { icon: FileText, title: "Complete Documentation", desc: "Detailed reports with photographs, condition ratings, and prioritized recommendations." },
                { icon: CheckCircle, title: "Full Service", desc: "Inspection, cleaning, and repair from one certified company. If we find problems, we fix them." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Chimney Inspection
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Professional inspection is the foundation of chimney safety. One annual assessment prevents fires, catches damage early, and ensures your family&apos;s safety. It&apos;s the smartest investment a fireplace owner can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call (206) 274-6409
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                Request Inspection
              </Button>
            </div>
            <p className="mt-8 text-slate-400">
              Same-day and next-day service available throughout the greater Seattle area
            </p>
            <p className="mt-4 text-lg font-semibold text-primary">
              45 years of certified expertise. Your chimney deserves professional assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
