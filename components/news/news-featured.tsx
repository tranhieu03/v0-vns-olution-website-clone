"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const featuredNews = {
  id: "1",
  title: "VNSolution ra mắt phiên bản ERP 5.0 với AI tích hợp",
  excerpt: "Phiên bản mới nhất của hệ thống ERP VNSolution tích hợp trí tuệ nhân tạo giúp dự báo kinh doanh chính xác hơn, tối ưu hóa quy trình và giảm chi phí vận hành lên đến 40%.",
  category: "Sản phẩm",
  date: "10/04/2024",
  readTime: "5 phút đọc",
  image: "/images/news/featured-erp.jpg",
  slug: "vnsolution-ra-mat-erp-5-0-ai",
}

const subFeaturedNews = [
  {
    id: "2",
    title: "Hướng dẫn triển khai CRM cho doanh nghiệp SME",
    excerpt: "Các bước triển khai hệ thống CRM hiệu quả dành cho doanh nghiệp vừa và nhỏ.",
    category: "Hướng dẫn",
    date: "08/04/2024",
    readTime: "8 phút đọc",
    image: "/images/news/crm-guide.jpg",
    slug: "huong-dan-trien-khai-crm-sme",
  },
  {
    id: "3",
    title: "VNSolution đạt chứng nhận ISO 27001:2022",
    excerpt: "Khẳng định cam kết bảo mật thông tin và an toàn dữ liệu cho khách hàng.",
    category: "Tin công ty",
    date: "05/04/2024",
    readTime: "3 phút đọc",
    image: "/images/news/iso-certification.jpg",
    slug: "vnsolution-dat-chung-nhan-iso-27001",
  },
]

const categoryColors: Record<string, string> = {
  "Sản phẩm": "bg-primary/10 text-primary border-primary/20",
  "Hướng dẫn": "bg-accent/10 text-accent border-accent/20",
  "Tin công ty": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Xu hướng": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function NewsFeatured() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Featured */}
          <Link 
            href={`/tin-tuc/${featuredNews.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">ERP 5.0 with AI</span>
                </div>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className={categoryColors[featuredNews.category]}>
                  {featuredNews.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredNews.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredNews.readTime}
                  </span>
                </div>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                {featuredNews.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {featuredNews.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Đọc tiếp
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Sub Featured */}
          <div className="flex flex-col gap-6">
            {subFeaturedNews.map((news) => (
              <Link 
                key={news.id}
                href={`/tin-tuc/${news.slug}`}
                className="group flex gap-5 rounded-xl bg-card border border-border p-4 hover-lift"
              >
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className={`text-xs ${categoryColors[news.category]}`}>
                      {news.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
