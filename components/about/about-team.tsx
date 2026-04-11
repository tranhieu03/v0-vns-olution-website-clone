"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Nguyễn Văn Minh",
    role: "Giám đốc điều hành (CEO)",
    image: "/images/team/ceo.jpg",
    bio: "15+ năm kinh nghiệm trong lĩnh vực phần mềm doanh nghiệp",
  },
  {
    name: "Trần Thị Hương",
    role: "Giám đốc công nghệ (CTO)",
    image: "/images/team/cto.jpg",
    bio: "Chuyên gia kiến trúc hệ thống với 12 năm kinh nghiệm",
  },
  {
    name: "Lê Quang Huy",
    role: "Giám đốc sản phẩm (CPO)",
    image: "/images/team/cpo.jpg",
    bio: "10+ năm phát triển sản phẩm cho doanh nghiệp Việt",
  },
  {
    name: "Phạm Minh Châu",
    role: "Giám đốc kinh doanh (CSO)",
    image: "/images/team/cso.jpg",
    bio: "Chuyên gia tư vấn chuyển đổi số cho doanh nghiệp",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Đội ngũ lãnh đạo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mt-3 text-balance">
            Những người dẫn dắt VNSolution
          </h2>
          <p className="mt-4 text-[#333333]/70 leading-relaxed">
            Đội ngũ lãnh đạo giàu kinh nghiệm, tâm huyết với sứ mệnh 
            đưa công nghệ đến gần hơn với doanh nghiệp Việt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-smooth"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#333333] text-lg">{member.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                <p className="text-[#333333]/60 text-sm mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-[#F5F7F9] rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-[#333333]/60 mt-1">Nhân viên</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-[#333333]/60 mt-1">Kỹ sư cao cấp</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-[#333333]/60 mt-1">Văn phòng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
