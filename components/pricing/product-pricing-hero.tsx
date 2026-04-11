import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Building2, Users, FileBox, Package } from "lucide-react"

const products: Record<string, {
  name: string
  fullName: string
  description: string
  tagline: string
  icon: React.ElementType
  color: string
}> = {
  erp: {
    name: "ERP",
    fullName: "Enterprise Resource Planning",
    description: "Hệ thống quản trị tổng thể doanh nghiệp - Tích hợp tất cả quy trình từ tài chính, sản xuất đến nhân sự trong một nền tảng duy nhất.",
    tagline: "Giải pháp toàn diện cho doanh nghiệp",
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  crm: {
    name: "CRM",
    fullName: "Customer Relationship Management",
    description: "Quản lý quan hệ khách hàng chuyên nghiệp - Tăng doanh số, cải thiện dịch vụ khách hàng và tự động hóa quy trình bán hàng.",
    tagline: "Tăng trưởng doanh số bền vững",
    icon: Users,
    color: "from-emerald-500 to-emerald-600"
  },
  hrm: {
    name: "HRM",
    fullName: "Human Resource Management",
    description: "Quản lý nhân sự toàn diện - Từ tuyển dụng, chấm công, tính lương đến đánh giá hiệu suất và phát triển nhân viên.",
    tagline: "Tối ưu nguồn nhân lực",
    icon: Users,
    color: "from-purple-500 to-purple-600"
  },
  dms: {
    name: "DMS",
    fullName: "Distribution Management System",
    description: "Hệ thống quản lý phân phối - Kiểm soát kênh phân phối, tồn kho, đơn hàng và logistics một cách hiệu quả.",
    tagline: "Kiểm soát chuỗi phân phối",
    icon: Package,
    color: "from-orange-500 to-orange-600"
  }
}

export function ProductPricingHero({ product }: { product: string }) {
  const productData = products[product] || products.erp
  const Icon = productData.icon

  return (
    <section className={`relative py-16 lg:py-24 bg-gradient-to-br ${productData.color} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/bang-gia" 
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Quay lại bảng giá
          </Link>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
            <Icon className="h-10 w-10 text-white" />
          </div>
          
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {productData.tagline}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bảng giá VNSolution {productData.name}
          </h1>
          
          <p className="text-lg text-white/80 mb-2">
            {productData.fullName}
          </p>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            {productData.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm text-white">Dùng thử miễn phí 14 ngày</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm text-white">Hỗ trợ triển khai</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-sm text-white">Đào tạo miễn phí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
