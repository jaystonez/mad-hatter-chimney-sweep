import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Phone, Search, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Troubleshooting Seattle | Diagnose Smoke, Draft & Odor Issues",
  description:
    "Chimney troubleshooting in Seattle, Bellevue, and Kirkland. Diagnose smoky fireplaces, draft issues, and chimney odors with certified inspection and repair guidance.",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Troubleshooting",
  serviceType: "Chimney Problem Diagnosis",
  description:
    "Professional chimney troubleshooting for smoke, odor, and draft issues in Seattle and Eastside homes.",
  url: "https://www.themadhatterchimneysweep.com/troubleshooting-chimney",
  areaServed: ["Seattle", "Bellevue", "Kirkland", "Redmond", "Sammamish"],
  provider: {
    "@type": "LocalBusiness",
    name: "The Mad Hatter Chimney Sweep",
    telephone: "+1-206-274-6409",
    url: "https://www.themadhatterchimneysweep.com",
  },
}

const commonProblems = [
  {
    title: "Smoke Entering Living Space",
    detail: "Usually caused by draft imbalance, flue blockage, or appliance mismatch.",
  },
  {
    title: "Burning or Musty Chimney Odor",
    detail: "Often tied to creosote buildup, moisture intrusion, or negative air pressure.",
  },
  {
    title: "Difficult Fire Starts",
    detail: "May indicate cold flue, poor make-up air, or cap/liner restrictions.",
  },
]

export default function TroubleshootingChimneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Troubleshooting Chimney Problems in Seattle</h1>
            <p className="mb-8 text-xl text-slate-200">
              Get clear answers for smoky fireplaces, poor chimney draft, and persistent odors before they become
              expensive repairs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Chimney Diagnosis
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Most Common Chimney Symptoms</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {commonProblems.map((problem) => (
                <Card key={problem.title}>
                  <CardContent className="p-6">
                    <AlertTriangle className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Troubleshooting Process</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Search className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Inspection First</h3>
                  <p className="text-sm text-muted-foreground">
                    We evaluate the full chimney system, firebox, cap, and vent path to find root causes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Wind className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">Draft & Airflow Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    We identify pressure, height, and blockage issues affecting fireplace performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Clear Repair Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    You receive prioritized recommendations tied to safety, performance, and budget.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-4 text-3xl font-bold">Related Services and Seattle-Area Locations</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <Link href="/chimney-inspection" className="text-primary hover:underline">
                  Chimney Inspection
                </Link>{" "}
                for detailed diagnostics
              </li>
              <li>
                <Link href="/chimney-repair-seattle" className="text-primary hover:underline">
                  Chimney Repair
                </Link>{" "}
                for structural and venting fixes
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
