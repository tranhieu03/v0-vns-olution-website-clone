import { FileX, Clock, TrendingDown, BarChart3 } from "lucide-react"

const challenges = [
  {
    icon: FileX,
    title: "Dữ liệu phân tán",
    description: "Thông tin nằm rải rác trên nhiều file Excel, phần mềm không liên kết, gây khó khăn trong việc tổng hợp và đồng bộ dữ liệu.",
  },
  {
    icon: Clock,
    title: "Quy trình thủ công",
    description: "Xử lý công việc bằng tay tốn nhiều thời gian, dễ sai sót và khiến nhân viên không thể tập trung vào công việc có giá trị cao hơn.",
  },
  {
    icon: TrendingDown,
    title: "Khó mở rộng quy mô",
    description: "Hệ thống cũ không đáp ứng được khi doanh nghiệp phát triển, tạo ra điểm nghẽn và hạn chế tăng trưởng.",
  },
  {
    icon: BarChart3,
    title: "Thiếu thông tin ra quyết định",
    description: "Không có báo cáo tổng hợp thời gian thực, lãnh đạo khó nắm bắt tình hình và đưa ra quyết định kịp thời, chính xác.",
  },
]

export function Problems() {
  return (
    <section className="py-16 lg:py-24 bg-[#1A1E24]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Thách thức phổ biến</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Doanh nghiệp của bạn đang gặp những vấn đề này?
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Đây là những thách thức mà hầu hết doanh nghiệp đều gặp phải khi vận hành 
            với quy trình thủ công và hệ thống không đồng bộ.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-white/10 bg-white p-6 transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-smooth group-hover:bg-primary group-hover:text-white">
                <challenge.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#333333]">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm text-[#333333]/70 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
