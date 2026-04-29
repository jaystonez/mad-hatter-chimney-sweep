// @ts-nocheck
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-500" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6 max-w-xl mx-auto text-center">
          {/* Real rating line */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 4 ? "text-amber-400 fill-amber-400" : "text-amber-400 fill-amber-100"}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-stone-900">4.6</span>
            <span className="text-stone-500 text-sm">from real Google reviews</span>
          </div>

          <p className="text-stone-600 text-lg">
            The Mad Hatter Chimney Sweep has served Greater Seattle since 1979. See what verified customers say directly on Google.
          </p>

          {/* TODO: real GBP review URL — replace href below with actual Google Business Profile link */}
          <a
            href="https://www.google.com/maps/place/mad-hatter-chimney-sweep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-amber-400 hover:bg-amber-50 text-stone-800 font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            aria-label="Read our verified reviews on Google"
          >
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            Read our verified reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
