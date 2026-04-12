import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Truck, 
  Route,
  Fuel,
  Wrench,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Smartphone,
  Shield,
  TrendingUp,
  Users,
  Zap,
  AlertTriangle,
  Navigation,
  Gauge
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vận chuyển & Logistics - Tính năng Chi tiết | VNSolution",
  description: "Quản lý đội xe vận chuyển, theo dõi lộ trình realtime và tối ưu hóa chi phí logistics với công nghệ GPS và AI.",
}

const workflowSteps = [
  {
    step: 1,
    title: "Quản lý đội xe",
    description: "Theo dõi thông tin xe, tài xế, giấy phép và lịch bảo dưỡng trong một hệ thống.",
    icon: Truck,
    color: "bg-blue-500",
    details: [
      "Hồ sơ xe với thông tin kỹ thuật đầy đủ",
      "Quản lý giấy phép đăng ký, đăng kiểm",
      "Hồ sơ tài xế và bằng lái",
      "Lịch bảo dưỡng định kỳ tự động"
    ]
  },
  {
    step: 2,
    title: "Phân công & Điều phối",
    description: "Phân công xe và tài xế cho từng chuyến dựa trên tải trọng, khoảng cách và tình trạng xe.",
    icon: Users,
    color: "bg-green-500",
    details: [
      "Xem khả dụng xe realtime",
      "Gợi ý phân công thông minh",
      "Thông báo đến tài xế qua app",
      "Xác nhận nhận việc tự động"
    ]
  },
  {
    step: 3,
    title: "Theo dõi hành trình",
    description: "GPS tracking realtime với cảnh báo chệch hướng, dừng quá lâu và tốc độ bất thường.",
    icon: Navigation,
    color: "bg-orange-500",
    details: [
      "Vị trí xe realtime trên bản đồ",
      "Lịch sử di chuyển chi tiết",
      "Cảnh báo chệch tuyến đường",
      "Thông báo đến/đi tự động"
    ]
  },
  {
    step: 4,
    title: "Báo cáo & Phân tích",
    description: "Dashboard phân tích hiệu suất vận chuyển, tiêu hao nhiên liệu và chi phí.",
    icon: TrendingUp,
    color: "bg-purple-500",
    details: [
      "Báo cáo km, số chuyến theo xe/tài xế",
      "Phân tích tiêu hao nhiên liệu",
      "Chi phí vận chuyển theo tuyến",
      "So sánh hiệu suất theo thời gian"
    ]
  }
]

const features = [
  {
    icon: Truck,
    title: "Quản lý đội xe",
    description: "Theo dõi thông tin xe, biển số, loại xe, tải trọng và tình trạng hoạt động trong một dashboard."
  },
  {
    icon: MapPin,
    title: "GPS Tracking Realtime",
    description: "Vị trí xe realtime với độ chính xác cao, xem lịch sử di chuyển và phát hiện bất thường."
  },
  {
    icon: Route,
    title: "Tối ưu lộ trình AI",
    description: "AI tính toán lộ trình tối ưu dựa trên giao thông realtime, khoảng cách và điểm giao hàng."
  },
  {
    icon: FileCheck,
    title: "Quản lý giấy phép",
    description: "Nhắc nhở gia hạn giấy phép vận chuyển CTNH, đăng kiểm và bảo hiểm trước khi hết hạn."
  },
  {
    icon: Fuel,
    title: "Theo dõi nhiên liệu",
    description: "Giám sát tiêu thụ nhiên liệu theo từng xe, phát hiện bất thường và gian lận."
  },
  {
    icon: Wrench,
    title: "Lịch bảo dưỡng",
    description: "Tự động nhắc lịch bảo dưỡng định kỳ, theo dõi lịch sử sửa chữa và chi phí."
  },
  {
    icon: AlertTriangle,
    title: "Cảnh báo thông minh",
    description: "Thông báo khi xe chệch hướng, dừng quá lâu, tốc độ cao hoặc ra khỏi vùng cho phép."
  },
  {
    icon: Smartphone,
    title: "App Mobile tài xế",
    description: "Ứng dụng điều hướng, nhận chuyến, báo cáo sự cố và xác nhận giao hàng."
  }
]

