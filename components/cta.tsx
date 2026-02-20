"use client"

import React, { useState } from "react"
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react"

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Fill out the form or give us a call. We respond promptly and offer free inspections throughout Greater Seattle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide font-medium">Call Us</div>
                  <a href="tel:+12062746409" className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                    (206) 274-6409
                  </a>
                </div>
              </div>
              <p className="text-stone-400 text-sm pl-14">Available for emergency calls</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide font-medium">Email Us</div>
                  <a href="mailto:services@themadhatterchimneysweep.com" className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    services@themadhatterchimneysweep.com
                  </a>
                </div>
              </div>
              <p className="text-stone-400 text-sm pl-14">We respond within 24 hours</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-wide font-medium">Business Hours</div>
              </div>
              <div className="pl-14 space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-stone-400">Mon - Fri</span><span className="text-white font-medium">8am - 6pm</span></div>
                <div className="flex justify-between"><span className="text-stone-400">Saturday</span><span className="text-white font-medium">9am - 4pm</span></div>
                <div className="flex justify-between"><span className="text-stone-400">Sunday</span><span className="text-stone-500">Closed</span></div>
              </div>
            </div>

            <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide font-medium">Service Area</div>
                  <div className="text-white font-semibold">King &amp; Snohomish Counties</div>
                  <div className="text-stone-400 text-sm">and surrounding areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-stone-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-stone-400 text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-sm font-medium mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="(206) 555-0100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-400 text-sm font-medium mb-1.5">Tell Us About Your Needs</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Describe your chimney issue or service needed..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/25"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                <p className="text-stone-500 text-xs text-center">We&apos;ll respond within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
