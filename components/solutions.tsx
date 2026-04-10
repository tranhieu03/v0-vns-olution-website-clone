import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, FlaskConical, Factory, Truck, TestTube, FileCheck, BarChart3, Shield } from "lucide-react"

const solutions = [
  {
    id: "waste",
    category: "ENVIRONMENTAL",
    name: "Waste Management System",
    description: "End-to-end digital platform for waste collection, processing, tracking, and compliance reporting. Optimize routes, reduce costs, and meet environmental regulations.",
    features: [
      { icon: Truck, text: "Smart route optimization" },
      { icon: Factory, text: "Processing facility management" },
      { icon: BarChart3, text: "Real-time analytics dashboard" },
      { icon: Shield, text: "Compliance & reporting automation" },
    ],
    image: "waste",
    accent: "bg-accent",
  },
  {
    id: "lab",
    category: "LABORATORY",
    name: "Testing Laboratory Solutions",
    description: "Comprehensive LIMS (Laboratory Information Management System) for sample tracking, test management, quality control, and regulatory compliance across industries.",
    features: [
      { icon: TestTube, text: "Sample lifecycle management" },
      { icon: FlaskConical, text: "Automated test workflows" },
      { icon: FileCheck, text: "Quality assurance protocols" },
      { icon: Shield, text: "ISO 17025 compliance ready" },
    ],
    image: "lab",
    accent: "bg-primary",
  },
]

export function Solutions() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Industry Solutions</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Specialized Software for Complex Industries
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Purpose-built solutions that address the unique challenges of waste management 
            and laboratory operations with precision and compliance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-20">
          {solutions.map((solution, idx) => (
            <div
              key={solution.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {solution.category}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {solution.name}
                </h3>
                <p className="mt-4 text-muted-foreground text-pretty leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {solution.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${solution.accent}/10`}>
                        <feature.icon className={`h-5 w-5 ${solution.accent === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className="text-sm text-foreground pt-2">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className={`gap-2 ${solution.accent === 'bg-accent' ? 'bg-accent hover:bg-accent/90' : ''}`}>
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl border border-border bg-card p-2 shadow-xl">
                  <div className="rounded-xl bg-muted/50 p-6">
                    {/* Mock Dashboard */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-lg ${solution.accent}/20 flex items-center justify-center`}>
                            {solution.id === 'waste' ? (
                              <Recycle className={`h-5 w-5 ${solution.accent === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
                            ) : (
                              <FlaskConical className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{solution.name}</p>
                            <p className="text-xs text-muted-foreground">Dashboard Overview</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span className="text-xs text-muted-foreground">Live</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        {solution.id === 'waste' ? (
                          <>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">Collection Points</p>
                              <p className="text-2xl font-bold text-foreground">2,847</p>
                            </div>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">Today&apos;s Routes</p>
                              <p className="text-2xl font-bold text-accent">42</p>
                            </div>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">Processed (tons)</p>
                              <p className="text-2xl font-bold text-foreground">156</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">Active Samples</p>
                              <p className="text-2xl font-bold text-foreground">1,247</p>
                            </div>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">In Testing</p>
                              <p className="text-2xl font-bold text-primary">89</p>
                            </div>
                            <div className="rounded-lg bg-background p-4">
                              <p className="text-xs text-muted-foreground">Completed</p>
                              <p className="text-2xl font-bold text-foreground">1,158</p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Chart Area */}
                      <div className="rounded-lg bg-background p-4">
                        <p className="text-xs font-medium text-muted-foreground mb-3">Weekly Performance</p>
                        <div className="flex items-end gap-2 h-24">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-t ${solution.accent === 'bg-accent' ? 'bg-accent/60' : 'bg-primary/60'}`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-2">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <span key={day} className="text-[10px] text-muted-foreground">{day}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
