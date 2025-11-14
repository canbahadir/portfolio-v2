import Link from "next/link"
import { FileText, Code, Sparkles, ArrowRight } from "lucide-react"
import { glanceItems } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  blog: FileText,
  project: Code,
  update: Sparkles,
}

export function GlanceSection() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4 max-w-content">
        <h2 className="text-section-sm md:text-section font-semibold mb-4 text-center">
          Glance
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Quick previews of recent updates, blog posts, and projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {glanceItems.map((item, index) => {
            const Icon = iconMap[item.type] || FileText
            return (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:bg-card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-3">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

