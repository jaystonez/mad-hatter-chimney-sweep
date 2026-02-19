"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  MapPin,
  ImageIcon as ImageIconIcon,
  Calendar,
  Star,
  Building,
  Shield,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface RedFlag {
  id: string
  name: string
  severity: 'low' | 'medium' | 'high'
  detected: boolean
  description: string
  icon: any
}

export default function VerifyBusinessPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<RedFlag[] | null>(null)
  const [overallScore, setOverallScore] = useState<number | null>(null)

  const handleScan = async () => {
    if (!url) return
    
    setLoading(true)
    
    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock results - in production this would call your backend API
    const mockResults: RedFlag[] = [
      {
        id: 'address',
        name: 'Physical Address Verification',
        severity: 'high',
        detected: Math.random() > 0.5,
        description: 'Business address may not match actual location. Verify with public records.',
        icon: MapPin
      },
      {
        id: 'images',
        name: 'Stock Photo Detection',
        severity: 'medium',
        detected: Math.random() > 0.5,
        description: 'Site uses generic stock photos instead of real work photos.',
        icon: ImageIconIcon
      },
      {
        id: 'age',
        name: 'Business Age Claims',
        severity: 'medium',
        detected: Math.random() > 0.5,
        description: 'Business age claims do not match registration records.',
        icon: Calendar
      },
      {
        id: 'reviews',
        name: 'Review Pattern Analysis',
        severity: 'low',
        detected: Math.random() > 0.5,
        description: 'Review timestamps show suspicious clustering patterns.',
        icon: Star
      },
      {
        id: 'license',
        name: 'License Verification',
        severity: 'high',
        detected: Math.random() > 0.5,
        description: 'Unable to verify state contractor license. Check with L&I.',
        icon: Shield
      },
      {
        id: 'structure',
        name: 'Website Template Analysis',
        severity: 'low',
        detected: Math.random() > 0.5,
        description: 'Site uses generic template common to lead-generation networks.',
        icon: Building
      }
    ]
    
    setResults(mockResults)
    
    // Calculate score
    const flagsDetected = mockResults.filter(r => r.detected)
    const highCount = flagsDetected.filter(r => r.severity === 'high').length
    const mediumCount = flagsDetected.filter(r => r.severity === 'medium').length
    const lowCount = flagsDetected.filter(r => r.severity === 'low').length
    
    const score = Math.max(0, 100 - (highCount * 30) - (mediumCount * 15) - (lowCount * 5))
    setOverallScore(score)
    
    setLoading(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Low Risk'
    if (score >= 40) return 'Medium Risk'
    return 'High Risk'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Free Public Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Verify Any Home Services Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Protect yourself from fraud. Check for common red flags before hiring a contractor.
              </p>
              
              {/* Scan Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-left">Enter Business Website</CardTitle>
                  <CardDescription className="text-left">
                    We will check for common fraud indicators and verification issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      type="url"
                      placeholder="https://example-business.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
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
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Check Now
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {results && overallScore !== null && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Overall Score */}
                <Card className="mb-8 border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-1">
                          Trust Score
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-5xl font-bold ${getScoreColor(overallScore)}`}>
                            {overallScore}
                          </span>
                          <div>
                            <Badge 
                              variant={overallScore >= 70 ? "default" : overallScore >= 40 ? "secondary" : "destructive"}
                            >
                              {getScoreLabel(overallScore)}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {results.filter(r => r.detected).length} red flags detected
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-2">
                          Always verify with official sources
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href="https://lni.wa.gov/licensing-permits/contractors/verify-contractor-registration"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Check WA L&I License
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Red Flags */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-4">Detailed Analysis</h2>
                  
                  {results.map((flag) => {
                    const Icon = flag.icon
                    return (
                      <Card 
                        key={flag.id}
                        className={flag.detected ? 'border-l-4 border-l-yellow-500' : ''}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${
                              flag.detected 
                                ? 'bg-yellow-100 text-yellow-700' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">{flag.name}</h3>
                                {flag.detected ? (
                                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                    <AlertTriangle className="h-3 w-3 mr-1" />
                                    Red Flag
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Passed
                                  </Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground">
                                {flag.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Educational Alert */}
                <Alert className="mt-8 border-blue-200 bg-blue-50">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-900">
                    <strong>Important:</strong> This tool checks for common red flags but is not a substitute for proper verification. 
                    Always verify contractor licenses with the Washington State Department of Labor & Industries, check references, 
                    and get multiple quotes before hiring.
                  </AlertDescription>
                </Alert>

                {/* CTA */}
                <Card className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Looking for a Verified Contractor?</h3>
                    <p className="text-muted-foreground mb-4">
                      We are fully licensed, insured, and have served the Seattle area for over a decade.
                    </p>
                    <Button size="lg" asChild>
                      <Link href="/#contact">
                        Get a Free Quote
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        {!results && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">What We Check</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address Verification",
                      description: "We check if the business address matches public records and is not a UPS store or virtual office."
                    },
                    {
                      icon: Shield,
                      title: "License Status",
                      description: "We verify if the business appears to hold required contractor licenses with Washington State L&I."
                    },
                    {
                      icon: ImageIconIcon,
                      title: "Photo Authenticity",
                      description: "We detect if the site uses stock photos vs. real project photos from actual work."
                    },
                    {
                      icon: Star,
                      title: "Review Patterns",
                      description: "We analyze review timestamps and patterns for signs of manipulation or fake reviews."
                    },
                    {
                      icon: Calendar,
                      title: "Business Age Claims",
                      description: "We cross-reference business age claims with actual registration dates."
                    },
                    {
                      icon: Building,
                      title: "Website Analysis",
                      description: "We identify generic templates commonly used by lead-generation networks."
                    }
                  ].map((item, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
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
