import { Cloud, Headphones, Zap, Shield, FileCheck, Lock, Globe, Server } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Kiến trúc Cloud-Native",
    description: "Xây dựng trên hạ tầng cloud hiện đại với khả năng sẵn sàng, mở rộng và bảo mật tối đa. Triển khai on-premise hoặc cloud tùy theo nhu cầu của bạn.",
  },
  {
    icon: Headphones,
    title: "Đội ngũ Hỗ trợ Chuyên trách",
    description: "Hỗ trợ kỹ thuật chuyên nghiệp 24/7. Đội ngũ của chúng tôi am hiểu ngành và phản hồi nhanh chóng mọi vấn đề.",
  },
  {
    icon: Zap,
    title: "Triển khai Nhanh chóng",
    description: "Quy trình triển khai tối ưu với gián đoạn tối thiểu. Go-live trong vài tuần thay vì vài tháng, bao gồm đào tạo toàn diện.",
  },
]

const certifications = [
  { icon: Shield, label: "Chứng nhận ISO 27001" },
  { icon: FileCheck, label: "Tuân thủ SOC 2" },
  { icon: Lock, label: "Sẵn sàng GDPR" },
  { icon: Globe, label: "Hỗ trợ đa vùng" },
  { icon: Server, label: "SLA 99.9%" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Tại sao chọn chúng tôi</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Nền tảng cấp Doanh nghiệp đáng tin cậy
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Được xây dựng với bảo mật, độ tin cậy và tuân thủ làm cốt lõi. Nền tảng của chúng tôi
            đáp ứng các tiêu chuẩn cao nhất của ngành cho phần mềm doanh nghiệp.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-smooth hover:border-primary/20 hover:shadow-md"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-center text-xs text-muted-foreground mb-5">
            Chứng nhận bảo mật và tuân thủ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 transition-smooth hover:border-accent/25"
              >
                <cert.icon className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-foreground">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
