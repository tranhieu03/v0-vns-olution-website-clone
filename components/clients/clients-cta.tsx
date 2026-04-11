"use client"

import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0] p-8 lg:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/15 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 text-balance">
                Sẵn sàng trở thành khách hàng tiếp theo của chúng tôi?
              </h2>
              <p className="text-lg text-sky-100/90 mb-8 leading-relaxed">
                Hãy để VNSolution đồng hành cùng doanh nghiệp của bạn trong hành trình chuyển đổi số. 
                Liên hệ ngay để nhận tư vấn miễn phí và demo sản phẩm.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-sky-50 font-semibold"
                >
                  <Link href="/lien-he" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Liên hệ ngay
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold"
                >
                  <Link href="/bang-gia" className="gap-2">
                    Xem bảng giá
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Tại sao chọn VNSolution?
              </h3>
              <ul className="space-y-4">
                {[
                  "15+ năm kinh nghiệm trong ngành phần mềm",
                  "500+ doanh nghiệp tin tưởng sử dụng",
                  "Đội ngũ hỗ trợ 24/7 chuyên nghiệp",
                  "Cam kết bảo mật theo chuẩn ISO 27001",
                  "Tùy chỉnh theo yêu cầu riêng của doanh nghiệp",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sky-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
