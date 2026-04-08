import { CheckCircle } from "lucide-react"

const products = [
  {
    id: "erp",
    name: "VNS - ERP",
    title: "Quản trị doanh nghiệp tổng thể",
    description: "VNS-ERP là giải pháp quản trị tổng thể giúp doanh nghiệp kiểm soát toàn bộ hoạt động từ tài chính, nhân sự đến vận hành trên một nền tảng duy nhất. Hệ thống giúp chuẩn hóa quy trình, giảm sai sót và tăng hiệu quả quản trị theo thời gian thực.",
    features: [
      "Quản lý tài chính và kế toán tự động",
      "Theo dõi tồn kho và chuỗi cung ứng",
      "Báo cáo tổng hợp theo thời gian thực",
      "Tích hợp đa phòng ban liền mạch",
    ],
    image: "erp",
    reverse: false,
  },
  {
    id: "hrm",
    name: "VNS - HRM",
    title: "Quản lý nhân sự toàn diện",
    description: "VNS-HRM là giải pháp quản lý nhân sự toàn diện, giúp doanh nghiệp số hóa quy trình từ tuyển dụng, chấm công, tính lương đến đánh giá hiệu suất trên một nền tảng duy nhất.",
    features: [
      "Quản lý hồ sơ nhân viên số hóa",
      "Chấm công và tính lương tự động",
      "Quy trình tuyển dụng chuyên nghiệp",
      "Đánh giá hiệu suất KPI/OKR",
    ],
    image: "hrm",
    reverse: true,
  },
]

export function Products() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-20">
          {products.map((product) => (
            <div
              key={product.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                product.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={product.reverse ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
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
                <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                  <div className="rounded-xl bg-muted/50 p-4">
                    {/* Mock Dashboard */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded bg-primary/20" />
                          <div className="h-3 w-20 rounded bg-muted" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-3 w-16 rounded bg-muted" />
                          <div className="h-3 w-16 rounded bg-muted" />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="rounded-lg bg-background p-3 shadow-sm">
                            <div className="h-2 w-12 rounded bg-muted" />
                            <div className="mt-2 h-6 w-16 rounded bg-primary/30" />
                          </div>
                        ))}
                      </div>

                      {/* Content Area */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-lg bg-background p-4 shadow-sm">
                          <div className="h-2 w-20 rounded bg-muted" />
                          <div className="mt-4 flex items-end gap-1">
                            {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t bg-primary/60"
                                style={{ height: `${h}px` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg bg-background p-4 shadow-sm">
                          <div className="h-2 w-16 rounded bg-muted" />
                          <div className="mt-4 flex items-center justify-center">
                            <div className="h-20 w-20 rounded-full border-8 border-primary/30 border-t-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Table */}
                      <div className="rounded-lg bg-background p-3 shadow-sm">
                        <div className="space-y-2">
                          {[1, 2, 3].map((row) => (
                            <div key={row} className="flex items-center gap-3 rounded bg-muted/30 p-2">
                              <div className="h-6 w-6 rounded-full bg-primary/20" />
                              <div className="h-2 w-24 rounded bg-muted" />
                              <div className="ml-auto h-2 w-16 rounded bg-accent/50" />
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
