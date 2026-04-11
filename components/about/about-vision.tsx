"use client"

import { Target, Eye, Heart, Zap } from "lucide-react"

const visionItems = [
  {
    icon: Eye,
    title: "Tầm nhìn",
    description: "Trở thành đối tác công nghệ hàng đầu Đông Nam Á, dẫn dắt xu hướng chuyển đổi số cho doanh nghiệp vừa và nhỏ.",
    color: "bg-blue-500",
  },
  {
    icon: Target,
    title: "Sứ mệnh",
    description: "Cung cấp giải pháp phần mềm tối ưu, giúp doanh nghiệp vận hành hiệu quả, tiết kiệm chi phí và phát triển bền vững.",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "Giá trị cốt lõi",
    description: "Chất lượng - Tận tâm - Sáng tạo - Hợp tác. Chúng tôi đặt khách hàng làm trọng tâm trong mọi quyết định.",
    color: "bg-orange-500",
  },
  {
    icon: Zap,
    title: "Cam kết",
    description: "Đảm bảo sản phẩm hoạt động ổn định 99.9%, hỗ trợ 24/7 và liên tục cập nhật tính năng mới theo xu hướng.",
    color: "bg-purple-500",
  },
]

export function AboutVision() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F7F9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Định hướng phát triển
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mt-3 text-balance">
            Tầm nhìn & Sứ mệnh
          </h2>
          <p className="mt-4 text-[#333333]/70 leading-relaxed">
            Chúng tôi xây dựng VNSolution dựa trên nền tảng giá trị vững chắc, 
            với mục tiêu trở thành đối tác công nghệ đáng tin cậy nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-smooth"
            >
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                {item.title}
              </h3>
              <p className="text-[#333333]/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
