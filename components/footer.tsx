import Link from "next/link"
import { Flame } from "lucide-react"
import { pricing } from "@/lib/pricing"
import { businessProfiles } from "@/lib/business-profiles"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">The Mad Hatter</span>
                <span className="text-xs text-slate-400 leading-tight">Chimney Sweep</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Professional chimney services since 1979. Serving Seattle, Bellevue, and Greater King County. Licensed, bonded &amp; insured — WA License MADHAHL790LW.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-200">Business Profiles</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {businessProfiles.map((profile) => (
                  <a
                    key={profile.url}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
            <address className="mt-4 not-italic text-sm text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">The Mad Hatter Chimney Sweep, LLC</p>
              <p>
                {pricing.businessLocation.locality}, {pricing.businessLocation.region} {pricing.businessLocation.postalCode}
              </p>
              <p>Service-area business (no public walk-in location)</p>
              <p>
                Phone:{' '}
                <a href={`tel:${pricing.phoneE164}`} className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  {pricing.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:services@themadhatterchimneysweep.com" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  services@themadhatterchimneysweep.com
                </a>
              </p>
              <p>WA Contractor License: {pricing.contractorLicense.number}</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chimney-inspection" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Sweeping
                </Link>
              </li>
              <li>
                <Link href="/chimney-repair-seattle" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Repairs
                </Link>
              </li>
              <li>
                <Link href="/chimney-liner-installation" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Relining
                </Link>
              </li>
              <li>
                <Link href="/chimney-waterproofing" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/fireplace-cleaning" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} The Mad Hatter Chimney Sweep. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
                          <Link href="/privacy-policy" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                Privacy Policy
                          </Link>
                          <Link href="/terms-of-service" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                Terms of Service
                          </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
