import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Phone, ShieldAlert, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Creosote Removal Seattle | Stage 3 Glazed Creosote Cleaning",
  description:
    "Stage 3 creosote removal in Seattle, Bellevue & Kirkland. Professional glazed creosote treatment for high-risk chimney systems with safety-first methods.",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creosote Removal",
  serviceType: "Stage 3 Creosote Cleaning",
  description:
    "Professional removal of hazardous glazed creosote deposits from chimney flue systems.",
  url: "https://www.themadhatterchimneysweep.com/creosote-removal",
  areaServed: ["Seattle", "Bellevue", "Kirkland", "Shoreline", "Mercer Island"],
  provider: {
    "@type": "LocalBusiness",
    name: "The Mad Hatter Chimney Sweep",
    telephone: "+1-206-274-6409",
    url: "https://www.themadhatterchimneysweep.com",
  },
}

export default function CreosoteRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Stage 3 Creosote Removal in Seattle</h1>
            <p className="mb-8 text-xl text-slate-200">
              Glazed creosote is a high-fire-risk deposit that requires specialized treatment beyond standard chimney sweeping.
            </p>
            <Button size="lg" asChild>
              <Link href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Safety Cleaning
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Understanding Stage 3 Creosote</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Flame className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Hard, Glazed Deposits</h3>
                  <p className="text-sm text-muted-foreground">
                    Stage 3 creosote forms a shiny coating that standard brushes cannot fully remove.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ShieldAlert className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Serious Fire Risk</h3>
                  <p className="text-sm text-muted-foreground">
                    Glazed buildup can ignite rapidly and produce extreme chimney-fire temperatures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Wrench className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Specialized Removal</h3>
                  <p className="text-sm text-muted-foreground">
                    We combine mechanical and treatment-based methods based on liner type and buildup severity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-3xl font-bold">When to Request Immediate Service</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• You were told your system has glazed or stage 3 creosote</li>
              <li>• You notice strong burnt-tar odor from the chimney</li>
              <li>• The fireplace has a history of smoky operation and infrequent cleaning</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-3xl font-bold">Related Internal Links</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/chimney-cleaning" className="text-primary hover:underline">
                  Chimney Cleaning
                </Link>{" "}
                for annual maintenance
              </li>
              <li>
                <Link href="/chimney-inspection" className="text-primary hover:underline">
                  Chimney Inspection
                </Link>{" "}
                for camera verification and safety planning
              </li>
              <li>
                Service areas: <Link href="/locations/seattle" className="text-primary hover:underline">Seattle</Link>,{" "}
                <Link href="/locations/bellevue" className="text-primary hover:underline">Bellevue</Link>, and{" "}
                <Link href="/locations/kirkland" className="text-primary hover:underline">Kirkland</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
