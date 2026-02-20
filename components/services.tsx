// @ts-nocheck
import { Flame, Search, Wrench, Shield, Wind, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Flame,
    title: "Chimney Sweeping",
    description: "Thorough cleaning to remove creosote, soot, and blockages for safe, efficient operation.",
    href: "/services/chimney-inspection-sweeping",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: Search,
    title: "Chimney Inspections",
    description: "Comprehensive Level 1, 2, and 3 inspections to identify potential hazards and structural issues.",
    href: "/services/chimney-inspection-sweeping",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Wrench,
    title: "Chimney Repairs",
    description: "Expert masonry repairs, crown rebuilding, and flue liner replacement for long-lasting results.",
    href: "/services/chimney-repairs",
    color: "from-stone-500/20 to-stone-400/10",
  },
  {
    icon: Shield,
    title: "Chimney Caps & Covers",
    description: "Installation of quality caps to prevent water damage, animal intrusion, and debris buildup.",
    href: "/services/chimney-repairs",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Wind,
    title: "Dryer Vent Cleaning",
    description: "Remove lint buildup to improve efficiency and reduce fire hazards in your home.",
    href: "/services",
    color: "from-purple-500/20 to-violet-500/10",
  },
  {
    icon: Sparkles,
    title: "Fireplace Restoration",
    description: "Complete restoration services to bring your fireplace back to its original beauty.",
    href: "/services/stove-fireplace-installation",
    color: "from-rose-500/20 to-pink-500/10",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flame className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Complete Chimney &amp; Fireplace Services
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive solutions for all your chimney needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5`}>
                <service.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-1 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-stone-600 mb-4">Not sure what you need? We&apos;re happy to provide a free consultation.</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
