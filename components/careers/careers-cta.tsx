"use client"

import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CareersCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Không tìm thấy vị trí phù hợp?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Gửi CV của bạn đến chúng tôi. Khi có vị trí phù hợp, 
            đội ngũ tuyển dụng sẽ liên hệ với bạn ngay.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 font-medium px-8"
            >
              <Mail className="h-5 w-5" />
              Gửi CV của bạn
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 font-medium px-8 border-white/30 text-white hover:bg-white/10"
            >
              Theo dõi fanpage
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 pt-10 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Liên hệ phòng nhân sự</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
              <a href="mailto:hr@vnsolution.vn" className="hover:text-white/80 transition-colors">
                hr@vnsolution.vn
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <a href="tel:02471234567" className="hover:text-white/80 transition-colors">
                024 7123 4567 (ext: 102)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
