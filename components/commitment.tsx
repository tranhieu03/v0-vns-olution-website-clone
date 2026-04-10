import { Shield, Sparkles, HeartHandshake, Clock, CheckCircle2, Headphones, Award, RefreshCw } from "lucide-react"

const commitments = [
  {
    icon: Shield,
    title: "Cam kết Chất lượng",
    description: "Mọi sản phẩm đều trải qua quy trình kiểm thử nghiêm ngặt trước khi bàn giao. Chúng tôi tuân thủ quy trình phát triển chuẩn ISO để đảm bảo độ tin cậy.",
    highlights: ["Chứng nhận ISO 27001", "Kiểm thử tự động", "Code Review nghiêm ngặt"],
  },
  {
    icon: Sparkles,
    title: "Đổi mới Liên tục",
    description: "Đội ngũ R&D không ngừng nghiên cứu công nghệ mới. Các bản cập nhật định kỳ mang đến tính năng mới và nâng cao hiệu suất hệ thống.",
    highlights: ["Cập nhật hàng quý", "Tích hợp công nghệ mới", "Kiến trúc Cloud-Native"],
  },
  {
    icon: HeartHandshake,
    title: "Đồng hành Khách hàng",
    description: "Chúng tôi cung cấp dịch vụ đào tạo, hỗ trợ triển khai và bảo trì toàn diện để đảm bảo bạn khai thác tối đa giá trị của giải pháp.",
    highlights: ["Tư vấn viên chuyên trách", "Đào tạo theo yêu cầu", "Hỗ trợ kỹ thuật 24/7"],
  },
]

const supportFeatures = [
  { icon: Clock, text: "Cam kết Uptime 99.9%" },
  { icon: Headphones, text: "Hỗ trợ kỹ thuật 24/7" },
  { icon: Award, text: "Đội ngũ chuyên gia ngành" },
  { icon: RefreshCw, text: "Cập nhật & Bảo trì định kỳ" },
]

export function Commitment() {
  return (
    <section className="bg-gradient-to-br from-[#3E8ED0] to-[#1A1E24] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-white/80 mb-3">Cam kết của chúng tôi</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Tiêu chuẩn chất lượng hàng đầu
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Chúng tôi cam kết mang đến giá trị bền vững thông qua chất lượng sản phẩm, 
            đổi mới công nghệ và sự tận tâm với thành công của khách hàng.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {commitments.map((commitment, index) => (
            <div
              key={commitment.title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-smooth hover:bg-white/10 opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <commitment.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">{commitment.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {commitment.description}
              </p>
              <ul className="mt-5 space-y-2">
                {commitment.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-white/80 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Hỗ trợ Doanh nghiệp Toàn diện
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Đội ngũ hỗ trợ chuyên trách sẵn sàng đồng hành 24/7, đảm bảo hệ thống 
                hoạt động ổn định và giải đáp mọi thắc mắc kịp thời.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {supportFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-smooth hover:bg-white/10`}
                >
                  <feature.icon className="h-5 w-5 text-white/80 shrink-0" />
                  <span className="text-sm font-medium text-white">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
