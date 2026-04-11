"use client"

import { Award, Users, Building2, Globe, Rocket, Trophy } from "lucide-react"

const milestones = [
  {
    year: "2008",
    icon: Rocket,
    title: "Khởi nghiệp",
    description: "Thành lập công ty với 5 thành viên sáng lập tại TP.HCM",
  },
  {
    year: "2012",
    icon: Users,
    title: "Mở rộng đội ngũ",
    description: "Đạt mốc 50 nhân viên, ra mắt sản phẩm ERP đầu tiên",
  },
  {
    year: "2015",
    icon: Building2,
    title: "Mở văn phòng Hà Nội",
    description: "Mở rộng thị trường ra miền Bắc, phục vụ 100+ khách hàng",
  },
  {
    year: "2018",
    icon: Award,
    title: "Chứng nhận ISO",
    description: "Đạt chứng nhận ISO 27001 về bảo mật thông tin",
  },
  {
    year: "2021",
    icon: Globe,
    title: "Vươn ra khu vực",
    description: "Mở rộng sang thị trường Đông Nam Á với văn phòng tại Singapore",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "500+ khách hàng",
    description: "Đạt mốc 500 doanh nghiệp tin tưởng sử dụng giải pháp",
  },
]

export function AboutMilestones() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F7F9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Hành trình phát triển
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mt-3 text-balance">
            Các cột mốc quan trọng
          </h2>
          <p className="mt-4 text-[#333333]/70 leading-relaxed">
            Những bước tiến vững chắc trên con đường trở thành 
            đối tác công nghệ hàng đầu khu vực.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block" />
          
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-smooth ${
                    index % 2 === 0 ? "lg:ml-auto" : ""
                  } max-w-md`}>
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <milestone.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className={`text-lg font-bold text-[#333333] mb-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-[#333333]/70 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
