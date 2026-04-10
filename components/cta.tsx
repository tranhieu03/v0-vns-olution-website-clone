"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

const benefits = [
  "Free consultation with our experts",
  "Custom solution recommendations",
  "No-obligation assessment",
  "Quick response within 24 hours",
]

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+84 28 3823 8888" },
  { icon: Mail, label: "Email", value: "contact@vnsolution.com" },
  { icon: MapPin, label: "Address", value: "District 1, Ho Chi Minh City, Vietnam" },
]

export function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    solution: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="consultation" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Get Started</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Request a Free Consultation
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Ready to transform your business operations? Our team of experts is here to help 
              you find the right solution. Fill out the form and we will get back to you within 
              24 hours with a personalized assessment.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Or reach us directly
              </p>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <CheckCircle2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Your request has been submitted. Our team will contact you within 24 hours.
                  </p>
                  <Button 
                    className="mt-6" 
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        solution: "",
                        message: "",
                      })
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+84 xxx xxx xxx"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution Interest *</Label>
                    <Select 
                      value={formState.solution}
                      onValueChange={(value) => setFormState({ ...formState, solution: value })}
                      required
                    >
                      <SelectTrigger id="solution">
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waste">Waste Management System</SelectItem>
                        <SelectItem value="lab">Laboratory Information System</SelectItem>
                        <SelectItem value="erp">ERP - Enterprise Resource Planning</SelectItem>
                        <SelectItem value="crm">CRM - Customer Relationship</SelectItem>
                        <SelectItem value="hrm">HRM - Human Resource Management</SelectItem>
                        <SelectItem value="dms">DMS - Document Management</SelectItem>
                        <SelectItem value="multiple">Multiple Solutions</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your current challenges and what you&apos;re looking to achieve..."
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Consultation
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
                    {" "}and{" "}
                    <a href="#" className="underline hover:text-foreground">Terms of Service</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
