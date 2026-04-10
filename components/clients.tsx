"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "VNSolution&apos;s waste management system transformed our operations. We&apos;ve reduced costs by 35% and improved route efficiency dramatically. Their team understood our challenges from day one.",
    author: "Nguyen Van Thanh",
    role: "Operations Director",
    company: "GreenCity Environmental Services",
    industry: "Waste Management",
  },
  {
    quote: "The LIMS solution has streamlined our entire testing workflow. Sample tracking, quality control, and compliance reporting are now seamless. It&apos;s been instrumental in achieving our ISO accreditation.",
    author: "Dr. Le Thi Mai",
    role: "Laboratory Director",
    company: "Vietnam Quality Testing Institute",
    industry: "Testing Laboratory",
  },
  {
    quote: "Implementing VNSolution&apos;s ERP across our 12 facilities was a game-changer. Real-time visibility into operations, finances, and inventory has accelerated our decision-making significantly.",
    author: "Tran Minh Duc",
    role: "CEO",
    company: "Mekong Manufacturing Group",
    industry: "Manufacturing",
  },
  {
    quote: "The CRM and HRM modules work together beautifully. Our sales team is more productive, and HR processes that used to take days now happen in hours. Excellent ongoing support too.",
    author: "Pham Hoang Long",
    role: "Managing Director",
    company: "Saigon Distribution Corp",
    industry: "Distribution",
  },
]

const clients = [
  { name: "GreenCity Environmental", initials: "GC" },
  { name: "Vietnam Quality Institute", initials: "VQI" },
  { name: "Mekong Manufacturing", initials: "MM" },
  { name: "Saigon Distribution", initials: "SD" },
  { name: "Pacific Logistics", initials: "PL" },
  { name: "Delta Pharmaceuticals", initials: "DP" },
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="border-y border-border bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Client Success</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Hear from our clients about how VNSolution has transformed their operations 
            and driven measurable business results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <Quote className="h-5 w-5 text-accent-foreground" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              <blockquote className="text-xl text-foreground leading-relaxed lg:text-2xl">
                {current.quote.replace(/&apos;/g, "'")}
              </blockquote>
              
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{current.author}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                  <p className="text-sm text-accent">{current.company}</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {current.industry}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-accent w-6' : 'bg-border hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Serving enterprises across Vietnam and Southeast Asia
          </p>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <span className="text-sm font-bold text-muted-foreground">{client.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
