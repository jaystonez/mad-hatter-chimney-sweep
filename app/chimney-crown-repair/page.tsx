import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CloudRain, Phone, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Crown Repair Seattle | Crown Crack Sealing & Rebuild",
  description:
    "Chimney crown repair in Seattle, Bellevue, and Redmond. Stop water intrusion with professional crown sealing, resurfacing, and full crown rebuild services.",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Crown Repair",
  serviceType: "Chimney Crown Crack Repair and Replacement",
  description:
    "Repair and restoration of damaged chimney crowns to prevent water intrusion and masonry deterioration.",
  url: "https://www.themadhatterchimneysweep.com/chimney-crown-repair",
  areaServed: ["Seattle", "Bellevue", "Redmond", "Issaquah", "Sammamish"],
  provider: {
    "@type": "LocalBusiness",
    name: "The Mad Hatter Chimney Sweep",
    telephone: "+1-206-274-6409",
    url: "https://www.themadhatterchimneysweep.com",
  },
}

export default function ChimneyCrownRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Chimney Crown Repair in Seattle and the Eastside</h1>
            <p className="mb-8 text-xl text-slate-200">
              Protect your chimney from rain damage with professional crown crack repair and waterproof restoration.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Book Crown Inspection
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">How Crown Damage Starts</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <CloudRain className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Heavy Rain Exposure</h3>
                  <p className="text-sm text-muted-foreground">
                    Seattle weather accelerates crown cracking when water repeatedly penetrates concrete surfaces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <AlertTriangle className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Freeze-Thaw Expansion</h3>
                  <p className="text-sm text-muted-foreground">
                    Moisture inside hairline cracks expands in cold snaps and worsens structural damage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ShieldCheck className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Aging Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    Older crowns lose flexibility and shed water poorly, increasing leak risk around the flue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-3xl font-bold">Crown Repair Options</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Crown sealants and elastomeric coating for early-stage cracking</li>
              <li>• Crown resurfacing to restore slope and water shedding</li>
              <li>• Full crown rebuild when structural cracking is extensive</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-3xl font-bold">Related Pages</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/chimney-repair-seattle" className="text-primary hover:underline">
                  Chimney Repair Services
                </Link>
              </li>
              <li>
                <Link href="/chimney-waterproofing" className="text-primary hover:underline">
                  Chimney Waterproofing
                </Link>
              </li>
              <li>
                Locations: <Link href="/locations/seattle" className="text-primary hover:underline">Seattle</Link>,{" "}
                <Link href="/locations/bellevue" className="text-primary hover:underline">Bellevue</Link>, and{" "}
                <Link href="/locations/redmond" className="text-primary hover:underline">Redmond</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
