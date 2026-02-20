"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Search, AlertTriangle, CheckCircle2, MapPin, Calendar, Star, Building, Shield, ExternalLink, Code, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { scanURL, isLiveMode } from "@/lib/srrp-api"

const REFLEX_META = {
  obfuscated_javascript: {
    label: "JavaScript Obfuscation",
    icon: Code,
    severity: "high",
    description: "Site code is heavily scrambled — a common technique used by lead-gen networks to hide tracking and redirect chains from security tools."
  },
  schema_cloaking: {
    label: "Schema / Review Cloaking",
    icon: Shield,
    severity: "high",
    description: "Structured data shown to search engines differs from what real users see. May include fake review counts or inflated ratings."
  },
  review_date_spoofing: {
    label: "Review Date Manipulation",
    icon: Star,
    severity: "medium",
    description: "Review timestamps show suspicious patterns consistent with backdating or bulk-posting fake reviews."
  },
  hidden_dom_seo: {
    label: "Hidden DOM SEO Content",
    icon: Building,
    severity: "medium",
    description: "Invisible keyword-stuffed text is present in the page code but hidden from human visitors — a banned search manipulation tactic."
  },
  filename_spoofing: {
    label: "Image Filename Spoofing",
    icon: Calendar,
    severity: "medium",
    description: "Image filenames use location keywords unrelated to the actual photo content, designed to manipulate image search rankings."
  },
  image_reuse: {
    label: "Stolen / Reused Photos",
    icon: MapPin,
    severity: "medium",
    description: "Photos appear to be reused across multiple unrelated business listings, suggesting stolen project photos."
  },
  cloaked_location: {
    label: "Location Pin Fraud",
    icon: MapPin,
    severity: "high",
    description: "Address appears to match a residential home, UPS Store, virtual office, or an unrelated business such as a school or daycare."
  },
  business_hours: {
    label: "Business Hours Verification",
    icon: Clock,
    severity: "low",
    description: "No verifiable business hours found on the site or associated profiles."
  },
}

export default function VerifyBusinessPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const liveMode = isLiveMode()

  const handleScan = async () => {
    if (!url) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const data = await scanURL(url)
      setResult(data)
    } catch (e) {
      setError("Scan failed. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const getScoreColor = (score) => {
    if (score <= 30) return "text-green-600"
    if (score <= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getThreatBadgeVariant = (level) => {
    if (level === "Clean" || level === "Low") return "default"
    if (level === "Medium") return "secondary"
    return "destructive"
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Free Public Service{!liveMode && " — Demo Mode"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Verify Any Home Services Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Protect yourself from fraud. Check for common red flags before hiring a contractor.
              </p>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-left">Enter Business Website</CardTitle>
                  <CardDescription className="text-left">
                    We check for fraud indicators including obfuscated code, fake reviews, location fraud, and stolen photos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://example-business.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleScan()}
                      className="flex-1"
                      disabled={loading}
                    />
                    <Button
                      onClick={handleScan}
                      disabled={!url || loading}
                      size="lg"
                      className="min-w-32"
                    >
                      {loading ? (
                        <>Scanning...</>
                      ) : (
                        <><Search className="mr-2 h-4 w-4" />Check Now</>
                      )}
                    </Button>
                  </div>
                  {error && (
                    <Alert className="mt-4 border-red-200 bg-red-50">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-900">{error}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {result && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-8 border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Threat Score</h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
                            {result.score}
                          </span>
                          <div>
                            <Badge variant={getThreatBadgeVariant(result.threat_level)}>
                              {result.threat_level} Risk
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {result.patterns_found} pattern{result.patterns_found !== 1 ? "s" : ""} detected
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Lower score = cleaner site</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-2">Always verify with official sources</p>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://lni.wa.gov/licensing-permits/contractors/verify-contractor-registration"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check WA L&I License <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Detailed Analysis</h2>
                  {Object.entries(result.reflex_results).map(([key, val]) => {
                    const meta = REFLEX_META[key]
                    if (!meta) return null
                    const Icon = meta.icon
                    const flagged = val.score > 30
                    return (
                      <Card
                        key={key}
                        className={flagged ? "border-l-4 border-l-yellow-500" : ""}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${flagged ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                <h3 className="font-semibold text-lg">{meta.label}</h3>
                                {flagged ? (
                                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                    <AlertTriangle className="h-3 w-3 mr-1" /> Red Flag ({val.score})
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Clean
                                  </Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm">{meta.description}</p>
                              {val.details && (
                                <p className="text-xs text-muted-foreground mt-1 italic">{val.details}</p>
                              )}
                              <p className="text-xs text-muted-foreground mt-1">
                                Status: <span className="font-medium">{val.status}</span>
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                <Alert className="mt-8 border-blue-200 bg-blue-50">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-900">
                    <strong>Important:</strong> This tool checks for common technical red flags but is not a substitute for proper verification.
                    Always verify contractor licenses with the Washington State Department of Labor &amp; Industries, check references,
                    and get multiple quotes before hiring.
                  </AlertDescription>
                </Alert>

                <Card className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Looking for a Verified Contractor?</h3>
                    <p className="text-muted-foreground mb-4">
                      Mad Hatter Chimney Sweep is fully licensed, insured, and has served the Seattle area since 1979.
                    </p>
                    <Button size="lg" asChild>
                      <Link href="/#contact">Get a Free Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {!result && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">What We Check</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(REFLEX_META).map(([key, meta]) => (
                    <Card key={key}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <meta.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{meta.label}</h3>
                            <p className="text-sm text-muted-foreground">{meta.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
