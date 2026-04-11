import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WasteHero } from "@/components/waste/waste-hero"
import { WasteModules } from "@/components/waste/waste-modules"
import { WasteFeatures } from "@/components/waste/waste-features"
import { WastePricing } from "@/components/waste/waste-pricing"
import { WasteCTA } from "@/components/waste/waste-cta"

export const metadata: Metadata = {
  title: "Hệ thống Quản lý Chất thải - VNSolution | Giải pháp Môi trường",
  description: "Nền tảng số hóa toàn diện cho việc thu gom, vận chuyển, xử lý và báo cáo chất thải. Tuân thủ quy định pháp luật về môi trường, tối ưu chi phí vận hành.",
}

export default function WasteManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <WasteHero />
      <WasteModules />
      <WasteFeatures />
      <WastePricing />
      <WasteCTA />
      <Footer />
    </main>
  )
}
