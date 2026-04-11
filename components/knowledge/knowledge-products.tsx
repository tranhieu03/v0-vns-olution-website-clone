"use client"

import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "ERP",
    fullName: "Hoạch định nguồn lực",
    description: "Tài liệu về quản lý tài chính, sản xuất, chuỗi cung ứng",
    articles: 35,
    href: "/kien-thuc/san-pham/erp",
    color: "from-primary to-primary/80",
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Quản lý khách hàng",
    description: "Hướng dẫn quản lý bán hàng, marketing và chăm sóc khách hàng",
    articles: 28,
    href: "/kien-thuc/san-pham/crm",
    color: "from-accent to-accent/80",
  },
  {
    id: "hrm",
    name: "HRM",
    fullName: "Quản lý nhân sự",
    description: "Tài liệu về chấm công, tính lương, đánh giá nhân viên",
    articles: 22,
    href: "/kien-thuc/san-pham/hrm",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "dms",
    name: "DMS",
    fullName: "Quản lý nhà phân phối",
    description: "Hướng dẫn quản lý đơn hàng, kho hàng và vận chuyển",
    articles: 18,
    href: "/kien-thuc/san-pham/dms",
    color: "from-amber-500 to-amber-600",
  },
]

export function KnowledgeProducts() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Theo sản phẩm
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Tài liệu theo từng sản phẩm
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tìm kiếm hướng dẫn và tài liệu dành riêng cho sản phẩm bạn đang sử dụng
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover-lift"
            >
              {/* Header with gradient */}
              <div className={`h-24 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-white">{product.name}</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{product.fullName}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    {product.articles} bài viết
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
