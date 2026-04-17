import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BrickWall, Hammer, Phone, ShieldAlert } from "lucide-react"

export const metadata: Metadata = {
  title: "Firebox Repair Seattle | Fireplace Firebox Rebuild & Restoration",
  description:
    "Firebox repair and rebuild services in Seattle, Bellevue, and Shoreline. Fix cracked firebrick, failed mortar joints, and unsafe fireplace conditions.",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Firebox Repair",
  serviceType: "Firebox Rebuild and Fireplace Repair",
  description:
    "Professional firebox repair for cracked firebrick, deteriorated mortar, and unsafe combustion chamber conditions.",
  url: "https://www.themadhatterchimneysweep.com/firebox-repair",
  areaServed: ["Seattle", "Bellevue", "Shoreline", "Kirkland", "Bothell"],
  provider: {
    "@type": "LocalBusiness",
    name: "The Mad Hatter Chimney Sweep",
    telephone: "+1-206-274-6409",
    url: "https://www.themadhatterchimneysweep.com",
  },
}

const repairOptions = [
  "Firebrick replacement and refractory mortar repair",
  "Partial firebox rebuild for localized wall failure",
  "Full firebox restoration for severe heat or moisture damage",
]

export default function FireboxRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Firebox Repair and Rebuild in Seattle</h1>
            <p className="mb-8 text-xl text-slate-200">
              Restore fireplace safety and performance with code-conscious firebox masonry repair.
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Request Firebox Evaluation
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Signs Your Firebox Needs Repair</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <ShieldAlert className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Cracked Firebrick</h3>
                  <p className="text-sm text-muted-foreground">
                    Damaged firebrick exposes masonry behind the firebox to excessive heat.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BrickWall className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Missing Mortar Joints</h3>
                  <p className="text-sm text-muted-foreground">
                    Open joints allow heat transfer and can compromise fireplace containment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Hammer className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Loose Masonry</h3>
                  <p className="text-sm text-muted-foreground">
                    Movement in firebox walls signals deterioration that should be repaired promptly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-3xl font-bold">Firebox Repair Scope</h2>
            <ul className="space-y-3 text-muted-foreground">
              {repairOptions.map((option) => (
                <li key={option}>• {option}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-3xl font-bold">Related Service Pages</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/chimney-repair" className="text-primary hover:underline">
                  Chimney Repair
                </Link>{" "}
                for full-system restoration
              </li>
              <li>
                <Link href="/masonry-repair" className="text-primary hover:underline">
                  Masonry Repair
                </Link>{" "}
                for broader brick and mortar work
              </li>
              <li>
                Location pages: <Link href="/locations/seattle" className="text-primary hover:underline">Seattle</Link>,{" "}
                <Link href="/locations/bellevue" className="text-primary hover:underline">Bellevue</Link>, and{" "}
                <Link href="/locations/shoreline" className="text-primary hover:underline">Shoreline</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
