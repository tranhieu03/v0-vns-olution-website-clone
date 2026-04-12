import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  MapPin, 
  QrCode, 
  Calendar,
  Bell,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Route,
  Smartphone,
  Clock,
  Wifi,
  Camera,
  Scale,
  Users,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thu gom Chất thải - Tính năng Chi tiết | VNSolution",
  description: "Quản lý toàn bộ quy trình thu gom rác thải từ lên lịch, phân tuyến đến giám sát realtime với công nghệ AI và IoT.",
}

const workflowSteps = [
  {
    step: 1,
    title: "Lập kế hoạch thu gom",
    description: "Hệ thống tự động tạo kế hoạch thu gom dựa trên lịch trình, khu vực và loại chất thải.",
    icon: Calendar,
    color: "bg-blue-500",
    details: [
      "Thiết lập tần suất thu gom theo ngày/tuần/tháng",
      "Phân chia khu vực thu gom theo địa lý",
      "Gán tài xế và xe cho từng khu vực",
      "Tự động điều chỉnh theo ngày lễ, thời tiết"
    ]
  },
  {
    step: 2,
    title: "Tối ưu tuyến đường",
    description: "AI phân tích dữ liệu giao thông, khoảng cách để đề xuất tuyến đường tối ưu nhất.",
    icon: Route,
    color: "bg-green-500",
    details: [
      "Thuật toán tối ưu hóa tuyến đường AI",
      "Xem xét tình trạng giao thông realtime",
      "Ưu tiên điểm thu gom đầy/khẩn cấp",
      "Tính toán thời gian di chuyển chính xác"
    ]
  },
  {
    step: 3,
    title: "Thực hiện thu gom",
    description: "Tài xế nhận thông báo, theo dõi lộ trình trên app và xác nhận thu gom tại điểm.",
    icon: Truck,
    color: "bg-orange-500",
    details: [
      "App mobile cho tài xế với bản đồ chi tiết",
      "Thông báo điểm thu gom tiếp theo",
      "Quét QR code xác nhận thu gom",
      "Chụp ảnh làm bằng chứng"
    ]
  },
  {
    step: 4,
    title: "Ghi nhận & Báo cáo",
    description: "Tự động ghi nhận khối lượng, cập nhật trạng thái và tạo báo cáo realtime.",
    icon: BarChart3,
    color: "bg-purple-500",
    details: [
      "Đồng bộ dữ liệu cân xe tự động",
      "Dashboard theo dõi realtime",
      "Báo cáo hiệu suất từng tài xế/khu vực",
      "Xuất báo cáo theo mẫu BTNMT"
    ]
  }
]

const uiScreens = [
  {
    title: "Dashboard Quản lý",
    description: "Tổng quan toàn bộ hoạt động thu gom trong ngày với bản đồ realtime và các chỉ số quan trọng.",
    features: ["Bản đồ GPS tracking", "Thống kê realtime", "Danh sách xe hoạt động", "Cảnh báo bất thường"],
    mockupColor: "from-green-600 to-green-800"
  },
  {
    title: "Lập lịch Thu gom",
    description: "Giao diện kéo thả để lên lịch thu gom, phân công tài xế và quản lý khu vực.",
    features: ["Calendar view", "Drag & drop", "Phân công tài xế", "Quản lý khu vực"],
    mockupColor: "from-blue-600 to-blue-800"
  },
  {
    title: "App Tài xế",
    description: "Ứng dụng mobile cho tài xế với bản đồ điều hướng, danh sách điểm thu gom và quét QR.",
    features: ["Bản đồ điều hướng", "Danh sách điểm thu gom", "Quét QR xác nhận", "Chụp ảnh báo cáo"],
    mockupColor: "from-orange-600 to-orange-800"
  },
  {
    title: "Báo cáo & Phân tích",
    description: "Dashboard phân tích với biểu đồ trực quan, so sánh hiệu suất và dự báo xu hướng.",
    features: ["Biểu đồ trực quan", "So sánh kỳ", "Dự báo AI", "Xuất báo cáo"],
    mockupColor: "from-purple-600 to-purple-800"
  }
]