const stats = [
  { value: "25%", label: "Tiết kiệm nhiên liệu", description: "Tối ưu hóa lộ trình và giám sát tiêu hao" },
  { value: "35%", label: "Giảm thời gian", description: "Di chuyển nhanh hơn nhờ lộ trình tối ưu" },
  { value: "20%", label: "Tăng số chuyến", description: "Nhiều chuyến hơn mỗi ngày" },
  { value: "99%", label: "Độ chính xác GPS", description: "Theo dõi vị trí realtime" }
]

export default function VanChuyenFeaturePage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#0A1628] via-[#1a365d] to-[#2563eb] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 mb-6">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Tính năng Vận chuyển</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Quản lý Vận chuyển
                <span className="text-blue-400"> & Logistics</span>
              </h1>
              
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Quản lý đội xe, theo dõi hành trình realtime và tối ưu hóa chi phí logistics 
                với công nghệ GPS và AI tiên tiến.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">
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
                    <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 border border-blue-400/30 p-4 shadow-2xl">
                <div className="rounded-xl bg-white overflow-hidden shadow-lg">
                  <div className="bg-[#0A1628] px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-white/60">Fleet Management</div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="h-40 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 400 200">
                          <path d="M50,150 L100,100 L180,120 L250,80 L320,110 L380,70" fill="none" stroke="#2563eb" strokeWidth="3" />
                          <circle cx="50" cy="150" r="6" fill="#2563eb" />
                          <circle cx="180" cy="120" r="6" fill="#2563eb" />
                          <circle cx="320" cy="110" r="6" fill="#2563eb" />
                          <circle cx="380" cy="70" r="6" fill="#22c55e" />
                        </svg>
                      </div>
                      <div className="relative flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg shadow">
                        <Truck className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-800">8 xe đang vận chuyển</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-blue-50 p-3 text-center">
                        <p className="text-lg font-bold text-blue-600">12</p>
                        <p className="text-xs text-slate-600">Xe hoạt động</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-lg font-bold text-green-600">45</p>
                        <p className="text-xs text-slate-600">Chuyến hôm nay</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-3 text-center">
                        <p className="text-lg font-bold text-orange-600">2</p>
                        <p className="text-xs text-slate-600">Cần bảo dưỡng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 rounded-xl bg-white p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Navigation className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">Xe 51A-123.45</p>
                    <p className="text-xs text-slate-500">Đang di chuyển</p>
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
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 mb-4">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Quy trình làm việc</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Flow quản lý Vận chuyển
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Quy trình vận chuyển được tối ưu hóa từ phân công đến hoàn thành, 
              đảm bảo hiệu quả và minh bạch.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 hidden lg:block transform -translate-y-1/2 z-0" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {workflowSteps.map((item) => (
                <div key={item.step} className="group">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-white font-bold text-lg`}>
                        {item.step}
                      </div>
                      <div className={`h-10 w-10 rounded-lg ${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5`} style={{ color: item.color === "bg-blue-500" ? "#3b82f6" : item.color === "bg-green-500" ? "#22c55e" : item.color === "bg-orange-500" ? "#f97316" : "#a855f7" }} />
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
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
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
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Tính năng chi tiết</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Đầy đủ công cụ quản lý đội xe
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white border border-slate-200 p-6 hover:border-blue-500/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Sẵn sàng tối ưu hóa logistics?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Dùng thử miễn phí 14 ngày với đầy đủ tính năng quản lý đội xe.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 gap-2">
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
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/xu-ly">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <Gauge className="h-4 w-4" />
                  Xử lý & Tái chế
                </Button>
              </Link>
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/bao-cao">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <TrendingUp className="h-4 w-4" />
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
