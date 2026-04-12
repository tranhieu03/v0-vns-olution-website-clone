import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  MapPin, 
  Factory, 
  FileText, 
  BarChart3, 
  Users,
  CheckCircle,
  ArrowRight,
  Bot,
  Cloud,
  Lock,
  Smartphone,
  Zap,
  Globe,
  Recycle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tính năng Chi tiết - Phần mềm Xử lý rác VNSolution",
  description: "Khám phá đầy đủ các tính năng của hệ thống quản lý chất thải: Thu gom, Vận chuyển, Xử lý, Báo cáo BTNMT và nhiều hơn nữa.",
}

const modules = [
  {
    id: "thu-gom",
    name: "Thu gom Chất thải",
    icon: Truck,
    color: "bg-green-500",
    description: "Quản lý toàn bộ quy trình thu gom rác thải từ lên lịch, phân tuyến đến giám sát realtime.",
    features: [
      { name: "Lập lịch thu gom tự động", description: "Hệ thống tự động lên lịch thu gom theo vùng, tần suất và loại chất thải" },
      { name: "Tối ưu hóa tuyến đường AI", description: "AI phân tích dữ liệu để đề xuất tuyến đường ngắn nhất, tiết kiệm nhiên liệu" },
      { name: "GPS tracking realtime", description: "Theo dõi vị trí xe thu gom trực tiếp trên bản đồ với độ chính xác cao" },
      { name: "Cảnh báo điểm thu gom đầy", description: "Cảm biến IoT thông báo khi thùng rác đầy để ưu tiên thu gom" },
      { name: "Xác nhận bằng QR Code", description: "Tài xế quét QR để xác nhận thu gom, chụp ảnh làm bằng chứng" },
      { name: "Báo cáo khối lượng tự động", description: "Tự động ghi nhận khối lượng từ cân xe, đồng bộ về hệ thống" },
    ],
    stats: [
      { value: "30%", label: "Giảm chi phí vận hành" },
      { value: "45%", label: "Tăng hiệu suất thu gom" },
      { value: "50%", label: "Giảm thời gian xử lý" },
    ],
  },
  {
    id: "van-chuyen",
    name: "Vận chuyển & Logistics",
    icon: MapPin,
    color: "bg-blue-500",
    description: "Quản lý đội xe vận chuyển, theo dõi lộ trình và tối ưu hóa chi phí logistics.",
    features: [
      { name: "Quản lý đội xe", description: "Theo dõi thông tin xe, tài xế, lịch bảo dưỡng và giấy phép" },
      { name: "GPS tracking realtime", description: "Vị trí xe realtime với lịch sử di chuyển chi tiết" },
      { name: "Tối ưu hóa lộ trình", description: "AI tính toán lộ trình tối ưu dựa trên giao thông, khoảng cách" },
      { name: "Quản lý giấy phép", description: "Nhắc nhở gia hạn giấy phép vận chuyển CTNH" },
      { name: "Theo dõi nhiên liệu", description: "Giám sát tiêu thụ nhiên liệu, phát hiện bất thường" },
      { name: "Cảnh báo bảo trì", description: "Thông báo lịch bảo dưỡng định kỳ và sửa chữa" },
    ],
    stats: [
      { value: "25%", label: "Tiết kiệm nhiên liệu" },
      { value: "35%", label: "Giảm thời gian" },
      { value: "20%", label: "Tăng số chuyến/ngày" },
    ],
  },
  {
    id: "xu-ly",
    name: "Xử lý & Tái chế",
    icon: Factory,
    color: "bg-orange-500",
    description: "Theo dõi quy trình xử lý chất thải tại nhà máy, kiểm soát chất lượng và tái chế.",
    features: [
      { name: "Theo dõi quy trình xử lý", description: "Giám sát từng công đoạn xử lý với timeline chi tiết" },
      { name: "Phân loại chất thải tự động", description: "Sử dụng AI nhận diện và phân loại chất thải" },
      { name: "Kiểm soát chất lượng", description: "Đo lường và đảm bảo chất lượng đầu ra đạt chuẩn" },
      { name: "Quản lý tái chế", description: "Theo dõi tỷ lệ tái chế, thu hồi nguyên liệu" },
      { name: "Giám sát khí thải", description: "Đo lường và cảnh báo khi khí thải vượt ngưỡng" },
      { name: "Báo cáo hiệu suất", description: "Dashboard phân tích hiệu suất xử lý theo thời gian" },
    ],
    stats: [
      { value: "40%", label: "Tăng tỷ lệ tái chế" },
      { value: "35%", label: "Giảm phát thải" },
      { value: "50%", label: "Tăng hiệu suất" },
    ],
  },
  {
    id: "bao-cao",
    name: "Báo cáo BTNMT",
    icon: FileText,
    color: "bg-purple-500",
    description: "Tự động tạo báo cáo theo quy định của Bộ Tài nguyên và Môi trường.",
    features: [
      { name: "Báo cáo định kỳ tự động", description: "Hệ thống tự động tạo báo cáo theo lịch quy định" },
      { name: "Mẫu báo cáo chuẩn BTNMT", description: "Sử dụng đúng biểu mẫu theo quy định hiện hành" },
      { name: "Theo dõi chỉ số môi trường", description: "Dashboard giám sát các chỉ số môi trường realtime" },
      { name: "Cảnh báo ngưỡng vi phạm", description: "Thông báo khi chỉ số tiệm cận ngưỡng vi phạm" },
      { name: "Lưu trữ hồ sơ điện tử", description: "Lưu trữ an toàn, dễ dàng truy xuất khi cần" },
      { name: "Xuất báo cáo đa định dạng", description: "Xuất PDF, Excel, Word theo yêu cầu" },
    ],
    stats: [
      { value: "70%", label: "Giảm thời gian báo cáo" },
      { value: "99%", label: "Độ chính xác" },
      { value: "100%", label: "Tuân thủ quy định" },
    ],
  },
]

