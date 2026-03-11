import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Phone, MapPin, Clock, Star } from "lucide-react"

const locations = {
  "seattle": {
    name: "Seattle",
    county: "King County",
    description: "Professional chimney sweep and fireplace services in Seattle, WA. Serving all Seattle neighborhoods with expert chimney cleaning, inspection, and repair services.",
    neighborhoods: [
      "Capitol Hill", "Queen Anne", "Ballard", "Fremont", "Green Lake",
      "Wallingford", "University District", "Magnolia", "West Seattle",
      "Beacon Hill", "Columbia City", "Georgetown", "Ravenna", "Greenwood"
    ],
    zipCodes: ["98101", "98102", "98103", "98105", "98107", "98109", "98115", "98117", "98119", "98122", "98125", "98126", "98133", "98136", "98144"],
    localContent: "As Seattle's trusted chimney sweep service, we understand the unique needs of Seattle-area homes. From historic Capitol Hill craftsman homes to modern Ballard townhouses, our technicians are experienced with all types of chimney systems found throughout Seattle."
  },
  "bellevue": {
    name: "Bellevue",
    county: "King County",
    description: "Expert chimney sweeping and masonry repair services in Bellevue, WA. Professional chimney inspection, cleaning, and restoration for Bellevue homes.",
    neighborhoods: [
      "Downtown Bellevue", "Crossroads", "Factoria", "Wilburton",
      "Bridle Trails", "Somerset", "Eastgate", "Lake Hills", "West Bellevue",
      "Enatai", "Clyde Hill", "Beaux Arts Village"
    ],
    zipCodes: ["98004", "98005", "98006", "98007", "98008", "98015"],
    localContent: "Bellevue homeowners trust The Mad Hatter for all their chimney needs. Whether you have a luxury home in Bridle Trails or a condo in Downtown Bellevue, we provide the same exceptional service and attention to detail."
  },
  "redmond": {
    name: "Redmond",
    county: "King County",
    description: "Trusted chimney cleaning and inspection services in Redmond, WA. Comprehensive chimney maintenance, repair, and installation for Redmond residents.",
    neighborhoods: [
      "Downtown Redmond", "Overlake", "Education Hill", "Grass Lawn",
      "Sammamish Valley", "Bear Creek", "Idylwood", "North Redmond"
    ],
    zipCodes: ["98052", "98053", "98073"],
    localContent: "Serving Redmond families with reliable chimney services since 1979. From Education Hill to Sammamish Valley, we keep Redmond chimneys clean, safe, and functioning properly year-round."
  },
  "kirkland": {
    name: "Kirkland",
    county: "King County",
    description: "Quality chimney sweep services in Kirkland, WA. Professional chimney cleaning, inspection, waterproofing, and masonry repair throughout Kirkland.",
    neighborhoods: [
      "Downtown Kirkland", "Juanita", "Totem Lake", "Finn Hill",
      "Houghton", "Bridle Trails", "Kingsgate", "Rose Hill", "Norkirk"
    ],
    zipCodes: ["98033", "98034", "98083"],
    localContent: "Kirkland's waterfront location means chimneys face unique challenges from moisture. Our waterproofing and leak repair services protect Kirkland homes from water damage while our sweeping services keep your fireplace burning efficiently."
  },
  "issaquah": {
    name: "Issaquah",
    county: "King County",
    description: "Reliable chimney services in Issaquah, WA. Expert chimney sweeping, inspection, and repair for homes in Issaquah and the surrounding foothills.",
    neighborhoods: [
      "Olde Town Issaquah", "Issaquah Highlands", "Talus", "Providence Point",
      "Grand Ridge", "Sycamore", "Sunset Ridge", "Panorama"
    ],
    zipCodes: ["98027", "98029"],
    localContent: "Issaquah's beautiful foothills location means many homes rely on fireplaces for both warmth and ambiance. We help Issaquah residents maintain safe, efficient chimney systems that handle the increased use that comes with cooler temperatures."
  },
  "sammamish": {
    name: "Sammamish",
    county: "King County",
    description: "Professional chimney care in Sammamish, WA. Comprehensive chimney cleaning, inspection, and maintenance services for Sammamish homeowners.",
    neighborhoods: [
      "Pine Lake", "Beaver Lake", "Sahalee", "Klahanie",
      "Trossachs", "Inglewood", "Plateau", "East Sammamish"
    ],
    zipCodes: ["98029", "98074", "98075"],
    localContent: "Sammamish's newer homes still require regular chimney maintenance. Whether you're in Sahalee or Klahanie, our technicians provide thorough inspections and cleaning to keep your chimney system in top condition."
  },
  "shoreline": {
    name: "Shoreline",
    county: "King County",
    description: "Comprehensive chimney services in Shoreline, WA. Professional sweeping, inspection, and repair for homes throughout Shoreline.",
    neighborhoods: [
      "Richmond Beach", "Ridgecrest", "Parkwood", "Echo Lake",
      "North City", "Ballinger", "Highland Terrace", "Westminster Triangle"
    ],
    zipCodes: ["98133", "98155", "98177"],
    localContent: "Shoreline's mix of mid-century and newer homes means diverse chimney systems. Our experienced technicians are familiar with all types of chimneys found in Shoreline neighborhoods and provide expert service for each."
  },
  "burien": {
    name: "Burien",
    county: "King County",
    description: "Dependable chimney sweeping in Burien, WA. Quality chimney cleaning, inspection, and masonry services for Burien area homes.",
    neighborhoods: [
      "Gregory Heights", "Boulevard Park", "Seahurst", "Town Square",
      "Lake Burien", "White Center", "Normandy Park", "Riverton Heights"
    ],
    zipCodes: ["98146", "98166", "98168"],
    localContent: "Burien homeowners choose The Mad Hatter for honest, professional chimney services. From Seahurst to Gregory Heights, we provide the reliable chimney maintenance your home deserves."
  },
    "bothell": {
    name: "Bothell",
    county: "Snohomish County",
    description: "Professional chimney sweep and fireplace services in Bothell, WA. Serving Bothell and surrounding Snohomish County communities with expert chimney cleaning, inspection, and repair services.",
    neighborhoods: [
      "Downtown Bothell", "Canyon Park", "North Creek", "Queensborough",
      "Filbert", "Maltby", "Clearview", "Thrashers Corner",
      "Mill Creek", "Kenmore", "Woodinville", "Lake Forest Park"
    ],
    zipCodes: ["98011", "98012", "98021", "98036", "98072", "98077"],
    localContent: "As Bothell's trusted chimney sweep service based right here in the community, we understand the unique needs of Snohomish County homes. From established neighborhoods in Downtown Bothell to newer developments in Canyon Park and North Creek, our technicians are experienced with all types of chimney systems found throughout Bothell and the surrounding area."
  },
    "everett": {
    name: "Everett",
    county: "Snohomish County",
    description: "Professional chimney sweep and fireplace services in Everett, WA. Serving all Everett neighborhoods with expert chimney cleaning, inspection, and repair services.",
    neighborhoods: [
      "Bayside", "Boulevard Bluffs", "Delta", "Evergreen",
      "Glacier View", "Holly", "Lowell", "Northwest Everett",
      "Port Gardner", "Riverside", "Silver Lake", "Twin Creeks"
    ],
    zipCodes: ["98201", "98203", "98204", "98205", "98208"],
    localContent: "As Snohomish County's largest city, Everett has a diverse mix of historic and modern homes that all need reliable chimney maintenance. From waterfront properties in Port Gardner to established neighborhoods in Lowell and Silver Lake, our technicians are experienced with every type of chimney system found throughout Everett."
  },
  "mukilteo": {
    name: "Mukilteo",
    county: "Snohomish County",
    description: "Expert chimney sweep and fireplace services in Mukilteo, WA. Professional chimney cleaning, inspection, and repair for Mukilteo homeowners.",
    neighborhoods: [
      "Old Town Mukilteo", "Harbour Pointe", "Chennault",
      "Paine Field", "Japanese Gulch", "Mukilteo Speedway",
      "Possession Point", "Elliot Point"
    ],
    zipCodes: ["98275"],
    localContent: "Mukilteo's coastal location exposes chimneys to salt air and moisture that accelerate deterioration. Our waterproofing and maintenance services help protect Mukilteo homes from these unique challenges, keeping your chimney safe and efficient year-round."
  },
  "marysville": {
    name: "Marysville",
    county: "Snohomish County",
    description: "Trusted chimney sweep and repair services in Marysville, WA. Comprehensive chimney cleaning, inspection, and maintenance for Marysville residents.",
    neighborhoods: [
      "Downtown Marysville", "Smokey Point", "Lakewood",
      "Sunnyside", "Whiskey Ridge", "Grove",
      "Cedarcrest", "Kellogg Marsh"
    ],
    zipCodes: ["98270", "98271"],
    localContent: "Marysville homeowners rely on The Mad Hatter for dependable chimney services. Whether you're in the established neighborhoods near Downtown Marysville or the newer developments around Smokey Point, we provide thorough inspections and expert chimney care."
  },
  "lake-stevens": {
    name: "Lake Stevens",
    county: "Snohomish County",
    description: "Professional chimney cleaning and inspection services in Lake Stevens, WA. Expert chimney maintenance, repair, and installation for Lake Stevens homeowners.",
    neighborhoods: [
      "Downtown Lake Stevens", "North Lake Stevens", "Frontier Heights",
      "Hartford", "Lake Cassidy", "Cavalero",
      "Machias", "South Lake Stevens"
    ],
    zipCodes: ["98258"],
    localContent: "Lake Stevens is one of the fastest-growing communities in Snohomish County, with both newer homes and established properties that require regular chimney care. Our technicians serve all Lake Stevens neighborhoods with the same professional, thorough service we've provided since 1979."
  },
  "snohomish": {
    name: "Snohomish",
    county: "Snohomish County",
    description: "Reliable chimney sweep services in the City of Snohomish, WA. Professional chimney cleaning, inspection, and repair for Snohomish area homes.",
    neighborhoods: [
      "Historic Downtown Snohomish", "Pilchuck", "Bickford",
      "Snohomish Hill", "Riverview", "Fobes Hill",
      "Clearview", "High Bridge"
    ],
    zipCodes: ["98290", "98296"],
    localContent: "The historic City of Snohomish features many older homes with original chimneys that require specialized care and attention. Our experienced technicians understand the unique needs of these heritage properties while also serving newer construction throughout the Snohomish area."
  },
    "lynnwood": {
    name: "Lynnwood",
    county: "Snohomish County",
    description: "Professional chimney sweep and fireplace services in Lynnwood, WA. Expert chimney cleaning, inspection, and repair for Lynnwood homeowners and surrounding communities.",
    neighborhoods: [
      "Alderwood Manor", "Martha Lake", "Meadowdale", "Larch Way",
      "North Lynnwood", "Interurban Trail", "Scriber Lake", "South Lynnwood"
    ],
    zipCodes: ["98036", "98037", "98046", "98087"],
    localContent: "Lynnwood is a thriving Snohomish County city with a mix of established mid-century homes and modern construction. Many Alderwood Manor and Meadowdale homes feature wood-burning fireplaces that benefit from annual cleaning and inspection. Our technicians are familiar with the chimney systems throughout Lynnwood and provide reliable service to keep your home safe and warm."
  },
  "edmonds": {
    name: "Edmonds",
    county: "Snohomish County",
    description: "Expert chimney sweep and maintenance services in Edmonds, WA. Professional chimney cleaning, inspection, waterproofing, and repair for Edmonds residents.",
    neighborhoods: [
      "Downtown Edmonds", "Bowl", "Westgate", "Firdale Village",
      "Perrinville", "Esperance", "Seaview", "Maplewood"
    ],
    zipCodes: ["98020", "98026"],
    localContent: "Edmonds' waterfront charm comes with chimney challenges. Salt air and Puget Sound moisture accelerate deterioration of masonry and flashing. Our waterproofing and leak repair services protect Edmonds chimneys from coastal exposure, while routine sweeping keeps your fireplace ready for cozy evenings overlooking the water."
  },
  "mountlake-terrace": {
    name: "Mountlake Terrace",
    county: "Snohomish County",
    description: "Reliable chimney sweep services in Mountlake Terrace, WA. Comprehensive chimney cleaning, inspection, and maintenance for Mountlake Terrace homeowners.",
    neighborhoods: [
      "Town Center", "Ballinger", "Gateway", "Lakeview Trail",
      "Melody Hill", "Evergreen", "Cedar Way", "Veterans Memorial Park"
    ],
    zipCodes: ["98043"],
    localContent: "Mountlake Terrace's well-established neighborhoods feature many homes built in the 1950s through 1970s with original masonry chimneys that require regular maintenance. Our technicians understand the specific needs of these heritage chimney systems and provide expert care to keep them functioning safely for years to come."
  },
  "arlington": {
    name: "Arlington",
    county: "Snohomish County",
    description: "Trusted chimney sweep and repair services in Arlington, WA. Professional chimney cleaning, inspection, and installation for Arlington and north Snohomish County residents.",
    neighborhoods: [
      "Downtown Arlington", "Smokey Point", "Lakewood", "Trafton",
      "Jim Creek", "Bryant", "Oso", "Darrington Road"
    ],
    zipCodes: ["98223"],
    localContent: "Arlington and north Snohomish County homeowners rely on their fireplaces and wood stoves heavily during the long Pacific Northwest winters. With rural properties and older farmhouses common in the area, regular chimney inspections and cleaning are essential for safety. The Mad Hatter proudly extends our trusted service to Arlington and the surrounding communities."
  },
}

