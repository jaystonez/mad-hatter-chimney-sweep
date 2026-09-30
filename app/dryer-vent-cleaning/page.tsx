import { pageMetadata } from "@/lib/seo"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wind,
  Flame,
  Clock,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Phone,
} from "lucide-react"

export const metadata: Metadata = pageMetadata(
  "Dryer Vent Cleaning Seattle | Lint Removal & Fire Safety | Mad Hatter",
  "Professional dryer vent cleaning in Seattle and Bellevue. Remove lint buildup, improve drying time, and reduce dryer fire risk. Licensed since 1979. Call (206) 274-6409.",
  "/dryer-vent-cleaning"
)

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should dryer vents be cleaned in Seattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Seattle-area homes should have dryer vents cleaned every 12 months. Homes with long vent runs, pets, or heavy laundry loads may need service more often.",
      },
    },
    {
      "@type": "Question",
      name: "Can dryer vent cleaning be combined with a chimney sweep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many homeowners schedule dryer vent cleaning as an add-on during the same visit as a chimney sweep or inspection to save a second trip.",
      },
    },
    {
      "@type": "Question",
      name: "What are signs my dryer vent needs cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clothes take longer to dry, the dryer feels hotter than usual, you smell burning lint, or lint is visible around the outdoor vent cover.",
      },
    },
    {
      "@type": "Question",
      name: "Is a clogged dryer vent a fire hazard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lint is highly flammable. Restricted airflow causes the dryer to overheat, which is a leading cause of home dryer fires.",
      },
    },
  ],
}

export default function DryerVentCleaningPage() {
  const signs = [
    "Clothes take multiple cycles to dry",
    "Dryer exterior or laundry room gets unusually hot",
    "Burning or dusty lint smell during cycles",
    "Outdoor vent flaps barely move or are packed with lint",
    "Dryer shuts off mid-cycle from overheating",
  ]

  const includes = [
    "Full vent run cleaning from dryer to exterior termination",
    "Lint removal from ducting and outdoor hood",
    "Airflow check after cleaning",
    "Notes on damage, crush points, or improper venting",
    "Optional same-day bundling with chimney service",
  ]

  const steps = [
    {
      number: "1",
      title: "Inspect the run",
      description: "We locate the dryer, check the transition duct, and identify the outdoor termination.",
    },
    {
      number: "2",
      title: "Clean the line",
      description: "Rotary brushes and vacuum remove lint through the full duct path, not just the trap screen.",
    },
    {
      number: "3",
      title: "Clear the exit",
      description: "Outdoor hood and damper are cleaned so exhaust can leave the home freely.",
    },
    {
      number: "4",
      title: "Verify airflow",
      description: "We confirm improved airflow and flag any crushed, oversized, or unsafe venting for repair.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wind className="w-4 h-4" />
                Dryer Vent Cleaning
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Dryer Vent Cleaning in Seattle &amp; Bellevue
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Lint buildup slows drying, wastes energy, and raises fire risk. We clean the full vent run — not just the lint screen — so your dryer can breathe again.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule Dryer Vent Cleaning</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+12062746409">
                    <Phone className="w-4 h-4 mr-2" />
                    (206) 274-6409
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Flame className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Why Dryer Vents Matter</h2>
              <p className="text-lg text-muted-foreground">
                A clogged dryer vent forces the appliance to run longer and hotter. That wastes energy and is a documented cause of residential dryer fires. Annual cleaning is simple prevention — especially in PNW homes with long exterior runs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Signs You Need Service</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {signs.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What&apos;s Included</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-background border">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step) => (
                  <Card key={step.number}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Fast Add-On</h3>
                  <p className="text-sm text-muted-foreground">
                    Often completed in the same visit as a chimney sweep or inspection.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Licensed Local Crew</h3>
                  <p className="text-sm text-muted-foreground">
                    Same Mad Hatter team — WA #MADHAHL790LW — not a random lead broker.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Wind className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Full Run, Not Just the Trap</h3>
                  <p className="text-sm text-muted-foreground">
                    Lint screen cleaning is not enough. We clear the duct to the outside.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Dryer Vent FAQ</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <Card key={faq.name}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.name}</h3>
                      <p className="text-sm text-muted-foreground">{faq.acceptedAnswer.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Clear Your Dryer Vent?</h2>
            <p className="text-xl mb-8 opacity-95">
              Book dryer vent cleaning alone or bundle it with your next chimney appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black/40 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="tel:+12062746409">Call (206) 274-6409</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
