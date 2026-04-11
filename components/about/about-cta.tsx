"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d4a7c] via-[#1a6cb3] to-[#3E8ED0] p-8 lg:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/15 rounded-full blur-3xl" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 text-balance">
              Sẵn sàng đồng hành cùng VNSolution?
            </h2>
            <p className="text-lg text-sky-100/90 mb-8 leading-relaxed">
              Hãy để chúng tôi giúp doanh nghiệp của bạn chuyển đổi số thành công. 
              Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia của VNSolution.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-sky-50 font-semibold"
              >
                <Link href="/ve-chung-toi/lien-he" className="gap-2">
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
                <Link href="/khach-hang" className="gap-2">
                  Xem khách hàng
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
