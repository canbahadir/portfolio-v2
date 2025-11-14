import Link from "next/link"
import { ExternalLink, Cpu, Code } from "lucide-react"
import { hardwareStack, softwareStack } from "@/lib/stack-data"

export default function StackPage() {
  return (
    <main className="min-h-screen">
      <section className="py-section-lg">
        <div className="container mx-auto px-4 max-w-content">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-hero-sm md:text-hero font-bold tracking-tight">
              My Stack
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools and hardware I use for daily work and productivity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hardware Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Hardware Stack
                </h2>
              </div>
              <ul className="space-y-3">
                {hardwareStack.map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-card hover:bg-card-hover transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">
                  Software Stack
                </h2>
              </div>
              <ul className="space-y-3">
                {softwareStack.map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-card hover:bg-card-hover transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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

