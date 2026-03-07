import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone, AlertTriangle, Shield, Camera } from "lucide-react"

const services = {
  "chimney-inspection-sweeping": {
    title: "Chimney Inspection & Sweeping",
    description: "Professional chimney inspection and cleaning services to ensure your chimney is safe, clean, and operating efficiently.",
    longDescription: "Regular chimney inspections and sweeping are essential for the safety and efficiency of your fireplace or heating system. Our CSIA-certified technicians provide comprehensive inspections using state-of-the-art video camera technology to identify any issues before they become major problems.",
    benefits: [
      "Prevents dangerous chimney fires from creosote buildup",
      "Identifies structural issues early",
      "Improves fireplace efficiency and draft",
      "Removes blockages and debris",
      "Extends the life of your chimney system",
      "Ensures compliance with insurance requirements"
    ],
    services: [
      "Level 1, 2, and 3 NFPA Inspections",
      "Video Camera Chimney Scans",
      "Creosote Removal (All Stages)",
      "Bird Nest and Debris Removal",
      "Chimney Cap and Damper Inspection",
      "Annual Maintenance Programs"
    ],
    process: [
      "Initial Assessment - We evaluate your chimney's condition and discuss your concerns",
      "Thorough Inspection - Using cameras and visual inspection to check all components",
      "Professional Cleaning - Removing creosote, soot, and debris from top to bottom",
      "Final Report - Detailed findings with photos and recommendations",
      "Follow-up Care - Scheduling future maintenance and addressing any repairs needed"
    ]
  },
  "chimney-repairs": {
    title: "Chimney Repairs",
    description: "Expert masonry and structural chimney repairs to restore safety and functionality to your chimney system.",
    longDescription: "From minor mortar repairs to major structural work, our experienced masons can handle all types of chimney repairs. We use high-quality materials and time-tested techniques to ensure lasting results that protect your home.",
    benefits: [
      "Prevents water damage and deterioration",
      "Restores structural integrity",
      "Eliminates safety hazards",
      "Improves energy efficiency",
      "Increases home value",
      "Prevents costly future repairs"
    ],
    services: [
      "Chimney Crown Repair and Replacement",
      "Tuckpointing and Repointing",
      "Firebox Repair and Rebuilds",
      "Smoke Chamber Restoration",
      "Damper Repair and Replacement",
      "Brick and Stone Replacement"
    ],
    process: [
      "Damage Assessment - Comprehensive evaluation of repair needs",
      "Detailed Estimate - Clear pricing with no hidden costs",
      "Skilled Repairs - Expert masonry work by certified technicians",
      "Quality Materials - Premium mortar, brick, and sealants",
      "Final Inspection - Ensuring all repairs meet safety standards"
    ]
  },
  "chimney-relining": {
    title: "Chimney Relining",
    description: "Professional chimney liner installation and repair to ensure safe venting of combustion gases.",
    longDescription: "A properly installed chimney liner is crucial for the safe operation of your fireplace or heating appliance. We install high-quality stainless steel and cast-in-place liners that meet all code requirements and provide decades of reliable service.",
    benefits: [
      "Prevents carbon monoxide leaks",
      "Protects chimney structure from heat and corrosion",
      "Improves draft and efficiency",
      "Allows use of multiple fuel types safely",
      "Meets current building codes",
      "Lifetime warranty options available"
    ],
    services: [
      "Stainless Steel Liner Installation",
      "Cast-in-Place Liner Systems",
      "Flexible Liner Systems",
      "Rigid Liner Installation",
      "Oil Furnace Liner Installation",
      "Liner Repair and Replacement"
    ],
    process: [
      "System Evaluation - Determining the right liner for your needs",
      "Precise Measurements - Ensuring proper fit and sizing",
      "Professional Installation - Top-to-bottom liner installation",
      "Insulation - Adding insulation for improved performance",
      "Connection - Proper connection to appliance and chimney cap"
    ]
  },
  "waterproofing-leak-repair": {
    title: "Waterproofing & Leak Repair",
    description: "Comprehensive chimney leak detection and waterproofing services to protect your home from water damage.",
    longDescription: "Water is the number one enemy of masonry chimneys. Our waterproofing and leak repair services protect your chimney from water infiltration that can cause serious structural damage and costly repairs.",
    benefits: [
      "Prevents freeze-thaw damage",
      "Stops interior water stains and damage",
      "Eliminates musty odors from moisture",
      "Extends chimney lifespan significantly",
      "Protects against mold and mildew",
      "Reduces heating and cooling costs"
    ],
    services: [
      "Chimney Flashing Repair and Installation",
      "Chimney Cap Installation",
      "Chase Cover Replacement",
      "Waterproofing Treatment Application",
      "Crown Sealing",
      "Leak Detection and Diagnosis"
    ],
    process: [
      "Leak Detection - Identifying all sources of water entry",
      "Root Cause Analysis - Determining why leaks are occurring",
      "Comprehensive Repairs - Fixing flashing, crowns, and other issues",
      "Waterproofing Application - Applying breathable water repellent",
      "Preventive Measures - Installing caps and covers for long-term protection"
    ]
  },
  "stove-fireplace-installation": {
    title: "Stove & Fireplace Installation",
    description: "Professional installation of wood stoves, gas fireplaces, inserts, and fireplace accessories.",
    longDescription: "Whether you're adding a new heating appliance or upgrading your existing fireplace, our certified installers ensure safe, code-compliant installation that maximizes efficiency and performance.",
    benefits: [
      "Code-compliant installation for safety and insurance",
      "Maximizes heating efficiency",
      "Proper venting for clean operation",
      "Professional finishing for aesthetic appeal",
      "Warranty protection through proper installation",
      "Expert advice on appliance selection"
    ],
    services: [
      "Wood Stove Installation",
      "Gas Fireplace Installation",
      "Fireplace Insert Installation",
      "Pellet Stove Installation",
      "Glass Door Installation",
      "Hearth Pad Construction"
    ],
    process: [
      "Consultation - Discussing your heating needs and preferences",
      "Site Preparation - Ensuring proper clearances and venting",
      "Professional Installation - Expert setup of your new appliance",
      "Venting System - Proper liner and venting installation",
      "Final Testing - Ensuring safe and efficient operation"
    ]
  },
  "rebuilds-restorations": {
    title: "Rebuilds & Restorations",
    description: "Complete chimney rebuilding and restoration services for severely damaged or deteriorating chimneys.",
    longDescription: "When repairs aren't enough, our complete rebuild and restoration services can give you a like-new chimney. From partial rebuilds to complete reconstructions, we restore chimneys to their original beauty and functionality.",
    benefits: [
      "Addresses severe structural damage",
      "Improves home safety dramatically",
      "Increases property value",
      "Opportunity to upgrade and modernize",
      "Long-lasting solution (50+ years)",
      "Custom design options available"
    ],
    services: [
      "Partial Chimney Rebuilds",
      "Complete Chimney Reconstruction",
      "Brick and Stone Replacement",
      "Fireplace Rebuilding",
      "Stone Veneer Installation",
      "Cultured Stone Application"
    ],
    process: [
      "Structural Assessment - Determining extent of rebuild needed",
      "Design Planning - Creating a rebuild plan that meets your needs",
      "Safe Demolition - Removing damaged sections carefully",
      "Expert Reconstruction - Building with quality materials and craftsmanship",
      "Finishing Touches - Ensuring beautiful appearance and proper function"
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = services[resolvedParams.slug as keyof typeof services]
  
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.title} | The Mad Hatter Chimney Sweep`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const service = services[resolvedParams.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const isInspectionPage = resolvedParams.slug === "chimney-inspection-sweeping"

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/services" className="text-primary hover:underline mb-4 inline-block">
                ← Back to All Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed">{service.longDescription}</p>
              </div>

              {/* Benefits */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Services Offered */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Services Include</h2>
                  <ul className="space-y-3">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* NFPA 211 Inspection Levels - Only on Inspection & Sweeping page */}
              {isInspectionPage && (
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold mb-4">Understanding NFPA 211 Inspection Levels</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Every chimney inspection is defined by NFPA 211 — the national standard for chimneys, fireplaces, vents, and solid fuel-burning appliances. The level ordered must match the actual conditions present. A responsible contractor will never recommend a higher level without proper justification.
                  </p>

                  {/* Level 1 */}
                  <Card className="mb-6 border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-8 h-8 text-green-600" />
                        <div>
                          <h3 className="text-2xl font-bold">Level 1 Inspection</h3>
                          <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">MOST COMMON</span>
                        </div>
                      </div>
                      <p className="text-lg mb-4">
                        A Level 1 is the standard annual inspection for any chimney system that has not changed and is being used as designed. This is the most common inspection we perform and is appropriate for the vast majority of homeowners.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2">When It Applies:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Routine annual maintenance</li>
                            <li>• No changes to the system or fuel type</li>
                            <li>• Appliance used as originally designed</li>
                            <li>• No known problems or events requiring deeper evaluation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">What We Inspect:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• All readily accessible chimney exterior and interior</li>
                            <li>• Firebox condition</li>
                            <li>• Visible flue surfaces</li>
                            <li>• Basic draft assessment and clearances check</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Invasiveness:</strong> Minimal — no demolition, no specialized access equipment. This is a visual inspection of accessible components only.
                        </p>
                      </div>
                      <p className="mt-3 text-lg font-semibold text-primary">Typical cost: $150–250</p>
                    </CardContent>
                  </Card>

                  {/* Level 2 */}
                  <Card className="mb-6 border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Camera className="w-8 h-8 text-blue-600" />
                        <div>
                          <h3 className="text-2xl font-bold">Level 2 Inspection</h3>
                          <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">EVENT-DRIVEN</span>
                        </div>
                      </div>
                      <p className="text-lg mb-4">
                        A Level 2 is required when specific conditions have changed or a qualifying event has occurred. It includes everything in a Level 1 plus video camera scanning of the full flue interior and inspection of additional accessible areas.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2">When It Applies:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Property is being sold or transferred</li>
                            <li>• Appliance, fuel type, or flue liner has changed</li>
                            <li>• A chimney fire or significant weather event has occurred</li>
                            <li>• Operation was irregular, discontinued, or resumed after extended period</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">What’s Added Beyond Level 1:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Video camera scan of the full flue interior</li>
                            <li>• Attic and crawlspace assessment</li>
                            <li>• Clearance verification to combustibles</li>
                            <li>• Detailed component evaluation with video documentation</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Invasiveness:</strong> Moderate — more access points inspected, but no finished walls or structural components are opened.
                        </p>
                      </div>
                      <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-800">
                          <strong>Good Practice Note:</strong> A Level 2 should not be upsold for a routine annual check on an unchanged system. It is specifically designed for situations where conditions have changed or an event has occurred that warrants deeper evaluation.
                        </p>
                      </div>
                      <p className="mt-3 text-lg font-semibold text-primary">Typical cost: $250–500</p>
                    </CardContent>
                  </Card>

                  {/* Level 3 */}
                  <Card className="mb-6 border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                        <div>
                          <h3 className="text-2xl font-bold">Level 3 Inspection</h3>
                          <span className="text-sm font-semibold text-red-700 bg-red-100 px-2 py-1 rounded">RARE — REQUIRES JUSTIFICATION</span>
                        </div>
                      </div>
                      <p className="text-lg mb-4">
                        A Level 3 is reserved for situations where Levels 1 and 2 cannot adequately evaluate a suspected hazard. NFPA 211 requires clear documented evidence of a hidden safety concern before a Level 3 can be ordered.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold mb-2">When It Applies:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Confirmed structural damage from a prior Level 2</li>
                            <li>• A serious chimney fire with suspected hidden damage</li>
                            <li>• Findings from Level 2 that cannot be resolved without opening the structure</li>
                            <li>• Suspected serious hazards in concealed areas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">What’s Added Beyond Level 2:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Removal of chase or wall coverings</li>
                            <li>• Full structural evaluation of concealed areas</li>
                            <li>• Hidden damage assessment</li>
                            <li>• Comprehensive documentation and code compliance verification</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Invasiveness:</strong> Highly invasive — building components (drywall, masonry, chase covers) are physically removed. Repairs are typically required afterward.
                        </p>
                      </div>
                      <div className="mt-3 p-3 bg-red-50 border border-red-300 rounded-lg">
                        <p className="text-sm text-red-900">
                          <strong>⚠️ Good Practice Warning:</strong> A Level 3 is rare and should never be recommended as a routine matter or as an upsell. It involves physical removal of building components and may result in damage that requires repair. Any contractor recommending a Level 3 without documented findings from a prior Level 2 should be questioned.
                        </p>
                      </div>
                      <p className="mt-3 text-lg font-semibold text-primary">Typical cost: $500–2,000+</p>
                    </CardContent>
                  </Card>

                  <p className="text-sm text-muted-foreground text-center italic">
                    Based on NFPA 211: Standard for Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances.
                  </p>
                </div>
              )}

              {/* Process */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Our Process</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => {
                      const [title, description] = step.split(' - ')
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">{title}</h3>
                            <p className="text-muted-foreground">{description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Contact us today for a free inspection and estimate
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/#contact">Request Free Estimate</Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <a href="tel:+12062746409">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (206) 274-6409
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
