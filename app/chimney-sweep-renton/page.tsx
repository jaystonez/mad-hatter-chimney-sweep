import { Phone, CheckCircle, Shield, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Chimney Sweep Renton | Professional Chimney Cleaning & Inspection',
  description: 'Professional chimney sweep services in Renton, WA. Certified cleaning, inspection, and repair. Call for same-day service.',
}

export default function ChimneySweepRentonPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Chimney Sweep Services in Renton, WA
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional chimney cleaning, inspection, and repair services for Renton homeowners. Licensed, insured, and trusted since 2014.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2062746409" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Call (206) 274-6409
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
              <Calendar className="w-5 h-5" />
              Schedule Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Renton Chimney Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Chimney Sweeping", desc: "Thorough cleaning and creosote removal for safe operation." },
              { title: "Chimney Inspection", desc: "Level 1, 2, and 3 inspections by certified professionals." },
              { title: "Chimney Repair", desc: "Expert masonry, crown, and liner repairs built to last." },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-xl shadow-sm border text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Renton Homeowners Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-primary" />
              <span className="font-medium">Same-Day Service</span>
            </div>
          </div>
          <div className="mt-12">
            <a href="tel:2062746409" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Call (206) 274-6409
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
