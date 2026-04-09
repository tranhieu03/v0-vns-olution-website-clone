import { FileText, Clock, Users, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: FileText,
    title: "Quản lý mẫu bằng sổ sách",
    description: "Theo dõi mẫu kiểm nghiệm bằng sổ giấy hoặc Excel, dễ thất lạc, khó tra cứu lịch sử và không đảm bảo tính toàn vẹn dữ liệu.",
  },
  {
    icon: Clock,
    title: "Quy trình thủ công, chậm trễ",
    description: "Luân chuyển mẫu giữa các bộ phận bằng giấy, mất thời gian chờ đợi, khó theo dõi tiến độ và thường xuyên trễ hạn trả kết quả.",
  },
  {
    icon: Users,
    title: "Phân công thiếu tối ưu",
    description: "Phân công kiểm nghiệm viên thủ công, không cân đối khối lượng công việc, dẫn đến quá tải hoặc lãng phí nguồn lực.",
  },
  {
    icon: BarChart3,
    title: "Báo cáo thống kê khó khăn",
    description: "Tổng hợp số liệu báo cáo định kỳ tốn nhiều công sức, thiếu chính xác và không đáp ứng yêu cầu của cơ quan cấp trên.",
  },
]

export function Problems() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Viện Kiểm nghiệm đang gặp vấn đề gì?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Nhiều Viện/Trung tâm Kiểm nghiệm vẫn đang gặp khó khăn với quy trình thủ công, 
            gây ảnh hưởng đến chất lượng và tiến độ kiểm nghiệm.
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
