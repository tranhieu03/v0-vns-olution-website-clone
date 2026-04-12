import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Building2, Factory, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bảng giá Phần mềm Xử lý rác - VNSolution",
  description: "Bảng giá linh hoạt cho phần mềm quản lý chất thải. Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.",
}

const plans = [
  {
    name: "Starter",
    description: "Phù hợp cho doanh nghiệp nhỏ mới bắt đầu số hóa quy trình",
    price: "2.500.000",
    period: "tháng",
    highlight: false,
    features: [
      "Tối đa 5 người dùng",
      "1 điểm thu gom",
      "Module Thu gom cơ bản",
      "Báo cáo tháng tự động",
      "Hỗ trợ email",
      "Lưu trữ 10GB",
    ],
    notIncluded: [
      "GPS tracking",
      "Tích hợp API",
      "AI tối ưu tuyến đường",
    ],
    cta: "Bắt đầu miễn phí",
    icon: Zap,
  },
  {
    name: "Business",
    description: "Giải pháp toàn diện cho doanh nghiệp vừa và lớn",
    price: "8.500.000",
    period: "tháng",
    highlight: true,
    badge: "Phổ biến nhất",
    features: [
      "Tối đa 25 người dùng",
      "10 điểm thu gom",
      "Tất cả Module cơ bản",
      "GPS tracking realtime",
      "Báo cáo BTNMT tự động",
      "Hỗ trợ điện thoại 24/7",
      "Lưu trữ 100GB",
      "Tích hợp API cơ bản",
      "AI tối ưu tuyến đường",
    ],
    notIncluded: [
      "Tùy chỉnh theo yêu cầu",
    ],
    cta: "Dùng thử 14 ngày",
    icon: Building2,
  },
  {
    name: "Enterprise",
    description: "Giải pháp tùy chỉnh theo quy mô và yêu cầu đặc thù",
    price: "Liên hệ",
    period: "",
    highlight: false,
    features: [
      "Không giới hạn người dùng",
      "Không giới hạn điểm thu gom",
      "Tất cả Module nâng cao",
      "GPS tracking + IoT sensors",
      "Báo cáo tùy chỉnh",
      "Account Manager riêng",
      "Lưu trữ không giới hạn",
      "Tích hợp API đầy đủ",
      "AI + Machine Learning",
      "Triển khai On-premise",
      "SLA 99.9%",
    ],
    notIncluded: [],
    cta: "Liên hệ tư vấn",
    icon: Factory,
  },
]

const faqs = [
  {
    question: "Có thể dùng thử miễn phí không?",
    answer: "Có, bạn có thể dùng thử gói Business miễn phí trong 14 ngày mà không cần nhập thông tin thẻ tín dụng.",
  },
  {
    question: "Có thể nâng cấp hoặc hạ cấp gói không?",
    answer: "Có, bạn có thể thay đổi gói bất cứ lúc nào. Chi phí sẽ được tính toán theo tỷ lệ thời gian sử dụng còn lại.",
  },
  {
    question: "Phương thức thanh toán được hỗ trợ?",
    answer: "Chúng tôi hỗ trợ thanh toán qua chuyển khoản ngân hàng, thẻ tín dụng/debit, và các ví điện tử phổ biến.",
  },
  {
    question: "Thời gian triển khai mất bao lâu?",
    answer: "Gói Starter có thể bắt đầu ngay. Gói Business cần 1-2 tuần. Gói Enterprise tùy thuộc vào quy mô và yêu cầu tùy chỉnh.",
  },
]

export default function WastePricingPage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#002B05] via-[#003D0A] to-[#005A10]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Bảng giá linh hoạt
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Chọn gói phù hợp với quy mô doanh nghiệp của bạn. 
            Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 lg:py-20 -mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all ${
                  plan.highlight
                    ? "bg-white border-2 border-[#00A86B] shadow-xl shadow-[#00A86B]/10"
                    : "bg-white border border-slate-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00A86B] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl mb-4 ${
                    plan.highlight ? "bg-[#00A86B]" : "bg-[#00A86B]/10"
                  }`}>
                    <plan.icon className={`h-7 w-7 ${plan.highlight ? "text-white" : "text-[#00A86B]"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#002B05]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#002B05]">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-500">VNĐ/{plan.period}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-50">
                      <div className="h-5 w-5 rounded-full border-2 border-slate-300 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full gap-2 ${
                    plan.highlight
                      ? "bg-[#00A86B] hover:bg-[#009060] text-white"
                      : "bg-white border border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B]/5"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#002B05]">{faq.question}</h3>
                    <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#00A86B] to-[#4CD964]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Cần tư vấn gói phù hợp?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn chọn giải pháp 
            phù hợp nhất với nhu cầu doanh nghiệp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#00A86B] hover:bg-white/90 gap-2">
              Liên hệ tư vấn
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/giai-phap/quan-ly-chat-thai">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem tính năng
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
