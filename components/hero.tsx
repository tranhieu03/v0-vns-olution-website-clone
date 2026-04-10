"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "200+", label: "Khách hàng" },
  { value: "50+", label: "Chuyên gia" },
]

const solutions = [
  "Phần mềm quản lý chất thải",
  "Hệ thống phòng thí nghiệm LIMS",
  "Giải pháp ERP, CRM, HRM, DMS",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,102,179,0.08),transparent)]" />
      
      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Công ty phần mềm hàng đầu Việt Nam
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Giải pháp{" "}
              <span className="text-primary">Phần mềm Doanh nghiệp</span>
              <br />
              <span className="text-foreground/80">Toàn diện & Chuyên sâu</span>
            </h1>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
              VNSolution chuyên cung cấp các giải pháp phần mềm quản lý cho doanh nghiệp 
              trong lĩnh vực <strong className="text-foreground">môi trường, phòng thí nghiệm</strong> và 
              <strong className="text-foreground"> quản trị doanh nghiệp</strong>. 
              Chúng tôi đồng hành cùng hơn 200 doanh nghiệp trên toàn quốc.
            </p>

            <ul className="mt-6 space-y-2.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 font-medium px-6 transition-smooth hover:shadow-lg hover:shadow-primary/20"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-medium transition-smooth"
              >
                <Play className="h-4 w-4" />
                Xem giới thiệu
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index > 0 ? "pl-8 border-l border-border" : ""}>
                  <p className="text-2xl font-bold text-primary lg:text-3xl">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-border shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              
              <div className="relative h-full p-6 lg:p-8">
                <div className="h-full rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm overflow-hidden">
                  <div className="h-8 bg-muted/50 border-b border-border/50 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
                    <span className="ml-4 text-xs text-muted-foreground">VNSolution Dashboard</span>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-3 w-24 rounded bg-muted animate-pulse-slow"></div>
                        <div className="h-2 w-16 rounded bg-muted/60"></div>
                      </div>
                      <div className="h-8 w-20 rounded-lg bg-primary/10"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-3 rounded-lg bg-muted/30 space-y-2">
                          <div className="h-6 w-6 rounded bg-primary/20"></div>
                          <div className="h-2 w-full rounded bg-muted/60"></div>
                          <div className="h-4 w-12 rounded bg-primary/30"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-24 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 flex items-end p-3 gap-1">
                      {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/40 rounded-t transition-all"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-background border border-border shadow-lg p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Uptime 99.9%</p>
                  <p className="text-xs text-muted-foreground">Hoạt động ổn định</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
