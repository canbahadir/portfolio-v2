import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="py-section-lg">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-hero-sm md:text-hero font-bold tracking-tight">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Articles about Cloud, DevOps, Platform Engineering, and AI
            </p>
            <div className="pt-4">
              <Link
                href="https://medium.com/@bahadircan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:bg-accent px-4 py-2 rounded-md transition-colors"
              >
                View all on Medium
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="transition-all duration-300 hover:bg-card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {post.excerpt && (
                      <CardDescription className="text-base mb-3">
                        {post.excerpt}
                      </CardDescription>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-section mt-section-lg">
        <div className="container mx-auto px-4 max-w-content text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bahadır Can. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

