import { CheckCircle2 } from "lucide-react"

const featuresData: Record<string, {
  title: string
  description: string
  categories: {
    name: string
    features: string[]
  }[]
}> = {
  erp: {
    title: "Tính năng chi tiết VNSolution ERP",
    description: "Khám phá toàn bộ tính năng giúp quản trị doanh nghiệp hiệu quả",
    categories: [
      {
        name: "Tài chính & Kế toán",
        features: [
          "Sổ cái tổng hợp (General Ledger)",
          "Quản lý công nợ phải thu/phải trả",
          "Quản lý ngân sách",
          "Báo cáo tài chính theo chuẩn VAS",
          "Tích hợp ngân hàng điện tử",
          "Quản lý thuế tự động"
        ]
      },
      {
        name: "Quản lý Kho & Mua hàng",
        features: [
          "Quản lý tồn kho đa kho",
          "Theo dõi lot/serial number",
          "Kiểm kê tồn kho",
          "Quản lý nhà cung cấp",
          "Đơn đặt hàng tự động",
          "Báo cáo xuất nhập tồn"
        ]
      },
      {
        name: "Sản xuất",
        features: [
          "Định mức nguyên vật liệu (BOM)",
          "Lập kế hoạch sản xuất",
          "Theo dõi tiến độ sản xuất",
          "Quản lý công đoạn",
          "Tính giá thành sản phẩm",
          "Quality Control"
        ]
      },
      {
        name: "Bán hàng",
        features: [
          "Quản lý đơn hàng",
          "Chính sách giá linh hoạt",
          "Quản lý khuyến mãi",
          "Báo cáo doanh số",
          "Quản lý công nợ khách hàng",
          "Tích hợp POS"
        ]
      }
    ]
  },
  crm: {
    title: "Tính năng chi tiết VNSolution CRM",
    description: "Công cụ mạnh mẽ để quản lý và phát triển quan hệ khách hàng",
    categories: [
      {
        name: "Quản lý Khách hàng",
        features: [
          "360° Customer View",
          "Phân loại khách hàng",
          "Lịch sử giao dịch",
          "Quản lý contacts",
          "Import/Export dữ liệu",
          "Duplicate detection"
        ]
      },
      {
        name: "Sales Pipeline",
        features: [
          "Kanban pipeline",
          "Lead management",
          "Opportunity tracking",
          "Quote/Proposal",
          "Win/Loss analysis",
          "Sales forecasting"
        ]
      },
      {
        name: "Marketing Automation",
        features: [
          "Email campaigns",
          "Landing pages",
          "Lead scoring",
          "Marketing workflows",
          "Campaign ROI tracking",
          "Social media integration"
        ]
      },
      {
        name: "Customer Service",
        features: [
          "Ticket management",
          "Knowledge base",
          "SLA management",
          "Customer portal",
          "Satisfaction surveys",
          "Service analytics"
        ]
      }
    ]
  },
  hrm: {
    title: "Tính năng chi tiết VNSolution HRM",
    description: "Giải pháp quản lý nhân sự toàn diện từ tuyển dụng đến nghỉ việc",
    categories: [
      {
        name: "Quản lý Nhân sự",
        features: [
          "Hồ sơ nhân viên số hóa",
          "Quản lý hợp đồng lao động",
          "Sơ đồ tổ chức",
          "Quản lý bảo hiểm",
          "Theo dõi tài sản cấp phát",
          "Exit management"
        ]
      },
      {
        name: "Chấm công & Lương",
        features: [
          "Chấm công đa phương thức",
          "Quản lý ca làm việc",
          "Tính lương tự động",
          "Quản lý thuế TNCN",
          "Payslip điện tử",
          "Báo cáo bảo hiểm"
        ]
      },
      {
        name: "Tuyển dụng (ATS)",
        features: [
          "Đăng tin tuyển dụng",
          "Quản lý hồ sơ ứng viên",
          "Pipeline tuyển dụng",
          "Lên lịch phỏng vấn",
          "Đánh giá ứng viên",
          "Onboarding workflow"
        ]
      },
      {
        name: "Đào tạo & Phát triển",
        features: [
          "Learning Management",
          "Khóa học online",
          "Theo dõi tiến độ học",
          "Chứng chỉ điện tử",
          "Succession planning",
          "Competency mapping"
        ]
      }
    ]
  },
  dms: {
    title: "Tính năng chi tiết VNSolution DMS",
    description: "Kiểm soát toàn bộ kênh phân phối từ đơn hàng đến giao nhận",
    categories: [
      {
        name: "Quản lý Đơn hàng",
        features: [
          "Đặt hàng di động",
          "Xử lý đơn hàng tự động",
          "Chính sách giá theo kênh",
          "Quản lý khuyến mãi",
          "Credit limit",
          "Order history"
        ]
      },
      {
        name: "Quản lý Kho",
        features: [
          "Multi-warehouse",
          "Real-time inventory",
          "Stock transfer",
          "Batch/Expiry tracking",
          "Inventory alerts",
          "Stock reports"
        ]
      },
      {
        name: "Route & Delivery",
        features: [
          "Route planning",
          "GPS tracking",
          "Delivery optimization",
          "POD (Proof of Delivery)",
          "Driver management",
          "Fleet tracking"
        ]
      },
      {
        name: "Analytics & Reports",
        features: [
          "Sales dashboard",
          "Territory performance",
          "Product analytics",
          "Customer insights",
          "Trend analysis",
          "Custom reports"
        ]
      }
    ]
  }
}

export function ProductPricingFeatures({ product }: { product: string }) {
  const data = featuresData[product] || featuresData.erp

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl mb-4">
            {data.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {data.categories.map((category, index) => (
            <div key={index} className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-4 border-b border-border">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
