"use client"

import { Button } from "@/components/ui/button"
import { Headphones, MessageCircle } from "lucide-react"
import Link from "next/link"

export function KnowledgeCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Cần hỗ trợ thêm?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Nếu bạn không tìm thấy câu trả lời, đội ngũ hỗ trợ của chúng tôi 
            luôn sẵn sàng giúp đỡ bạn 24/7.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 font-medium px-8"
              asChild
            >
              <Link href="/ve-chung-toi/lien-he">
                <Headphones className="h-5 w-5" />
                Liên hệ hỗ trợ
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 font-medium px-8 border-white/30 text-white hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Chat trực tuyến
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">Hỗ trợ</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-2xl font-bold text-white">&lt;2h</div>
              <div className="text-sm text-white/70">Phản hồi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-white/70">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
