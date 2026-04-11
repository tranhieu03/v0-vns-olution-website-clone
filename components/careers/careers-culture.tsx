"use client"

import { Lightbulb, Users, Target, Zap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Sáng tạo không ngừng",
    description: "Luôn khuyến khích ý tưởng mới, thử nghiệm công nghệ tiên tiến và tìm ra giải pháp tối ưu cho mọi vấn đề.",
  },
  {
    icon: Users,
    title: "Tinh thần đồng đội",
    description: "Hợp tác chặt chẽ, hỗ trợ lẫn nhau để cùng đạt được mục tiêu chung của tổ chức.",
  },
  {
    icon: Target,
    title: "Cam kết chất lượng",
    description: "Đặt chất lượng sản phẩm và sự hài lòng của khách hàng lên hàng đầu trong mọi hoạt động.",
  },
  {
    icon: Zap,
    title: "Phát triển bền vững",
    description: "Tạo môi trường để mỗi thành viên đều có cơ hội học hỏi, phát triển và thăng tiến.",
  },
]

const images = [
  { src: "/images/culture-1.jpg", alt: "Team building" },
  { src: "/images/culture-2.jpg", alt: "Office space" },
  { src: "/images/culture-3.jpg", alt: "Team meeting" },
  { src: "/images/culture-4.jpg", alt: "Company event" },
]

export function CareersCulture() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Văn hóa công ty
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl mb-6">
              Giá trị cốt lõi định hình văn hóa VNSolution
            </h2>
            <p className="text-muted-foreground mb-8">
              Chúng tôi xây dựng một môi trường làm việc nơi mỗi cá nhân được tôn trọng, 
              được phát triển và được đóng góp vào thành công chung của tổ chức.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 overflow-hidden ${
                  index === 0 ? "aspect-[4/3]" : index === 1 ? "aspect-square" : index === 2 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
