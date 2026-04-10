import { FileText, Clock, Layers, BarChart3 } from "lucide-react"

const challenges = [
  {
    icon: FileText,
    title: "Hệ thống phân mảnh",
    description: "Quản lý vận hành qua nhiều nền tảng không liên kết dẫn đến dữ liệu rời rạc, nhập liệu trùng lặp và thông tin thiếu nhất quán giữa các phòng ban.",
  },
  {
    icon: Clock,
    title: "Quy trình thủ công",
    description: "Các công việc xử lý thủ công làm chậm tiến độ, tăng tỷ lệ sai sót và khiến đội ngũ không thể tập trung vào các hoạt động mang tính chiến lược.",
  },
  {
    icon: Layers,
    title: "Hạn chế mở rộng",
    description: "Hệ thống cũ khó theo kịp tốc độ tăng trưởng, tạo ra điểm nghẽn và hạn chế khả năng mở rộng quy mô hoạt động một cách hiệu quả.",
  },
  {
    icon: BarChart3,
    title: "Thiếu dữ liệu tổng quan",
    description: "Không có phân tích thời gian thực và báo cáo tổng hợp, việc đưa ra quyết định dựa trên dữ liệu trở nên khó khăn và mang tính phản ứng thay vì chủ động.",
  },
]

export function Problems() {
  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Thách thức</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Doanh nghiệp của bạn đang gặp những vấn đề này?
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Nhiều tổ chức đang đối mặt với quy trình lỗi thời và hệ thống không đồng bộ,
            điều này hạn chế sự phát triển và hiệu quả vận hành.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                <challenge.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
