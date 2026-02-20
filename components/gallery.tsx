import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  {
    category: "Chimney Cap Installation",
    before: {
      src: "/images/before-no-cap.jpg",
      alt: "Before: Chimney without protective cap"
    },
    after: {
      src: "/images/after-cap-installed.jpg",
      alt: "After: Professional chimney cap installed"
    }
  },
  {
    category: "Crown Repair",
    before: {
      src: "/images/before-crumbling-crown.jpg",
      alt: "Before: Crumbling chimney crown with damage"
    },
    after: {
      src: "/images/after-new-crown.jpg",
      alt: "After: New chimney crown professionally rebuilt"
    }
  },
  {
    category: "Chimney Cleaning & Restoration",
    before: {
      src: "/images/before-mossy-chimney.jpg",
      alt: "Before: Mossy and weathered chimney exterior"
    },
    after: {
      src: "/images/after-new-caps.jpg",
      alt: "After: Clean, restored chimney with new protective caps"
    }
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            See the dramatic transformations we've made to chimneys throughout the Seattle area.
            From damage repair to protective installations, we deliver exceptional results.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="space-y-4">
                  {/* Before */}
                  <div className="relative overflow-hidden bg-muted h-48">
                    <img
                      src={item.before.src}
                      alt={item.before.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
                      Before
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden bg-muted h-48">
                    <img
                      src={item.after.src}
                      alt={item.after.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded">
                      After
                    </span>
                  </div>

                  {/* Category */}
                  <div className="px-6 pb-6">
                    <h3 className="text-lg font-semibold text-foreground">{item.category}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Showcase Images */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Project Showcase
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/herringbone-victorian.jpg"
                alt="Stunning herringbone brick pattern on Victorian chimney"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Victorian Masonry</h4>
                <p className="text-sm text-muted-foreground">Herringbone brick restoration</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/exterior-chimney-sunny.jpg"
                alt="Full height exterior chimney in excellent condition"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Exterior Chimney</h4>
                <p className="text-sm text-muted-foreground">Full height restoration</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/white-brick-rebuild.jpg"
                alt="Complete chimney rebuild with white brick"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Brick Rebuild</h4>
                <p className="text-sm text-muted-foreground">Complete reconstruction</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/warm-brick-flashing.jpg"
                alt="Professional flashing installation on brick chimney"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Flashing Repair</h4>
                <p className="text-sm text-muted-foreground">Waterproofing installation</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/brick-chimney-trees.jpg"
                alt="Beautiful brick chimney among mature trees"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Tree Removal Service</h4>
                <p className="text-sm text-muted-foreground">Clearance & cap installation</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/waterproofed-chimney.jpg"
                alt="Professionally waterproofed chimney with protective coating"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-foreground">Waterproofing</h4>
                <p className="text-sm text-muted-foreground">Protective sealant application</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see your chimney transformed? Schedule a free inspection today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold text-lg hover:underline"
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  )
}
