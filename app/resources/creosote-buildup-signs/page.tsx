import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signs of Creosote Buildup in Your Chimney | Mad Hatter Chimney Sweep",
  description:
    "Learn how to identify dangerous creosote buildup in your chimney. Understand the three stages of creosote, warning signs, and why professional removal is critical.",
  openGraph: {
    title: "Signs of Creosote Buildup in Your Chimney | Mad Hatter Chimney Sweep",
    description:
      "Learn how to identify dangerous creosote buildup and why professional removal is critical for chimney safety.",
    url: "https://www.themadhatterchimneysweep.com/resources/creosote-buildup-signs",
    type: "article",
  },
};

export default function CreosoteBuildupSignsPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/resources"
            className="text-black/70 hover:text-black text-sm font-medium mb-4 inline-block"
          >
            &larr; Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Signs of Creosote Buildup: What Every Homeowner Should Know
          </h1>
          <p className="text-black/80 text-lg">
            Creosote is the #1 cause of chimney fires. Learn to spot the warning
            signs before it becomes a hazard.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
        <p>
          Every time you burn wood, smoke carries unburned particles up the
          flue. As these gases cool, they condense on the chimney walls and form
          creosote &mdash; a dark, tar-like substance that is highly flammable.
          The Chimney Safety Institute of America (CSIA) identifies creosote
          buildup as the leading cause of chimney fires in the United States.
        </p>

        <h2>The Three Stages of Creosote</h2>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">Stage 1 &mdash; Flaky Soot</h3>
          <p>
            A light, powdery deposit that looks like dark dust. This is the
            easiest stage to remove and is typically handled during a routine
            chimney cleaning.
          </p>
          <p className="text-green-700 font-semibold">Risk Level: Low &mdash; Easily removed with standard brushing.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">Stage 2 &mdash; Crunchy or Shiny Flakes</h3>
          <p>
            A thicker, harder deposit with a tar-like appearance. It may look
            shiny or bubbly and crunches when scraped. Stage 2 creosote requires
            more aggressive cleaning methods like rotary loops or chemical
            treatments.
          </p>
          <p className="text-yellow-700 font-semibold">Risk Level: Moderate &mdash; Requires professional-grade tools.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">Stage 3 &mdash; Glazed Creosote</h3>
          <p>
            A dense, shiny coating that looks like hardened tar or glass. Glazed
            creosote is extremely difficult to remove and is the most dangerous
            form. It can ignite at temperatures as low as 451&deg;F, and once a
            chimney fire starts in glazed creosote, it burns intensely.
          </p>
          <p className="text-red-700 font-semibold">Risk Level: Severe &mdash; May require chemical treatment or liner replacement.</p>
        </div>

        <h2>Warning Signs You Have Excessive Creosote</h2>
        <ul>
          <li><strong>Thick, dark residue</strong> visible inside the firebox or on the damper</li>
          <li><strong>Strong, oily smell</strong> coming from the fireplace, especially in warm weather</li>
          <li><strong>Reduced draft</strong> &mdash; smoke enters the room instead of going up the chimney</li>
          <li><strong>Black flakes or debris</strong> falling into the firebox</li>
          <li><strong>A puffy, honeycomb-like texture</strong> on the chimney walls when inspected with a flashlight</li>
          <li><strong>Longer than 12 months</strong> since your last chimney cleaning</li>
        </ul>

        <h2>What Accelerates Creosote Buildup?</h2>
        <ul>
          <li>Burning unseasoned (wet) wood with moisture content above 20%</li>
          <li>Restricting airflow by closing the damper too much</li>
          <li>Smoldering, low-temperature fires that produce more smoke</li>
          <li>An oversized flue that allows gases to cool too quickly</li>
          <li>Cool exterior chimney walls (common with exterior chimneys)</li>
        </ul>

        <h2>How to Reduce Creosote Formation</h2>
        <ol>
          <li><strong>Burn only seasoned hardwood</strong> dried for at least 6&ndash;12 months</li>
          <li><strong>Maintain hot, bright fires</strong> rather than slow, smoldering ones</li>
          <li><strong>Ensure proper airflow</strong> by keeping the damper fully open</li>
          <li><strong>Schedule annual chimney cleanings</strong> to remove buildup before it advances</li>
          <li><strong>Install a stainless steel liner</strong> if your flue is oversized</li>
        </ol>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
          <h3 className="mt-0 text-red-800">Chimney Fire Warning Signs</h3>
          <p className="mb-0 text-red-900">
            If you hear a loud roaring or cracking sound from your chimney, see
            dense black smoke or flames shooting from the chimney top, or notice
            an intense hot smell, you may have a chimney fire. Leave the house
            immediately and call 911.
          </p>
        </div>
      </article>

            {/* Related Services */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Services</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/services/chimney-inspection-sweeping" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Chimney Inspection & Sweeping</h3>
              <p className="text-sm text-slate-600">Professional chimney inspection and cleaning services</p>
            </Link>
            <Link href="/services/chimney-repairs" className="block p-4 rounded-lg border hover:border-primary hover:shadow-md transition-all">
              <h3 className="font-bold text-primary mb-1">Chimney Repairs</h3>
              <p className="text-sm text-slate-600">Expert masonry and structural chimney repairs</p>
            </Link>
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Wait for a Chimney Fire
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Our CSIA-certified technicians will inspect your chimney for
            creosote buildup and remove it safely before it becomes a hazard.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition inline-block"
          >
            Book Your Chimney Cleaning &mdash; (206) 274-6409
          </Link>
        </div>
      </section>
    </main>
  );
}
