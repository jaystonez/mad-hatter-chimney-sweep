import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Chimney Sweep Service Locations in Greater Seattle, WA | Mad Hatter Chimney Sweep",
  description: "Mad Hatter Chimney Sweep serves Greater Seattle and surrounding communities. Licensed & insured since 1979. Find your location and call (206) 274-6409 for a free estimate.",
}

export default function LocationsPage() {
  const locations = [
    {
      name: "Seattle",
      slug: "seattle",
      description: "Professional chimney services in Seattle and surrounding neighborhoods",
      neighborhoods: ["Capitol Hill", "Queen Anne", "Ballard", "Fremont", "Green Lake"]
    },
    {
      name: "Bellevue",
      slug: "bellevue",
      description: "Expert chimney sweep and repair services in Bellevue",
      neighborhoods: ["Downtown Bellevue", "Crossroads", "Factoria", "Wilburton", "Bridle Trails"]
    },
    {
      name: "Redmond",
      slug: "redmond",
      description: "Trusted chimney inspection and maintenance in Redmond",
      neighborhoods: ["Downtown Redmond", "Overlake", "Education Hill", "Grass Lawn", "Sammamish Valley"]
    },
    {
      name: "Kirkland",
      slug: "kirkland",
      description: "Quality chimney services throughout Kirkland",
      neighborhoods: ["Downtown Kirkland", "Juanita", "Totem Lake", "Finn Hill", "Houghton"]
    },
    {
      name: "Issaquah",
      slug: "issaquah",
      description: "Reliable chimney sweep and repair in Issaquah",
      neighborhoods: ["Olde Town", "Issaquah Highlands", "Talus", "Providence Point", "Grand Ridge"]
    },
    {
      name: "Sammamish",
      slug: "sammamish",
      description: "Professional chimney care for Sammamish residents",
      neighborhoods: ["Pine Lake", "Beaver Lake", "Sahalee", "Klahanie", "Trossachs"]
    },
    {
      name: "Shoreline",
      slug: "shoreline",
      description: "Comprehensive chimney services in Shoreline",
      neighborhoods: ["Richmond Beach", "Ridgecrest", "Parkwood", "Echo Lake", "North City"]
    },
    {
      name: "Burien",
      slug: "burien",
      description: "Dependable chimney sweeping and repairs in Burien",
      neighborhoods: ["Gregory Heights", "Boulevard Park", "Seahurst", "Town Square", "Lake Burien"]
    },
        {
      name: "Bothell",
      slug: "bothell",
      description: "Professional chimney sweep and fireplace services in Bothell and Snohomish County",
      neighborhoods: ["Downtown Bothell", "Canyon Park", "North Creek", "Mill Creek", "Maltby"]
    },
        {
      name: "Everett",
      slug: "everett",
      description: "Professional chimney sweep and fireplace services in Everett",
      neighborhoods: ["Bayside", "Boulevard Bluffs", "Port Gardner", "Lowell", "Silver Lake"]
    },
    {
      name: "Mukilteo",
      slug: "mukilteo",
      description: "Expert chimney sweep and fireplace services in Mukilteo",
      neighborhoods: ["Old Town Mukilteo", "Harbour Pointe", "Chennault", "Paine Field", "Japanese Gulch"]
    },
    {
      name: "Marysville",
      slug: "marysville",
      description: "Trusted chimney sweep and repair services in Marysville",
      neighborhoods: ["Downtown Marysville", "Smokey Point", "Lakewood", "Sunnyside", "Cedarcrest"]
    },
    {
      name: "Lake Stevens",
      slug: "lake-stevens",
      description: "Professional chimney cleaning and inspection in Lake Stevens",
      neighborhoods: ["Downtown Lake Stevens", "North Lake Stevens", "Frontier Heights", "Hartford", "Cavalero"]
    },
    {
      name: "Snohomish",
      slug: "snohomish",
      description: "Reliable chimney sweep services in the City of Snohomish",
      neighborhoods: ["Historic Downtown Snohomish", "Pilchuck", "Bickford", "Snohomish Hill", "Riverview"]
    },
    {
      name: "Lynnwood",
      slug: "lynnwood",
      description: "Professional chimney sweep and fireplace services in Lynnwood",
      neighborhoods: ["Alderwood Manor", "Martha Lake", "Meadowdale", "Larch Way", "North Lynnwood"]
    },
    {
      name: "Edmonds",
      slug: "edmonds",
      description: "Expert chimney sweep and maintenance services in Edmonds",
      neighborhoods: ["Downtown Edmonds", "Bowl", "Westgate", "Perrinville", "Esperance"]
    },
    {
      name: "Mountlake Terrace",
      slug: "mountlake-terrace",
      description: "Reliable chimney sweep services in Mountlake Terrace",
      neighborhoods: ["Town Center", "Ballinger", "Gateway", "Melody Hill", "Evergreen"]
    },
    {
      name: "Arlington",
      slug: "arlington",
      description: "Trusted chimney sweep and repair services in Arlington",
      neighborhoods: ["Downtown Arlington", "Smokey Point", "Lakewood", "Trafton", "Jim Creek"]
    }
  ]

  return (
    <>
      
      
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Service Areas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Providing professional chimney services throughout the Greater Seattle area. We're proud to serve homeowners in King County, Snohomish County, and beyond.
              </p>
              <Button size="lg" asChild>
                <Link href="/#contact">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{location.name}</CardTitle>
                    <CardDescription>{location.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-muted-foreground">Areas We Serve:</p>
                      <ul className="space-y-1">
                        {location.neighborhoods.map((neighborhood) => (
                          <li key={neighborhood} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {neighborhood}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href={`/locations/${location.slug}`}>View Services in {location.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Area Info */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Serving King County & Snohomish County
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're proud to provide professional chimney services throughout the Seattle metropolitan area and Snohomish County. Don't see your city listed? Give us a call - we may still be able to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                                <a href="tel:+12062746409">Call (206) 274-6409</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contact">Request Service Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      
      
    </>
  )
}
