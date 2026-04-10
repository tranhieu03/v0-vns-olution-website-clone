import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, FileText, BarChart3, CheckCircle, Layers, Database, Shield, Zap } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "ERP",
    fullName: "Enterprise Resource Planning",
    description: "Unified platform integrating finance, operations, supply chain, and business intelligence for complete organizational visibility and control.",
    icon: Building2,
    color: "bg-primary",
    features: [
      "Financial management & accounting",
      "Supply chain & inventory",
      "Manufacturing operations",
      "Business intelligence & reporting",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Customer Relationship Management",
    description: "360-degree customer view with sales automation, marketing campaigns, and service management to drive growth and retention.",
    icon: Users,
    color: "bg-accent",
    features: [
      "Sales pipeline management",
      "Marketing automation",
      "Customer service portal",
      "Analytics & forecasting",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    fullName: "Human Resource Management",
    description: "Complete HR lifecycle management from recruitment to retirement, with payroll, performance tracking, and employee self-service.",
    icon: Layers,
    color: "bg-primary",
    features: [
      "Recruitment & onboarding",
      "Payroll & benefits",
      "Performance management",
      "Learning & development",
    ],
  },
  {
    id: "dms",
    name: "DMS",
    fullName: "Document Management System",
    description: "Secure, centralized document repository with version control, workflow automation, and compliance tracking for paperless operations.",
    icon: FileText,
    color: "bg-accent",
    features: [
      "Secure document storage",
      "Version control & audit trail",
      "Workflow automation",
      "Search & retrieval",
    ],
  },
]

const integrationFeatures = [
  { icon: Database, text: "Unified Data Architecture" },
  { icon: Shield, text: "Enterprise Security" },
  { icon: Zap, text: "Real-time Sync" },
  { icon: BarChart3, text: "Cross-module Analytics" },
]

export function Products() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Enterprise Products</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Integrated Business Management Suite
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Modular, scalable solutions that work seamlessly together or standalone 
            to address every aspect of your business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${product.color}/10`}>
                <product.icon className={`h-7 w-7 ${product.color === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
              </div>
              
              <div className="mb-2">
                <span className={`text-2xl font-bold ${product.color === 'bg-accent' ? 'text-accent' : 'text-primary'}`}>
                  {product.name}
                </span>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                {product.fullName}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className={`h-4 w-4 shrink-0 ${product.color === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Integration Banner */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Seamless Integration Across All Modules
              </h3>
              <p className="mt-4 text-muted-foreground">
                Our products are designed to work together, sharing data and workflows 
                to eliminate silos and provide a unified view of your organization.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {integrationFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Integration Visual */}
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-background shadow-sm`}
                    >
                      <product.icon className={`h-8 w-8 ${product.color === 'bg-accent' ? 'text-accent' : 'text-primary'}`} />
                    </div>
                  ))}
                </div>
                {/* Connection lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-dashed border-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
