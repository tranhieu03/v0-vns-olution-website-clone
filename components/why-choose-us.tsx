import { Zap, Smartphone, DollarSign, Layers, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const differentiators = [
  {
    icon: Zap,
    title: "Triển khai trong 7 ngày",
    description: "Không như các giải pháp khác mất 3-6 tháng. Doanh nghiệp bạn go-live chỉ sau 1 tuần với đội ngũ hỗ trợ 24/7.",
    highlight: "7 ngày",
  },
  {
    icon: Smartphone,
    title: "Dễ dùng như ứng dụng điện thoại",
    description: "Không cần đội IT. Nhân viên tự sử dụng được ngay sau 2 giờ đào tạo. Giao diện tiếng Việt 100%.",
    highlight: "2 giờ đào tạo",
  },
  {
    icon: Layers,
    title: "All-in-one thực sự",
    description: "ERP + CRM + HRM + DMS trên 1 nền tảng. Không cần mua thêm module, không phát sinh chi phí ẩn.",
    highlight: "4-in-1",
  },
  {
    icon: DollarSign,
    title: "Giá phù hợp doanh nghiệp SME",
    description: "Chỉ từ 2 triệu/tháng cho gói cơ bản. Rẻ hơn 70% so với Odoo, SAP và các giải pháp quốc tế.",
    highlight: "Từ 2 triệu/tháng",
  },
]

const competitors = [
  { name: "Odoo", issue: "Mất 3+ tháng triển khai, cần IT support" },
  { name: "SAP", issue: "Chi phí cao, phức tạp cho SME" },
  { name: "Excel", issue: "Dữ liệu phân tán, không realtime" },
  { name: "MISA", issue: "Chỉ kế toán, không all-in-one" },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Tại sao chọn VNSolution</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Khác biệt so với các giải pháp khác trên thị trường
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Chúng tôi hiểu rằng doanh nghiệp SME cần giải pháp nhanh, rẻ, dễ dùng - không phải hệ thống phức tạp.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 mb-14">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className={`group rounded-2xl border border-border bg-card p-6 transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-border p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl mb-4">
                So sánh nhanh với các giải pháp phổ biến
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Doanh nghiệp thường gặp những vấn đề này khi sử dụng các giải pháp khác:
              </p>
              <div className="space-y-3">
                {competitors.map((comp) => (
                  <div key={comp.name} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                      <span className="text-xs font-bold text-destructive">X</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{comp.name}</p>
                      <p className="text-xs text-muted-foreground">{comp.issue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground">VNSolution</h4>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Triển khai 7 ngày, không phải 3-6 tháng</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>All-in-one: ERP + CRM + HRM + DMS</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Dễ dùng, không cần đội IT</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Giá từ 2 triệu/tháng (rẻ hơn 70%)</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>Hỗ trợ tiếng Việt 24/7</span>
                </li>
              </ul>
              <Button className="w-full gap-2 h-12 font-semibold">
                So sánh chi tiết
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
