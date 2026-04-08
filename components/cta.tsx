import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Leaf } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground">
            <Leaf className="h-4 w-4" />
            <span>Cùng nhau bảo vệ môi trường</span>
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
            Sẵn sàng chuyển đổi số ngành môi trường?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-pretty">
            Đăng ký ngay hôm nay để nhận 14 ngày dùng thử miễn phí và tư vấn chuyên sâu từ đội ngũ chuyên gia của EcoWaste Pro
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold">
              Đăng ký dùng thử
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Phone className="h-4 w-4" />
              Liên hệ tư vấn
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Không cần thẻ tín dụng - Hỗ trợ triển khai - Huấn luyện sử dụng miễn phí
          </p>
        </div>
      </div>
    </section>
  )
}
