"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Trước khi dùng VNSolution, tôi mất 2 ngày cuối tháng để tổng hợp Excel. Giờ chỉ cần 10 phút click vào dashboard. Tiết kiệm được 35% chi phí vận hành trong 6 tháng đầu.",
    author: "Nguyễn Văn Thành",
    role: "Giám đốc Vận hành",
    company: "Công ty TNHH Môi trường Xanh",
    companySize: "150 nhân viên",
    industry: "Môi trường",
    metric: "Giảm 35% chi phí",
    rating: 5,
  },
  {
    quote: "Triển khai chỉ mất 5 ngày, nhanh hơn nhiều so với dự kiến 3 tháng. Quy trình xét nghiệm số hóa 100%, giúp đạt ISO 17025 ngay lần audit đầu tiên.",
    author: "TS. Lê Thị Mai",
    role: "Giám đốc Phòng thí nghiệm",
    company: "Viện Kiểm nghiệm Chất lượng",
    companySize: "80 nhân viên",
    industry: "Phòng thí nghiệm",
    metric: "Triển khai 5 ngày",
    rating: 5,
  },
  {
    quote: "Quản lý 12 chi nhánh trên 1 màn hình. Trước đây phải chờ báo cáo từ các chi nhánh 2 tuần, giờ thấy số liệu realtime. Doanh thu tăng 28% sau 1 năm vì ra quyết định nhanh hơn.",
    author: "Trần Minh Đức",
    role: "Tổng Giám đốc",
    company: "Tập đoàn Sản xuất Mekong",
    companySize: "500+ nhân viên",
    industry: "Sản xuất",
    metric: "Doanh thu +28%",
    rating: 5,
  },
  {
    quote: "Từ việc gọi điện hỏi 500 đại lý mỗi tuần, giờ tất cả tự nhập đơn qua app. Công nợ quá hạn giảm từ 15% xuống còn 3%. Salesman tăng 40% số điểm bán ghé thăm mỗi ngày.",
    author: "Phạm Hoàng Long",
    role: "Giám đốc Kinh doanh",
    company: "Công ty CP Phân phối Sài Gòn",
    companySize: "200+ nhân viên, 500+ đại lý",
    industry: "Phân phối",
    metric: "Công nợ giảm 80%",
    rating: 5,
  },
]

const clients = [
  { name: "Môi trường Xanh", initials: "MX" },
  { name: "Viện Kiểm nghiệm", initials: "VK" },
  { name: "Mekong Group", initials: "MG" },
  { name: "Phân phối SG", initials: "PP" },
  { name: "Pacific Logistics", initials: "PL" },
  { name: "Delta Pharma", initials: "DP" },
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextTestimonial, 7000)
    return () => clearInterval(interval)
  }, [nextTestimonial, isAutoPlaying])

  const current = testimonials[currentIndex]

  return (
    <section id="clients" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Khách hàng nói gì</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Được tin tưởng bởi hơn 200 doanh nghiệp
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Lắng nghe chia sẻ từ khách hàng về cách giải pháp của VNSolution 
            đã góp phần vào sự phát triển của doanh nghiệp.
          </p>
        </div>

        <div 
          className="mx-auto max-w-4xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm">
            <div className="absolute -top-4 left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>

            <div className="pt-4 animate-fade-in" key={currentIndex}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg text-foreground leading-relaxed lg:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-1">Kết quả đạt được</p>
                <p className="text-xl font-bold text-primary">{current.metric}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {current.author.split(' ').map(n => n[0]).join('').slice(-2)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{current.author}</p>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                    <p className="text-sm text-primary font-medium">{current.company}</p>
                    <p className="text-xs text-muted-foreground">{current.companySize}</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {current.industry}
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-smooth ${
                      idx === currentIndex ? "bg-primary w-8" : "bg-border w-2 hover:bg-primary/30"
                    }`}
                    aria-label={`Xem đánh giá ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full transition-smooth"
                  onClick={prevTestimonial}
                  aria-label="Đánh giá trước"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full transition-smooth"
                  onClick={nextTestimonial}
                  aria-label="Đánh giá tiếp theo"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Tin tưởng bởi các doanh nghiệp hàng đầu Việt Nam
          </p>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`flex items-center justify-center rounded-xl border border-border bg-card p-5 transition-smooth hover:border-primary/20 hover:shadow-sm opacity-0 animate-fade-up stagger-${index + 1}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <span className="text-sm font-bold text-muted-foreground">{client.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
