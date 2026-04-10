import { Shield, Sparkles, HeartHandshake, Clock, CheckCircle2, Headphones, Award, RefreshCw } from "lucide-react"

const commitments = [
  {
    icon: Shield,
    title: "Đảm bảo Chất lượng",
    description: "Mọi giải pháp đều trải qua kiểm thử nghiêm ngặt và kiểm tra chất lượng. Chúng tôi tuân theo quy trình phát triển đạt chứng nhận ISO để đảm bảo độ tin cậy và hiệu suất.",
    highlights: ["Chứng nhận ISO 27001", "Kiểm thử tự động", "Code Review"],
  },
  {
    icon: Sparkles,
    title: "Đổi mới Liên tục",
    description: "Chúng tôi đầu tư mạnh vào R&D để giữ các giải pháp luôn tiên tiến. Cập nhật định kỳ mang đến tính năng mới và cải tiến hiệu suất cho hệ thống của bạn.",
    highlights: ["Cập nhật hàng quý", "Tích hợp AI", "Cloud-Native"],
  },
  {
    icon: HeartHandshake,
    title: "Thành công Khách hàng",
    description: "Thành công của bạn là thành công của chúng tôi. Chúng tôi cung cấp hỗ trợ onboarding, đào tạo và hỗ trợ liên tục toàn diện để đảm bảo bạn tối đa hóa giá trị từ giải pháp.",
    highlights: ["Quản lý tài khoản riêng", "Đào tạo tùy chỉnh", "Hỗ trợ 24/7"],
  },
]

const supportFeatures = [
  { icon: Clock, text: "SLA Uptime 99.9%" },
  { icon: Headphones, text: "Hỗ trợ kỹ thuật 24/7" },
  { icon: Award, text: "Best Practices ngành" },
  { icon: RefreshCw, text: "Cập nhật & Bản vá định kỳ" },
]

export function Commitment() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Cam kết của chúng tôi</p>
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
            Xuất sắc trong mọi dự án
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
            Chúng tôi cam kết mang lại giá trị vượt trội thông qua chất lượng, đổi mới
            và sự cống hiến không ngừng cho thành công của khách hàng.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-smooth hover:bg-primary-foreground/8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15">
                <commitment.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-bold text-primary-foreground">{commitment.title}</h3>
              <p className="mt-2 text-xs text-primary-foreground/70 leading-relaxed">
                {commitment.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {commitment.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-xs text-primary-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 lg:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl">
                Hỗ trợ cấp Doanh nghiệp
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                Đội ngũ hỗ trợ chuyên trách đảm bảo hệ thống của bạn hoạt động ổn định 24/7.
                Từ triển khai đến bảo trì liên tục, chúng tôi đồng hành cùng bạn trong mọi bước.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {supportFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2.5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-3"
                >
                  <feature.icon className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs font-medium text-primary-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
