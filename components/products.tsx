import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Truck, BarChart3, CheckCircle, Settings, Shield, Zap } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "ERP",
    fullName: "Hoạch định Nguồn lực Doanh nghiệp",
    description: "Hệ thống quản trị tổng thể giúp tích hợp và kiểm soát toàn bộ hoạt động kinh doanh, từ tài chính, sản xuất đến chuỗi cung ứng.",
    icon: Building2,
    features: [
      "Quản lý tài chính & kế toán",
      "Quản lý sản xuất & vật tư",
      "Kiểm soát chi phí & ngân sách",
      "Báo cáo phân tích kinh doanh",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Quản lý Quan hệ Khách hàng",
    description: "Giải pháp quản lý toàn diện hoạt động bán hàng, chăm sóc khách hàng và marketing, giúp tối ưu trải nghiệm khách hàng.",
    icon: Users,
    features: [
      "Quản lý cơ hội bán hàng",
      "Chăm sóc khách hàng 360°",
      "Tự động hóa marketing",
      "Báo cáo doanh số & KPI",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    fullName: "Quản lý Nhân sự",
    description: "Phần mềm quản lý nhân sự toàn diện từ tuyển dụng, chấm công, tính lương đến đánh giá hiệu suất làm việc.",
    icon: Settings,
    features: [
      "Tuyển dụng & đào tạo",
      "Chấm công & tính lương",
      "Quản lý KPI nhân viên",
      "Quản lý phúc lợi & bảo hiểm",
    ],
  },
  {
    id: "dms",
    name: "DMS",
    fullName: "Quản lý Nhà Phân phối",
    description: "Hệ thống quản lý kênh phân phối, theo dõi đơn hàng, công nợ và hoạt động của hệ thống đại lý, nhà phân phối.",
    icon: Truck,
    features: [
      "Quản lý mạng lưới đại lý",
      "Theo dõi đơn hàng & giao nhận",
      "Quản lý công nợ & thanh toán",
      "Chính sách giá & khuyến mãi",
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

              <div className="mb-2">
                <span className="text-2xl font-bold text-primary">
                  {product.name}
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
