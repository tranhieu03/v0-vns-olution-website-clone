import { FileX, Clock, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: FileX,
    title: "Tài liệu rời rạc",
    description: "Tài liệu lưu trữ phân tán, khó tìm kiếm và quản lý phiên bản gây mất thời gian và sai sót.",
  },
  {
    icon: Clock,
    title: "Quy trình thủ công",
    description: "Phê duyệt chậm trễ, công việc bị đình trệ do quy trình thủ công và thiếu tự động hóa.",
  },
  {
    icon: Users,
    title: "Phối hợp kém hiệu quả",
    description: "Các phòng ban làm việc độc lập, thiếu kết nối và chia sẻ thông tin kịp thời.",
  },
  {
    icon: TrendingDown,
    title: "Thiếu báo cáo tổng hợp",
    description: "Không có cái nhìn toàn diện về hoạt động doanh nghiệp, khó đưa ra quyết định chính xác.",
  },
]

export function Problems() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Doanh nghiệp bạn đang gặp vấn đề gì?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Hàng nghìn doanh nghiệp Việt Nam đang lãng phí thời gian và nguồn lực vì quy trình thủ công, lạc hậu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
