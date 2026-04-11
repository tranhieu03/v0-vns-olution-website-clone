import { 
  Bot, 
  Cloud, 
  Lock, 
  Smartphone, 
  Zap, 
  Globe,
  CheckCircle
} from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Tích hợp AI thông minh",
    description: "Dự báo khối lượng chất thải, tối ưu tuyến đường và phát hiện bất thường tự động.",
    benefits: ["Dự báo chính xác 95%", "Tối ưu 30% chi phí", "Phát hiện sớm vấn đề"],
  },
  {
    icon: Cloud,
    title: "Cloud-based Platform",
    description: "Triển khai trên nền tảng đám mây, truy cập mọi lúc mọi nơi với độ ổn định cao.",
    benefits: ["99.9% uptime", "Tự động sao lưu", "Mở rộng linh hoạt"],
  },
  {
    icon: Lock,
    title: "Bảo mật cấp doanh nghiệp",
    description: "Mã hóa dữ liệu end-to-end, phân quyền chi tiết và tuân thủ chuẩn bảo mật quốc tế.",
    benefits: ["Mã hóa AES-256", "ISO 27001", "Kiểm soát truy cập"],
  },
  {
    icon: Smartphone,
    title: "Ứng dụng Mobile",
    description: "App di động cho tài xế, giám sát viên và quản lý để theo dõi công việc realtime.",
    benefits: ["iOS & Android", "Hoạt động offline", "Thông báo tức thì"],
  },
  {
    icon: Zap,
    title: "Tích hợp API mở",
    description: "Kết nối dễ dàng với các hệ thống hiện có như ERP, kế toán, quản lý xe.",
    benefits: ["RESTful API", "Webhook events", "SDK đầy đủ"],
  },
  {
    icon: Globe,
    title: "Đa ngôn ngữ & Đa đơn vị",
    description: "Hỗ trợ tiếng Việt, tiếng Anh và các đơn vị đo lường theo quy chuẩn Việt Nam.",
    benefits: ["Tiếng Việt 100%", "Tuân thủ BTNMT", "Báo cáo chuẩn VN"],
  },
]

export function WasteFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-green-500 mb-3">Tính năng nổi bật</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Công nghệ hiện đại, vận hành thông minh
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nền tảng được xây dựng trên công nghệ tiên tiến nhất, đảm bảo hiệu suất 
            và tính ổn định cho doanh nghiệp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white border border-slate-200 p-6 transition-all hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:from-green-500 group-hover:to-emerald-500 transition-all">
                <feature.icon className="h-6 w-6 text-green-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
