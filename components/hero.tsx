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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>
      
      {/* Animated particles/elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Công ty phần mềm hàng đầu Việt Nam
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Giải pháp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">
                Phần mềm Doanh nghiệp
              </span>
              <br />
              <span className="text-slate-300">Toàn diện & Chuyên sâu</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              VNSolution chuyên cung cấp các giải pháp phần mềm quản lý cho doanh nghiệp 
              trong lĩnh vực <strong className="text-white">môi trường, phòng thí nghiệm</strong> và 
              <strong className="text-white"> quản trị doanh nghiệp</strong>. 
              Chúng tôi đồng hành cùng hơn 200 doanh nghiệp trên toàn quốc.
            </p>

            <ul className="mt-6 space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 font-semibold px-8 py-6 text-base bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold px-8 py-6 text-base border-slate-500 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-slate-400 transition-all"
              >
                <Play className="h-5 w-5" />
                Xem giới thiệu
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-700/50">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index > 0 ? "pl-8 border-l border-slate-700/50" : ""}>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 lg:text-4xl">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-primary/20 bg-slate-900/80 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              <div className="relative h-full p-6 lg:p-8">
                <div className="h-full rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg overflow-hidden">
                  <div className="h-10 bg-slate-800/80 border-b border-slate-700/50 flex items-center px-4 gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="ml-4 text-sm text-slate-400 font-medium">VNSolution Dashboard</span>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-4 w-28 rounded bg-slate-700 animate-pulse-slow"></div>
                        <div className="h-3 w-20 rounded bg-slate-700/60"></div>
                      </div>
                      <div className="h-9 w-24 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "2,847", label: "Dự án" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Hỗ trợ" },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-700/30 border border-slate-700/50 space-y-2">
                          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center">
                            <Cpu className="h-4 w-4 text-primary" />
                          </div>
                          <p className="text-lg font-bold text-white">{item.value}</p>
                          <p className="text-xs text-slate-400">{item.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-28 rounded-xl bg-gradient-to-r from-slate-700/30 via-slate-700/20 to-slate-700/30 border border-slate-700/50 flex items-end p-4 gap-1.5">
                      {[40, 65, 45, 80, 55, 70, 85, 60, 75].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-primary to-cyan-400 rounded-t-sm transition-all opacity-80 hover:opacity-100"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-xl p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Uptime 99.9%</p>
                  <p className="text-xs text-slate-400">Hoạt động ổn định</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-xl p-4 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI-Powered</p>
                  <p className="text-xs text-slate-400">Tích hợp AI thông minh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
