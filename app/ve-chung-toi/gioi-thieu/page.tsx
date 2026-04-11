import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutVision } from "@/components/about/about-vision"
import { AboutTeam } from "@/components/about/about-team"
import { AboutMilestones } from "@/components/about/about-milestones"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "Giới thiệu công ty - VNSolution | Đối tác công nghệ tin cậy",
  description: "Tìm hiểu về VNSolution - 15+ năm kinh nghiệm cung cấp giải pháp phần mềm chuyên nghiệp cho doanh nghiệp Việt Nam. Tầm nhìn, sứ mệnh và đội ngũ lãnh đạo.",
}

export default function AboutIntroPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutTeam />
      <AboutMilestones />
      <AboutCTA />
      <Footer />
    </main>
  )
}
