import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { allBlogIndexPosts } from "./blog-posts"

export const metadata: Metadata = {
  title: "Seattle Chimney Blog | Mad Hatter Chimney Sweep",
  description:
    "Read Seattle chimney safety guides from Mad Hatter Chimney Sweep, including inspection levels, chimney cleaning timing, creosote dangers, and carbon monoxide prevention.",
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen py-16">
      <section className="container mx-auto px-4 max-w-5xl">
        <p className="text-primary font-medium text-sm uppercase tracking-wide">Mad Hatter Resource Center</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Seattle Chimney Blog</h1>
        <p className="text-slate-700 text-lg max-w-3xl">
          Helpful homeowner guides on chimney inspections, cleaning, safety, and repair planning for Seattle-area
          homes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {allBlogIndexPosts.map((post) => (
            <Card key={post.slug} className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{new Date(post.publishedTime).toLocaleDateString("en-US")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-primary hover:underline font-medium">
                  Read article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
