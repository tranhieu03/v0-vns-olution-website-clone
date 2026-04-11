import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingCTA } from "@/components/pricing/pricing-cta"

export const metadata: Metadata = {
  title: "Bảng Giá - VNSolution | Giải pháp Phần mềm Doanh nghiệp",
  description: "Khám phá các gói giải pháp phần mềm VNSolution với mức giá phù hợp cho mọi quy mô doanh nghiệp. Tư vấn miễn phí và hỗ trợ triển khai toàn diện.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  )
}
