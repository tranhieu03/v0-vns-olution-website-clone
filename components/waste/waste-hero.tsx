import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Recycle, Truck, Factory, FileCheck, CheckCircle } from "lucide-react"
import Link from "next/link"

const highlights = [
  "Tuân thủ quy định BTNMT",
  "Tích hợp GPS theo dõi realtime",
  "Báo cáo tự động hàng tháng",
  "Hỗ trợ triển khai 24/7",
]

export function WasteHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.15),transparent)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 mb-6">
              <Recycle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Giải pháp Môi trường</span>
            </div>

            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              Hệ thống Quản lý{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Chất thải
              </span>{" "}
              Toàn diện
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Nền tảng số hóa giúp doanh nghiệp quản lý toàn bộ quy trình thu gom, 
              vận chuyển, xử lý chất thải và lập báo cáo môi trường theo quy định pháp luật.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500"
              >
                <Play className="h-4 w-4" />
                Xem demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="ml-4 text-sm text-slate-400">Dashboard Quản lý Chất thải</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl bg-slate-700/50 p-4 text-center">
                  <Truck className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">42</p>
                  <p className="text-xs text-slate-400">Chuyến hôm nay</p>
                </div>
                <div className="rounded-xl bg-slate-700/50 p-4 text-center">
                  <Factory className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">156T</p>
                  <p className="text-xs text-slate-400">Đã xử lý</p>
                </div>
                <div className="rounded-xl bg-slate-700/50 p-4 text-center">
                  <FileCheck className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">98%</p>
                  <p className="text-xs text-slate-400">Tuân thủ</p>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-white">Tiến độ thu gom hôm nay</span>
                  <span className="text-sm font-bold text-green-400">78%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-green-500 p-3 shadow-lg shadow-green-500/30 animate-bounce-slow">
              <Recycle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
