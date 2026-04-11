import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata: Metadata = {
  title: "Liên hệ - VNSolution | Nhận tư vấn miễn phí",
  description: "Liên hệ VNSolution để được tư vấn giải pháp phần mềm phù hợp cho doanh nghiệp. Hotline 1900 1234, hỗ trợ 24/7.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F7F9]">
      <Header />
      <ContactHero />
      
      {/* Form and Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactFAQ />
      <Footer />
    </main>
  )
}
