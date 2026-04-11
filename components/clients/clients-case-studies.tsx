"use client"

import Link from "next/link"
import { ArrowRight, TrendingUp, Clock, Users, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    id: 1,
    title: "Chuyển đổi số toàn diện cho Tập đoàn sản xuất",
    company: "Tập đoàn Sản xuất Việt Hưng",
    industry: "Sản xuất",
    solution: "ERP + MES",
    description: "Triển khai hệ thống ERP tích hợp quản lý sản xuất, giúp tối ưu hóa quy trình và tăng năng suất.",
    results: [
      { label: "Tăng năng suất", value: "+45%" },
      { label: "Giảm chi phí", value: "-30%" },
      { label: "ROI", value: "8 tháng" },
    ],
    slug: "tap-doan-san-xuat-viet-hung",
  },
  {
    id: 2,
    title: "Số hóa quy trình bán hàng đa kênh",
    company: "Chuỗi bán lẻ MegaMart",
    industry: "Bán lẻ",
    solution: "CRM + POS",
    description: "Triển khai hệ thống CRM và POS đồng bộ cho 50+ cửa hàng trên toàn quốc.",
    results: [
      { label: "Tăng doanh số", value: "+35%" },
      { label: "Khách hàng mới", value: "+2,000/tháng" },
      { label: "Thời gian xử lý", value: "-60%" },
    ],
    slug: "chuoi-ban-le-megamart",
  },
  {
    id: 3,
    title: "Quản lý nhân sự thông minh",
    company: "Ngân hàng Số FinBank",
    industry: "Tài chính",
    solution: "HRM + Payroll",
    description: "Triển khai hệ thống quản lý nhân sự và tính lương tự động cho 3,000+ nhân viên.",
    results: [
      { label: "Tiết kiệm thời gian", value: "200h/tháng" },
      { label: "Độ chính xác", value: "99.9%" },
      { label: "Hài lòng NV", value: "+40%" },
    ],
    slug: "ngan-hang-so-finbank",
  },
]

const industryColors: Record<string, string> = {
  "Sản xuất": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Bán lẻ": "bg-primary/10 text-primary border-primary/20",
  "Tài chính": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function ClientsCaseStudies() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Dự án tiêu biểu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những câu chuyện thành công từ các doanh nghiệp đã chuyển đổi số cùng VNSolution
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/khach-hang/${study.slug}`}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift"
            >
              {/* Header */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={industryColors[study.industry]}>
                    {study.industry}
                  </Badge>
                  <Badge variant="outline" className="bg-background/50">
                    {study.solution}
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Building2 className="h-4 w-4" />
                    {study.company}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {study.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/du-an"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Xem tất cả dự án
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
