"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Sparkles } from "lucide-react"

const pricingData: Record<string, {
  plans: {
    name: string
    description: string
    monthlyPrice: number
    yearlyPrice: number
    users: string
    features: { name: string; included: boolean }[]
    popular?: boolean
    badge?: string
  }[]
}> = {
  erp: {
    plans: [
      {
        name: "Starter",
        description: "Phù hợp doanh nghiệp nhỏ",
        monthlyPrice: 5000000,
        yearlyPrice: 50000000,
        users: "1-10 người dùng",
        features: [
          { name: "Quản lý tài chính cơ bản", included: true },
          { name: "Quản lý kho đơn giản", included: true },
          { name: "Báo cáo cơ bản", included: true },
          { name: "Hỗ trợ email", included: true },
          { name: "Quản lý sản xuất", included: false },
          { name: "Tích hợp API", included: false },
          { name: "Phân tích nâng cao", included: false },
          { name: "Hỗ trợ 24/7", included: false },
        ]
      },
      {
        name: "Professional",
        description: "Cho doanh nghiệp đang phát triển",
        monthlyPrice: 12000000,
        yearlyPrice: 120000000,
        users: "11-50 người dùng",
        popular: true,
        badge: "Phổ biến",
        features: [
          { name: "Tất cả tính năng Starter", included: true },
          { name: "Quản lý sản xuất", included: true },
          { name: "Quản lý dự án", included: true },
          { name: "Tích hợp API cơ bản", included: true },
          { name: "Báo cáo tùy chỉnh", included: true },
          { name: "Hỗ trợ điện thoại", included: true },
          { name: "Phân tích nâng cao", included: false },
          { name: "Multi-branch", included: false },
        ]
      },
      {
        name: "Enterprise",
        description: "Dành cho doanh nghiệp lớn",
        monthlyPrice: 25000000,
        yearlyPrice: 250000000,
        users: "Không giới hạn",
        badge: "Đầy đủ",
        features: [
          { name: "Tất cả tính năng Professional", included: true },
          { name: "Multi-branch/Multi-company", included: true },
          { name: "Phân tích AI & BI", included: true },
          { name: "API không giới hạn", included: true },
          { name: "Tùy chỉnh theo yêu cầu", included: true },
          { name: "Account Manager riêng", included: true },
          { name: "Hỗ trợ 24/7", included: true },
          { name: "SLA 99.9%", included: true },
        ]
      }
    ]
  },
  crm: {
    plans: [
      {
        name: "Starter",
        description: "Cho team nhỏ",
        monthlyPrice: 2000000,
        yearlyPrice: 20000000,
        users: "1-5 người dùng",
        features: [
          { name: "Quản lý contacts", included: true },
          { name: "Pipeline bán hàng", included: true },
          { name: "Email tracking", included: true },
          { name: "Báo cáo cơ bản", included: true },
          { name: "Automation", included: false },
          { name: "Tích hợp marketing", included: false },
          { name: "API access", included: false },
          { name: "Custom fields", included: false },
        ]
      },
      {
        name: "Professional",
        description: "Cho team bán hàng",
        monthlyPrice: 5000000,
        yearlyPrice: 50000000,
        users: "6-25 người dùng",
        popular: true,
        badge: "Phổ biến",
        features: [
          { name: "Tất cả tính năng Starter", included: true },
          { name: "Sales automation", included: true },
          { name: "Email campaigns", included: true },
          { name: "Custom reports", included: true },
          { name: "API access", included: true },
          { name: "Lead scoring", included: true },
          { name: "AI insights", included: false },
          { name: "Advanced analytics", included: false },
        ]
      },
      {
        name: "Enterprise",
        description: "Cho doanh nghiệp lớn",
        monthlyPrice: 12000000,
        yearlyPrice: 120000000,
        users: "Không giới hạn",
        features: [
          { name: "Tất cả tính năng Professional", included: true },
          { name: "AI-powered insights", included: true },
          { name: "Advanced analytics", included: true },
          { name: "Custom workflows", included: true },
          { name: "Multi-pipeline", included: true },
          { name: "Dedicated support", included: true },
          { name: "On-premise option", included: true },
          { name: "SLA guarantee", included: true },
        ]
      }
    ]
  },
  hrm: {
    plans: [
      {
        name: "Basic",
        description: "Quản lý nhân sự cơ bản",
        monthlyPrice: 3000000,
        yearlyPrice: 30000000,
        users: "1-30 nhân viên",
        features: [
          { name: "Hồ sơ nhân viên", included: true },
          { name: "Chấm công cơ bản", included: true },
          { name: "Quản lý nghỉ phép", included: true },
          { name: "Báo cáo cơ bản", included: true },
          { name: "Tính lương tự động", included: false },
          { name: "Đánh giá KPI", included: false },
          { name: "Tuyển dụng", included: false },
          { name: "Mobile app", included: false },
        ]
      },
      {
        name: "Standard",
        description: "Giải pháp HR toàn diện",
        monthlyPrice: 7000000,
        yearlyPrice: 70000000,
        users: "31-100 nhân viên",
        popular: true,
        badge: "Phổ biến",
        features: [
          { name: "Tất cả tính năng Basic", included: true },
          { name: "Tính lương tự động", included: true },
          { name: "Đánh giá KPI", included: true },
          { name: "Mobile app", included: true },
          { name: "Tuyển dụng cơ bản", included: true },
          { name: "Đào tạo online", included: true },
          { name: "AI analytics", included: false },
          { name: "Custom workflows", included: false },
        ]
      },
      {
        name: "Premium",
        description: "Enterprise HR Suite",
        monthlyPrice: 15000000,
        yearlyPrice: 150000000,
        users: "Không giới hạn",
        features: [
          { name: "Tất cả tính năng Standard", included: true },
          { name: "AI-powered insights", included: true },
          { name: "Custom workflows", included: true },
          { name: "Multi-company", included: true },
          { name: "ATS đầy đủ", included: true },
          { name: "Learning Management", included: true },
          { name: "Succession planning", included: true },
          { name: "24/7 support", included: true },
        ]
      }
    ]
  },
  dms: {
    plans: [
      {
        name: "Essential",
        description: "Quản lý phân phối cơ bản",
        monthlyPrice: 4000000,
        yearlyPrice: 40000000,
        users: "1-20 người dùng",
        features: [
          { name: "Quản lý đơn hàng", included: true },
          { name: "Quản lý kho cơ bản", included: true },
          { name: "Báo cáo doanh số", included: true },
          { name: "Mobile app", included: true },
          { name: "Route planning", included: false },
          { name: "GPS tracking", included: false },
          { name: "Promotion management", included: false },
          { name: "Real-time analytics", included: false },
        ]
      },
      {
        name: "Business",
        description: "Cho nhà phân phối",
        monthlyPrice: 10000000,
        yearlyPrice: 100000000,
        users: "21-100 người dùng",
        popular: true,
        badge: "Phổ biến",
        features: [
          { name: "Tất cả tính năng Essential", included: true },
          { name: "Route planning", included: true },
          { name: "GPS tracking", included: true },
          { name: "Promotion management", included: true },
          { name: "Multi-warehouse", included: true },
          { name: "Real-time sync", included: true },
          { name: "Advanced analytics", included: false },
          { name: "API integration", included: false },
        ]
      },
      {
        name: "Enterprise",
        description: "Giải pháp tổng thể",
        monthlyPrice: 20000000,
        yearlyPrice: 200000000,
        users: "Không giới hạn",
        features: [
          { name: "Tất cả tính năng Business", included: true },
          { name: "Advanced analytics & BI", included: true },
          { name: "Full API integration", included: true },
          { name: "Custom development", included: true },
          { name: "Multi-region support", included: true },
          { name: "Dedicated server", included: true },
          { name: "24/7 support", included: true },
          { name: "SLA 99.9%", included: true },
        ]
      }
    ]
  }
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price)
}

export function ProductPricingPlans({ product }: { product: string }) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const data = pricingData[product] || pricingData.erp

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl mb-4">
            Chọn gói phù hợp với doanh nghiệp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Linh hoạt theo quy mô và nhu cầu. Tất cả các gói đều bao gồm hỗ trợ triển khai và đào tạo.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 p-1 rounded-full bg-secondary/50">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "monthly" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Thanh toán tháng
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "yearly" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Thanh toán năm
              <Badge className="ml-2 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                -17%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-6 lg:p-8 ${
                plan.popular 
                  ? "border-primary bg-primary/5 shadow-lg scale-105" 
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                  plan.popular 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-foreground"
                }`}>
                  {plan.popular && <Sparkles className="h-3 w-3 mr-1" />}
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    {formatPrice(billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice)}đ
                  </span>
                  <span className="text-muted-foreground">
                    /{billingPeriod === "monthly" ? "tháng" : "năm"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.users}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground/50"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.popular ? "Bắt đầu dùng thử" : "Liên hệ tư vấn"}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Giá chưa bao gồm VAT. Liên hệ để được báo giá chính xác theo nhu cầu.
        </p>
      </div>
    </section>
  )
}
