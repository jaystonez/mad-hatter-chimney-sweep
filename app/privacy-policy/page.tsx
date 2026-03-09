import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Mad Hatter Chimney Sweep",
  description: "Privacy Policy for The Mad Hatter Chimney Sweep. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>When you use our website or request services, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and home address provided through our contact form or when scheduling service.</li>
              <li><strong>Service Information:</strong> Details about your chimney or fireplace issue, photos you upload, and service history.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent, collected through standard analytics tools.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Respond to your service inquiries and schedule appointments</li>
              <li>Provide chimney sweep, inspection, and repair services</li>
              <li>Communicate with you about your service appointments</li>
              <li>Improve our website and services</li>
              <li>Send follow-up communications about completed work</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>With service providers who assist in operating our website or conducting our business, under confidentiality agreements</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
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
