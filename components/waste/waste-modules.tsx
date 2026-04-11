"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  Factory, 
  FileText, 
  MapPin, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from "lucide-react"
import Link from "next/link"

const modules = [
  {
    id: "thu-gom",
    name: "Module Thu gom Rác thải",
    shortName: "Thu gom",
    icon: Truck,
    color: "green",
    description: "Quản lý toàn bộ quy trình thu gom rác thải từ lên lịch, phân tuyến đến giám sát realtime xe thu gom.",
    features: [
      "Lập lịch thu gom tự động theo vùng",
      "Tối ưu hóa tuyến đường bằng AI",
      "Theo dõi GPS realtime xe thu gom",
      "Cảnh báo điểm thu gom đầy",
      "Xác nhận thu gom bằng QR Code",
      "Báo cáo khối lượng theo ngày",
    ],
    stats: [
      { label: "Giảm chi phí vận hành", value: "30%" },
      { label: "Tăng hiệu suất thu gom", value: "45%" },
      { label: "Giảm thời gian xử lý", value: "50%" },
    ],
    image: "/images/waste-collection.jpg",
  },
  {
    id: "van-chuyen",
    name: "Module Vận chuyển",
    shortName: "Vận chuyển",
    icon: MapPin,
    color: "blue",
    description: "Quản lý đội xe vận chuyển, theo dõi lộ trình và tối ưu hóa chi phí logistics.",
    features: [
      "Quản lý đội xe và tài xế",
      "GPS tracking realtime",
      "Tối ưu hóa lộ trình vận chuyển",
      "Quản lý giấy phép vận chuyển",
      "Theo dõi tiêu thụ nhiên liệu",
      "Cảnh báo bảo trì xe",
    ],
    stats: [
      { label: "Tiết kiệm nhiên liệu", value: "25%" },
      { label: "Giảm thời gian di chuyển", value: "35%" },
      { label: "Tăng số chuyến/ngày", value: "20%" },
    ],
    image: "/images/waste-transport.jpg",
  },
  {
    id: "xu-ly",
    name: "Module Xử lý & Tái chế",
    shortName: "Xử lý",
    icon: Factory,
    color: "orange",
    description: "Theo dõi quy trình xử lý chất thải tại nhà máy, kiểm soát chất lượng và tái chế.",
    features: [
      "Theo dõi quy trình xử lý",
      "Phân loại chất thải tự động",
      "Kiểm soát chất lượng đầu ra",
      "Quản lý tái chế và thu hồi",
      "Theo dõi khí thải và nước thải",
      "Báo cáo hiệu suất xử lý",
    ],
    stats: [
      { label: "Tăng tỷ lệ tái chế", value: "40%" },
      { label: "Giảm phát thải", value: "35%" },
      { label: "Tăng hiệu suất xử lý", value: "50%" },
    ],
    image: "/images/waste-process.jpg",
  },
  {
    id: "bao-cao",
    name: "Module Báo cáo BTNMT",
    shortName: "Báo cáo",
    icon: FileText,
    color: "purple",
    description: "Tự động tạo báo cáo theo quy định của Bộ Tài nguyên và Môi trường.",
    features: [
      "Báo cáo định kỳ tự động",
      "Mẫu báo cáo theo BTNMT",
      "Theo dõi chỉ số môi trường",
      "Cảnh báo ngưỡng vi phạm",
      "Lưu trữ hồ sơ điện tử",
      "Xuất báo cáo đa định dạng",
    ],
    stats: [
      { label: "Giảm thời gian làm báo cáo", value: "70%" },
      { label: "Độ chính xác", value: "99%" },
      { label: "Tuân thủ quy định", value: "100%" },
    ],
    image: "/images/waste-report.jpg",
  },
  {
    id: "phan-tich",
    name: "Module Phân tích & Dashboard",
    shortName: "Phân tích",
    icon: BarChart3,
    color: "cyan",
    description: "Dashboard trực quan và công cụ phân tích dữ liệu thông minh.",
    features: [
      "Dashboard realtime",
      "Phân tích xu hướng AI",
      "Dự báo khối lượng chất thải",
      "So sánh hiệu suất các khu vực",
      "Báo cáo tùy chỉnh",
      "Xuất dữ liệu đa định dạng",
    ],
    stats: [
      { label: "Cải thiện quyết định", value: "60%" },
      { label: "Tiết kiệm thời gian phân tích", value: "80%" },
      { label: "Dự báo chính xác", value: "95%" },
    ],
    image: "/images/waste-analytics.jpg",
  },
  {
    id: "khach-hang",
    name: "Module Quản lý Khách hàng",
    shortName: "Khách hàng",
    icon: Users,
    color: "pink",
    description: "Quản lý hợp đồng, khách hàng và công nợ.",
    features: [
      "Quản lý hợp đồng dịch vụ",
      "Theo dõi lịch sử giao dịch",
      "Tính toán phí dịch vụ tự động",
      "Quản lý công nợ",
      "Cổng khách hàng online",
      "Hỗ trợ khiếu nại trực tuyến",
    ],
    stats: [
      { label: "Tăng sự hài lòng KH", value: "45%" },
      { label: "Giảm công nợ quá hạn", value: "60%" },
      { label: "Tăng tốc thanh toán", value: "40%" },
    ],
    image: "/images/waste-customer.jpg",
  },
]

