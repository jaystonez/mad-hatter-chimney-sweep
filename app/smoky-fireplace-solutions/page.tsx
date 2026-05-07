import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Phone, Wind, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Smoky Fireplace Solutions Seattle | Fix Fireplace Smoke Problems",
  description:
    "Smoky fireplace diagnosis and repair in Seattle, Bellevue, and Redmond. Fix smoke backdraft, startup smoke, and venting issues with certified chimney specialists.",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smoky Fireplace Solutions",
  serviceType: "Fireplace Smoke Diagnosis and Repair",
  description:
    "Diagnosis and correction of smoky fireplace issues including draft, blockage, and venting deficiencies.",
  url: "https://www.themadhatterchimneysweep.com/smoky-fireplace-solutions",
  areaServed: ["Seattle", "Bellevue", "Redmond", "Kirkland", "Issaquah"],
  provider: {
    "@type": "LocalBusiness",
    name: "The Mad Hatter Chimney Sweep",
    telephone: "+1-206-274-6409",
    url: "https://www.themadhatterchimneysweep.com",
  },
}

export default function SmokyFireplaceSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Smoky Fireplace Solutions for Seattle-Area Homes</h1>
            <p className="mb-8 text-xl text-slate-200">
              We pinpoint why smoke spills into your room and deliver permanent fixes for safer, cleaner fireplace use.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Smoke Diagnosis
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Fireplaces Smoke Indoors</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Wind className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Weak Chimney Draft</h3>
                  <p className="text-sm text-muted-foreground">
                    Short flues, cold starts, and house pressure imbalances can reverse airflow.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Flame className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Fuel & Burn Technique</h3>
                  <p className="text-sm text-muted-foreground">
                    Wet wood, restricted air, and overloaded fireboxes increase smoke output.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Wrench className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Chimney Defects</h3>
                  <p className="text-sm text-muted-foreground">
                    Obstructions, damaged liners, or cap issues often cause chronic smoke spillage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-3xl font-bold">Fixes We Commonly Recommend</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Corrective chimney sweeping and blockage removal</li>
              <li>• Damper, cap, and liner repairs to restore proper venting</li>
              <li>• Fire-start and burn-practice coaching for cleaner combustion</li>
              <li>• Make-up air strategies for tight Seattle and Bellevue homes</li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-3xl font-bold">Internal Resources</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/troubleshooting-chimney" className="text-primary hover:underline">
                  Chimney Troubleshooting Hub
                </Link>
              </li>
              <li>
                <Link href="/chimney-inspection" className="text-primary hover:underline">
                  Chimney Inspection Services
                </Link>{" "}
                and <Link href="/chimney-repair-seattle" className="text-primary hover:underline">Chimney Repair</Link>
              </li>
              <li>
                Areas served: <Link href="/locations/seattle" className="text-primary hover:underline">Seattle</Link>,{" "}
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
