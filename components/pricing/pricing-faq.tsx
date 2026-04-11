"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Chi phí triển khai phần mềm được tính như thế nào?",
    answer: "Chi phí triển khai phụ thuộc vào số lượng module, số người dùng và mức độ tùy chỉnh theo yêu cầu của doanh nghiệp. Chúng tôi sẽ khảo sát và đưa ra báo giá chi tiết sau khi hiểu rõ nhu cầu của bạn. Nhìn chung, chi phí bao gồm: phí bản quyền, phí triển khai và đào tạo, phí bảo trì hàng năm.",
  },
  {
    question: "Thời gian triển khai dự án mất bao lâu?",
    answer: "Thời gian triển khai tùy thuộc vào quy mô và độ phức tạp của dự án. Với gói Starter, thời gian khoảng 2-4 tuần. Gói Professional từ 1-3 tháng. Gói Enterprise có thể từ 3-6 tháng hoặc lâu hơn tùy theo yêu cầu tùy chỉnh.",
  },
  {
    question: "Có được dùng thử phần mềm trước khi mua không?",
    answer: "Có, chúng tôi cung cấp bản demo trực tiếp để bạn trải nghiệm các tính năng của phần mềm. Đội ngũ tư vấn sẽ hướng dẫn chi tiết và giải đáp mọi thắc mắc trong buổi demo. Bạn cũng có thể yêu cầu tài khoản dùng thử trong 14 ngày cho một số module.",
  },
  {
    question: "Phí bảo trì và hỗ trợ kỹ thuật được tính ra sao?",
    answer: "Phí bảo trì hàng năm thường dao động từ 15-20% giá trị phần mềm, bao gồm: cập nhật phiên bản mới, sửa lỗi, hỗ trợ kỹ thuật qua hotline và email. Gói Enterprise được ưu tiên với SLA riêng và đường dây nóng 24/7.",
  },
  {
    question: "Dữ liệu của doanh nghiệp có được bảo mật không?",
    answer: "Chúng tôi cam kết bảo mật tuyệt đối với tiêu chuẩn ISO 27001. Dữ liệu được mã hóa, sao lưu định kỳ và lưu trữ tại các data center đạt chuẩn Tier 3. Bạn hoàn toàn sở hữu dữ liệu và có thể xuất ra bất cứ lúc nào.",
  },
  {
    question: "Có hỗ trợ tích hợp với hệ thống hiện có không?",
    answer: "Có, hệ thống VNSolution được thiết kế với API mở, hỗ trợ tích hợp với các phần mềm kế toán, ngân hàng, báo cáo thuế và các hệ thống bên thứ ba khác. Chi phí tích hợp sẽ được báo giá riêng tùy theo độ phức tạp.",
  },
  {
    question: "Thanh toán như thế nào và có hỗ trợ trả góp không?",
    answer: "Chúng tôi hỗ trợ nhiều hình thức thanh toán: chuyển khoản, thẻ tín dụng. Với các dự án lớn, bạn có thể thanh toán theo giai đoạn (thường 30% ký kết - 50% nghiệm thu - 20% bảo hành). Một số trường hợp có thể thỏa thuận trả góp 0% lãi suất.",
  },
  {
    question: "Nếu không hài lòng, có được hoàn tiền không?",
    answer: "Chúng tôi có chính sách cam kết chất lượng rõ ràng trong hợp đồng. Nếu sản phẩm không đáp ứng được các yêu cầu đã thỏa thuận, bạn có thể yêu cầu chỉnh sửa hoặc hoàn tiền theo điều khoản hợp đồng. Điều này đảm bảo quyền lợi tối đa cho khách hàng.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3E8ED0]/20 bg-[#3E8ED0]/5 px-4 py-2 mb-4">
              <HelpCircle className="h-4 w-4 text-[#3E8ED0]" />
              <span className="text-sm font-medium text-[#3E8ED0]">
                Câu hỏi thường gặp
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              Giải đáp thắc mắc về Bảng giá
            </h2>
            <p className="mt-4 text-slate-600">
              Tìm câu trả lời cho những câu hỏi phổ biến về chi phí và quy trình triển khai.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-slate-200 bg-slate-50/50 px-6 data-[state=open]:bg-white data-[state=open]:border-[#3E8ED0]/30 data-[state=open]:shadow-lg data-[state=open]:shadow-[#3E8ED0]/5 transition-all"
              >
                <AccordionTrigger className="text-left text-slate-800 hover:text-[#3E8ED0] py-5 [&[data-state=open]]:text-[#3E8ED0]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-slate-600">
              Không tìm thấy câu trả lời bạn cần?{" "}
              <a href="#contact" className="font-medium text-[#3E8ED0] hover:underline">
                Liên hệ với chúng tôi
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