const features = [
  {
    icon: Calendar,
    title: "Lập lịch tự động",
    description: "Hệ thống tự động tạo lịch thu gom theo tần suất, khu vực và loại chất thải. Hỗ trợ điều chỉnh linh hoạt theo ngày lễ và thời tiết."
  },
  {
    icon: Route,
    title: "Tối ưu tuyến đường AI",
    description: "Thuật toán AI phân tích dữ liệu lịch sử, giao thông realtime để đề xuất tuyến đường ngắn nhất, tiết kiệm 25% nhiên liệu."
  },
  {
    icon: MapPin,
    title: "GPS Tracking Realtime",
    description: "Theo dõi vị trí xe thu gom trực tiếp trên bản đồ với độ chính xác cao. Xem lịch sử di chuyển và phát hiện bất thường."
  },
  {
    icon: Wifi,
    title: "IoT Cảm biến thùng rác",
    description: "Tích hợp cảm biến IoT để đo mức đầy thùng rác, thông báo tự động khi cần thu gom ưu tiên."
  },
  {
    icon: QrCode,
    title: "Xác nhận QR Code",
    description: "Tài xế quét QR code tại điểm thu gom để xác nhận, chụp ảnh làm bằng chứng và ghi chú nếu cần."
  },
  {
    icon: Scale,
    title: "Tích hợp cân xe",
    description: "Đồng bộ dữ liệu từ cân xe tự động, ghi nhận chính xác khối lượng chất thải thu gom."
  },
  {
    icon: Bell,
    title: "Thông báo thông minh",
    description: "Cảnh báo khi xe chệch hướng, trễ lịch, hoặc có sự cố. Thông báo cho quản lý và khách hàng."
  },
  {
    icon: Smartphone,
    title: "App Mobile tài xế",
    description: "Ứng dụng iOS & Android cho tài xế với bản đồ điều hướng, danh sách điểm thu gom và báo cáo nhanh."
  }
]

const stats = [
  { value: "30%", label: "Giảm chi phí vận hành", description: "Tối ưu hóa tuyến đường và nhiên liệu" },
  { value: "45%", label: "Tăng hiệu suất thu gom", description: "Thu gom nhiều điểm hơn mỗi ngày" },
  { value: "50%", label: "Giảm thời gian xử lý", description: "Tự động hóa quy trình báo cáo" },
  { value: "99.5%", label: "Độ chính xác định vị", description: "GPS tracking realtime" }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Tăng năng suất",
    description: "Thu gom được nhiều điểm hơn mỗi ngày nhờ tối ưu hóa tuyến đường và quy trình."
  },
  {
    icon: Shield,
    title: "Giảm rủi ro",
    description: "Theo dõi realtime giúp phát hiện sớm sự cố, đảm bảo an toàn cho tài xế và thiết bị."
  },
  {
    icon: Zap,
    title: "Tiết kiệm chi phí",
    description: "Giảm tiêu hao nhiên liệu, bảo trì xe và chi phí nhân sự nhờ tự động hóa."
  },
  {
    icon: Users,
    title: "Nâng cao trải nghiệm",
    description: "Khách hàng được thông báo lịch thu gom, theo dõi trạng thái và phản hồi dễ dàng."
  }
]

