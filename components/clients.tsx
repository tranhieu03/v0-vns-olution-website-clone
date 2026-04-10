"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Hệ thống quản lý chất thải của VNSolution đã chuyển đổi hoàn toàn hoạt động của chúng tôi. Chi phí giảm 35% và hiệu quả tuyến thu gom cải thiện đáng kể. Đội ngũ của họ hiểu rõ thách thức ngay từ đầu.",
    author: "Nguyễn Văn Thành",
    role: "Giám đốc Vận hành",
    company: "Công ty TNHH Môi trường Xanh",
    industry: "Quản lý Chất thải",
  },
  {
    quote: "Giải pháp LIMS đã tối ưu hóa toàn bộ quy trình xét nghiệm. Theo dõi mẫu, kiểm soát chất lượng và báo cáo tuân thủ giờ đây diễn ra liền mạch. Đây là yếu tố then chốt giúp chúng tôi đạt chứng nhận ISO.",
    author: "TS. Lê Thị Mai",
    role: "Giám đốc Phòng thí nghiệm",
    company: "Viện Kiểm nghiệm Chất lượng Việt Nam",
    industry: "Phòng thí nghiệm",
  },
  {
    quote: "Triển khai ERP của VNSolution cho 12 cơ sở là bước ngoặt lớn. Tầm nhìn thời gian thực về vận hành, tài chính và kho bãi đã đẩy nhanh đáng kể quá trình ra quyết định của chúng tôi.",
    author: "Trần Minh Đức",
    role: "Tổng Giám đốc",
    company: "Tập đoàn Sản xuất Mekong",
    industry: "Sản xuất",
  },
  {
    quote: "Module CRM và HRM hoạt động ăn ý với nhau. Đội ngũ sales làm việc hiệu quả hơn, quy trình HR trước đây mất nhiều ngày giờ chỉ cần vài giờ. Dịch vụ hỗ trợ liên tục cũng xuất sắc.",
    author: "Phạm Hoàng Long",
    role: "Giám đốc Điều hành",
    company: "Công ty CP Phân phối Sài Gòn",
    industry: "Phân phối",
  },
]

const clients = [
  { name: "Môi trường Xanh", initials: "MX" },
  { name: "Viện Kiểm nghiệm", initials: "VK" },
  { name: "Mekong Group", initials: "MG" },
  { name: "Phân phối SG", initials: "SG" },
  { name: "Pacific Logistics", initials: "PL" },
  { name: "Delta Pharma", initials: "DP" },
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const current = testimonials[currentIndex]

  return (
    <section className="border-y border-border bg-muted/40 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Khách hàng tiêu biểu</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Lắng nghe chia sẻ từ khách hàng về cách VNSolution đã chuyển đổi vận hành
            và mang lại kết quả kinh doanh có thể đo lường được.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-xl border border-border bg-card p-6 lg:p-8">
            <div className="absolute -top-3 left-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <Quote className="h-4 w-4 text-accent-foreground" />
              </div>
            </div>

            <div className="pt-3">
              <blockquote className="text-base text-foreground leading-relaxed lg:text-lg transition-smooth">
                {current.quote}
              </blockquote>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{current.author}</p>
                  <p className="text-xs text-muted-foreground">{current.role}</p>
                  <p className="text-xs text-accent">{current.company}</p>
                </div>
                <span className="rounded-md bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                  {current.industry}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-smooth ${
                      idx === currentIndex ? "bg-accent w-5" : "bg-border w-1.5 hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Chuyển đến nhận xét ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1.5">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={prevTestimonial}
                  aria-label="Nhận xét trước"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={nextTestimonial}
                  aria-label="Nhận xét tiếp"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-xs text-muted-foreground mb-6">
            Phục vụ doanh nghiệp trên khắp Việt Nam và Đông Nam Á
          </p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-lg border border-border bg-card p-4 transition-smooth hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  <span className="text-xs font-bold text-muted-foreground">{client.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
