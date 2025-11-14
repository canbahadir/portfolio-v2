import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function ScheduleSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-content">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Schedule a Meeting
          </h2>
          <p className="text-muted-foreground">
            Let&apos;s connect and discuss how we can work together
          </p>
          <Button size="lg" asChild>
            <a
              href="https://calendly.com/bahadircan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Meeting
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

