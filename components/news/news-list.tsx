"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react"

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "product", label: "Sản phẩm" },
  { id: "guide", label: "Hướng dẫn" },
  { id: "company", label: "Tin công ty" },
  { id: "trend", label: "Xu hướng" },
]

const allNews = [
  {
    id: "4",
    title: "5 xu hướng chuyển đổi số doanh nghiệp năm 2024",
    excerpt: "Khám phá những xu hướng công nghệ đang định hình tương lai của doanh nghiệp Việt Nam trong năm 2024.",
    category: "Xu hướng",
    categoryId: "trend",
    date: "02/04/2024",
    readTime: "6 phút đọc",
    slug: "5-xu-huong-chuyen-doi-so-2024",
  },
  {
    id: "5",
    title: "Cách tối ưu hóa quy trình quản lý kho với DMS",
    excerpt: "Hướng dẫn chi tiết sử dụng tính năng quản lý kho trong hệ thống DMS để tăng hiệu quả vận hành.",
    category: "Hướng dẫn",
    categoryId: "guide",
    date: "30/03/2024",
    readTime: "10 phút đọc",
    slug: "toi-uu-quy-trinh-quan-ly-kho-dms",
  },
  {
    id: "6",
    title: "VNSolution mở rộng đội ngũ tại Đà Nẵng",
    excerpt: "Nhằm phục vụ tốt hơn khách hàng khu vực miền Trung, VNSolution chính thức khai trương văn phòng tại Đà Nẵng.",
    category: "Tin công ty",
    categoryId: "company",
    date: "28/03/2024",
    readTime: "4 phút đọc",
    slug: "vnsolution-mo-rong-da-nang",
  },
  {
    id: "7",
    title: "Cập nhật tính năng mới: Dashboard Analytics",
    excerpt: "Phiên bản mới của Dashboard Analytics giúp doanh nghiệp theo dõi hiệu suất kinh doanh theo thời gian thực.",
    category: "Sản phẩm",
    categoryId: "product",
    date: "25/03/2024",
    readTime: "5 phút đọc",
    slug: "cap-nhat-dashboard-analytics",
  },
  {
    id: "8",
    title: "Hội thảo: Ứng dụng AI trong quản lý nhân sự",
    excerpt: "VNSolution tổ chức hội thảo online về xu hướng ứng dụng AI trong lĩnh vực HRM dành cho doanh nghiệp.",
    category: "Tin công ty",
    categoryId: "company",
    date: "22/03/2024",
    readTime: "3 phút đọc",
    slug: "hoi-thao-ai-quan-ly-nhan-su",
  },
  {
    id: "9",
    title: "So sánh các mô hình triển khai ERP: On-premise vs Cloud",
    excerpt: "Phân tích ưu nhược điểm của các mô hình triển khai để doanh nghiệp lựa chọn phù hợp.",
    category: "Hướng dẫn",
    categoryId: "guide",
    date: "20/03/2024",
    readTime: "12 phút đọc",
    slug: "so-sanh-erp-on-premise-cloud",
  },
  {
    id: "10",
    title: "Tích hợp API thanh toán với hệ thống CRM",
    excerpt: "Hướng dẫn tích hợp các cổng thanh toán phổ biến vào hệ thống CRM VNSolution.",
    category: "Hướng dẫn",
    categoryId: "guide",
    date: "18/03/2024",
    readTime: "8 phút đọc",
    slug: "tich-hop-api-thanh-toan-crm",
  },
  {
    id: "11",
    title: "Bảo mật dữ liệu doanh nghiệp trong kỷ nguyên số",
    excerpt: "Những thực hành tốt nhất để bảo vệ dữ liệu doanh nghiệp trước các mối đe dọa mạng.",
    category: "Xu hướng",
    categoryId: "trend",
    date: "15/03/2024",
    readTime: "7 phút đọc",
    slug: "bao-mat-du-lieu-doanh-nghiep",
  },
]

const categoryColors: Record<string, string> = {
  "Sản phẩm": "bg-primary/10 text-primary border-primary/20",
  "Hướng dẫn": "bg-accent/10 text-accent border-accent/20",
  "Tin công ty": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Xu hướng": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function NewsList() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredNews = activeCategory === "all" 
    ? allNews 
    : allNews.filter(news => news.categoryId === activeCategory)

  const visibleNews = filteredNews.slice(0, visibleCount)
  const hasMore = visibleCount < filteredNews.length

  return (
    <section className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              Bài viết mới nhất
            </h2>
            <p className="mt-2 text-muted-foreground">
              Khám phá những thông tin hữu ích về phần mềm doanh nghiệp
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Lọc theo:</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(category.id)
                setVisibleCount(6)
              }}
              className={activeCategory === category.id 
                ? "font-medium" 
                : "font-medium bg-card hover:bg-primary/5 hover:text-primary hover:border-primary/30"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleNews.map((news) => (
            <Link 
              key={news.id}
              href={`/tin-tuc/${news.slug}`}
              className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover-lift"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className={`text-xs ${categoryColors[news.category]}`}>
                    {news.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {news.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {news.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="gap-2 font-medium px-8 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
            >
              Xem thêm bài viết
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
