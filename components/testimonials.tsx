// @ts-nocheck
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessProfiles } from "@/lib/business-profiles"

const googleProfileUrl =
  businessProfiles.find((profile) => profile.name === "Google Business Profile")?.url ??
  "https://www.google.com/maps/place/Mad+Hatter+Chimney+Sweep"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-500" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-lg text-stone-600 mb-2">
            <span className="font-bold text-stone-900">4.6</span> from real Google reviews
          </p>
          <p className="text-stone-500 text-sm mb-8">
            We&apos;ve been serving Seattle &amp; Bellevue since 1979. Read what our customers say on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold"
              asChild
            >
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Our Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
