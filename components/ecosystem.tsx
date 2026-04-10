"use client"

import { Building2, Users, Settings, Truck, ArrowRight, ArrowLeft, ArrowDown, ArrowUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  { id: "erp", name: "ERP", fullName: "Tài chính & Sản xuất", icon: Building2, color: "bg-blue-500" },
  { id: "crm", name: "CRM", fullName: "Bán hàng & Khách hàng", icon: Users, color: "bg-green-500" },
  { id: "hrm", name: "HRM", fullName: "Nhân sự & Tiền lương", icon: Settings, color: "bg-orange-500" },
  { id: "dms", name: "DMS", fullName: "Nhà phân phối & Đại lý", icon: Truck, color: "bg-purple-500" },
]

const dataFlows = [
  { from: "CRM", to: "ERP", label: "Đơn hàng → Xuất kho tự động" },
  { from: "HRM", to: "ERP", label: "Chấm công → Tính lương" },
  { from: "DMS", to: "CRM", label: "Đại lý → Pipeline bán hàng" },
  { from: "ERP", to: "DMS", label: "Tồn kho → Báo giá realtime" },
]

export function Ecosystem() {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Hệ sinh thái tích hợp</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Tất cả trong 1 nền tảng - Dữ liệu chảy tự động
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Không còn nhập liệu 2 lần. Khi sales chốt đơn trên CRM, kho tự động nhận lệnh xuất. 
            HR tính lương, kế toán có ngay bút toán. Mọi thứ kết nối liền mạch.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Hub */}
          <div className="relative flex items-center justify-center mb-8 lg:mb-0 lg:absolute lg:inset-0 lg:z-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30">
                <div className="text-center">
                  <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground mx-auto mb-1" />
                  <span className="text-xs lg:text-sm font-bold text-primary-foreground">VNSolution</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs text-muted-foreground">1 Database duy nhất</p>
                <p className="text-xs text-muted-foreground">Dữ liệu realtime 24/7</p>
              </div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`group relative rounded-2xl border border-border bg-card p-6 transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
                style={{ animationFillMode: 'forwards' }}
              >
                {/* Connection Line to Center (hidden on mobile) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  {index === 0 && (
                    <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-border to-primary/50 transform translate-x-full" />
                  )}
                  {index === 1 && (
                    <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-gradient-to-l from-border to-primary/50 transform -translate-x-full" />
                  )}
                  {index === 2 && (
                    <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-border to-primary/50 transform translate-x-full" />
                  )}
                  {index === 3 && (
                    <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-gradient-to-l from-border to-primary/50 transform -translate-x-full" />
                  )}
                </div>

                <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`}>
                  <module.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{module.name}</h3>
                <p className="text-sm text-muted-foreground">{module.fullName}</p>
              </div>
            ))}
          </div>

          {/* Data Flow Examples */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataFlows.map((flow, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {flow.from}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {flow.to}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground flex-1">{flow.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-xs text-muted-foreground">Lần nhập liệu trùng</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Dữ liệu realtime</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1</p>
              <p className="text-xs text-muted-foreground">Nền tảng duy nhất</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="gap-2 h-12 px-8 font-semibold">
            Xem demo tích hợp
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
