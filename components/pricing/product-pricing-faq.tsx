"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData: Record<string, { question: string; answer: string }[]> = {
  erp: [
    {
      question: "Thời gian triển khai ERP mất bao lâu?",
      answer: "Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của doanh nghiệp. Thông thường, gói Starter mất 2-4 tuần, Professional 4-8 tuần, và Enterprise 8-16 tuần. Chúng tôi sẽ đánh giá cụ thể sau khi khảo sát nhu cầu."
    },
    {
      question: "Có hỗ trợ migrate dữ liệu từ hệ thống cũ không?",
      answer: "Có, chúng tôi hỗ trợ migrate dữ liệu từ các hệ thống như Excel, phần mềm kế toán cũ, hoặc ERP khác. Chi phí migrate được tính riêng tùy theo khối lượng và độ phức tạp dữ liệu."
    },
    {
      question: "Có thể tùy chỉnh theo quy trình riêng không?",
      answer: "Có, đặc biệt với gói Enterprise. Chúng tôi có đội ngũ phát triển sẵn sàng tùy chỉnh theo quy trình nghiệp vụ đặc thù của doanh nghiệp. Chi phí tùy chỉnh được báo giá riêng."
    },
    {
      question: "Chính sách đào tạo như thế nào?",
      answer: "Tất cả các gói đều bao gồm đào tạo người dùng cuối. Gói Professional và Enterprise còn có đào tạo Admin và đào tạo nâng cao. Chúng tôi cũng cung cấp video hướng dẫn và tài liệu online."
    },
    {
      question: "Có thể nâng cấp gói sau không?",
      answer: "Có, bạn có thể nâng cấp lên gói cao hơn bất cứ lúc nào. Chi phí sẽ được tính theo tỷ lệ thời gian còn lại của gói hiện tại. Dữ liệu được giữ nguyên khi nâng cấp."
    }
  ],
  crm: [
    {
      question: "Có tích hợp được với các công cụ khác không?",
      answer: "Có, VNSolution CRM tích hợp với nhiều công cụ phổ biến: Email (Gmail, Outlook), Tổng đài VoIP, Social Media, Zalo OA, Website forms, và các ứng dụng khác qua API."
    },
    {
      question: "Có hỗ trợ làm việc trên mobile không?",
      answer: "Có, chúng tôi cung cấp ứng dụng mobile cho cả iOS và Android. Sales có thể quản lý leads, cập nhật cơ hội, gọi điện và ghi chú ngay trên điện thoại."
    },
    {
      question: "Dữ liệu khách hàng được bảo mật như thế nào?",
      answer: "Chúng tôi sử dụng mã hóa SSL/TLS, lưu trữ trên cloud đạt chuẩn ISO 27001, backup hàng ngày, và phân quyền chi tiết đến từng trường dữ liệu."
    },
    {
      question: "Có giới hạn số lượng contacts không?",
      answer: "Gói Starter giới hạn 5,000 contacts, Professional 25,000 contacts. Gói Enterprise không giới hạn. Bạn có thể mua thêm contacts nếu cần."
    },
    {
      question: "Làm sao để bắt đầu dùng thử?",
      answer: "Đăng ký dùng thử miễn phí 14 ngày ngay trên website. Bạn sẽ có full quyền truy cập gói Professional. Không cần thẻ tín dụng để đăng ký."
    }
  ],
  hrm: [
    {
      question: "Có tích hợp với máy chấm công không?",
      answer: "Có, VNSolution HRM tích hợp với hầu hết các loại máy chấm công phổ biến: Ronald Jack, ZKTeco, Suprema, vân tay, thẻ từ, và nhận diện khuôn mặt."
    },
    {
      question: "Có hỗ trợ tính lương theo quy định Việt Nam không?",
      answer: "Có, hệ thống tuân thủ đầy đủ quy định về lương, BHXH, BHYT, BHTN, thuế TNCN theo luật Việt Nam. Cập nhật khi có thay đổi chính sách."
    },
    {
      question: "Nhân viên có thể tự xem thông tin không?",
      answer: "Có, hệ thống có Employee Self-Service portal. Nhân viên có thể xem payslip, đăng ký nghỉ phép, cập nhật thông tin cá nhân, xem lịch công tác trên web và mobile."
    },
    {
      question: "Có báo cáo cho cơ quan bảo hiểm không?",
      answer: "Có, hệ thống tự động xuất các biểu mẫu báo cáo BHXH theo quy định: D02-TS, D03-TS, danh sách điều chỉnh, và các báo cáo khác."
    },
    {
      question: "Hỗ trợ quản lý nhiều chi nhánh không?",
      answer: "Có, với gói Standard và Premium. Bạn có thể quản lý tập trung nhiều chi nhánh, so sánh hiệu suất, và có báo cáo tổng hợp toàn công ty."
    }
  ],
  dms: [
    {
      question: "Có làm việc offline được không?",
      answer: "Có, ứng dụng mobile hỗ trợ làm việc offline. Sales có thể đặt hàng, chụp ảnh, ghi nhận thông tin khi không có mạng. Dữ liệu tự động đồng bộ khi có kết nối."
    },
    {
      question: "Có theo dõi được vị trí nhân viên không?",
      answer: "Có, hệ thống tích hợp GPS tracking. Quản lý có thể theo dõi lộ trình thực tế, thời gian check-in tại điểm bán, và tối ưu tuyến đường."
    },
    {
      question: "Hỗ trợ những loại khuyến mãi nào?",
      answer: "Hỗ trợ đa dạng: giảm giá theo %, theo số lượng, combo, quà tặng, tích điểm. Có thể thiết lập theo kênh, vùng miền, loại khách hàng, và thời gian áp dụng."
    },
    {
      question: "Có tích hợp với hệ thống kế toán không?",
      answer: "Có, VNSolution DMS tích hợp trực tiếp với VNSolution ERP. Đối với phần mềm kế toán khác, chúng tôi hỗ trợ qua API hoặc file import/export."
    },
    {
      question: "Có dashboard cho quản lý không?",
      answer: "Có, hệ thống cung cấp dashboard real-time với các chỉ số: doanh số theo ngày/tuần/tháng, coverage, DSO, top products, và nhiều KPIs khác."
    }
  ]
}

export function ProductPricingFaq({ product }: { product: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = faqData[product] || faqData.erp

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-muted-foreground">
              Giải đáp các thắc mắc phổ biến về sản phẩm và dịch vụ
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
