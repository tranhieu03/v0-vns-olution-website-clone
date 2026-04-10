"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Building2, FlaskConical, Recycle, LayoutDashboard } from "lucide-react"

const solutions = [
  {
    icon: Recycle,
    title: "Quản lý chất thải",
    desc: "Thu gom & xử lý thông minh",
  },
  {
    icon: FlaskConical,
    title: "Phòng thí nghiệm",
    desc: "LIMS & kiểm soát chất lượng",
  },
  {
    icon: Building2,
    title: "ERP & CRM",
    desc: "Quản trị vận hành tổng thể",
  },
  {
    icon: LayoutDashboard,
    title: "HRM & DMS",
    desc: "Nhân sự & quản lý tài liệu",
  },
]

const trustItems = [
  "Hơn 200 khách hàng doanh nghiệp",
  "Uptime 99.9%",
  "Hỗ trợ 24/7",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-primary-foreground/80 tracking-wide">
                15+ năm kinh nghiệm phát triển phần mềm
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Giải pháp phần mềm
              <span className="block mt-1 text-accent">cho doanh nghiệp hiện đại</span>
            </h1>

            <p className="mt-5 text-base text-primary-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Chúng tôi cung cấp các giải pháp phần mềm toàn diện cho quản lý chất thải,
              phòng thí nghiệm và vận hành doanh nghiệp. Hệ thống ERP, CRM, HRM và DMS
              được thiết kế để nâng cao hiệu quả hoạt động của tổ chức.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 font-medium bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground transition-smooth"
              >
                Xem thêm về chúng tôi
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((item, index) => (
                <div
                  key={item.title}
                  className={`group rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-smooth hover:bg-primary-foreground/10 hover:border-primary-foreground/20 ${
                    index % 2 === 0 ? "" : "mt-4"
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-medium text-primary-foreground text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-primary-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="absolute -left-2 bottom-4 hidden rounded-lg border border-primary-foreground/15 bg-primary/95 p-3 shadow-lg backdrop-blur-sm lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15">
                  <span className="text-sm font-bold text-accent">15+</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-primary-foreground">Năm kinh nghiệm</p>
                  <p className="text-[10px] text-primary-foreground/50">Chuyên gia trong ngành</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
