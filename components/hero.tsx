"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2, Sparkles, Bot, Cpu } from "lucide-react"
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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Lighter overlay - medium blue tone matching logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a7c]/90 via-[#1a6cb3]/80 to-[#3E8ED0]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d4a7c]/40 via-transparent to-transparent" />
      </div>
      
      {/* Animated particles/elements - brighter glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/25 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-cyan-300 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Công ty phần mềm hàng đầu Việt Nam
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Giải pháp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                Phần mềm Doanh nghiệp
              </span>
              <br />
              <span className="text-sky-100">Toàn diện & Chuyên sâu</span>
            </h1>

            <p className="mt-6 text-lg text-sky-100/90 leading-relaxed max-w-xl">
              VNSolution chuyên cung cấp các giải pháp phần mềm quản lý cho doanh nghiệp 
              trong lĩnh vực <strong className="text-white">môi trường, phòng thí nghiệm</strong> và 
              <strong className="text-white"> quản trị doanh nghiệp</strong>. 
              Chúng tôi đồng hành cùng hơn 200 doanh nghiệp trên toàn quốc.
            </p>

            <ul className="mt-6 space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sky-100">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 font-semibold px-8 py-6 text-base bg-white text-[#1a6cb3] hover:bg-sky-50 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold px-8 py-6 text-base border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all"
              >
                <Play className="h-5 w-5" />
                Xem giới thiệu
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index > 0 ? "pl-8 border-l border-white/20" : ""}>
                  <p className="text-3xl font-bold text-white lg:text-4xl">{stat.value}</p>
                  <p className="text-sm text-sky-200 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/30 bg-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-400/10" />
              
              <div className="relative h-full p-6 lg:p-8">
                <div className="h-full rounded-xl bg-white shadow-lg overflow-hidden">
                  <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    <span className="ml-4 text-sm text-slate-500 font-medium">VNSolution Dashboard</span>
                  </div>
                  
                  <div className="p-5 space-y-4 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-4 w-28 rounded bg-slate-200 animate-pulse-slow"></div>
                        <div className="h-3 w-20 rounded bg-slate-100"></div>
                      </div>
                      <div className="h-9 w-24 rounded-lg bg-[#3E8ED0]/10 border border-[#3E8ED0]/30 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-[#3E8ED0]" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "2,847", label: "Dự án" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Hỗ trợ" },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#3E8ED0]/20 to-cyan-400/20 flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-[#3E8ED0]" />
                          </div>
                          <p className="text-lg font-bold text-slate-800">{item.value}</p>
                          <p className="text-xs text-slate-500">{item.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-28 rounded-xl bg-white border border-slate-200 flex items-end p-4 gap-1.5">
                      {[40, 65, 45, 80, 55, 70, 85, 60, 75].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-[#3E8ED0] to-cyan-400 rounded-t-sm transition-all opacity-90 hover:opacity-100"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow-xl border border-slate-200 p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Uptime 99.9%</p>
                  <p className="text-xs text-slate-500">Hoạt động ổn định</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 rounded-xl bg-white shadow-xl border border-slate-200 p-4 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#3E8ED0]/20 to-cyan-400/20 border border-[#3E8ED0]/30 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[#3E8ED0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">AI-Powered</p>
                  <p className="text-xs text-slate-500">Tích hợp AI thông minh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
