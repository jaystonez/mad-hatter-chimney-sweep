import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About The Mad Hatter Chimney Sweep | Real Local Business Since 2014",
  description: "Meet the real team behind The Mad Hatter Chimney Sweep. Licensed, insured, and locally owned - not a lead generation scam.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Real Local Business, Not a Lead Generation Scam
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              We're The Mad Hatter Chimney Sweep - an actual, verifiable, locally-owned business
              serving Seattle for over a decade. Not a UPS box. Not a hijacked address. Not a call center
              operating under 50 different fake names.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/verify-contractor">Verify Our Credentials →</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                <Link href="/#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Verifiable Credentials</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-green-900">WA State L&I Licensed</h3>
                  <p className="text-green-800 mb-4">
                    Fully bonded and insured<br/>
                    Professional credentials verified
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white bg-transparent">
                    <a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer">
                      Verify on L&I Website →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Real Shop Location</h3>
                  <p className="text-blue-800 mb-4">
                    <strong>Seattle, WA</strong><br/>
                    Physical location with actual staff<br/>
                    Not a mailbox. Visit us.
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white bg-transparent">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View on Google Maps →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-purple-900">Certified & Trained</h3>
                  <p className="text-purple-800">
                    CSIA Certified Chimney Sweep<br/>
                    Over 10 years experience<br/>
                    Ongoing professional training
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-orange-900">Local & Family Owned</h3>
                  <p className="text-orange-800">
                    Seattle resident since 2014<br/>
                    Professional team on staff<br/>
                    Active in the local community<br/>
                    No subcontractors on commission
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-100 border-slate-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Why Verification Matters</h3>
                <p className="mb-4">
                  The Seattle area has been infiltrated by fraudulent "chimney services" that operate without
                  licenses, use fake addresses (including UPS boxes and hijacked preschool locations),
                  and employ bait-and-switch pricing tactics.
                </p>
                <p className="mb-4">
                  <strong>We encourage you to verify every credential listed above.</strong> A legitimate contractor
                  will never be offended by due diligence - in fact, we insist on it.
                </p>
                <Button asChild>
                  <Link href="/verify-contractor">Learn How to Spot Scams →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>

            <div className="prose max-w-none">
              <div className="w-full rounded-lg mb-8 overflow-hidden shadow-lg bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold mb-2">The Mad Hatter Team</p>
                  <p className="text-slate-300">In front of our actual shop with company truck and signage</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                The Mad Hatter Chimney Sweep was founded in 2014 by our founder, a Seattle native
                who saw the need for honest, professional chimney services in the area. Unlike the
                corporate franchises and lead-generation scams that have flooded the market, we built
                our reputation the old-fashioned way: one satisfied customer at a time.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our founder started in the trade working for established local companies.
                After seeing too many homeowners getting ripped off by bait-and-switch pricing and
                unqualified technicians, they decided to open a company that would do things differently.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Our Values</h3>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Transparent Pricing</h4>
                    <p className="text-muted-foreground">
                      No bait-and-switch. We give you a written estimate before we start.
                      If we find additional issues, we discuss them with you first.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Real Local Presence</h4>
                    <p className="text-muted-foreground">
                      We have an actual shop you can visit. Our trucks are branded.
                      Our technicians are W-2 employees, not subcontractors on commission.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Licensed & Accountable</h4>
                    <p className="text-muted-foreground">
                      We maintain all required licenses and insurance. If something goes wrong,
                      we're here to make it right - not hiding behind a shell company.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-2">Community Focused</h4>
                    <p className="text-muted-foreground">
                      We live here. Our kids go to school here. Your neighbors are our neighbors.
                      Our reputation matters because this is our home too.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h3 className="font-bold text-xl mb-1">Owner</h3>
                  <p className="text-primary font-medium mb-2">Master Sweep</p>
                  <p className="text-sm text-muted-foreground">
                    CSIA Certified, 10+ years experience
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <span className="text-4xl">👨‍🔧</span>
                  </div>
                  <h3 className="font-bold text-xl mb-1">Lead Technician</h3>
                  <p className="text-primary font-medium mb-2">Professional Expert</p>
                  <p className="text-sm text-muted-foreground">
                    Certified, multiple years experience
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                  <h3 className="font-bold text-xl mb-1">Office Manager</h3>
                  <p className="text-primary font-medium mb-2">Customer Service</p>
                  <p className="text-sm text-muted-foreground">
                    Scheduling & Support
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-6">
                When you call The Mad Hatter, you get <strong>real people</strong> who work for <strong>one company</strong> -
                not a call center answering for 50 different fake businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with a Real Local Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              No bait-and-switch. No fake addresses. No high-pressure tactics.
              Just honest, professional chimney service from people you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <a href="tel:2062746409" className="text-2xl font-bold hover:text-primary transition-colors">
                  (206) 274-6409
                </a>
              </div>
              <span className="hidden sm:inline text-white/50">|</span>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
