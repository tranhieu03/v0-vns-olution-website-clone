import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersJobs } from "@/components/careers/careers-jobs"
import { CareersCulture } from "@/components/careers/careers-culture"
import { CareersCTA } from "@/components/careers/careers-cta"

export const metadata: Metadata = {
  title: "Tuyển dụng | VNSolution - Gia nhập đội ngũ đam mê công nghệ",
  description: "Khám phá cơ hội nghề nghiệp tại VNSolution. Môi trường làm việc chuyên nghiệp, chế độ đãi ngộ hấp dẫn và cơ hội phát triển không giới hạn.",
}

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CareersHero />
        <CareersBenefits />
        <CareersJobs />
        <CareersCulture />
        <CareersCTA />
      </main>
      <Footer />
    </div>
  )
}
