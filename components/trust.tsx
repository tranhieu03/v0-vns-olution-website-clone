import { Cloud, Headphones, Zap, Shield, FileCheck, Lock } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Hạ tầng đám mây bảo mật",
    description: "Triển khai trên hạ tầng Cloud chính phủ hoặc on-premise, đảm bảo an toàn dữ liệu theo quy định nhà nước.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ kỹ thuật chuyên biệt",
    description: "Đội ngũ kỹ thuật am hiểu nghiệp vụ kiểm nghiệm, sẵn sàng hỗ trợ 24/7 và đào tạo sử dụng tại chỗ.",
  },
  {
    icon: Zap,
    title: "Triển khai linh hoạt",
    description: "Hỗ trợ triển khai tập trung hoặc phân tán, tích hợp với hệ thống hiện có của đơn vị.",
  },
]

const securityFeatures = [
  { icon: Shield, label: "ISO/IEC 17025" },
  { icon: FileCheck, label: "Chữ ký số" },
  { icon: Lock, label: "Bảo mật dữ liệu" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Nền tảng an toàn, tuân thủ chuẩn mực
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            LabQC được thiết kế theo tiêu chuẩn ISO/IEC 17025 về năng lực phòng thử nghiệm, 
            tích hợp chữ ký số và tuân thủ quy định về chứng từ điện tử của nhà nước.
          </p>
        </div>

        {/* Trust Features */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
