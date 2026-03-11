import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Leaking Through Chimney? Causes & Solutions | Mad Hatter Chimney Sweep",
  description:
    "Water leaking through your chimney can cause serious structural damage. Learn the common causes of chimney leaks and how to stop them before costly repairs.",
  openGraph: {
    title: "Water Leaking Through Chimney? Causes & Solutions | Mad Hatter Chimney Sweep",
    description:
      "Water leaking through your chimney can cause serious structural damage. Learn the common causes and how to stop them.",
    url: "https://www.themadhatterchimneysweep.com/resources/water-leaking-through-chimney",
    type: "article",
  },
};

export default function WaterLeakingThroughChimneyPage() {
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
            Water Leaking Through Your Chimney? Here&apos;s What to Do
          </h1>
          <p className="text-black/80 text-lg">
            Chimney leaks are more than an annoyance &mdash; they can lead to
            mold, rot, and thousands in structural damage if left untreated.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
        <p>
          Seattle&apos;s rainy climate makes chimney leaks especially common. Water
          is the single greatest enemy of masonry chimneys, and even small leaks
          can escalate into major problems over time. Understanding where the
          water is getting in is the first step toward a lasting fix.
        </p>

        <h2>Common Causes of Chimney Leaks</h2>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">1. Damaged or Missing Chimney Cap</h3>
          <p>
            The chimney cap sits on top of your flue and keeps rain, snow, and
            debris from falling directly into the chimney. If the cap is
            missing, cracked, or rusted through, water pours straight down the
            flue and into your firebox.
          </p>
          <p className="font-semibold">Solution: Install a stainless steel chimney cap with a lifetime warranty.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">2. Cracked or Deteriorated Crown</h3>
          <p>
            The chimney crown is the cement slab that covers the top of the
            chimney around the flue. Cracks in the crown allow water to seep
            into the masonry below, where freeze-thaw cycles cause the cracks
            to widen over time.
          </p>
          <p className="font-semibold">Solution: Minor cracks can be sealed with a crown coat sealant. Severely damaged crowns need to be rebuilt.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">3. Failed Flashing</h3>
          <p>
            Flashing is the metal sheeting where the chimney meets the roof. If
            the flashing is improperly installed, corroded, or the sealant has
            dried out, water will run down the chimney and into the attic or
            ceiling below.
          </p>
          <p className="font-semibold">Solution: Have the flashing inspected and re-sealed or replaced by a qualified professional.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">4. Porous or Spalling Bricks</h3>
          <p>
            Bricks are naturally porous and absorb water. Over years of exposure
            to Seattle&apos;s rain, the moisture penetrates deeper into the
            masonry. When water freezes inside the brick, it expands and causes
            the face of the brick to pop off (spalling).
          </p>
          <p className="font-semibold">Solution: Apply a breathable waterproofing sealant to protect the masonry without trapping moisture inside.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">5. Deteriorated Mortar Joints</h3>
          <p>
            The mortar between bricks wears away over time due to weather
            exposure. Gaps in the mortar joints create direct pathways for water
            to enter the chimney structure.
          </p>
          <p className="font-semibold">Solution: Tuckpointing (grinding out old mortar and replacing it with fresh mortar) restores the waterproof barrier.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">6. Condensation Inside the Flue</h3>
          <p>
            Gas appliances produce significant moisture as a byproduct of
            combustion. Without a properly lined flue, this moisture condenses
            on the cold chimney walls and drips down, mimicking a leak.
          </p>
          <p className="font-semibold">Solution: Install an appropriately sized flue liner for your heating appliance.</p>
        </div>

        <h2>Signs of Chimney Water Damage</h2>
        <ul>
          <li>Water stains on the ceiling or walls near the chimney</li>
          <li>Damp or musty smell coming from the fireplace</li>
          <li>White staining (efflorescence) on the exterior bricks</li>
          <li>Rust on the damper or firebox</li>
          <li>Peeling wallpaper or bubbling paint near the chimney</li>
          <li>Crumbling mortar or spalling bricks on the exterior</li>
          <li>Water pooling in the firebox after rain</li>
        </ul>

        <h2>Why Quick Action Matters</h2>
        <p>
          Water damage is progressive. What starts as a small leak can
          lead to:
        </p>
        <ul>
          <li>Mold growth inside walls and the chimney structure</li>
          <li>Rotted wood framing around the chimney chase</li>
          <li>Collapsed flue liner tiles</li>
          <li>Structural deterioration requiring a full chimney rebuild</li>
        </ul>
        <p>
          A professional inspection can catch these issues early when repairs
          are still affordable.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
          <h3 className="mt-0 text-blue-800">Seattle Climate Tip</h3>
          <p className="mb-0 text-blue-900">
            With over 150 rainy days per year, Seattle chimneys take a beating.
            We recommend an annual waterproofing treatment and inspection before
            the fall rainy season begins.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop the Leak Before It Gets Worse
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Our technicians will find the source of your chimney leak and
            provide a lasting repair to protect your home.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition inline-block"
          >
            Schedule a Leak Inspection &mdash; (206) 274-6409
          </Link>
        </div>
      </section>
    </main>
  );
}
