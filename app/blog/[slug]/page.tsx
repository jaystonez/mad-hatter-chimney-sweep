import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPhaseOnePostBySlug, phaseOneBlogPosts } from "../blog-posts"

const SITE_URL = "https://www.themadhatterchimneysweep.com"

export function generateStaticParams() {
  return phaseOneBlogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPhaseOnePostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog | Mad Hatter Chimney Sweep",
      description: "Seattle chimney safety, cleaning, and repair articles.",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      images: post.ogImage ? [{ url: `${SITE_URL}${post.ogImage}` }] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPhaseOnePostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: "Jason Smith",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Mad Hatter Chimney Sweep",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: "Chimney Safety",
    image: post.ogImage ? `${SITE_URL}${post.ogImage}` : undefined,
    articleBody: post.sections
      .flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])])
      .join("\n"),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wide">{post.heroKicker} · 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">{post.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">{post.metaDescription}</p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {!!section.bullets?.length && (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {!!section.table?.length && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Service</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Price Range</th>
                        <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row) => (
                        <tr key={row.service} className="even:bg-slate-50">
                          <td className="border border-slate-300 px-4 py-2">{row.service}</td>
                          <td className="border border-slate-300 px-4 py-2 font-medium text-primary">{row.priceRange}</td>
                          <td className="border border-slate-300 px-4 py-2 text-slate-600">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {!!post.faqs?.length && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold mb-4">Related Seattle Chimney Services</h2>
            <div className="flex flex-wrap gap-3">
              {post.internalLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center">
                  {index > 0 && <span className="text-slate-400 mr-3">•</span>}
                  <Link href={link.href} className="text-primary hover:underline font-medium">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
