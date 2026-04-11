"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Building2, Rocket, Crown, Zap } from "lucide-react"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Phù hợp với doanh nghiệp nhỏ mới bắt đầu số hóa",
    price: "Liên hệ",
    priceNote: "Tùy theo module",
    icon: Rocket,
    popular: false,
    features: [
      "1-2 Module cơ bản",
      "Tối đa 10 người dùng",
      "Hỗ trợ qua email",
      "Lưu trữ 5GB dữ liệu",
      "Cập nhật phần mềm 6 tháng/lần",
      "Tài liệu hướng dẫn cơ bản",
    ],
    cta: "Bắt đầu ngay",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Dành cho doanh nghiệp vừa muốn tối ưu quy trình",
    price: "Liên hệ",
    priceNote: "Tùy theo module",
    icon: Building2,
    popular: true,
    features: [
      "3-5 Module tùy chọn",
      "Tối đa 50 người dùng",
      "Hỗ trợ ưu tiên qua điện thoại",
      "Lưu trữ 50GB dữ liệu",
      "Tích hợp AI cơ bản",
      "Cập nhật phần mềm hàng quý",
      "Đào tạo nhân viên tại chỗ",
      "Báo cáo phân tích nâng cao",
    ],
    cta: "Tư vấn miễn phí",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Giải pháp toàn diện cho tập đoàn và doanh nghiệp lớn",
    price: "Liên hệ",
    priceNote: "Báo giá riêng",
    icon: Crown,
    popular: false,
    features: [
      "Toàn bộ Module (ERP, CRM, HRM, DMS)",
      "Không giới hạn người dùng",
      "Hotline riêng 24/7",
      "Lưu trữ không giới hạn",
      "Tích hợp AI mạnh mẽ",
      "Cập nhật phần mềm liên tục",
      "Đào tạo & hỗ trợ tại chỗ",
      "Tùy chỉnh theo yêu cầu",
      "SLA cam kết 99.9% uptime",
      "Quản lý dự án chuyên biệt",
    ],
    cta: "Liên hệ tư vấn",
  },
]

const industryPricing = [
  {
    industry: "Quản lý Chất thải",
    icon: "🏭",
    description: "Hệ thống quản lý toàn diện cho ngành môi trường",
    modules: ["Thu gom & Vận chuyển", "Xử lý & Tái chế", "Báo cáo BTNMT"],
  },
  {
    industry: "Phòng Thí nghiệm (LIMS)",
    icon: "🔬",
    description: "Giải pháp quản lý phòng thí nghiệm chuyên nghiệp",
    modules: ["Quản lý mẫu", "Kiểm soát chất lượng", "Báo cáo kết quả"],
  },
  {
    industry: "Quản trị Doanh nghiệp",
    icon: "🏢",
    description: "Bộ giải pháp ERP, CRM, HRM, DMS tích hợp",
    modules: ["ERP", "CRM", "HRM", "DMS"],
  },
]

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-xl bg-white border border-slate-200 p-1.5 shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-[#3E8ED0] to-cyan-500 text-white shadow-md"
                  : "text-slate-600 hover:text-[#3E8ED0]"
              }`}
            >
              Thanh toán theo tháng
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-[#3E8ED0] to-cyan-500 text-white shadow-md"
                  : "text-slate-600 hover:text-[#3E8ED0]"
              }`}
            >
              Thanh toán theo năm
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all hover-lift opacity-0 animate-fade-up stagger-${index + 1} ${
                plan.popular
                  ? "bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0] text-white shadow-2xl shadow-[#3E8ED0]/30 scale-105 z-10"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
              style={{ animationFillMode: "forwards" }}
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
                    : "bg-gradient-to-br from-[#3E8ED0]/10 to-cyan-400/10"
                }`}>
                  <plan.icon className={`h-7 w-7 ${plan.popular ? "text-white" : "text-[#3E8ED0]"}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-slate-800"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-sky-100" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-slate-800"}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${plan.popular ? "text-sky-200" : "text-slate-500"}`}>
                  {plan.priceNote}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                      plan.popular ? "bg-white/20" : "bg-[#3E8ED0]/10"
                    }`}>
                      <Check className={`h-3 w-3 ${plan.popular ? "text-cyan-300" : "text-[#3E8ED0]"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-sky-100" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full gap-2 font-semibold py-6 ${
                  plan.popular
                    ? "bg-white text-[#1a6cb3] hover:bg-sky-50 shadow-lg"
                    : "bg-gradient-to-r from-[#3E8ED0] to-cyan-500 text-white hover:from-[#3E8ED0]/90 hover:to-cyan-500/90 shadow-lg shadow-[#3E8ED0]/20"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Industry Pricing */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#3E8ED0] mb-3">Giải pháp theo ngành</p>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Bảng giá theo lĩnh vực chuyên môn
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Mỗi ngành có đặc thù riêng, chúng tôi cung cấp giải pháp được thiết kế 
              đặc biệt với mức giá phù hợp.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {industryPricing.map((item, index) => (
              <div
                key={item.industry}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover-lift hover:border-[#3E8ED0]/30 hover:shadow-xl hover:shadow-[#3E8ED0]/10 opacity-0 animate-fade-up stagger-${index + 1}`}
                style={{ animationFillMode: "forwards", animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.industry}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.description}</p>
                
                <div className="space-y-2 mb-6">
                  {item.modules.map((module) => (
                    <div key={module} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#3E8ED0]" />
                      <span className="text-sm text-slate-700">{module}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full gap-2 border-slate-300 hover:border-[#3E8ED0] hover:text-[#3E8ED0] group-hover:bg-[#3E8ED0]/5"
                >
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
