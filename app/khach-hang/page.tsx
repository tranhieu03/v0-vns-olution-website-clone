import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients/clients-hero"
import { ClientsStats } from "@/components/clients/clients-stats"
import { ClientsLogos } from "@/components/clients/clients-logos"
import { ClientsTestimonials } from "@/components/clients/clients-testimonials"
import { ClientsCaseStudies } from "@/components/clients/clients-case-studies"
import { ClientsIndustries } from "@/components/clients/clients-industries"
import { ClientsCTA } from "@/components/clients/clients-cta"

export const metadata: Metadata = {
  title: "Khách hàng - VNSolution | Đối tác Tin cậy của 500+ Doanh nghiệp",
  description: "Khám phá câu chuyện thành công từ hơn 500 doanh nghiệp đã chuyển đổi số cùng VNSolution. Các tập đoàn hàng đầu Việt Nam tin tưởng lựa chọn.",
  keywords: ["khách hàng VNSolution", "đối tác phần mềm", "case study", "chuyển đổi số doanh nghiệp", "ERP Vietnam"],
}

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClientsHero />
      <ClientsStats />
      <ClientsLogos />
      <ClientsCaseStudies />
      <ClientsTestimonials />
      <ClientsIndustries />
      <ClientsCTA />
      <Footer />
    </main>
  )
}