const techFeatures = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description: "Dự báo khối lượng, tối ưu tuyến đường, phát hiện bất thường tự động.",
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description: "99.9% uptime, tự động sao lưu, mở rộng linh hoạt theo nhu cầu.",
  },
  {
    icon: Lock,
    title: "Bảo mật Enterprise",
    description: "Mã hóa AES-256, xác thực 2 lớp, tuân thủ ISO 27001.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Ứng dụng iOS & Android cho tài xế và quản lý.",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "RESTful API, Webhook, SDK cho tích hợp hệ thống.",
  },
  {
    icon: Globe,
    title: "Đa ngôn ngữ",
    description: "Hỗ trợ tiếng Việt, đơn vị đo chuẩn Việt Nam.",
  },
]

export default function WasteFeaturesPage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#002B05] via-[#003D0A] to-[#005A10]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A86B]/30 bg-[#00A86B]/10 px-4 py-2 mb-6">
            <Recycle className="h-4 w-4 text-[#4CD964]" />
            <span className="text-sm font-medium text-[#4CD964]">Tính năng Chi tiết</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Khám phá đầy đủ tính năng
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Hệ thống quản lý chất thải toàn diện với các module chuyên biệt, 
            có thể triển khai độc lập hoặc tích hợp.
          </p>
        </div>
      </section>

      {/* Modules Detail */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {modules.map((module, index) => (
              <div 
                key={module.id} 
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 rounded-full ${module.color}/10 px-4 py-2 mb-4`}>
                    <module.icon className={`h-4 w-4`} style={{ color: module.color.replace("bg-", "").replace("-500", "") === "green" ? "#22c55e" : module.color.replace("bg-", "").replace("-500", "") === "blue" ? "#3b82f6" : module.color.replace("bg-", "").replace("-500", "") === "orange" ? "#f97316" : "#a855f7" }} />
                    <span className="text-sm font-medium text-slate-700">{module.name}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#002B05] lg:text-3xl mb-4">
                    {module.name}
                  </h2>
                  
                  <p className="text-slate-600 mb-8">
                    {module.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {module.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white border border-slate-200 p-4 text-center">
                        <p className="text-2xl font-bold text-[#00A86B]">{stat.value}</p>
                        <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/giai-phap/quan-ly-chat-thai/bang-gia">
                    <Button className="gap-2 bg-[#00A86B] hover:bg-[#009060] text-white">
                      Xem bảng giá
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-[#002B05] mb-6">
                      Tính năng chi tiết
                    </h3>
                    <div className="space-y-4">
                      {module.features.map((feature) => (
                        <div key={feature.name} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                          <CheckCircle className="h-5 w-5 text-[#00A86B] shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-800">{feature.name}</p>
                            <p className="text-sm text-slate-600 mt-0.5">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl">
              Công nghệ hiện đại
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Nền tảng được xây dựng trên công nghệ tiên tiến nhất, 
              đảm bảo hiệu suất và tính ổn định.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-[#FAFDFA] border border-slate-200 p-6 hover:border-[#00A86B]/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A86B]/10">
                  <feature.icon className="h-6 w-6 text-[#00A86B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#002B05] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#00A86B] to-[#4CD964]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Sẵn sàng trải nghiệm?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng. 
            Đội ngũ hỗ trợ sẵn sàng giúp bạn bắt đầu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#00A86B] hover:bg-white/90 gap-2">
              Dùng thử miễn phí
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/giai-phap/quan-ly-chat-thai/bang-gia">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem bảng giá
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
