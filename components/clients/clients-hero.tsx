"use client"

import { Users } from "lucide-react"

export function ClientsHero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium text-white">
              Hơn 500+ doanh nghiệp tin tưởng
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Khách hàng{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
              Đồng hành cùng chúng tôi
            </span>
          </h1>

          <p className="mt-6 text-lg text-sky-100/90 leading-relaxed max-w-2xl mx-auto text-pretty">
            VNSolution tự hào đồng hành cùng hàng trăm doanh nghiệp từ khởi nghiệp đến tập đoàn lớn, 
            giúp họ chuyển đổi số thành công và phát triển bền vững.
          </p>
        </div>
      </div>
    </section>
  )
}
