import Link from "next/link"
import { Facebook, Twitter, Instagram, Flame } from "lucide-react"

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
              Professional chimney services since 1979. Family-owned and locally operated throughout Greater Seattle. Licensed WA contractor #MADHAHL790LW.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Visit our X (Twitter) profile"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Visit our Instagram profile"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <a href="tel:+12062746409" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                (206) 274-6409
              </a>
                            <p className="text-slate-400 text-sm mt-2">WA License #: MADHAHL790LW</p>
            </div>
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
                <Link href="/#contact" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
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
                <Link href="/services/chimney-inspection-sweeping" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Sweeping
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-repairs" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/chimney-relining" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Chimney Relining
                </Link>
              </li>
              <li>
                <Link href="/services/waterproofing-leak-repair" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/services/stove-fireplace-installation" className="text-slate-300 underline underline-offset-4 hover:text-primary transition-colors">
                  Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sitewide Internal Links */}
        <div className="border-t border-slate-800 pt-8 pb-4 mb-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Core Services</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link href="/chimney-cleaning" className="text-slate-400 hover:text-primary transition-colors">Chimney Cleaning</Link>
                <Link href="/chimney-repair" className="text-slate-400 hover:text-primary transition-colors">Chimney Repair</Link>
                <Link href="/chimney-inspection" className="text-slate-400 hover:text-primary transition-colors">Chimney Inspection</Link>
                <Link href="/services/chimney-inspection-sweeping" className="text-slate-400 hover:text-primary transition-colors">Chimney Sweeping</Link>
                <Link href="/services/chimney-relining" className="text-slate-400 hover:text-primary transition-colors">Chimney Relining</Link>
                <Link href="/services/waterproofing-leak-repair" className="text-slate-400 hover:text-primary transition-colors">Waterproofing</Link>
                <Link href="/creosote-removal" className="text-slate-400 hover:text-primary transition-colors">Creosote Removal</Link>
                <Link href="/chimney-cap-installation" className="text-slate-400 hover:text-primary transition-colors">Cap Installation</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <Link href="/chimney-sweep-seattle" className="text-slate-400 hover:text-primary transition-colors">Seattle</Link>
                <Link href="/locations/bellevue" className="text-slate-400 hover:text-primary transition-colors">Bellevue</Link>
                <Link href="/chimney-sweep-kirkland" className="text-slate-400 hover:text-primary transition-colors">Kirkland</Link>
                <Link href="/chimney-sweep-redmond" className="text-slate-400 hover:text-primary transition-colors">Redmond</Link>
                <Link href="/chimney-sweep-bothell" className="text-slate-400 hover:text-primary transition-colors">Bothell</Link>
                <Link href="/chimney-sweep-kenmore" className="text-slate-400 hover:text-primary transition-colors">Kenmore</Link>
                <Link href="/chimney-sweep-woodinville" className="text-slate-400 hover:text-primary transition-colors">Woodinville</Link>
                <Link href="/chimney-sweep-shoreline" className="text-slate-400 hover:text-primary transition-colors">Shoreline</Link>
                <Link href="/chimney-sweep-renton" className="text-slate-400 hover:text-primary transition-colors">Renton</Link>
                <Link href="/chimney-sweep-sammamish" className="text-slate-400 hover:text-primary transition-colors">Sammamish</Link>
              </div>
            </div>
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
