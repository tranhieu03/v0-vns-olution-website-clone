"use client"

import Link from "next/link"
import { 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  Download,
  Rocket,
  ArrowRight
} from "lucide-react"

const categories = [
  {
    icon: BookOpen,
    title: "Hướng dẫn sử dụng",
    description: "Tài liệu chi tiết về cách sử dụng các tính năng của phần mềm",
    count: 45,
    href: "/kien-thuc/huong-dan",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Video,
    title: "Video hướng dẫn",
    description: "Các video tutorial trực quan, dễ hiểu cho người mới bắt đầu",
    count: 28,
    href: "/kien-thuc/video",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: FileText,
    title: "Tài liệu kỹ thuật",
    description: "API documentation, integration guides và technical specs",
    count: 32,
    href: "/kien-thuc/tai-lieu-ky-thuat",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: HelpCircle,
    title: "Câu hỏi thường gặp",
    description: "Giải đáp các thắc mắc phổ biến từ người dùng",
    count: 60,
    href: "/kien-thuc/faq",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Download,
    title: "Tài liệu tải về",
    description: "Templates, mẫu báo cáo và các tài liệu hữu ích",
    count: 15,
    href: "/kien-thuc/tai-ve",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Rocket,
    title: "Bắt đầu nhanh",
    description: "Hướng dẫn thiết lập và sử dụng cơ bản cho người mới",
    count: 8,
    href: "/kien-thuc/bat-dau",
    color: "bg-violet-500/10 text-violet-600",
  },
]

export function KnowledgeCategories() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Danh mục
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Khám phá theo chủ đề
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tìm kiếm thông tin theo danh mục phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group p-6 rounded-xl bg-background border border-border hover-lift"
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{category.count} bài viết</span>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