const services = [
  {
    title: "Chimney Inspection",
    description: "Comprehensive inspection with video camera scanning"
  },
  {
    title: "Chimney Sweeping",
    description: "Thorough cleaning and creosote removal"
  },
  {
    title: "Chimney Repairs",
    description: "Masonry repair, crown repair, and tuckpointing"
  },
  {
    title: "Chimney Relining",
    description: "Stainless steel and cast-in-place liner installation"
  },
  {
    title: "Leak Repair",
    description: "Flashing repair, waterproofing, and cap installation"
  },
  {
    title: "Fireplace Installation",
    description: "Wood stove, gas fireplace, and insert installation"
  }
]

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const location = locations[resolvedParams.slug as keyof typeof locations]
  
  if (!location) {
    return {
      title: 'Location Not Found'
    }
  }

  return {
    title: `Chimney Sweep ${location.name} WA | The Mad Hatter Chimney Sweep`,
    description: location.description,
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const location = locations[resolvedParams.slug as keyof typeof locations]

  if (!location) {
    notFound()
  }

  return (
    <>
      
      
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/locations" className="text-primary hover:underline mb-4 inline-block">
                ← Back to All Locations
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Chimney Sweep Services in {location.name}, WA
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                                <a href="tel:+12062746409">
                    <Phone className="w-4 h-4 mr-2" />
                                    (206) 274-6409
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contact">Schedule Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-8">
                Our Chimney Services in {location.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {services.map((service) => (
                  <Card key={service.title}>
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-lg mb-1">{service.title}</div>
                          <div className="text-sm font-normal text-muted-foreground">
                            {service.description}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Local Content */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    Why Choose Us for Your {location.name} Chimney Needs
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    {location.localContent}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t">
                    <div className="text-center">
                      <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl mb-1">5.0</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl mb-1">Same Day</div>
                      <div className="text-sm text-muted-foreground">Service Available</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="font-bold text-2xl mb-1">Licensed</div>
                      <div className="text-sm text-muted-foreground">& Fully Insured</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Neighborhoods */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Areas We Serve in {location.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                    {location.neighborhoods.map((neighborhood) => (
                      <div key={neighborhood} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Zip Codes:</strong> {location.zipCodes.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    Schedule Your {location.name} Chimney Service Today
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Same-day appointments available. Free estimates on all repairs and installations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      asChild
                    >
                                                <a href="tel:+12062746409">
                        <Phone className="w-4 h-4 mr-2" />
                                                    Call (206) 274-6409
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <Link href="/#contact">Request Free Estimate</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      
      
    </>
  )
}
