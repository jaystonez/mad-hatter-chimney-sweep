import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2, Phone, ShieldCheck, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Spot Fake Chimney Sweep Companies in Seattle (2026 Guide) | Mad Hatter",
  description:
    "Learn how to identify fake chimney sweep companies in Seattle, verify WA contractor licensing, and avoid common chimney sweep scams with this 2026 consumer guide.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I verify a chimney sweep license in Washington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the Washington Labor & Industries Verify tool and search by contractor name or registration number. Confirm the registration is active and matches the business name and specialty.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Washington contractor license number look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Washington contractor registration commonly appears as letters plus numbers, such as MADHAHL790LW. You should verify any number directly in the official WA L&I database.",
      },
    },
    {
      "@type": "Question",
      name: "What are common chimney sweep scam warning signs in Seattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common red flags include no WA license number, unverifiable addresses, cloned city pages, suspicious review spikes, and pressure to approve expensive repairs immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Can I report an unlicensed chimney sweep in Seattle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can report unlicensed contractor activity to Washington Labor & Industries and report misleading local listings to Google Business Profile support.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if a chimney company asks for thousands of dollars today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do not withdraw cash or approve major work under pressure. Ask for photos, a written scope, license number, and time for a second opinion. Report suspected fraud to WA L&I, the Washington Attorney General, and the FTC.",
      },
    },
    {
      "@type": "Question",
      name: "What should a legitimate chimney sweep business show online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legitimate companies usually show active licensing, a verifiable address, consistent contact details, genuine customer photos and reviews, and a documented local service history.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.themadhatterchimneysweep.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.themadhatterchimneysweep.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Spot Fake Chimney Sweep Companies in Seattle",
      item: "https://www.themadhatterchimneysweep.com/blog/fake-chimney-sweep-companies-seattle",
    },
  ],
}

export default function FakeChimneySweepCompaniesSeattlePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wide">Consumer Protection Guide · 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            How to Spot Fake Chimney Sweep Companies in Seattle
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A practical guide to avoid chimney sweep scam Seattle tactics, verify licensing, and confidently hire a
            legitimate local contractor.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-slate-700 leading-relaxed">
              Some sites ranking for &ldquo;chimney sweep Seattle&rdquo; appear local but provide little proof of a
              Washington contractor registration. In many cases, addresses are hard to verify, city pages are cloned
              across the country, and consumers cannot confirm who is actually doing the work.
            </p>
          </section>

          <section className="rounded-lg border border-red-200 bg-red-50 p-6">
            <h2 className="text-3xl font-bold mb-4">If a Technician Demands Thousands Today</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pause before you pay. A legitimate chimney emergency should come with photos, a written scope, the
              contractor license number, and time to get a second opinion unless there is an immediate life-safety issue.
              Do not withdraw cash from the bank because someone pressured you at the door.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li>Ask for photo evidence and a written estimate before approving major repairs.</li>
              <li>Verify the business name and license number with Washington L&amp;I.</li>
              <li>Call a known local company for a second opinion before signing.</li>
              <li>If you feel threatened or believe fraud is happening, contact local authorities and report it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Red Flags to Watch For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "No WA license number listed anywhere on the website",
                "No verifiable physical address in the Seattle area",
                "Near-identical city pages targeting dozens of states",
                "No Better Business Bureau profile or history",
                "Suspicious review patterns with abrupt spikes",
                "High-pressure sales tactics or same-day repair urgency",
                "Requests for large same-day deposits or cash withdrawals",
              ].map((flag) => (
                <Card key={flag}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700">{flag}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How to Verify a Chimney Sweep in Washington</h2>
            <ol className="space-y-4 list-decimal pl-6 text-slate-700">
              <li>
                Open the WA L&amp;I verify portal:{" "}
                <a
                  href="https://secure.lni.wa.gov/verify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  secure.lni.wa.gov/verify <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li>Search by contractor name or registration number.</li>
              <li>Confirm status is active and business details match what you were told.</li>
              <li>
                Check the registration format. A valid number often looks like <strong>MADHAHL790LW</strong> (letters
                plus numbers).
              </li>
              <li>Compare address, phone number, and business name consistency across public listings.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/verify-business" className="text-primary hover:underline font-medium">
                Review business signals with our verification checklist
              </Link>
              <span className="text-slate-400">•</span>
              <Link href="/verify-contractor" className="text-primary hover:underline font-medium">
                Learn contractor verification steps
              </Link>
              <span className="text-slate-400">•</span>
              <Link href="/fraud-check" className="text-primary hover:underline font-medium">
                Use the fraud-check tool
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">What a Legitimate Chimney Sweep Looks Like</h2>
            <div className="space-y-3">
              {[
                "Licensed, bonded, and insured with active WA registration",
                "Verifiable local address and consistent NAP (name, address, phone)",
                "Real customer reviews, including photos and detailed feedback",
                "Documented local history with years of service records",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Report Fraud</h2>
            <p className="text-slate-700 leading-relaxed">
              If you suspect an unlicensed chimney sweep Seattle operation, report contractor violations through
              Washington L&amp;I and report deceptive local listings through Google Business Profile support channels.
              Reporting helps protect other homeowners.
            </p>
          </section>
        </div>
      </article>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="h-10 w-10 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Need a Verified Local Chimney Sweep?</h2>
          <p className="text-xl mb-8 opacity-100">
            Mad Hatter Chimney Sweep has served Seattle since 1979 with licensed, documented service.
          </p>
          <a
            href="tel:+12062746409"
            className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call (206) 274-6409
          </a>
        </div>
      </section>
    </main>
  )
}
