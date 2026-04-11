"use client"

import { 
  Wallet, 
  GraduationCap, 
  Heart, 
  Clock, 
  Plane, 
  Gift,
  Monitor,
  Coffee
} from "lucide-react"

const benefits = [
  {
    icon: Wallet,
    title: "Lương thưởng cạnh tranh",
    description: "Mức lương hấp dẫn, thưởng dự án, review lương 2 lần/năm",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo & phát triển",
    description: "Hỗ trợ học phí, chứng chỉ quốc tế, mentoring chuyên sâu",
  },
  {
    icon: Heart,
    title: "Bảo hiểm sức khỏe",
    description: "Bảo hiểm cao cấp cho nhân viên và người thân",
  },
  {
    icon: Clock,
    title: "Giờ làm linh hoạt",
    description: "Flexible working hours, hỗ trợ làm việc từ xa",
  },
  {
    icon: Plane,
    title: "Du lịch hàng năm",
    description: "Team building, company trip trong và ngoài nước",
  },
  {
    icon: Gift,
    title: "Phúc lợi đa dạng",
    description: "Sinh nhật, hiếu hỷ, thưởng lễ tết, quà cho gia đình",
  },
  {
    icon: Monitor,
    title: "Trang thiết bị hiện đại",
    description: "MacBook, màn hình 4K, bàn nâng hạ, ghế công thái học",
  },
  {
    icon: Coffee,
    title: "Môi trường năng động",
    description: "Văn phòng hiện đại, pantry đầy đủ, game room giải trí",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Quyền lợi nhân viên
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Vì sao nên làm việc tại VNSolution?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Chúng tôi cam kết mang đến môi trường làm việc tốt nhất cho nhân viên
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group p-6 rounded-xl bg-background border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
