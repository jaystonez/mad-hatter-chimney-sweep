import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Mad Hatter Chimney Sweep",
  description: "Terms of Service for The Mad Hatter Chimney Sweep. Read our terms and conditions for chimney services in Seattle, WA.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the website of The Mad Hatter Chimney Sweep (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p>
              The Mad Hatter Chimney Sweep provides chimney sweeping, inspection, repair, relining, waterproofing, and related fireplace services throughout the Greater Seattle area. All services are subject to availability and scheduling.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Service estimates are provided free of charge and are non-binding until a written agreement is signed.</li>
              <li>Final pricing may vary based on the actual scope of work discovered during service.</li>
              <li>We will communicate any changes in scope or pricing before proceeding with additional work.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Scheduling & Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Appointments can be scheduled by phone at (206) 274-6409 or through our online contact form.</li>
              <li>We request at least 24 hours notice for cancellations or rescheduling.</li>
              <li>We will make every effort to arrive within the scheduled service window. In the event of delays, we will notify you as soon as possible.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Licensing & Insurance</h2>
            <p>
              The Mad Hatter Chimney Sweep is a licensed contractor in the State of Washington (License #MADHAHL790LW). We are fully bonded and insured. You may verify our license at the Washington State Department of Labor & Industries website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Warranties</h2>
            <p>
              We stand behind our workmanship. Specific warranty terms vary by service type and will be provided in writing at the time of service. Warranties do not cover damage caused by acts of nature, improper use, or failure to maintain the chimney system.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Mad Hatter Chimney Sweep shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Website Use</h2>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>The content on this website is for informational purposes only and does not constitute professional advice.</li>
              <li>We make reasonable efforts to keep information accurate but do not guarantee completeness or timeliness.</li>
              <li>The Fraud Check tool is provided as a public service and results are for informational purposes only.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of The Mad Hatter Chimney Sweep and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Washington. Any disputes shall be resolved in the courts of King County, Washington.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none pl-0 space-y-1 my-4">
              <li><strong>Phone:</strong> <a href="tel:+12062746409" className="text-primary hover:underline">(206) 274-6409</a></li>
              <li><strong>Email:</strong> <a href="mailto:services@themadhatterchimneysweep.com" className="text-primary hover:underline">services@themadhatterchimneysweep.com</a></li>
            </ul>

            <div className="mt-12 pt-8 border-t">
              <Link href="/" className="text-primary hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
