import { CheckCircle, ClipboardList, FlaskConical, FileCheck, BarChart3, Users, Microscope, Clock, FileText, Send, Shield, Search } from "lucide-react"

const products = [
  {
    id: "sample",
    name: "LabSample",
    title: "Module Tiếp nhận & Quản lý Mẫu",
    description: "LabSample là module quản lý toàn bộ quy trình tiếp nhận mẫu kiểm nghiệm. Từ đăng ký mẫu, gắn mã định danh (barcode/QR), phân loại theo loại mẫu, đến lưu trữ thông tin khách hàng và theo dõi trạng thái mẫu theo thời gian thực.",
    features: [
      "Đăng ký mẫu online, gắn mã barcode/QR tự động",
      "Phân loại mẫu theo loại: thuốc, mỹ phẩm, thực phẩm chức năng",
      "Quản lý thông tin đơn vị gửi mẫu, người liên hệ",
      "Theo dõi trạng thái mẫu realtime trên dashboard",
    ],
    icon: ClipboardList,
    secondaryIcon: Search,
    reverse: false,
  },
  {
    id: "test",
    name: "LabTest",
    title: "Module Quy trình Kiểm nghiệm",
    description: "LabTest số hóa toàn bộ quy trình kiểm nghiệm từ phân công kiểm nghiệm viên, thực hiện các chỉ tiêu phân tích, ghi nhận kết quả đến kiểm tra chéo. Tích hợp các phương pháp kiểm nghiệm chuẩn DĐVN, USP, BP.",
    features: [
      "Phân công kiểm nghiệm viên tự động theo năng lực",
      "Tích hợp phương pháp kiểm nghiệm DĐVN, USP, BP",
      "Ghi nhận kết quả phân tích, tính toán tự động",
      "Kiểm tra chéo, xác nhận kết quả giữa các KNV",
    ],
    icon: FlaskConical,
    secondaryIcon: Microscope,
    reverse: true,
  },
  {
    id: "report",
    name: "LabReport",
    title: "Module Phê duyệt & Trả Kết quả",
    description: "LabReport quản lý quy trình phê duyệt kết quả kiểm nghiệm theo nhiều cấp. Tự động tạo phiếu kết quả kiểm nghiệm theo mẫu chuẩn, ký số điện tử và gửi kết quả cho khách hàng qua email hoặc cổng tra cứu.",
    features: [
      "Phê duyệt kết quả theo quy trình nhiều cấp",
      "Tự động tạo phiếu KQ theo mẫu Viện/Trung tâm",
      "Ký số điện tử theo quy định chứng từ điện tử",
      "Gửi kết quả qua email, cổng tra cứu công khai",
    ],
    icon: FileCheck,
    secondaryIcon: Send,
    reverse: false,
  },
  {
    id: "analytics",
    name: "LabAnalytics",
    title: "Module Thống kê & Báo cáo",
    description: "LabAnalytics cung cấp hệ thống báo cáo thống kê toàn diện về hoạt động kiểm nghiệm. Tự động tổng hợp số liệu theo ngày/tuần/tháng/quý/năm, xuất báo cáo theo biểu mẫu Bộ Y tế và các cơ quan cấp trên.",
    features: [
      "Dashboard tổng quan hoạt động kiểm nghiệm",
      "Báo cáo theo biểu mẫu Bộ Y tế, Cục QLD",
      "Thống kê năng suất kiểm nghiệm viên",
      "Phân tích xu hướng chất lượng thuốc theo thời gian",
    ],
    icon: BarChart3,
    secondaryIcon: FileText,
    reverse: true,
  },
]

