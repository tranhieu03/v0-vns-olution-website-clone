import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, FileText, BarChart3, CheckCircle, Layers, Database, Shield, Zap } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "ERP",
    fullName: "Quản trị Nguồn lực Doanh nghiệp",
    description: "Nền tảng tích hợp quản lý tài chính, vận hành, chuỗi cung ứng và phân tích kinh doanh để có cái nhìn toàn diện và kiểm soát tổ chức.",
    icon: Building2,
    color: "primary",
    features: [
      "Quản lý tài chính & kế toán",
      "Chuỗi cung ứng & kho bãi",
      "Vận hành sản xuất",
      "Phân tích & báo cáo kinh doanh",
    ],
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Quản lý Quan hệ Khách hàng",
    description: "Góc nhìn 360 độ về khách hàng với tự động hóa bán hàng, chiến dịch marketing và quản lý dịch vụ để thúc đẩy tăng trưởng và giữ chân khách hàng.",
    icon: Users,
    color: "accent",
    features: [
      "Quản lý pipeline bán hàng",
      "Tự động hóa marketing",
      "Cổng dịch vụ khách hàng",
      "Phân tích & dự báo",
    ],
  },
  {
    id: "hrm",
    name: "HRM",
    fullName: "Quản lý Nhân sự",
    description: "Quản lý toàn bộ vòng đời nhân sự từ tuyển dụng đến nghỉ hưu, với tính lương, theo dõi hiệu suất và tự phục vụ nhân viên.",
    icon: Layers,
    color: "primary",
    features: [
      "Tuyển dụng & onboarding",
      "Tính lương & phúc lợi",
      "Quản lý hiệu suất",
      "Đào tạo & phát triển",
    ],
  },
  {
    id: "dms",
    name: "DMS",
    fullName: "Quản lý Tài liệu",
    description: "Kho tài liệu tập trung, bảo mật với kiểm soát phiên bản, tự động hóa quy trình và theo dõi tuân thủ cho hoạt động không giấy tờ.",
    icon: FileText,
    color: "accent",
    features: [
      "Lưu trữ tài liệu an toàn",
      "Kiểm soát phiên bản & audit trail",
      "Tự động hóa quy trình",
      "Tìm kiếm & truy xuất",
    ],
  },
]

const integrationFeatures = [
  { icon: Database, text: "Kiến trúc dữ liệu thống nhất" },
  { icon: Shield, text: "Bảo mật cấp doanh nghiệp" },
  { icon: Zap, text: "Đồng bộ thời gian thực" },
  { icon: BarChart3, text: "Phân tích đa module" },
]

export function Products() {
  return (
    <section className="bg-muted/40 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Sản phẩm doanh nghiệp</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Bộ giải pháp Quản lý Kinh doanh Tích hợp
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Các giải pháp module, có khả năng mở rộng, hoạt động liền mạch cùng nhau hoặc độc lập
            để đáp ứng mọi khía cạnh vận hành doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/20 hover:shadow-md"
            >
              <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-lg ${
                product.color === "accent" ? "bg-accent/10" : "bg-primary/10"
              }`}>
                <product.icon className={`h-5 w-5 ${
                  product.color === "accent" ? "text-accent" : "text-primary"
                }`} />
              </div>

              <div className="mb-1.5">
                <span className={`text-xl font-bold ${
                  product.color === "accent" ? "text-accent" : "text-primary"
                }`}>
                  {product.name}
                </span>
              </div>
              <h3 className="text-xs font-medium text-muted-foreground mb-2">
                {product.fullName}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${
                      product.color === "accent" ? "text-accent" : "text-primary"
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" size="sm" className="w-full justify-between text-xs group-hover:text-primary">
                Tìm hiểu thêm
                <ArrowRight className="h-3.5 w-3.5 transition-smooth group-hover:translate-x-0.5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 lg:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Tích hợp liền mạch giữa tất cả các module
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Các sản phẩm của chúng tôi được thiết kế để hoạt động cùng nhau, chia sẻ dữ liệu và quy trình
                để loại bỏ silo thông tin và cung cấp cái nhìn thống nhất về tổ chức.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {integrationFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10">
                      <feature.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-background shadow-sm transition-smooth hover:shadow-md"
                    >
                      <product.icon className={`h-6 w-6 ${
                        product.color === "accent" ? "text-accent" : "text-primary"
                      }`} />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-12 w-12 rounded-full border-2 border-dashed border-accent/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
