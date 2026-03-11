import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fireplace Not Drawing? Causes & Fixes | Mad Hatter Chimney Sweep",
  description:
    "Fireplace not drawing properly? Learn why smoke comes into your home instead of going up the chimney and how to fix draft problems. Seattle chimney experts.",
  openGraph: {
    title: "Fireplace Not Drawing? Causes & Fixes | Mad Hatter Chimney Sweep",
    description:
      "Fireplace not drawing properly? Learn why smoke comes into your home instead of going up the chimney and how to fix draft problems.",
    url: "https://www.themadhatterchimneysweep.com/resources/fireplace-not-drawing",
    type: "article",
  },
};

export default function FireplaceNotDrawingPage() {
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
            Fireplace Not Drawing? Here&apos;s Why Smoke Fills Your Room
          </h1>
          <p className="text-black/80 text-lg">
            A step-by-step guide to diagnosing and fixing poor chimney draft so
            you can enjoy your fireplace without the smoke.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
        <p>
          You light a fire, and instead of smoke rising up the flue, it pours
          into your living room. A fireplace that won&apos;t draw is one of the
          most common complaints we hear from Seattle-area homeowners,
          especially during the first cold snap of the season.
        </p>

        <h2>What Does &ldquo;Drawing&rdquo; Mean?</h2>
        <p>
          Draft (or draw) is the natural movement of air up your chimney caused
          by the difference in temperature between the hot flue gases and the
          cooler outside air. When this process fails, smoke has nowhere to go
          but back into your home.
        </p>

        <h2>Top Causes of Poor Chimney Draft</h2>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">1. Cold Flue Syndrome</h3>
          <p>
            If your chimney is on an exterior wall or hasn&apos;t been used in a
            while, the air inside the flue is cold and heavy. Cold air sinks,
            creating a reverse draft that pushes smoke into the room.
          </p>
          <p className="font-semibold">Fix: Prime the flue by holding a lit newspaper or torch near the damper for 1-2 minutes before lighting your fire.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">2. Closed or Partially Closed Damper</h3>
          <p>
            It sounds obvious, but a surprising number of smoke-back calls we
            respond to are caused by a damper that wasn&apos;t fully opened.
          </p>
          <p className="font-semibold">Fix: Verify the damper is completely open before lighting any fire.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">3. Blockage in the Flue</h3>
          <p>
            Bird nests, leaves, excessive creosote buildup, or even a collapsed
            liner can partially or fully block airflow. If the chimney
            hasn&apos;t been cleaned in over a year, this is a likely culprit.
          </p>
          <p className="font-semibold">Fix: Schedule a professional chimney inspection and cleaning.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">4. Negative Air Pressure in the Home</h3>
          <p>
            Modern homes are tightly sealed for energy efficiency. Exhaust fans,
            dryers, and HVAC systems can create negative pressure that pulls air
            down through the chimney instead of letting it rise.
          </p>
          <p className="font-semibold">Fix: Crack a window near the fireplace to provide makeup air, or install a dedicated combustion air supply.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">5. Improper Chimney Height or Cap Issues</h3>
          <p>
            Your chimney must extend at least 3 feet above the roofline and 2
            feet higher than anything within 10 feet. A chimney that&apos;s too
            short or missing a proper cap can suffer from wind-induced
            downdrafts.
          </p>
          <p className="font-semibold">Fix: A chimney professional can assess whether your chimney meets code and install a wind-resistant cap.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 my-8">
          <h3 className="mt-0">6. Oversized Flue for the Firebox</h3>
          <p>
            If the flue is too large relative to the fireplace opening, the
            gases cool too quickly and lose the buoyancy needed to rise. This is
            common in older homes.
          </p>
          <p className="font-semibold">Fix: A stainless steel liner can be installed to match the flue size to your firebox.</p>
        </div>

        <h2>When to Call a Professional</h2>
        <p>Contact a certified chimney sweep if:</p>
        <ul>
          <li>Smoke enters the room every time you light a fire</li>
          <li>You notice a strong odor even when the fireplace isn&apos;t in use</li>
          <li>The chimney hasn&apos;t been inspected in over a year</li>
          <li>You see visible debris or hear animals in the flue</li>
          <li>Simple fixes like priming the flue don&apos;t resolve the issue</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl my-8">
          <h3 className="mt-0 text-yellow-800">Safety Warning</h3>
          <p className="mb-0 text-yellow-900">
            Never continue using a fireplace that consistently smokes back into
            the room. Smoke contains carbon monoxide and other dangerous gases.
            If the problem persists, stop using the fireplace and call a
            professional.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tired of a Smoky Living Room?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Our CSIA-certified technicians will diagnose your draft problem and
            get your fireplace drawing properly again.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 transition inline-block"
          >
            Schedule Your Inspection &mdash; (206) 274-6409
          </Link>
        </div>
      </section>
    </main>
  );
}
