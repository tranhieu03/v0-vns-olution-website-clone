import { Cloud, Headphones, Zap, Shield, FileCheck, Lock, Globe, Server } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Built on modern cloud infrastructure for maximum availability, scalability, and security. Deploy on-premise or in the cloud based on your needs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description: "Expert technical support available 24/7. Our team understands your industry and provides rapid response to any issues.",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Streamlined deployment process with minimal disruption. Go live in weeks, not months, with comprehensive training included.",
  },
]

const certifications = [
  { icon: Shield, label: "ISO 27001 Certified" },
  { icon: FileCheck, label: "SOC 2 Compliant" },
  { icon: Lock, label: "GDPR Ready" },
  { icon: Globe, label: "Multi-region Support" },
  { icon: Server, label: "99.9% SLA" },
]

export function Trust() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Why Choose Us</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Enterprise-Grade Platform You Can Trust
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Built with security, reliability, and compliance at its core. Our platform 
            meets the highest industry standards for enterprise software.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid gap-6 lg:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Security certifications and compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 transition-all hover:border-accent/30"
              >
                <cert.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
