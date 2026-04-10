import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Truck, BarChart3, CheckCircle, Settings, Shield, Zap } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "ERP",
    fullName: "Hoạch định Nguồn lực Doanh nghiệp",
    description: "Nắm toàn bộ tài chính, sản xuất, kho vận trên 1 màn hình. Không còn mất hàng giờ tổng hợp Excel mỗi cuối tháng.",
    icon: Building2,
    highlight: "Giảm 60% thời gian làm báo cáo",
    features: [
      "Tự động đối chiếu công nợ, hết sai sót",
      "Cảnh báo tồn kho thấp realtime",
      "Báo cáo lợi nhuận theo ngày, không chờ kế toán",
      "Phê duyệt chi tiêu trên điện thoại",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Quản lý Quan hệ Khách hàng",
    description: "Theo dõi toàn bộ pipeline bán hàng, không bỏ sót khách nào. Nhân viên biết chính xác ai cần gọi, khi nào follow-up.",
    icon: Users,
    highlight: "Tăng 30% tỷ lệ chốt deal",
    features: [
      "Nhắc nhở tự động theo lịch chăm sóc",
      "Lịch sử tương tác đầy đủ mọi kênh",
      "Phân loại khách hàng theo giá trị",
      "Dashboard doanh số realtime cho sếp",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    fullName: "Quản lý Nhân sự",
    description: "Nhân viên tự chấm công, xin nghỉ trên app. HR không còn nhập liệu thủ công, tiết kiệm 5 ngày/tháng.",
    icon: Settings,
    highlight: "Tiết kiệm 5 ngày công/tháng cho HR",
    features: [
      "Chấm công GPS/WiFi chống gian lận",
      "Tính lương tự động theo công thức",
      "Quy trình onboarding chuẩn hóa",
      "Đánh giá KPI minh bạch, rõ ràng",
    ],
  },
  {
    id: "dms",
    name: "DMS",
    fullName: "Quản lý Nhà Phân phối",
    description: "Quản lý 500+ đại lý không cần gọi điện hỏi. Công nợ, tồn kho, đơn hàng - tất cả hiện trên 1 bảng.",
    icon: Truck,
    highlight: "Quản lý 500+ NPP dễ dàng",
    features: [
      "Đại lý tự đặt hàng qua app/web",
      "Cảnh báo công nợ quá hạn tự động",
      "GPS theo dõi salesman thực địa",
      "Chính sách giá linh hoạt theo vùng",
    ],
  },
]

const integrationFeatures = [
  { icon: Zap, text: "Đồng bộ dữ liệu realtime" },
  { icon: Shield, text: "Bảo mật cấp doanh nghiệp" },
  { icon: BarChart3, text: "Dashboard phân tích tổng hợp" },
]

export function Products() {
  return (
    <section id="products" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Sản phẩm phần mềm</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Bộ giải pháp Quản trị Doanh nghiệp
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Các module phần mềm được thiết kế linh hoạt, có thể triển khai độc lập 
            hoặc tích hợp đồng bộ để tối ưu hiệu quả vận hành.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group rounded-xl border border-border bg-card p-6 transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-smooth group-hover:bg-primary/15">
                <product.icon className="h-6 w-6 text-primary" />
              </div>

              <div className="mb-2 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {product.name}
                </span>
                <span className="text-xs font-medium text-green-600 bg-green-500/10 px-2 py-1 rounded-full">
                  {product.highlight}
                </span>
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2">
                {product.fullName}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2 mb-5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-between text-sm text-muted-foreground group-hover:text-primary transition-colors-smooth"
              >
                Tìm hiểu thêm
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Tích hợp liền mạch toàn bộ hệ thống
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tất cả các module được thiết kế trên cùng một nền tảng, đảm bảo việc chia sẻ 
                dữ liệu và quy trình xuyên suốt, loại bỏ hoàn toàn các rào cản thông tin 
                giữa các phòng ban.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {integrationFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2.5 bg-background/80 rounded-full px-4 py-2 border border-border/50">
                    <feature.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">API</span>
                  </div>
                </div>
                {products.map((product, index) => {
                  const angle = (index * 90 - 45) * (Math.PI / 180)
                  const x = Math.cos(angle) * 70
                  const y = Math.sin(angle) * 70
                  return (
                    <div
                      key={product.id}
                      className="absolute w-14 h-14 rounded-xl bg-background border border-border shadow-sm flex items-center justify-center transition-smooth hover:shadow-md hover:border-primary/30"
                      style={{
                        left: `calc(50% + ${x}px - 28px)`,
                        top: `calc(50% + ${y}px - 28px)`,
                      }}
                    >
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
