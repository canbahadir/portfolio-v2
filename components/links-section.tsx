import Link from "next/link"
import { Linkedin, Github, Award, Book, Bike, Leaf } from "lucide-react"
import { socialLinks } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  award: Award,
  book: Book,
  activity: Bike,
  leaf: Leaf,
}

export function LinksSection() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4 max-w-content">
        <h2 className="text-section-sm md:text-section font-semibold mb-12 text-center">
          Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap] || Book
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:bg-card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{link.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {link.description}
                    </CardDescription>
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

