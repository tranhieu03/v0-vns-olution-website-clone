import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KnowledgeHero } from "@/components/knowledge/knowledge-hero"
import { KnowledgeCategories } from "@/components/knowledge/knowledge-categories"
import { KnowledgeArticles } from "@/components/knowledge/knowledge-articles"
import { KnowledgeProducts } from "@/components/knowledge/knowledge-products"
import { KnowledgeCTA } from "@/components/knowledge/knowledge-cta"

export const metadata: Metadata = {
  title: "Kiến thức | VNSolution - Tài liệu hướng dẫn phần mềm doanh nghiệp",
  description: "Trung tâm kiến thức VNSolution - Tài liệu hướng dẫn sử dụng, video tutorial, API documentation và các nguồn tài nguyên hữu ích.",
}

export default function KnowledgePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <KnowledgeHero />
        <KnowledgeCategories />
        <KnowledgeArticles />
        <KnowledgeProducts />
        <KnowledgeCTA />
      </main>
      <Footer />
    </div>
  )
}
