import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  Factory, 
  Recycle, 
  Gauge,
  Leaf,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Smartphone,
  Shield,
  TrendingUp,
  Zap,
  Layers,
  FlaskConical,
  Wind,
  BarChart3,
  Truck,
  MapPin,
  FileText
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Xử lý & Tái chế - Tính năng Chi tiết | VNSolution",
  description: "Theo dõi quy trình xử lý chất thải tại nhà máy, kiểm soát chất lượng và quản lý tái chế với công nghệ AI.",
}

const workflowSteps = [
  {
    step: 1,
    title: "Tiếp nhận chất thải",
    description: "Ghi nhận chất thải nhập kho, cân đo khối lượng và phân loại sơ bộ.",
    icon: Layers,
    color: "bg-orange-500",
    details: [
      "Cân tự động tại cổng nhà máy",
      "Quét mã vạch/QR nguồn gốc",
      "Phân loại theo mã CTNH",
      "Ghi nhận vào sổ theo dõi"
    ]
  },
  {
    step: 2,
    title: "Phân loại chi tiết",
    description: "Sử dụng AI và cảm biến để phân loại chi tiết thành phần chất thải.",
    icon: FlaskConical,
    color: "bg-blue-500",
    details: [
      "Nhận diện thành phần bằng AI",
      "Phân loại tự động theo dây chuyền",
      "Tách riêng vật liệu tái chế",
      "Kiểm tra độc hại/nguy hiểm"
    ]
  },
  {
    step: 3,
    title: "Xử lý & Tái chế",
    description: "Thực hiện quy trình xử lý theo từng loại chất thải và thu hồi nguyên liệu.",
    icon: Recycle,
    color: "bg-green-500",
    details: [
      "Đốt, chôn lấp hoặc tái chế",
      "Theo dõi quy trình realtime",
      "Kiểm soát chỉ số môi trường",
      "Thu hồi năng lượng/nguyên liệu"
    ]
  },
  {
    step: 4,
    title: "Báo cáo & Đầu ra",
    description: "Ghi nhận kết quả xử lý, báo cáo khí thải và sản phẩm tái chế.",
    icon: BarChart3,
    color: "bg-purple-500",
    details: [
      "Báo cáo khối lượng xử lý",
      "Thống kê tỷ lệ tái chế",
      "Ghi nhận khí thải phát sinh",
      "Xuất chứng từ xử lý CTNH"
    ]
  }
]

const features = [
  {
    icon: Layers,
    title: "Theo dõi quy trình",
    description: "Giám sát từng công đoạn xử lý với timeline chi tiết, từ tiếp nhận đến hoàn thành."
  },
  {
    icon: FlaskConical,
    title: "Phân loại AI",
    description: "Sử dụng AI và camera thông minh để nhận diện và phân loại chất thải tự động."
  },
  {
    icon: Gauge,
    title: "Kiểm soát chất lượng",
    description: "Đo lường và đảm bảo chất lượng đầu ra đạt tiêu chuẩn môi trường."
  },
  {
    icon: Recycle,
    title: "Quản lý tái chế",
    description: "Theo dõi tỷ lệ tái chế, thu hồi nguyên liệu và giá trị kinh tế từ chất thải."
  },
  {
    icon: Wind,
    title: "Giám sát khí thải",
    description: "Đo lường realtime và cảnh báo khi chỉ số khí thải vượt ngưỡng cho phép."
  },
  {
    icon: BarChart3,
    title: "Báo cáo hiệu suất",
    description: "Dashboard phân tích hiệu suất xử lý theo ngày, tuần, tháng với biểu đồ trực quan."
  },
  {
    icon: Shield,
    title: "Tuân thủ quy định",
    description: "Đảm bảo quy trình tuân thủ đầy đủ quy định của Bộ TN&MT về xử lý CTNH."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "App cho nhân viên nhà máy ghi nhận, báo cáo và theo dõi quy trình."
  }
]

