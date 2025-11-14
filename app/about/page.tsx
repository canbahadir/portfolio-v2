import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Award, Book, Bike, Leaf } from "lucide-react"
import { profileInfo, socialLinks } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  award: Award,
  book: Book,
  activity: Bike,
  leaf: Leaf,
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-section-lg">
        <div className="container mx-auto px-4 max-w-content">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              {profileInfo.profileImage ? (
                <Image
                  src={profileInfo.profileImage}
                  alt={profileInfo.name}
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="text-4xl font-bold text-muted-foreground">
                  {profileInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-hero-sm md:text-hero font-bold tracking-tight">
                {profileInfo.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                <span className="bg-orange/30 px-3 py-1 border-b-4 border-orange inline-block">
                  {profileInfo.title}
                </span>
              </p>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-narrow leading-relaxed px-4">
              {profileInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center px-4">
              {profileInfo.affiliations.map((affiliation, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm text-muted-foreground bg-muted px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                >
                  {affiliation}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <footer className="py-section mt-section-lg">
        <div className="container mx-auto px-4 max-w-content text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bahadır Can. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

