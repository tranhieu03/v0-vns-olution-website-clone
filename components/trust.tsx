import { Cloud, Headphones, Zap, Shield, Server, Lock } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Hạ tầng AWS Cloud",
    description: "Triển khai trên nền tảng đám mây Amazon Web Services với độ tin cậy và bảo mật hàng đầu thế giới.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ mọi lúc, đảm bảo hệ thống vận hành liên tục.",
  },
  {
    icon: Zap,
    title: "Triển khai nhanh",
    description: "Quy trình triển khai tối ưu, doanh nghiệp có thể bắt đầu sử dụng chỉ trong vài ngày.",
  },
]

const securityFeatures = [
  { icon: Shield, label: "Bảo mật đa lớp" },
  { icon: Server, label: "Backup tự động" },
  { icon: Lock, label: "Mã hóa dữ liệu" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Nền tảng an toàn đáng tin cậy
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            VNSolution đồng hành cùng doanh nghiệp đa ngành, giúp tối ưu hệ thống quản lý nội bộ và tự động hóa quy trình với công nghệ tiên tiến nhất.
          </p>
        </div>

        {/* Trust Features */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2"
            >
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
