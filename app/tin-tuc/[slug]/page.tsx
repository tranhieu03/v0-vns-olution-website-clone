import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleDetail } from "@/components/news/article-detail"
import { ArticleAuthor } from "@/components/news/article-author"
import { RelatedArticles } from "@/components/news/related-articles"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug.replace(/-/g, " ")} | VNSolution Blog`,
    description: "Tin tức và kiến thức về phần mềm doanh nghiệp từ VNSolution",
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ArticleDetail slug={slug} />
        <ArticleAuthor />
        <RelatedArticles currentSlug={slug} />
      </main>
      <Footer />
    </div>
  )
}