export function Products() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-24">
          {products.map((product) => (
            <div
              key={product.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                product.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={product.reverse ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  <product.icon className="h-4 w-4" />
                  {product.name}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {product.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-pretty">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Preview */}
              <div className={product.reverse ? "lg:order-1" : ""}>
                <div className="rounded-xl border border-border bg-card p-2 shadow-xl">
                  <div className="rounded-lg bg-muted/50 p-4">
                    {/* Mock Dashboard */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-8 w-8 rounded flex items-center justify-center ${
                            product.id === 'sample' ? 'bg-primary/20' :
                            product.id === 'test' ? 'bg-amber-100' :
                            product.id === 'report' ? 'bg-green-100' : 'bg-purple-100'
                          }`}>
                            <product.icon className={`h-4 w-4 ${
                              product.id === 'sample' ? 'text-primary' :
                              product.id === 'test' ? 'text-amber-600' :
                              product.id === 'report' ? 'text-green-600' : 'text-purple-600'
                            }`} />
                          </div>
                          <div className="text-sm font-medium">{product.name}</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-xs text-muted-foreground">Hoạt động</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { 
                            label: product.id === 'sample' ? 'Mẫu mới' : product.id === 'test' ? 'Đang KN' : product.id === 'report' ? 'Chờ duyệt' : 'Tổng mẫu', 
                            value: product.id === 'sample' ? '45' : product.id === 'test' ? '32' : product.id === 'report' ? '18' : '1,247' 
                          },
                          { 
                            label: product.id === 'sample' ? 'Chờ xử lý' : product.id === 'test' ? 'Hoàn thành' : product.id === 'report' ? 'Đã gửi' : 'Đạt chuẩn', 
                            value: product.id === 'sample' ? '12' : product.id === 'test' ? '89' : product.id === 'report' ? '156' : '98.5%' 
                          },
                          { label: product.id === 'analytics' ? 'Tháng này' : 'Hôm nay', value: product.id === 'analytics' ? '+15%' : '+8' },
                        ].map((stat, i) => (
                          <div key={i} className="rounded-lg bg-background p-3 shadow-sm">
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                            <div className={`mt-1 text-lg font-bold ${i === 2 ? 'text-green-600' : 'text-foreground'}`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Content Area */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">
                            {product.id === 'sample' ? 'Mẫu theo loại' : product.id === 'test' ? 'Tiến độ KN' : product.id === 'report' ? 'KQ theo ngày' : 'Thống kê tháng'}
                          </div>
                          <div className="flex items-end gap-1">
                            {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t ${
                                  product.id === 'sample' ? 'bg-primary/60' :
                                  product.id === 'test' ? 'bg-amber-400' :
                                  product.id === 'report' ? 'bg-green-400' : 'bg-purple-400'
                                }`}
                                style={{ height: `${h}px` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">Hiệu suất</div>
                          <div className="flex items-center justify-center">
                            <div className={`h-16 w-16 rounded-full border-8 ${
                              product.id === 'sample' ? 'border-primary/30 border-t-primary' :
                              product.id === 'test' ? 'border-amber-200 border-t-amber-500' :
                              product.id === 'report' ? 'border-green-200 border-t-green-500' : 'border-purple-200 border-t-purple-500'
                            }`} />
                          </div>
                        </div>
                      </div>

                      {/* Activity List */}
                      <div className="rounded-lg bg-background p-3 shadow-sm">
                        <div className="space-y-2">
                          {[
                            { 
                              text: product.id === 'sample' ? 'KN-2024-0847 - Tiếp nhận mẫu mới' : 
                                    product.id === 'test' ? 'KN-2024-0845 - Đang phân tích HPLC' : 
                                    product.id === 'report' ? 'KN-2024-0840 - Đã phê duyệt cấp 2' : 
                                    'Báo cáo tháng 03/2024 - Đã xuất', 
                              status: 'success' 
                            },
                            { 
                              text: product.id === 'sample' ? 'KN-2024-0846 - Chờ phân loại' : 
                                    product.id === 'test' ? 'KN-2024-0844 - Kiểm tra vi sinh' : 
                                    product.id === 'report' ? 'KN-2024-0839 - Chờ ký số' : 
                                    'Năng suất KNV tháng 03 - Đang xử lý', 
                              status: 'warning' 
                            },
                            { 
                              text: product.id === 'sample' ? 'KN-2024-0845 - Đã gán mã QR' : 
                                    product.id === 'test' ? 'KN-2024-0843 - Hoàn thành' : 
                                    product.id === 'report' ? 'KN-2024-0838 - Đã gửi email' : 
                                    'So sánh quý I/2024 vs 2023', 
                              status: 'info' 
                            },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 rounded bg-muted/30 p-2">
                              <div className={`h-2 w-2 rounded-full ${
                                item.status === 'success' ? 'bg-green-500' :
                                item.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-xs">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
