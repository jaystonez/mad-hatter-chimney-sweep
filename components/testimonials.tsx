// @ts-nocheck
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-500" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Read verified reviews from real customers on Google and Yelp.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-stone-600 text-lg max-w-2xl text-center">
            The Mad Hatter Chimney Sweep has been serving Greater Seattle since 1979. We&apos;re proud of our reputation, built on honest work and transparent pricing. Read what our customers have to say on Google and Yelp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* TODO: Replace with real Google Business Profile URL when available */}
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex items-center gap-2 bg-white border-2 border-stone-200 text-stone-400 font-semibold px-6 py-3 rounded-xl shadow-sm cursor-not-allowed opacity-60"
              title="Google review link coming soon"
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              Read Reviews on Google
            </button>
            {/* TODO: Replace with real Yelp Business Profile URL when available */}
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex items-center gap-2 bg-white border-2 border-stone-200 text-stone-400 font-semibold px-6 py-3 rounded-xl shadow-sm cursor-not-allowed opacity-60"
              title="Yelp review link coming soon"
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              Read Reviews on Yelp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
