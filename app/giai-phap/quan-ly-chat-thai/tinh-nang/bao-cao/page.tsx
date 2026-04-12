import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  BarChart3, 
  Calendar,
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Download,
  AlertTriangle,
  FileSpreadsheet,
  FolderArchive,
  Bell,
  Zap,
  Truck,
  MapPin,
  Factory,
  PieChart,
  TrendingUp,
  FileCheck
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Báo cáo BTNMT - Tính năng Chi tiết | VNSolution",
  description: "Tự động tạo báo cáo theo quy định của Bộ Tài nguyên và Môi trường, theo dõi chỉ số môi trường và lưu trữ hồ sơ.",
}

const workflowSteps = [
  {
    step: 1,
    title: "Thu thập dữ liệu",
    description: "Tự động thu thập dữ liệu từ các module Thu gom, Vận chuyển, Xử lý.",
    icon: BarChart3,
    color: "bg-purple-500",
    details: [
      "Đồng bộ dữ liệu realtime",
      "Tổng hợp theo mã CTNH",
      "Phân loại nguồn phát thải",
      "Kiểm tra tính đầy đủ"
    ]
  },
  {
    step: 2,
    title: "Tạo báo cáo tự động",
    description: "Hệ thống tự động tạo báo cáo theo đúng mẫu biểu của BTNMT.",
    icon: FileText,
    color: "bg-blue-500",
    details: [
      "Sử dụng mẫu biểu chuẩn",
      "Điền dữ liệu tự động",
      "Kiểm tra logic nghiệp vụ",
      "Highlight dữ liệu bất thường"
    ]
  },
  {
    step: 3,
    title: "Xét duyệt & Ký số",
    description: "Quy trình xét duyệt nội bộ và ký số điện tử theo quy định.",
    icon: FileCheck,
    color: "bg-green-500",
    details: [
      "Workflow xét duyệt đa cấp",
      "Góp ý và chỉnh sửa online",
      "Ký số điện tử tích hợp",
      "Theo dõi trạng thái phê duyệt"
    ]
  },
  {
    step: 4,
    title: "Nộp & Lưu trữ",
    description: "Xuất báo cáo đa định dạng, nộp trực tuyến và lưu trữ an toàn.",
    icon: FolderArchive,
    color: "bg-orange-500",
    details: [
      "Xuất PDF, Excel, Word",
      "Nộp qua Cổng dịch vụ công",
      "Lưu trữ mã hóa AES-256",
      "Truy xuất nhanh theo bộ lọc"
    ]
  }
]

const reportTypes = [
  {
    title: "Báo cáo Quản lý CTNH",
    description: "Báo cáo tình hình phát sinh, thu gom, vận chuyển và xử lý chất thải nguy hại theo Nghị định 08/2022.",
    frequency: "Hàng năm / Định kỳ",
    icon: AlertTriangle,
    color: "bg-red-500"
  },
  {
    title: "Sổ theo dõi CTNH",
    description: "Sổ ghi chép chi tiết việc thu gom, lưu giữ, vận chuyển CTNH theo từng đơn vị phát thải.",
    frequency: "Cập nhật liên tục",
    icon: FileSpreadsheet,
    color: "bg-blue-500"
  },
  {
    title: "Chứng từ CTNH",
    description: "Chứng từ chuyển giao chất thải nguy hại giữa các bên theo quy định.",
    frequency: "Theo chuyến",
    icon: FileText,
    color: "bg-green-500"
  },
  {
    title: "Báo cáo Giám sát MT",
    description: "Báo cáo kết quả quan trắc, giám sát môi trường định kỳ tại cơ sở xử lý.",
    frequency: "Hàng quý / Năm",
    icon: PieChart,
    color: "bg-purple-500"
  },
  {
    title: "Báo cáo Thống kê",
    description: "Tổng hợp thống kê số liệu phục vụ báo cáo cơ quan quản lý địa phương.",
    frequency: "Theo yêu cầu",
    icon: BarChart3,
    color: "bg-orange-500"
  },
  {
    title: "Hồ sơ Năng lực",
    description: "Quản lý hồ sơ năng lực xử lý CTNH theo giấy phép được cấp.",
    frequency: "Cập nhật thường xuyên",
    icon: Shield,
    color: "bg-teal-500"
  }
]

const features = [
  {
    icon: Calendar,
    title: "Báo cáo định kỳ tự động",
    description: "Hệ thống tự động nhắc nhở và tạo báo cáo theo lịch quy định, không bỏ lỡ deadline."
  },
  {
    icon: FileText,
    title: "Mẫu chuẩn BTNMT",
    description: "Sử dụng đúng biểu mẫu theo quy định hiện hành, tự động cập nhật khi có thay đổi."
  },
  {
    icon: BarChart3,
    title: "Dashboard chỉ số MT",
    description: "Giám sát các chỉ số môi trường realtime với biểu đồ trực quan, dễ theo dõi."
  },
  {
    icon: Bell,
    title: "Cảnh báo ngưỡng",
    description: "Thông báo khi chỉ số tiệm cận hoặc vượt ngưỡng vi phạm để xử lý kịp thời."
  },
  {
    icon: FolderArchive,
    title: "Lưu trữ hồ sơ",
    description: "Lưu trữ an toàn với mã hóa, dễ dàng truy xuất và tìm kiếm khi cần."
  },
  {
    icon: Download,
    title: "Xuất đa định dạng",
    description: "Xuất báo cáo PDF, Excel, Word theo yêu cầu, hỗ trợ in ấn và nộp trực tuyến."
  },
  {
    icon: TrendingUp,
    title: "Phân tích xu hướng",
    description: "Biểu đồ so sánh theo thời gian, phát hiện xu hướng và dự báo."
  },
  {
    icon: Shield,
    title: "Tuân thủ pháp luật",
    description: "Đảm bảo 100% tuân thủ các quy định của Bộ TN&MT về báo cáo môi trường."
  }
]

