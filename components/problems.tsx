import { MapPin, Clock, Truck, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: MapPin,
    title: "Lộ trình thu gom chưa tối ưu",
    description: "Phương tiện di chuyển lòng vòng, tốn nhiên liệu và thời gian do thiếu công cụ quy hoạch tuyến đường thông minh.",
  },
  {
    icon: Clock,
    title: "Giám sát thủ công, thiếu realtime",
    description: "Không nắm bắt được tiến độ thu gom theo thời gian thực, khó xử lý sự cố kịp thời và điều phối nhân lực hiệu quả.",
  },
  {
    icon: Truck,
    title: "Quản lý phương tiện phân tán",
    description: "Thông tin xe, lái xe, lịch bảo trì lưu trữ rời rạc, gây khó khăn trong việc theo dõi và duy trì đội xe.",
  },
  {
    icon: BarChart3,
    title: "Thiếu dữ liệu báo cáo chính xác",
    description: "Không có số liệu thống kê chi tiết về khối lượng rác, tỷ lệ tái chế, chi phí vận hành để đưa ra quyết định.",
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
            Hàng trăm công ty môi trường đô thị và doanh nghiệp xử lý rác thải đang gặp khó khăn với quy trình vận hành thủ công, thiếu công nghệ.
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
