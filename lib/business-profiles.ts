export type BusinessProfile = {
  name: string
  url: string
}

export const businessProfiles: BusinessProfile[] = [
  {
    name: "Google Business Profile",
    url: "https://www.google.com/maps/place/Mad+Hatter+Chimney+Sweep",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/chimneysweepseattlewa/",
  },
  {
    name: "Yelp",
    url: "https://www.yelp.com/biz/the-mad-hatter-chimney-sweep-seattle-5",
  },
  {
    name: "Better Business Bureau",
    url: "https://www.bbb.org/us/wa/seattle/profile/chimney-cleaning/mad-hatter-chimney-sweep-seattle-1296-90102519",
  },
  {
    name: "Angi",
    url: "https://www.angi.com/companylist/us/wa/seattle/mad-hatter-chimney-sweep-reviews-6598625.htm",
  },
]

export const businessProfileUrls = businessProfiles.map((profile) => profile.url)
