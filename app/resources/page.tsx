import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, DollarSign, Wind, Droplet, Flame, AlertTriangle, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Resources & Guides | Mad Hatter Chimney Sweep",
  description: "Expert chimney care guides for Seattle homeowners. Learn about chimney sweep costs, common chimney problems, maintenance tips, and when to call a professional.",
}

const articles = [
  {
    title: "How Much Does a Chimney Sweep Cost in Seattle?",
    slug: "chimney-sweep-cost",
    icon: DollarSign,
    description: "A transparent breakdown of chimney sweep pricing in the Seattle area, what affects cost, and how to avoid overpaying or underpaying for service.",
    category: "Pricing Guide",
  },
  {
    title: "Why Does My Chimney Smell Smoky?",
    slug: "chimney-smells-smoky",
    icon: Wind,
    description: "Persistent chimney odors can signal draft problems, creosote buildup, or moisture issues. Learn the common causes and how to fix them.",
    category: "Troubleshooting",
  },
  {
    title: "White Stuff on Your Chimney? What Efflorescence Means",
    slug: "white-stuff-on-chimney",
    icon: Search,
    description: "Those white stains on your chimney bricks are called efflorescence. Find out what causes it, whether it's dangerous, and what to do about it.",
    category: "Troubleshooting",
  },
  {
    title: "Fireplace Not Drawing? Causes & Solutions",
    slug: "fireplace-not-drawing",
    icon: Flame,
    description: "Smoke filling your living room instead of going up the chimney? Here are the most common reasons your fireplace won't draw and how to fix each one.",
    category: "Troubleshooting",
  },
  {
    title: "Signs of Creosote Buildup & Why It's Dangerous",
    slug: "creosote-buildup-signs",
    icon: AlertTriangle,
    description: "Creosote is the leading cause of chimney fires. Learn how to spot the warning signs and understand the three stages of creosote accumulation.",
    category: "Safety",
  },
  {
    title: "Water Leaking Through Your Chimney: Causes & Fixes",
    slug: "water-leaking-through-chimney",
    icon: Droplet,
    description: "Chimney leaks can cause thousands in hidden damage. Identify where the water is getting in and what repairs are needed to stop it.",
    category: "Troubleshooting",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium">Homeowner Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Chimney Care Guides & Resources
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Expert guides to help Seattle homeowners understand their chimney systems, recognize warning signs, and make informed decisions about maintenance and repairs.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} href={`/resources/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{article.category}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <article.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{article.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Chimney Question?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our master certified technicians are happy to help. Call us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors">
              Get Free Estimate
            </Link>
            <a href="tel:+12062746409" className="inline-flex items-center justify-center rounded-md border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-primary transition-colors">
              Call (206) 274-6409
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
