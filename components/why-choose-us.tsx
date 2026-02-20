// @ts-nocheck
import { CheckCircle, Clock, Award, Heart, Shield, Star } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Fully trained and certified technicians who stay current with the latest industry standards and safety protocols.",
  },
  {
    icon: Clock,
    title: "Prompt & Reliable",
    description: "We respect your time. Count on us to arrive on schedule and complete work efficiently without cutting corners.",
  },
  {
    icon: Star,
    title: "Quality Workmanship",
    description: "We take pride in our work and stand behind it with comprehensive warranties and a satisfaction guarantee.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description: "Your safety and satisfaction are our top priorities. We treat every home as if it were our own.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind. We carry comprehensive liability coverage on every job.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. We provide detailed written estimates before any work begins.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Why Seattle Chooses Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Mad Hatter Difference
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Since 1979, we&apos;ve built our reputation on trust, quality, and exceptional service across Greater Seattle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl shadow-black/50">
            <Image
              src="/images/herringbone-victorian.jpg"
              alt="Expert chimney masonry work by Mad Hatter Chimney Sweep Seattle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { value: "2,500+", label: "Happy Customers" },
                { value: "45+", label: "Years Experience" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-stone-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
