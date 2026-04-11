import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MessageCircle, Recycle } from "lucide-react"
import Link from "next/link"

export function WasteCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.15),transparent)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 mb-6">
            <Recycle className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Bắt đầu ngay hôm nay</span>
          </div>

          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Sẵn sàng số hóa quy trình{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Quản lý Chất thải?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Liên hệ ngay để được tư vấn miễn phí và nhận demo trực tiếp. 
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/ve-chung-toi/lien-he">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500"
              >
                <Phone className="h-4 w-4" />
                1900 1234
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hotline</h3>
              <p className="text-green-400 font-medium">1900 1234</p>
              <p className="text-sm text-slate-400 mt-1">24/7 hỗ trợ</p>
            </div>

            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-green-400 font-medium">waste@vnsolution.vn</p>
              <p className="text-sm text-slate-400 mt-1">Phản hồi trong 24h</p>
            </div>

            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-green-400 font-medium">Chat trực tuyến</p>
              <p className="text-sm text-slate-400 mt-1">Phản hồi ngay lập tức</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
