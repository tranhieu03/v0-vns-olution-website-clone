import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news/news-hero"
import { NewsList } from "@/components/news/news-list"
import { NewsCategories } from "@/components/news/news-categories"

export const metadata = {
  title: "Tin tức - VNSolution | Cập nhật xu hướng công nghệ",
  description: "Cập nhật tin tức mới nhất về công nghệ, phần mềm doanh nghiệp, xu hướng chuyển đổi số và các hoạt động của VNSolution.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <NewsHero />
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <NewsList />
          </div>
          <aside className="lg:col-span-1">
            <NewsCategories />
          </aside>
        </div>
      </div>
      <Footer />
    </main>
  )
}
