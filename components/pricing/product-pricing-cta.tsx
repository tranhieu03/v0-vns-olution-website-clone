import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText, ArrowRight } from "lucide-react"

const productNames: Record<string, string> = {
  erp: "ERP",
  crm: "CRM",
  hrm: "HRM",
  dms: "DMS"
}

export function ProductPricingCta({ product }: { product: string }) {
  const name = productNames[product] || product.toUpperCase()

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Sẵn sàng trải nghiệm VNSolution {name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn chi tiết và nhận báo giá phù hợp với nhu cầu doanh nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="gap-2 min-w-[200px]">
              <Phone className="h-4 w-4" />
              Gọi ngay: 1900 1234
            </Button>
            <Button size="lg" variant="outline" className="gap-2 min-w-[200px] bg-transparent text-white border-white/30 hover:bg-white/10">
              <MessageCircle className="h-4 w-4" />
              Chat với tư vấn viên
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Demo miễn phí</h3>
              <p className="text-sm text-white/70 mb-4">
                Xem demo sản phẩm với dữ liệu thực tế
              </p>
              <Link href="/ve-chung-toi/lien-he" className="inline-flex items-center gap-1 text-sm text-white hover:underline">
                Đăng ký demo
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Tư vấn 1:1</h3>
              <p className="text-sm text-white/70 mb-4">
                Chuyên gia tư vấn theo nhu cầu cụ thể
              </p>
              <Link href="/ve-chung-toi/lien-he" className="inline-flex items-center gap-1 text-sm text-white hover:underline">
                Đặt lịch tư vấn
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Báo giá nhanh</h3>
              <p className="text-sm text-white/70 mb-4">
                Nhận báo giá chi tiết trong 24h
              </p>
              <Link href="/ve-chung-toi/lien-he" className="inline-flex items-center gap-1 text-sm text-white hover:underline">
                Yêu cầu báo giá
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
