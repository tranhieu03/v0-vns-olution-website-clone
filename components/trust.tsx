import { Cloud, Headphones, Zap, Shield, MapPin, Leaf } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Hạ tầng Cloud an toàn",
    description: "Triển khai trên nền tảng đám mây với độ tin cậy cao, backup tự động và khả năng mở rộng linh hoạt theo nhu cầu.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ kỹ thuật 24/7",
    description: "Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ mọi lúc, đảm bảo hệ thống vận hành liên tục không gián đoạn.",
  },
  {
    icon: Zap,
    title: "Triển khai nhanh chóng",
    description: "Quy trình triển khai tối ưu, đơn vị có thể bắt đầu sử dụng chỉ trong 2-4 tuần với đầy đủ tính năng.",
  },
]

const securityFeatures = [
  { icon: Shield, label: "Bảo mật đa lớp" },
  { icon: MapPin, label: "GPS/IoT tích hợp" },
  { icon: Leaf, label: "Báo cáo môi trường" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Nền tảng an toàn, đáng tin cậy
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            EcoWaste Pro được thiết kế với tiêu chuẩn bảo mật cao nhất, tích hợp công nghệ IoT hiện đại và tuân thủ các quy định về môi trường.
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
