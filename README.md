# The Mad Hatter Chimney Sweep

Professional chimney sweep and fireplace services website for **The Mad Hatter Chimney Sweep**, serving Greater Seattle since 1979.

Built with [Next.js](https://nextjs.org), React, TypeScript, and Tailwind CSS.

## About This Project

This is the public-facing website for The Mad Hatter Chimney Sweep — a locally owned, licensed, bonded, and insured chimney services company based in Bothell, WA.

**WA Contractor License:** MADHAHL790LW  
**Phone:** (206) 274-6409  
**Email:** services@themadhatterchimneysweep.com

### Services Covered
- Chimney sweeping & inspections
- Chimney repairs (masonry, crown, flashing, firebox)
- Chimney liner installation (stainless steel, cast-in-place)
- Waterproofing & leak repair
- Chimney cap installation
- Fireplace cleaning & installation
- Masonry repair & rebuilds

### SRRP / Verify Business Tool

The site includes a **SRRP (Site Risk & Red-flag Profile)** scanner at `/verify-business`. This free public tool allows homeowners to enter a contractor's website URL and check for common fraud indicators including:

- JavaScript obfuscation (lead-gen network patterns)
- Schema/review cloaking
- Review date manipulation
- Hidden DOM SEO content
- Image filename spoofing / stolen photos
- Location pin fraud (fake/virtual addresses)

The tool returns a **threat score** and **risk level** (Clean / Low / Medium / High / Critical) with plain-English descriptions for homeowners. It is an informational tool only, not a licensing authority. Users are always directed to verify licenses at the official [WA L&I lookup](https://lni.wa.gov/licensing-permits/contractors/verify-contractor-registration).

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/                    Next.js app router pages
  about/                About page
  services/             Services overview + detail pages
  verify-business/      SRRP fraud-check scanner
  verify-contractor/    Mad Hatter credential verification page
  chimney-sweep-*/      City-specific landing pages
  api/scan/             SRRP scan API route
components/
  header.tsx            Site header with nav + phone CTA
  footer.tsx            Site footer with links + contact
  hero.tsx              Homepage hero section
  cta.tsx               Contact form / CTA section
  schema-markup.tsx     JSON-LD structured data
lib/
  srrp-api.ts           SRRP scanner client helper
```

## Deploy

Deploy on [Vercel](https://vercel.com). Set the `SRRP_API_URL` environment variable to point at the live SRRP backend if running in production mode.