const colorClasses = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-500",
    gradient: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-500",
    gradient: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/20",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
  },
}

export function WasteModules() {
  const [activeModule, setActiveModule] = useState(0)
  const currentModule = modules[activeModule]
  const colors = colorClasses[currentModule.color as keyof typeof colorClasses]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm font-medium text-green-500 mb-3">Các module chức năng</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Hệ thống Quản lý Chất thải Toàn diện
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bộ giải pháp bao gồm các module chuyên biệt, có thể triển khai độc lập 
            hoặc tích hợp để quản lý toàn bộ quy trình.
          </p>
        </div>

        {/* Module tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeModule === index
                  ? `bg-gradient-to-r ${colorClasses[module.color as keyof typeof colorClasses].gradient} text-white shadow-lg ${colorClasses[module.color as keyof typeof colorClasses].shadow}`
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <module.icon className="h-4 w-4" />
              {module.shortName}
            </button>
          ))}
        </div>

        {/* Module detail */}
        <div className="grid items-start gap-10 lg:grid-cols-2" key={currentModule.id}>
          <div className="order-2 lg:order-1">
            <div className={`inline-flex items-center gap-2 rounded-full ${colors.bg} ${colors.border} border px-4 py-2 mb-4`}>
              <currentModule.icon className={`h-4 w-4 ${colors.text}`} />
              <span className={`text-sm font-medium ${colors.text}`}>{currentModule.name}</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground lg:text-3xl mb-4">
              {currentModule.name}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {currentModule.description}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {currentModule.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${colors.text}`} />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {currentModule.stats.map((stat) => (
                <div key={stat.label} className={`rounded-xl ${colors.bg} ${colors.border} border p-4 text-center`}>
                  <p className={`text-2xl font-bold ${colors.text}`}>{stat.value}</p>
                  <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button 
                size="lg"
                className={`gap-2 bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow}`}
              >
                Xem chi tiết module
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href="/bang-gia">
                <Button 
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  Xem bảng giá
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="ml-4 text-sm text-slate-500">{currentModule.shortName} Dashboard</span>
              </div>

              {/* Module specific dashboard mockup */}
              {currentModule.id === "thu-gom" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500">Điểm thu gom hôm nay</span>
                        <Clock className="h-4 w-4 text-slate-400" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">127</p>
                      <p className="text-xs text-green-500">+12 so với hôm qua</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500">Xe đang hoạt động</span>
                        <Truck className="h-4 w-4 text-slate-400" />
                      </div>
                      <p className="text-2xl font-bold text-green-500">18/20</p>
                      <p className="text-xs text-slate-500">2 xe đang bảo trì</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-sm font-medium text-foreground mb-3">Tiến độ thu gom theo tuyến</p>
                    <div className="space-y-3">
                      {["Tuyến A1 - Quận 1", "Tuyến B2 - Quận 3", "Tuyến C3 - Quận 7"].map((route, i) => (
                        <div key={route}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-600">{route}</span>
                            <span className="font-medium text-foreground">{[85, 62, 45][i]}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-400" 
                              style={{ width: `${[85, 62, 45][i]}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                        <Zap className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">AI Đề xuất tối ưu</p>
                        <p className="text-xs text-slate-600">Điều chỉnh tuyến B2 để tiết kiệm 15% nhiên liệu</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentModule.id === "van-chuyen" && (
                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-200 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-slate-600">Bản đồ theo dõi GPS realtime</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                      <p className="text-xl font-bold text-blue-500">18</p>
                      <p className="text-xs text-slate-500">Xe đang chạy</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                      <p className="text-xl font-bold text-foreground">245km</p>
                      <p className="text-xs text-slate-500">Tổng quãng đường</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                      <p className="text-xl font-bold text-green-500">-15%</p>
                      <p className="text-xs text-slate-500">Tiết kiệm NL</p>
                    </div>
                  </div>
                </div>
              )}

              {currentModule.id === "xu-ly" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <Factory className="h-6 w-6 text-orange-500 mb-2" />
                      <p className="text-xl font-bold text-foreground">156 tấn</p>
                      <p className="text-xs text-slate-500">Đã xử lý hôm nay</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <Shield className="h-6 w-6 text-green-500 mb-2" />
                      <p className="text-xl font-bold text-green-500">98%</p>
                      <p className="text-xs text-slate-500">Đạt chuẩn</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-sm font-medium text-foreground mb-3">Phân loại chất thải</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-4 rounded-full bg-green-400" style={{ flex: 4 }}></div>
                      <div className="flex-1 h-4 rounded-full bg-blue-400" style={{ flex: 3 }}></div>
                      <div className="flex-1 h-4 rounded-full bg-orange-400" style={{ flex: 2 }}></div>
                      <div className="flex-1 h-4 rounded-full bg-slate-400" style={{ flex: 1 }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>Tái chế 40%</span>
                      <span>Hữu cơ 30%</span>
                      <span>Nguy hại 20%</span>
                      <span>Khác 10%</span>
                    </div>
                  </div>
                </div>
              )}

              {currentModule.id === "bao-cao" && (
                <div className="space-y-4">
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium text-foreground">Báo cáo gần đây</p>
                      <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">Đã gửi</span>
                    </div>
                    <div className="space-y-2">
                      {["Báo cáo BTNMT tháng 3/2024", "Báo cáo khí thải Q1/2024", "Chứng từ CTNH #2024-0312"].map((report) => (
                        <div key={report} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                          <FileText className="h-4 w-4 text-purple-500" />
                          <span className="text-xs text-slate-600">{report}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentModule.id === "phan-tich" && (
                <div className="space-y-4">
                  <div className="rounded-xl bg-white border border-slate-200 p-4">
                    <p className="text-sm font-medium text-foreground mb-3">Xu hướng 7 ngày qua</p>
                    <div className="flex items-end gap-2 h-24">
                      {[65, 78, 72, 85, 90, 82, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-teal-400 rounded-t-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentModule.id === "khach-hang" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <Users className="h-6 w-6 text-pink-500 mb-2" />
                      <p className="text-xl font-bold text-foreground">1,247</p>
                      <p className="text-xs text-slate-500">Khách hàng</p>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-4">
                      <FileText className="h-6 w-6 text-blue-500 mb-2" />
                      <p className="text-xl font-bold text-foreground">892</p>
                      <p className="text-xs text-slate-500">Hợp đồng</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
