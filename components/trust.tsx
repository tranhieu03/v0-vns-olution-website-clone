import { Cloud, Headphones, Zap, Shield, FileCheck, Server, Users, Award, Clock, TrendingUp } from "lucide-react"

const bigNumbers = [
  { value: "200+", label: "Doanh nghiệp tin dùng", icon: Users },
  { value: "10,000+", label: "Người dùng mỗi ngày", icon: TrendingUp },
  { value: "99.9%", label: "Uptime cam kết", icon: Server },
  { value: "15+", label: "Năm kinh nghiệm", icon: Award },
]

const trustFeatures = [
  {
    icon: Cloud,
    title: "Cloud hoặc On-premise",
    description: "Triển khai linh hoạt theo yêu cầu bảo mật. Dữ liệu lưu trữ tại Việt Nam, tuân thủ quy định ATTT.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7 tiếng Việt",
    description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc. Phản hồi trong 2 giờ với SLA cam kết rõ ràng.",
  },
  {
    icon: Zap,
    title: "Go-live trong 7 ngày",
    description: "Quy trình triển khai chuẩn hóa. Đào tạo tận nơi, nhân viên tự dùng được ngay sau 2 giờ.",
  },
]

const certifications = [
  { icon: Shield, label: "ISO 27001", description: "Bảo mật thông tin" },
  { icon: FileCheck, label: "ATTT", description: "Chứng nhận Việt Nam" },
  { icon: Server, label: "SLA 99.9%", description: "Cam kết uptime" },
  { icon: Clock, label: "2h SLA", description: "Phản hồi nhanh" },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Big Numbers - Make Trust "đập vào mắt" */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bigNumbers.map((item, index) => (
            <div
              key={item.label}
              className={`text-center p-6 rounded-2xl bg-card border border-border transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex justify-center mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Nền tảng đáng tin cậy</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            An tâm về bảo mật & hỗ trợ kỹ thuật
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dữ liệu doanh nghiệp được bảo vệ với tiêu chuẩn quốc tế. 
            Đội ngũ kỹ thuật sẵn sàng hỗ trợ 24/7, không để công việc gián đoạn.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-14">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-border bg-card p-8 text-center transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-border p-8 lg:p-10">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-foreground mb-2">Chứng nhận & Cam kết</p>
            <p className="text-sm text-muted-foreground">Đạt các tiêu chuẩn bảo mật quốc tế và Việt Nam</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-muted/50 border border-border transition-smooth hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">{cert.label}</p>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
