"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, ArrowRight, BookOpen, Video, FileText } from "lucide-react"

const tabs = [
  { id: "popular", label: "Phổ biến nhất" },
  { id: "latest", label: "Mới nhất" },
  { id: "guides", label: "Hướng dẫn" },
  { id: "videos", label: "Video" },
]

const articles = [
  {
    id: 1,
    title: "Hướng dẫn cài đặt và cấu hình ERP cho doanh nghiệp vừa",
    description: "Bài viết chi tiết về cách triển khai hệ thống ERP từ đầu, bao gồm các bước cấu hình quan trọng.",
    type: "guide",
    typeLabel: "Hướng dẫn",
    icon: BookOpen,
    readTime: "15 phút đọc",
    views: 2450,
    slug: "huong-dan-cai-dat-erp",
    tags: ["ERP", "Cài đặt", "Cấu hình"],
  },
  {
    id: 2,
    title: "Video: Tổng quan về Dashboard và các tính năng chính",
    description: "Video hướng dẫn sử dụng dashboard, cách tùy chỉnh và tạo báo cáo nhanh.",
    type: "video",
    typeLabel: "Video",
    icon: Video,
    readTime: "12 phút xem",
    views: 1890,
    slug: "video-tong-quan-dashboard",
    tags: ["Dashboard", "Báo cáo", "Video"],
  },
  {
    id: 3,
    title: "API Documentation: Tích hợp thanh toán với hệ thống CRM",
    description: "Tài liệu kỹ thuật chi tiết về cách tích hợp các cổng thanh toán phổ biến.",
    type: "docs",
    typeLabel: "Tài liệu",
    icon: FileText,
    readTime: "20 phút đọc",
    views: 1560,
    slug: "api-tich-hop-thanh-toan",
    tags: ["API", "CRM", "Thanh toán"],
  },
  {
    id: 4,
    title: "Quản lý kho hàng hiệu quả với module DMS",
    description: "Hướng dẫn sử dụng các tính năng quản lý kho, theo dõi tồn kho và xuất nhập.",
    type: "guide",
    typeLabel: "Hướng dẫn",
    icon: BookOpen,
    readTime: "10 phút đọc",
    views: 1340,
    slug: "quan-ly-kho-dms",
    tags: ["DMS", "Quản lý kho", "Tồn kho"],
  },
  {
    id: 5,
    title: "Video: Thiết lập quy trình phê duyệt tự động",
    description: "Hướng dẫn cấu hình workflow phê duyệt cho các quy trình nghiệp vụ.",
    type: "video",
    typeLabel: "Video",
    icon: Video,
    readTime: "8 phút xem",
    views: 1120,
    slug: "video-quy-trinh-phe-duyet",
    tags: ["Workflow", "Phê duyệt", "Tự động hóa"],
  },
  {
    id: 6,
    title: "Best practices: Bảo mật dữ liệu trong hệ thống HRM",
    description: "Các phương pháp tốt nhất để bảo vệ dữ liệu nhân sự và quyền riêng tư.",
    type: "docs",
    typeLabel: "Tài liệu",
    icon: FileText,
    readTime: "12 phút đọc",
    views: 980,
    slug: "bao-mat-du-lieu-hrm",
    tags: ["HRM", "Bảo mật", "Best practices"],
  },
]

const typeColors: Record<string, string> = {
  "Hướng dẫn": "bg-primary/10 text-primary border-primary/20",
  "Video": "bg-red-500/10 text-red-600 border-red-500/20",
  "Tài liệu": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
}

export function KnowledgeArticles() {
  const [activeTab, setActiveTab] = useState("popular")

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              Bài viết nổi bật
            </h2>
            <p className="mt-2 text-muted-foreground">
              Các tài liệu được xem và đánh giá cao nhất
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id 
                ? "font-medium" 
                : "font-medium bg-card hover:bg-primary/5 hover:text-primary hover:border-primary/30"
              }
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/kien-thuc/${article.slug}`}
              className="group flex flex-col p-5 rounded-xl bg-card border border-border hover-lift"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <article.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Badge */}
              <Badge variant="outline" className={`w-fit text-xs mb-3 ${typeColors[article.typeLabel]}`}>
                {article.typeLabel}
              </Badge>

              {/* Title & Description */}
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  {article.views.toLocaleString()} lượt xem
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="gap-2 font-medium px-8">
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
