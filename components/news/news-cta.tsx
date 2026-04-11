"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export function NewsCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(255,255,255,0.12),transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Cần tư vấn giải pháp phần mềm?
          </h2>
          <p className="mt-4 text-lg text-sky-100/90 max-w-2xl mx-auto">
            Đội ngũ chuyên gia của VNSolution sẵn sàng tư vấn miễn phí và đề xuất giải pháp 
            phù hợp nhất cho doanh nghiệp của bạn.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 font-semibold px-8 py-6 text-base bg-white text-[#1a6cb3] hover:bg-sky-50 transition-all shadow-lg"
              asChild
            >
              <Link href="#contact">
                Nhận tư vấn miễn phí
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-semibold px-8 py-6 text-base border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all"
              asChild
            >
              <Link href="/bang-gia">
                Xem bảng giá
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-sky-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-sky-200">Hotline</p>
                <p className="font-semibold">1900 1234</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sky-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-sky-200">Zalo/Chat</p>
                <p className="font-semibold">Hỗ trợ 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
