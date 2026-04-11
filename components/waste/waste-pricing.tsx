"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Building2, Rocket, Crown, Zap } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "basic",
    name: "Cơ bản",
    description: "Dành cho doanh nghiệp nhỏ vừa bắt đầu số hóa",
    price: "Từ 5 triệu",
    priceNote: "/tháng",
    icon: Rocket,
    popular: false,
    features: [
      "Module Thu gom cơ bản",
      "Tối đa 10 xe thu gom",
      "GPS tracking realtime",
      "Báo cáo hàng tháng",
      "Hỗ trợ qua email",
      "Lưu trữ 10GB",
    ],
    cta: "Bắt đầu dùng thử",
  },
  {
    id: "professional",
    name: "Chuyên nghiệp",
    description: "Giải pháp hoàn chỉnh cho doanh nghiệp vừa",
    price: "Từ 15 triệu",
    priceNote: "/tháng",
    icon: Building2,
    popular: true,
    features: [
      "Tất cả module: Thu gom, Vận chuyển, Xử lý",
      "Tối đa 50 xe thu gom",
      "AI tối ưu tuyến đường",
      "Báo cáo BTNMT tự động",
      "Hỗ trợ ưu tiên 24/7",
      "Lưu trữ 100GB",
      "Đào tạo tại chỗ",
      "Tích hợp API",
    ],
    cta: "Tư vấn miễn phí",
  },
  {
    id: "enterprise",
    name: "Doanh nghiệp",
    description: "Dành cho tập đoàn và công ty quy mô lớn",
    price: "Liên hệ",
    priceNote: "báo giá riêng",
    icon: Crown,
    popular: false,
    features: [
      "Toàn bộ module + Tùy chỉnh",
      "Không giới hạn xe",
      "AI nâng cao + Machine Learning",
      "Tích hợp ERP/Kế toán",
      "Hotline riêng 24/7",
      "Lưu trữ không giới hạn",
      "Đào tạo chuyên sâu",
      "SLA 99.9% uptime",
      "Quản lý dự án riêng",
      "On-premise option",
    ],
    cta: "Liên hệ tư vấn",
  },
]

export function WastePricing() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-green-500 mb-3">Bảng giá</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Chi phí phù hợp với mọi quy mô
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Lựa chọn gói phù hợp với nhu cầu doanh nghiệp. Tất cả các gói đều bao gồm 
            hỗ trợ triển khai và đào tạo cơ bản.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 text-white shadow-2xl shadow-green-500/30 scale-105 z-10"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Zap className="h-3.5 w-3.5" />
                    Phổ biến nhất
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                  plan.popular 
                    ? "bg-white/20" 
                    : "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                }`}>
                  <plan.icon className={`h-7 w-7 ${plan.popular ? "text-white" : "text-green-500"}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-slate-800"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-green-100" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-slate-800"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-green-200" : "text-slate-500"}`}>
                    {plan.priceNote}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                      plan.popular ? "bg-white/20" : "bg-green-500/10"
                    }`}>
                      <Check className={`h-3 w-3 ${plan.popular ? "text-green-200" : "text-green-500"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-green-100" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full gap-2 font-semibold py-6 ${
                  plan.popular
                    ? "bg-white text-green-600 hover:bg-green-50 shadow-lg"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/20"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Bạn cần giải pháp tùy chỉnh? Liên hệ ngay để được tư vấn chi tiết.
          </p>
          <Link href="/bang-gia">
            <Button variant="outline" className="gap-2">
              Xem bảng giá đầy đủ
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
