import { Target, Lightbulb, Heart, Award, TrendingUp, Users } from "lucide-react"

const milestones = [
  { year: "2009", event: "Founded in Ho Chi Minh City" },
  { year: "2012", event: "First enterprise ERP deployment" },
  { year: "2015", event: "Expanded to waste management sector" },
  { year: "2018", event: "Laboratory solutions launched" },
  { year: "2021", event: "100th enterprise client milestone" },
  { year: "2024", event: "Regional expansion across Southeast Asia" },
]

const stats = [
  { value: "15+", label: "Years of Experience", icon: Award },
  { value: "200+", label: "Enterprise Clients", icon: Users },
  { value: "50+", label: "Industry Experts", icon: Target },
  { value: "98%", label: "Client Retention", icon: TrendingUp },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every solution we deliver, ensuring measurable impact for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously evolving our technology stack to bring cutting-edge solutions to complex business challenges.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We build lasting relationships, treating every client engagement as a true partnership for mutual success.",
  },
]

export function Company() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - About */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">About VNSolution</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Building the Future of Enterprise Software
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Since 2009, VNSolution has been at the forefront of enterprise software development 
              in Vietnam. What started as a small team with a vision has grown into a leading 
              provider of comprehensive business solutions serving clients across multiple industries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Our expertise spans waste management, laboratory information systems, and the full 
              spectrum of enterprise management tools. We combine deep industry knowledge with 
              technical excellence to deliver solutions that drive real business transformation.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">Our Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 h-full w-0.5 bg-border" />
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {milestones.map((milestone, idx) => (
                  <div key={milestone.year} className="relative flex gap-6 pl-10">
                    {/* Dot */}
                    <div className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 ${
                      idx === milestones.length - 1 
                        ? 'border-accent bg-accent/20' 
                        : 'border-border bg-background'
                    }`} />
                    
                    <div className="flex-1 rounded-lg border border-border bg-card p-4">
                      <span className="text-sm font-bold text-accent">{milestone.year}</span>
                      <p className="mt-1 text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Our Core Values</h3>
            <p className="mt-2 text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
