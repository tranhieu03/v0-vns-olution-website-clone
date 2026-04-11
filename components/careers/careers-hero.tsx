"use client"

import { Button } from "@/components/ui/button"
import { Users, Briefcase, TrendingUp, Heart } from "lucide-react"

const stats = [
  { icon: Users, value: "150+", label: "Nhân viên" },
  { icon: Briefcase, value: "20+", label: "Vị trí đang tuyển" },
  { icon: TrendingUp, value: "50%", label: "Tăng trưởng/năm" },
  { icon: Heart, value: "95%", label: "Hài lòng môi trường" },
]

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Gia nhập đội ngũ VNSolution
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Xây dựng sự nghiệp cùng
            <span className="block mt-2 text-white/90">đội ngũ đam mê công nghệ</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng nhau tạo ra 
            những giải pháp phần mềm tốt nhất cho doanh nghiệp Việt Nam.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-medium px-8">
              Xem vị trí tuyển dụng
            </Button>
            <Button size="lg" variant="outline" className="font-medium px-8 border-white/30 text-white hover:bg-white/10">
              Tìm hiểu văn hóa công ty
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
              <stat.icon className="h-6 w-6 text-white/80 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white lg:text-3xl">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
