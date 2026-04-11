import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news/news-hero"
import { NewsFeatured } from "@/components/news/news-featured"
import { NewsList } from "@/components/news/news-list"
import { NewsNewsletter } from "@/components/news/news-newsletter"
import { NewsCTA } from "@/components/news/news-cta"

export const metadata: Metadata = {
  title: "Tin tức Phần mềm - VNSolution | Cập nhật Công nghệ & Hướng dẫn",
  description: "Cập nhật tin tức mới nhất về phần mềm doanh nghiệp, xu hướng công nghệ, hướng dẫn sử dụng ERP, CRM, HRM, DMS và các thông báo từ VNSolution.",
  keywords: ["tin tức phần mềm", "xu hướng công nghệ", "hướng dẫn ERP", "tin tức VNSolution", "phần mềm doanh nghiệp"],
}

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsHero />
      <NewsFeatured />
      <NewsList />
      <NewsNewsletter />
      <NewsCTA />
      <Footer />
    </main>
  )
}
