import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Building2, FlaskConical, Recycle, LayoutDashboard } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>15+ Years of Innovation</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Enterprise Software
              <span className="block text-accent">Built for Growth</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 text-pretty">
              Comprehensive software solutions for waste management, testing laboratories, 
              and enterprise operations. ERP, CRM, HRM, and DMS systems designed to transform 
              your business efficiency.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" className="gap-2 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground">
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="h-4 w-4" />
                Watch Overview
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {[
                "200+ Enterprise Clients",
                "99.9% Uptime",
                "24/7 Support"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Categories Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: Recycle, 
                  title: "Waste Management",
                  desc: "Smart collection & processing",
                  color: "bg-accent/20 border-accent/30"
                },
                { 
                  icon: FlaskConical, 
                  title: "Lab Solutions",
                  desc: "LIMS & quality control",
                  color: "bg-primary-foreground/10 border-primary-foreground/20"
                },
                { 
                  icon: Building2, 
                  title: "ERP & CRM",
                  desc: "Unified business operations",
                  color: "bg-primary-foreground/10 border-primary-foreground/20"
                },
                { 
                  icon: LayoutDashboard, 
                  title: "HRM & DMS",
                  desc: "People & document management",
                  color: "bg-accent/20 border-accent/30"
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group rounded-2xl border ${item.color} p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-primary-foreground/15`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Floating Stats */}
            <div className="absolute -left-4 bottom-8 hidden rounded-xl border border-primary-foreground/20 bg-primary/90 p-4 shadow-2xl backdrop-blur-sm lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                  <span className="text-lg font-bold text-accent">15+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Years Experience</p>
                  <p className="text-xs text-primary-foreground/60">Industry expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
