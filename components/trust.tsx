import { Cloud, Headphones, Zap, Shield, FileCheck, Server, Users, Award } from "lucide-react"

const trustFeatures = [
  {
    icon: Cloud,
    title: "Triển khai Linh hoạt",
    description: "Hỗ trợ cài đặt trên Cloud hoặc máy chủ nội bộ (On-premise). Lựa chọn mô hình phù hợp với yêu cầu bảo mật và hạ tầng của doanh nghiệp.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ Chuyên nghiệp",
    description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ 24/7. Phản hồi nhanh chóng và giải quyết vấn đề hiệu quả với SLA cam kết rõ ràng.",
  },
  {
    icon: Zap,
    title: "Triển khai Nhanh chóng",
    description: "Quy trình triển khai tối ưu, go-live trong thời gian ngắn. Đào tạo toàn diện cho người dùng đảm bảo sử dụng hiệu quả ngay từ đầu.",
  },
]

const certifications = [
  { icon: Shield, label: "ISO 27001" },
  { icon: FileCheck, label: "Bảo mật dữ liệu" },
  { icon: Server, label: "Uptime 99.9%" },
  { icon: Users, label: "200+ Khách hàng" },
  { icon: Award, label: "15+ Năm kinh nghiệm" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24 bg-[#1A1E24]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Tại sao chọn VNSolution</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Nền tảng công nghệ đáng tin cậy
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Được xây dựng với tiêu chuẩn bảo mật cao nhất, VNSolution đáp ứng 
            đầy đủ yêu cầu của doanh nghiệp về độ ổn định và an toàn dữ liệu.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center transition-smooth hover-lift hover:bg-white/10 opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-smooth group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-center text-sm text-white/60 mb-6">
            Chứng nhận & Cam kết
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition-smooth hover:bg-white/10"
              >
                <cert.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-white">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
