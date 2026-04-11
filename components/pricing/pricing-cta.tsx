"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Hotline",
    value: "1900 1234",
    description: "Tư vấn trực tiếp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@vnsolution.com.vn",
    description: "Phản hồi trong 24h",
  },
  {
    icon: MessageSquare,
    title: "Zalo/Chat",
    value: "Chat ngay",
    description: "Hỗ trợ tức thì",
  },
]

export function PricingCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(255,255,255,0.12),transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="mt-4 text-lg text-sky-100/90 max-w-2xl mx-auto">
              Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết theo nhu cầu doanh nghiệp của bạn.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center transition-all hover:bg-white/15 hover:border-white/30"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm text-sky-200 mb-1">{method.title}</p>
                <p className="text-lg font-semibold text-white mb-1">{method.value}</p>
                <p className="text-sm text-sky-200/80">{method.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 font-semibold px-8 py-6 text-base bg-white text-[#1a6cb3] hover:bg-sky-50 transition-all shadow-lg"
            >
              Nhận báo giá chi tiết
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-semibold px-8 py-6 text-base border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all"
            >
              Đặt lịch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div className="px-4">
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-sm text-sky-200">Khách hàng tin tưởng</p>
              </div>
              <div className="px-4 border-l border-white/20">
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-sky-200">Năm kinh nghiệm</p>
              </div>
              <div className="px-4 border-l border-white/20">
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-sm text-sky-200">Uptime cam kết</p>
              </div>
              <div className="px-4 border-l border-white/20">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-sky-200">Hỗ trợ kỹ thuật</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