const stats = [
  { value: "70%", label: "Giảm thời gian báo cáo", description: "Tự động hóa quy trình" },
  { value: "99%", label: "Độ chính xác", description: "Dữ liệu từ hệ thống" },
  { value: "100%", label: "Tuân thủ quy định", description: "Cập nhật biểu mẫu mới nhất" },
  { value: "24/7", label: "Truy cập mọi lúc", description: "Lưu trữ đám mây" }
]

export default function BaoCaoFeaturePage() {
  return (
    <main className="min-h-screen bg-[#FAFDFA]">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#581c87] via-[#7c3aed] to-[#a855f7] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 mb-6">
                <FileText className="h-4 w-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-300">Tính năng Báo cáo</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Báo cáo BTNMT
                <span className="text-purple-300"> Tự động</span>
              </h1>
              
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Tự động tạo báo cáo theo quy định của Bộ Tài nguyên và Môi trường, 
                theo dõi chỉ số môi trường và lưu trữ hồ sơ an toàn.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 bg-purple-500 hover:bg-purple-600 text-white">
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
                    <p className="text-2xl font-bold text-purple-300">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-400/10 border border-purple-400/30 p-4 shadow-2xl">
                <div className="rounded-xl bg-white overflow-hidden shadow-lg">
                  <div className="bg-[#581c87] px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-sm text-white/60">Báo cáo & Thống kê</div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">BC Quản lý CTNH Q1/2024</p>
                          <p className="text-xs text-slate-500">Deadline: 30/03/2024</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Đã nộp</span>
                    </div>

                    <div className="flex items-center justify-between bg-orange-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <FileSpreadsheet className="h-5 w-5 text-orange-600" />
                        <div>
                          <p className="text-sm font-medium text-slate-800">Sổ theo dõi CTNH T3</p>
                          <p className="text-xs text-slate-500">Cần hoàn thành: 5 ngày</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">Đang làm</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-green-50 p-3 text-center">
                        <p className="text-lg font-bold text-green-600">12</p>
                        <p className="text-xs text-slate-600">BC đã nộp</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-3 text-center">
                        <p className="text-lg font-bold text-blue-600">3</p>
                        <p className="text-xs text-slate-600">Đang xử lý</p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-slate-600">Tiến độ năm 2024</p>
                        <p className="text-xs font-medium text-purple-600">75%</p>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
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
                    <p className="text-xs font-medium text-slate-800">Báo cáo đã duyệt</p>
                    <p className="text-xs text-slate-500">BTNMT chấp nhận</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 mb-4">
              <FileText className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Loại báo cáo</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Các loại báo cáo hỗ trợ
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Hỗ trợ đầy đủ các loại báo cáo theo quy định của Bộ TN&MT và cơ quan quản lý địa phương.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reportTypes.map((report) => (
              <div
                key={report.title}
                className="group rounded-2xl bg-[#FAFDFA] border border-slate-200 p-6 hover:border-purple-500/30 hover:shadow-lg transition-all"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${report.color}/10`}>
                  <report.icon className="h-6 w-6" style={{ color: report.color.replace("bg-", "").replace("-500", "") === "red" ? "#ef4444" : report.color.replace("bg-", "").replace("-500", "") === "blue" ? "#3b82f6" : report.color.replace("bg-", "").replace("-500", "") === "green" ? "#22c55e" : report.color.replace("bg-", "").replace("-500", "") === "purple" ? "#a855f7" : report.color.replace("bg-", "").replace("-500", "") === "orange" ? "#f97316" : "#14b8a6" }} />
                </div>
                <h3 className="text-lg font-semibold text-[#002B05] mb-2">
                  {report.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {report.description}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  <Clock className="h-3 w-3" />
                  {report.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 lg:py-24 bg-[#FAFDFA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 mb-4">
              <Clock className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Quy trình làm việc</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Flow tạo Báo cáo
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 hidden lg:block transform -translate-y-1/2 z-0" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {workflowSteps.map((item) => (
                <div key={item.step} className="group">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-white font-bold text-lg`}>
                        {item.step}
                      </div>
                      <div className={`h-10 w-10 rounded-lg ${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5`} style={{ color: item.color === "bg-purple-500" ? "#a855f7" : item.color === "bg-blue-500" ? "#3b82f6" : item.color === "bg-green-500" ? "#22c55e" : "#f97316" }} />
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
                          <CheckCircle className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Tính năng chi tiết</span>
            </div>
            <h2 className="text-2xl font-bold text-[#002B05] sm:text-3xl lg:text-4xl">
              Công cụ báo cáo chuyên nghiệp
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-[#FAFDFA] border border-slate-200 p-6 hover:border-purple-500/30 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-purple-600" />
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Sẵn sàng tự động hóa báo cáo?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tiết kiệm 70% thời gian làm báo cáo, đảm bảo 100% tuân thủ quy định.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 gap-2">
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
              <Link href="/giai-phap/quan-ly-chat-thai/tinh-nang/xu-ly">
                <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                  <Factory className="h-4 w-4" />
                  Xử lý & Tái chế
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
