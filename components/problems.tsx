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
    <section className="py-16 lg:py-24 bg-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(62,142,208,0.08),transparent)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Thách thức phổ biến</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Doanh nghiệp của bạn đang gặp những vấn đề này?
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Đây là những thách thức mà hầu hết doanh nghiệp đều gặp phải khi vận hành 
            với quy trình thủ công và hệ thống không đồng bộ.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-slate-600/30 bg-white p-6 transition-smooth hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-500 transition-all group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                <challenge.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-800">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