export default function ThuGomFeaturePage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#002B05] via-[#003D0A] to-[#005A10] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#4CD964] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00A86B] rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00A86B]/30 bg-[#00A86B]/10 px-4 py-2 mb-6">
                <Truck className="h-4 w-4 text-[#4CD964]" />
                <span className="text-sm font-medium text-[#4CD964]">Tính năng Thu gom</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Quản lý Thu gom
                <span className="text-[#4CD964]"> Thông minh</span>
              </h1>
              
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Tự động hóa quy trình thu gom chất thải với công nghệ AI và IoT. 
                Tối ưu tuyến đường, theo dõi realtime và báo cáo tự động.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-[#00A86B] hover:bg-[#009060] text-white">
                  Dùng thử miễn phí
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/30 text-white hover:bg-white/10">
                  <Play className="h-4 w-4" />
                  Xem demo
                </Button>
              </div>

              {/* Quick stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-[#4CD964]">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#00A86B]/20 to-[#4CD964]/10 border border-[#00A86B]/30 p-4 shadow-2xl">
                <div className="rounded-xl bg-white overflow-hidden shadow-lg">
                  {/* Mock Dashboard Header */}
                  <div className="bg-[#002B05] px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-white/60">Dashboard Thu gom</div>
                  </div>
                  
                  {/* Mock Content */}
                  <div className="p-4 space-y-4">
                    {/* Map area */}
                    <div className="h-40 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 400 200">
                          <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#00A86B" strokeWidth="2" strokeDasharray="5,5" />
                          <circle cx="50" cy="80" r="8" fill="#00A86B" />
                          <circle cx="150" cy="60" r="8" fill="#00A86B" />
                          <circle cx="250" cy="110" r="8" fill="#00A86B" />
                          <circle cx="350" cy="90" r="8" fill="#00A86B" />
                        </svg>
                      </div>
                      <div className="relative flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg shadow">
                        <Truck className="h-5 w-5 text-[#00A86B]" />
                        <span className="text-sm font-medium text-[#002B05]">5 xe đang hoạt động</span>
                      </div>
                    </div>
                    
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-lg font-bold text-[#00A86B]">24</p>
                        <p className="text-xs text-slate-600">Điểm thu gom</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-3 text-center">
                        <p className="text-lg font-bold text-blue-600">18</p>
                        <p className="text-xs text-slate-600">Hoàn thành</p>
                      </div>
                      <div className="rounded-lg bg-orange-50 p-3 text-center">
                        <p className="text-lg font-bold text-orange-600">6</p>
                        <p className="text-xs text-slate-600">Đang xử lý</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-[#00A86B]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">Thu gom hoàn tất</p>
                    <p className="text-xs text-slate-500">Điểm A-15</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-800">GPS Tracking</p>
                    <p className="text-xs text-slate-500">Realtime</p>
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
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A86B]/10 px-4 py-2 mb-4">
              <Clock className="h-4 w-4 text-[#00A86B]" />
              <span className="text-sm font-medium text-[#00A86B]">Quy trình làm việc</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Flow xử lý Thu gom
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Quy trình thu gom được tự động hóa từ đầu đến cuối, 
              đảm bảo hiệu quả và minh bạch trong từng bước.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 hidden lg:block transform -translate-y-1/2 z-0" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {workflowSteps.map((item) => (
                <div key={item.step} className="group">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                    {/* Step number */}
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
                    
                    {/* Details */}
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00A86B] shrink-0 mt-0.5" />
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

      {/* UI Screens Section */}
      <section className="py-16 lg:py-24 bg-[#FAFDFA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A86B]/10 px-4 py-2 mb-4">
              <Smartphone className="h-4 w-4 text-[#00A86B]" />
              <span className="text-sm font-medium text-[#00A86B]">Giao diện người dùng</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Các màn hình UI chính
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Giao diện được thiết kế trực quan, dễ sử dụng cho cả quản lý và tài xế.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {uiScreens.map((screen, index) => (
              <div key={screen.title} className="group">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  {/* Mockup Header */}
                  <div className={`bg-gradient-to-r ${screen.mockupColor} p-6`}>
                    <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
                        </div>
                        <div className="text-xs text-white/70 ml-2">{screen.title}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/20 rounded w-3/4" />
                        <div className="h-3 bg-white/20 rounded w-1/2" />
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="h-12 bg-white/10 rounded" />
                          <div className="h-12 bg-white/10 rounded" />
                          <div className="h-12 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#002B05] mb-2">
                      {screen.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {screen.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {screen.features.map((feature) => (
                        <span key={feature} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          <CheckCircle className="h-3 w-3 text-[#00A86B]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#00A86B]/10 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-[#00A86B]" />
              <span className="text-sm font-medium text-[#00A86B]">Tính năng chi tiết</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Đầy đủ chức năng cần thiết
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Mọi công cụ bạn cần để quản lý thu gom hiệu quả trong một nền tảng duy nhất.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-[#FAFDFA] border border-slate-200 p-6 hover:border-[#00A86B]/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A86B]/10 group-hover:bg-[#00A86B]/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-[#00A86B]" />
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

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#002B05] to-[#003D0A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Kết quả thực tế từ khách hàng
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Những con số ấn tượng từ doanh nghiệp đã triển khai VNS Thu gom.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center backdrop-blur">
                <p className="text-4xl font-bold text-[#4CD964]">{stat.value}</p>
                <p className="text-lg font-medium text-white mt-2">{stat.label}</p>
                <p className="text-sm text-white/60 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00A86B]/10 px-4 py-2 mb-4">
                <TrendingUp className="h-4 w-4 text-[#00A86B]" />
                <span className="text-sm font-medium text-[#00A86B]">Lợi ích</span>
              </div>
              <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
                Tại sao chọn VNS Thu gom?
              </h2>
              <p className="mt-4 text-slate-600">
                Giải pháp toàn diện giúp doanh nghiệp tối ưu hóa hoạt động thu gom, 
                giảm chi phí và nâng cao chất lượng dịch vụ.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A86B]/10">
                      <benefit.icon className="h-6 w-6 text-[#00A86B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#002B05]">{benefit.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-[#00A86B]/10 to-[#4CD964]/5 border border-[#00A86B]/20 p-8">
                <div className="space-y-4">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Chi phí vận hành</span>
                      <span className="text-sm font-bold text-red-500">-30%</span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-gradient-to-r from-[#00A86B] to-[#4CD964] rounded-full" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Hiệu suất thu gom</span>
                      <span className="text-sm font-bold text-[#00A86B]">+45%</span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-[#00A86B] to-[#4CD964] rounded-full" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Thời gian xử lý</span>
                      <span className="text-sm font-bold text-red-500">-50%</span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[50%] bg-gradient-to-r from-[#00A86B] to-[#4CD964] rounded-full" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-800">Độ hài lòng KH</span>
                      <span className="text-sm font-bold text-[#00A86B]">98%</span>
                    </div>
                    <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-gradient-to-r from-[#00A86B] to-[#4CD964] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#00A86B] to-[#4CD964]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Sẵn sàng tối ưu hóa thu gom?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng. 
            Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn triển khai.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#00A86B] hover:bg-white/90 gap-2">
              Bắt đầu dùng thử
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/giai-phap/quan-ly-chat-thai/bang-gia">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Xem bảng giá
              </Button>
            </Link>
          </div>

          {/* Related features */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 mb-4">Xem thêm các tính năng khác</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/van-chuyen">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <MapPin className="h-4 w-4" />
                  Vận chuyển
                </Button>
              </Link>
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/xu-ly">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <Scale className="h-4 w-4" />
                  Xử lý & Tái chế
                </Button>
              </Link>
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/bao-cao">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <BarChart3 className="h-4 w-4" />
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
