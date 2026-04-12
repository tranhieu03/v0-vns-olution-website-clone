"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Recycle, FlaskConical, Building2, Users, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const productPills = [
  { icon: Recycle, label: "Phần mềm Xử lý rác", href: "/giai-phap/quan-ly-chat-thai" },
  { icon: FlaskConical, label: "Phần mềm Phòng thí nghiệm", href: "/giai-phap/lims" },
  { icon: Building2, label: "ERP", href: "#products" },
  { icon: Users, label: "CRM", href: "#products" },
  { icon: FileText, label: "HRM", href: "#products" },
]

const stats = [
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "200+", label: "Khách hàng" },
  { value: "50+", label: "Chuyên gia" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient - matching design */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A3B5C] via-[#0D4A6F] to-[#1E6B8A]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Product pills navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {productPills.map((pill) => (
            <Link 
              key={pill.label}
              href={pill.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/20 hover:border-white/30 transition-all"
            >
              <pill.icon className="h-4 w-4" />
              {pill.label}
            </Link>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white">
                Phần mềm
              </span>{" "}
              Xử lý rác{" "}
              <br className="hidden lg:block" />
              thải toàn diện
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tối ưu quy trình thu gom, vận chuyển, xử lý chất thải nguy hại 
              theo đúng quy định BTNMT với hệ thống quản lý thông minh, 
              tích hợp GPS tracking và báo cáo tự động.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 font-semibold px-8 py-6 text-base bg-[#00A86B] hover:bg-[#009060] text-white transition-all shadow-lg shadow-[#00A86B]/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                Dùng thử miễn phí
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold px-8 py-6 text-base border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all"
              >
                <Play className="h-5 w-5" />
                Xem video giới thiệu
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index > 0 ? "pl-8 border-l border-white/20" : ""}>
                  <p className="text-3xl font-bold text-white lg:text-4xl">{stat.value}</p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/30 bg-white/10 backdrop-blur-xl p-2">
              <div className="rounded-xl bg-white shadow-lg overflow-hidden">
                {/* Browser header */}
                <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="ml-4 text-sm text-slate-500 font-medium">Ecosphere Dashboard</span>
                </div>
                
                {/* Dashboard content */}
                <div className="p-5 space-y-4 bg-[#FAFDFA]">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <Recycle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <p className="text-xl font-bold text-slate-800">2,847</p>
                      <p className="text-xs text-slate-500">Chuyến thu gom</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-xl font-bold text-slate-800">156</p>
                      <p className="text-xs text-slate-500">Báo cáo tháng</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Building2 className="h-4 w-4 text-amber-600" />
                        </div>
                      </div>
                      <p className="text-xl font-bold text-slate-800">98%</p>
                      <p className="text-xs text-slate-500">Tuân thủ</p>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="h-32 rounded-xl bg-white border border-slate-200 flex items-end p-4 gap-1.5">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 80].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-[#00A86B] to-[#4CD964] rounded-t-sm transition-all"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Progress section */}
                  <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Mục tiêu xử lý tháng này</span>
                      <span className="text-sm font-bold text-green-600">78%</span>
                    </div>
                    <div className="h-2 rounded-full bg-green-200 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-500 to-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow-xl border border-slate-200 p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center">
                  <Recycle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Tuân thủ BTNMT</p>
                  <p className="text-xs text-slate-500">Quy định môi trường</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
