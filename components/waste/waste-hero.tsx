"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Recycle, Truck, Factory, FileCheck, CheckCircle, Leaf } from "lucide-react"
import Link from "next/link"

const highlights = [
  "Tuân thủ quy định BTNMT",
  "Tích hợp GPS theo dõi realtime", 
  "Báo cáo tự động hàng tháng",
  "Hỗ trợ triển khai 24/7",
]

export function WasteHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#002B05] via-[#003D0A] to-[#005A10] py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,168,107,0.15),transparent)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00A86B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00A86B]/30 bg-[#00A86B]/10 px-4 py-2 mb-6">
              <Leaf className="h-4 w-4 text-[#4CD964]" />
              <span className="text-sm font-medium text-[#4CD964]">Giải pháp Môi trường</span>
            </div>

            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              Phần mềm Xử lý{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CD964] to-[#00A86B]">
                Chất thải
              </span>{" "}
              Toàn diện
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Nền tảng số hóa giúp doanh nghiệp quản lý toàn bộ quy trình thu gom, 
              vận chuyển, xử lý chất thải và lập báo cáo môi trường theo quy định pháp luật.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#4CD964] shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-[#00A86B] hover:bg-[#009060] text-white shadow-lg shadow-[#00A86B]/30"
              >
                Dùng thử miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/40"
              >
                <Play className="h-4 w-4" />
                Xem video giới thiệu
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-sm shadow-2xl">
              <div className="rounded-xl bg-white shadow-lg overflow-hidden">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 h-10 bg-slate-100 border-b border-slate-200">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="ml-4 text-sm text-slate-500">Ecosphere Dashboard</span>
                </div>

                <div className="p-5 space-y-4 bg-[#FAFDFA]">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="h-10 w-10 rounded-lg bg-[#00A86B]/10 flex items-center justify-center">
                          <Truck className="h-5 w-5 text-[#00A86B]" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">42</p>
                      <p className="text-xs text-slate-500">Chuyến hôm nay</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Factory className="h-5 w-5 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">156T</p>
                      <p className="text-xs text-slate-500">Đã xử lý</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                          <FileCheck className="h-5 w-5 text-cyan-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">98%</p>
                      <p className="text-xs text-slate-500">Tuân thủ</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-700">Khối lượng xử lý (tấn)</span>
                      <span className="text-xs text-slate-500">Tháng này</span>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 80].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-[#00A86B] to-[#4CD964] rounded-t-sm"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Progress section */}
                  <div className="rounded-xl bg-[#00A86B]/5 border border-[#00A86B]/20 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-700">Tiến độ thu gom hôm nay</span>
                      <span className="text-sm font-bold text-[#00A86B]">78%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#00A86B]/20 overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#00A86B] to-[#4CD964]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-white shadow-xl p-3 hidden lg:block animate-float">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-[#00A86B]/10 flex items-center justify-center">
                  <Recycle className="h-5 w-5 text-[#00A86B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">ISO 14001</p>
                  <p className="text-xs text-slate-500">Đạt chuẩn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
