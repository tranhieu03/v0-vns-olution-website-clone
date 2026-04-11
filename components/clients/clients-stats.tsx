"use client"

import { Building2, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Doanh nghiệp",
    description: "Tin tưởng sử dụng",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Người dùng",
    description: "Sử dụng hàng ngày",
  },
  {
    icon: Award,
    value: "15+",
    label: "Năm kinh nghiệm",
    description: "Trong ngành phần mềm",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Tỷ lệ hài lòng",
    description: "Khách hàng đánh giá",
  },
]

export function ClientsStats() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl border border-border p-6 lg:p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
