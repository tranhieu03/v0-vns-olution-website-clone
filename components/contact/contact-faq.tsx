"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Làm thế nào để bắt đầu sử dụng phần mềm của VNSolution?",
    answer: "Bạn có thể liên hệ qua hotline 1900 1234 hoặc điền form tư vấn. Đội ngũ sẽ liên hệ để khảo sát nhu cầu, demo sản phẩm và đề xuất giải pháp phù hợp với doanh nghiệp của bạn.",
  },
  {
    question: "VNSolution có hỗ trợ triển khai và đào tạo không?",
    answer: "Có, chúng tôi cung cấp dịch vụ triển khai trọn gói bao gồm: cài đặt, cấu hình, migrate dữ liệu, đào tạo nhân viên và hỗ trợ sau triển khai. Đội ngũ kỹ thuật sẽ đồng hành cùng bạn trong suốt quá trình.",
  },
  {
    question: "Chi phí sử dụng phần mềm như thế nào?",
    answer: "Chi phí phụ thuộc vào quy mô doanh nghiệp, số lượng người dùng và các module cần sử dụng. Vui lòng liên hệ để nhận báo giá chi tiết hoặc xem trang Bảng giá để tham khảo các gói cơ bản.",
  },
  {
    question: "Phần mềm có thể tùy chỉnh theo yêu cầu riêng không?",
    answer: "Hoàn toàn có thể. VNSolution cung cấp dịch vụ customize phần mềm theo quy trình nghiệp vụ đặc thù của từng doanh nghiệp. Chúng tôi sẽ khảo sát và đề xuất giải pháp tối ưu nhất.",
  },
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer: "Tuyệt đối. VNSolution đạt chứng nhận ISO 27001 về bảo mật thông tin. Dữ liệu được mã hóa, backup định kỳ và lưu trữ trên hệ thống server đạt chuẩn Tier-3 với uptime 99.9%.",
  },
  {
    question: "Thời gian triển khai mất bao lâu?",
    answer: "Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của dự án. Thông thường từ 2-4 tuần cho doanh nghiệp nhỏ và 1-3 tháng cho doanh nghiệp lớn với nhiều module tích hợp.",
  },
]

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Câu hỏi thường gặp
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#333333] mt-3 text-balance">
            Giải đáp thắc mắc
          </h2>
          <p className="mt-3 text-[#333333]/70">
            Những câu hỏi phổ biến về dịch vụ của VNSolution
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#333333] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#333333]/50 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-[#333333]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
