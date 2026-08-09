export type BusinessProfile = {
  name: string
  url: string
}

export const businessProfiles: BusinessProfile[] = [
  {
    name: "Google Business Profile",
    url: "https://share.google/ZSrAG5hL902Zai6ZM",
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
    url: "https://www.bbb.org/us/wa/seattle/profile/chimney-cleaning/the-mad-hatter-chimney-sweep-1296-22414196",
  },
  {
    name: "Angi",
    url: "https://www.angi.com/companylist/us/wa/seattle/mad-hatter-chimney-sweep-reviews-6598625.htm",
  },
]

export const businessProfileUrls = businessProfiles.map((profile) => profile.url)
