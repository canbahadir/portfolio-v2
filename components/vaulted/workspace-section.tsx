import { Folder, BookOpen, Award, ArrowRight } from "lucide-react"
import { workspaces } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const iconMap = {
  folder: Folder,
  'book-open': BookOpen,
  award: Award,
}

export function WorkspaceSection() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4 max-w-content">
        <h2 className="text-section-sm md:text-section font-semibold mb-12 text-center">
          Workspaces
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Organize your tabs into Workspaces to keep your projects separate and organized, and switch between them with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workspaces.map((workspace) => {
            const Icon = iconMap[workspace.icon as keyof typeof iconMap] || Folder
            return (
              <Card
                key={workspace.id}
                className="flex flex-col transition-all duration-300 hover:bg-card-hover"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{workspace.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {workspace.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {workspace.items.map((item, index) => (
                      <li key={index}>
                        {item.url ? (
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-2 text-sm hover:text-primary transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-muted-foreground text-xs">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div className="text-sm">
                            <div className="font-medium">{item.title}</div>
                            <div className="text-muted-foreground text-xs">
                              {item.description}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

