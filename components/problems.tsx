import { FileText, Clock, Layers, BarChart3 } from "lucide-react"

const challenges = [
  {
    icon: FileText,
    title: "Fragmented Systems",
    description: "Managing operations across multiple disconnected platforms leads to data silos, duplicate entries, and inconsistent information across departments.",
  },
  {
    icon: Clock,
    title: "Manual Processes",
    description: "Time-consuming manual workflows slow down operations, increase error rates, and prevent your team from focusing on strategic initiatives.",
  },
  {
    icon: Layers,
    title: "Scalability Limits",
    description: "Legacy systems struggle to keep pace with business growth, creating bottlenecks and limiting your ability to expand operations efficiently.",
  },
  {
    icon: BarChart3,
    title: "Limited Visibility",
    description: "Without real-time analytics and unified reporting, making data-driven decisions becomes challenging and reactive rather than proactive.",
  },
]

export function Problems() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">The Challenge</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Is Your Business Held Back By These Issues?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Many organizations struggle with outdated processes and disconnected systems 
            that limit growth and operational efficiency.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <challenge.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
