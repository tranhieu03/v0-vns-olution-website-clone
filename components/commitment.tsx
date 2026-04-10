import { Shield, Sparkles, HeartHandshake, Clock, CheckCircle2, Headphones, Award, RefreshCw } from "lucide-react"

const commitments = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every solution undergoes rigorous testing and quality checks. We follow ISO-certified development processes to ensure reliability and performance.",
    highlights: ["ISO 27001 Certified", "Automated Testing", "Code Reviews"],
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "We invest heavily in R&D to keep our solutions at the cutting edge. Regular updates bring new features and performance improvements to your systems.",
    highlights: ["Quarterly Updates", "AI Integration", "Cloud-Native"],
  },
  {
    icon: HeartHandshake,
    title: "Customer Success",
    description: "Your success is our success. We provide comprehensive onboarding, training, and ongoing support to ensure you maximize value from our solutions.",
    highlights: ["Dedicated Success Manager", "Custom Training", "24/7 Support"],
  },
]

const supportFeatures = [
  { icon: Clock, text: "99.9% Uptime SLA" },
  { icon: Headphones, text: "24/7 Technical Support" },
  { icon: Award, text: "Industry Best Practices" },
  { icon: RefreshCw, text: "Regular Updates & Patches" },
]

export function Commitment() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Our Commitment</p>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Excellence in Every Engagement
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-pretty">
            We are committed to delivering exceptional value through quality, innovation, 
            and unwavering dedication to our clients&apos; success.
          </p>
        </div>

        {/* Commitment Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
                <commitment.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">{commitment.title}</h3>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                {commitment.description}
              </p>
              <ul className="mt-6 space-y-2">
                {commitment.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-16 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                Enterprise-Grade Support
              </h3>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                Our dedicated support team ensures your systems run smoothly around the clock. 
                From implementation to ongoing maintenance, we are with you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {supportFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4"
                >
                  <feature.icon className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
