import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Truck, BarChart3, CheckCircle, Settings, Shield, Zap, Bot, Sparkles } from "lucide-react"
import Link from "next/link"

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
  { icon: Bot, text: "AI tự động hóa quy trình" },
  { icon: Zap, text: "Đồng bộ dữ liệu realtime" },
  { icon: Shield, text: "Bảo mật cấp doanh nghiệp" },
  { icon: BarChart3, text: "Dashboard phân tích AI" },
]

export function Products() {
  return (
    <section id="products" className="bg-white py-16 lg:py-24">
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
              className={`group rounded-xl border border-slate-200 bg-white p-6 transition-all hover-lift hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 transition-all group-hover:from-primary group-hover:to-cyan-500 group-hover:shadow-lg group-hover:shadow-primary/30">
                <product.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <div className="mb-2">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  {product.name}
                </span>
              </div>
              <h3 className="text-sm font-medium text-slate-800 mb-2">
                {product.fullName}
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2 mb-5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/bang-gia">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between text-sm text-slate-500 group-hover:text-primary transition-colors-smooth"
                >
                  Xem bảng giá
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700/50 p-8 lg:p-10 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(62,142,208,0.15),transparent)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
          
          <div className="grid items-center gap-8 lg:grid-cols-5 relative">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">AI-Powered Platform</span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                Tích hợp AI mạnh mẽ toàn bộ hệ thống
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Tất cả các module được thiết kế trên cùng một nền tảng AI thông minh, đảm bảo việc chia sẻ 
                dữ liệu và quy trình xuyên suốt, loại bỏ hoàn toàn các rào cản thông tin 
                giữa các phòng ban.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {integrationFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2.5 bg-slate-800/80 rounded-full px-4 py-2.5 border border-slate-700/50 backdrop-blur-sm">
                    <feature.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/30 border border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                </div>
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 224 224">
                  {products.map((_, index) => {
                    const angle = (index * 90 - 45) * (Math.PI / 180)
                    const x = Math.cos(angle) * 80 + 112
                    const y = Math.sin(angle) * 80 + 112
                    return (
                      <line
                        key={index}
                        x1="112"
                        y1="112"
                        x2={x}
                        y2={y}
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="opacity-40"
                      />
                    )
                  })}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3E8ED0" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
                {products.map((product, index) => {
                  const angle = (index * 90 - 45) * (Math.PI / 180)
                  const x = Math.cos(angle) * 80
                  const y = Math.sin(angle) * 80
                  return (
                    <div
                      key={product.id}
                      className="absolute w-14 h-14 rounded-xl bg-slate-800 border border-slate-700/50 shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl hover:border-primary/50 hover:bg-slate-700"
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
