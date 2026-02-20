// @ts-nocheck
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Ballard",
    rating: 5,
    text: "Absolutely fantastic service! They were professional, thorough, and explained everything they were doing. Our chimney has never worked better. Highly recommend!",
    initials: "SJ",
    color: "bg-amber-500",
  },
  {
    name: "Michael Chen",
    location: "Queen Anne",
    rating: 5,
    text: "After getting quotes from three companies, The Mad Hatter offered the best value and service. They arrived on time, did a meticulous job, and left no mess behind.",
    initials: "MC",
    color: "bg-stone-600",
  },
  {
    name: "Emily Rodriguez",
    location: "Capitol Hill",
    rating: 5,
    text: "We had an emergency chimney issue and they responded immediately. The team was knowledgeable, friendly, and fixed the problem quickly. True professionals!",
    initials: "ER",
    color: "bg-amber-700",
  },
  {
    name: "David Thompson",
    location: "Fremont",
    rating: 5,
    text: "I've been using their services for 5 years now. They're consistent, reliable, and always go above and beyond. Wouldn't trust anyone else with our chimney.",
    initials: "DT",
    color: "bg-stone-700",
  },
  {
    name: "Jennifer Martinez",
    location: "Kirkland",
    rating: 5,
    text: "The inspection was incredibly thorough. They found issues we didn't know existed and provided clear solutions. Their honesty and expertise are unmatched.",
    initials: "JM",
    color: "bg-amber-600",
  },
  {
    name: "Robert Williams",
    location: "Bothell",
    rating: 5,
    text: "Great experience from start to finish. Fair pricing, excellent communication, and top-notch workmanship. Our fireplace looks and works like new!",
    initials: "RW",
    color: "bg-stone-500",
  },
]

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
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers throughout Seattle have to say.
          </p>
          {/* Star rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-stone-900">5.0</span>
            <span className="text-stone-500">from 500+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 ${
                index === 0 ? "lg:col-span-1 ring-2 ring-amber-200" : ""
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {testimonial.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-stone-900 text-sm">{testimonial.name}</div>
                  <div className="text-stone-500 text-xs">{testimonial.location}</div>
                </div>
                <Quote className="w-6 h-6 text-amber-300 flex-shrink-0" />
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-stone-500 text-sm">
            See more reviews on{" "}
            <a href="#" className="text-amber-600 font-medium hover:underline">Google</a>
            {" "}and{" "}
            <a href="#" className="text-amber-600 font-medium hover:underline">Yelp</a>
          </p>
        </div>
      </div>
    </section>
  )
}
