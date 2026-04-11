import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const relatedArticles = [
  {
    id: "4",
    title: "5 xu hướng chuyển đổi số doanh nghiệp năm 2024",
    category: "Xu hướng",
    date: "02/04/2024",
    readTime: "6 phút đọc",
    slug: "5-xu-huong-chuyen-doi-so-2024",
  },
  {
    id: "5",
    title: "Cách tối ưu hóa quy trình quản lý kho với DMS",
    category: "Hướng dẫn",
    date: "30/03/2024",
    readTime: "10 phút đọc",
    slug: "toi-uu-quy-trinh-quan-ly-kho-dms",
  },
  {
    id: "6",
    title: "VNSolution mở rộng đội ngũ tại Đà Nẵng",
    category: "Tin công ty",
    date: "28/03/2024",
    readTime: "4 phút đọc",
    slug: "vnsolution-mo-rong-da-nang",
  },
  {
    id: "7",
    title: "Cập nhật tính năng mới: Dashboard Analytics",
    category: "Sản phẩm",
    date: "25/03/2024",
    readTime: "5 phút đọc",
    slug: "cap-nhat-dashboard-analytics",
  },
]

const categoryColors: Record<string, string> = {
  "Sản phẩm": "bg-primary/10 text-primary border-primary/20",
  "Hướng dẫn": "bg-accent/10 text-accent border-accent/20",
  "Tin công ty": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Xu hướng": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const filtered = relatedArticles.filter(article => article.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Bài viết liên quan</h2>
              <p className="mt-2 text-muted-foreground">Có thể bạn cũng quan tâm</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex gap-2">
              <Link href="/tin-tuc">
                Xem tất cả
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {filtered.map((article) => (
              <Link 
                key={article.id}
                href={`/tin-tuc/${article.slug}`}
                className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover-lift"
              >
                {/* Thumbnail */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <Badge variant="outline" className={`text-xs mb-2 ${categoryColors[article.category]}`}>
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/tin-tuc">
                Xem tất cả bài viết
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
