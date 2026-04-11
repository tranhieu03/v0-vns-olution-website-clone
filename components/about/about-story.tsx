"use client"

import Image from "next/image"

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Câu chuyện của chúng tôi
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mt-3 mb-6 text-balance">
              Hành trình 15+ năm kiến tạo giải pháp số
            </h2>
            <div className="space-y-4 text-[#333333]/70 leading-relaxed">
              <p>
                <strong className="text-[#333333]">VNSolution</strong> được thành lập năm 2008 với sứ mệnh 
                mang đến những giải pháp phần mềm chất lượng cao, phù hợp với đặc thù doanh nghiệp Việt Nam.
              </p>
              <p>
                Khởi đầu từ một nhóm nhỏ gồm 5 kỹ sư phần mềm đam mê công nghệ, chúng tôi đã không ngừng 
                phát triển và mở rộng quy mô. Đến nay, VNSolution đã có đội ngũ hơn 200 chuyên gia công nghệ, 
                phục vụ hơn 500 doanh nghiệp trên khắp Việt Nam và khu vực Đông Nam Á.
              </p>
              <p>
                Chúng tôi tin rằng công nghệ phải phục vụ con người, giúp đơn giản hóa quy trình kinh doanh 
                và tạo ra giá trị thực sự cho doanh nghiệp. Đó là kim chỉ nam cho mọi sản phẩm và dịch vụ 
                mà VNSolution mang đến.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/company-office.jpg"
                alt="Văn phòng VNSolution"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div>
                  <p className="text-sm text-[#333333]/60">Năm</p>
                  <p className="font-semibold text-[#333333]">Kinh nghiệm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