const stats = [
  { value: "40%", label: "Tăng tỷ lệ tái chế", description: "Thu hồi nhiều nguyên liệu hơn" },
  { value: "35%", label: "Giảm phát thải", description: "Kiểm soát khí thải hiệu quả" },
  { value: "50%", label: "Tăng hiệu suất", description: "Xử lý nhanh hơn" },
  { value: "100%", label: "Tuân thủ quy định", description: "Đạt chuẩn BTNMT" }
]

export default function XuLyFeaturePage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#7c2d12] via-[#c2410c] to-[#ea580c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 mb-6">
                <Factory className="h-4 w-4 text-orange-300" />
                <span className="text-sm font-medium text-orange-300">Tính năng Xử lý</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Xử lý & Tái chế
                <span className="text-orange-300"> Thông minh</span>
              </h1>
              
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Theo dõi quy trình xử lý chất thải tại nhà máy, kiểm soát chất lượng 
                và tối ưu hóa tỷ lệ tái chế với công nghệ AI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-white">
                  Dùng thử miễn phí
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/30 text-white hover:bg-white/10">
                  <Play className="h-4 w-4" />
                  Xem demo
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-orange-300">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 border border-orange-400/30 p-4 shadow-2xl">
                <div className="rounded-xl bg-white overflow-hidden shadow-lg">
                  <div className="bg-[#7c2d12] px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-white/60">Processing Dashboard</div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-orange-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Factory className="h-5 w-5 text-orange-600" />
                          <span className="text-sm font-medium text-slate-700">Đang xử lý</span>
                        </div>
                        <p className="text-2xl font-bold text-orange-600">156 tấn</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Recycle className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium text-slate-700">Tái chế</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">42%</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-slate-50 p-4">
                      <p className="text-sm text-slate-600 mb-2">Tiến độ xử lý hôm nay</p>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">75% hoàn thành - còn 45 tấn</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-lg bg-blue-50 p-2 text-center">
                        <Leaf className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-slate-600">CO2: 12ppm</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-2 text-center">
                        <Wind className="h-4 w-4 text-green-600 mx-auto mb-1" />
                        <p className="text-xs text-slate-600">PM2.5: OK</p>
                      </div>
                      <div className="rounded-lg bg-yellow-50 p-2 text-center">
                        <Gauge className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
                        <p className="text-xs text-slate-600">Temp: 850°C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 rounded-xl bg-white p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">Lô CT-2024-001</p>
                    <p className="text-xs text-slate-500">Xử lý hoàn tất</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 mb-4">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-600">Quy trình xử lý</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Flow xử lý Chất thải
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Quy trình xử lý được giám sát chặt chẽ từ tiếp nhận đến đầu ra, 
              đảm bảo tuân thủ quy định môi trường.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 via-green-500 to-purple-500 hidden lg:block transform -translate-y-1/2 z-0" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {workflowSteps.map((item) => (
                <div key={item.step} className="group">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-white font-bold text-lg`}>
                        {item.step}
                      </div>
                      <div className={`h-10 w-10 rounded-lg ${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5`} style={{ color: item.color === "bg-orange-500" ? "#f97316" : item.color === "bg-blue-500" ? "#3b82f6" : item.color === "bg-green-500" ? "#22c55e" : "#a855f7" }} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#002B05] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-[#FAFDFA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-600">Tính năng chi tiết</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Công cụ quản lý xử lý toàn diện
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white border border-slate-200 p-6 hover:border-orange-500/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#002B05] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-orange-400">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Sẵn sàng tối ưu hóa xử lý chất thải?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Dùng thử miễn phí 14 ngày, nâng cao hiệu suất xử lý và tỷ lệ tái chế.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 gap-2">
              Bắt đầu dùng thử
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/giai-phap/quan-ly-chat-thai/bang-gia">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem bảng giá
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-4">Xem thêm các tính năng khác</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/thu-gom">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <Truck className="h-4 w-4" />
                  Thu gom
                </Button>
              </Link>
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/van-chuyen">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <MapPin className="h-4 w-4" />
                  Vận chuyển
                </Button>
              </Link>
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/bao-cao">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <FileText className="h-4 w-4" />
                  Báo cáo BTNMT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
