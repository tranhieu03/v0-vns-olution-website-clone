import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Solutions } from "@/components/solutions"
import { Products } from "@/components/products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Ecosystem } from "@/components/ecosystem"
import { Company } from "@/components/company"
import { Commitment } from "@/components/commitment"
import { Clients } from "@/components/clients"
import { Trust } from "@/components/trust"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero - Company introduction and main offerings */}
        <Hero />
        
        {/* Problems - Challenges businesses face */}
        <Problems />
        
        {/* Solutions - Waste Management & Lab Solutions */}
        <Solutions />
        
        {/* Products - ERP, CRM, HRM, DMS */}
        <Products />
        
        {/* Why Choose Us - USP/Differentiation */}
        <WhyChooseUs />
        
        {/* Ecosystem - All-in-one integration visualization */}
        <Ecosystem />
        
        {/* Company - Overview, experience, milestones, values */}
        <Company />
        
        {/* Commitment - Quality, innovation, customer satisfaction */}
        <Commitment />
        
        {/* Clients - Testimonials and client logos */}
        <Clients />
        
        {/* Trust - Platform reliability and security */}
        <Trust />
        
        {/* CTA - Request Consultation form */}
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
