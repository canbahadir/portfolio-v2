import { HeroSection } from "@/components/hero-section"
import { LinksSection } from "@/components/links-section"
import { ProjectsSection } from "@/components/projects-section"
import { ScheduleSection } from "@/components/schedule-section"
import { WorkspaceSection } from "@/components/workspace-section"
import { GlanceSection } from "@/components/glance-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScheduleSection />
      <LinksSection />
      <ProjectsSection />
      <WorkspaceSection />
      <GlanceSection />

      <footer className="py-section mt-section-lg">
        <div className="container mx-auto px-4 max-w-content text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bahadır Can. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

