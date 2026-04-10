"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Hệ thống quản lý chất thải của VNSolution đã giúp chúng tôi giảm 35% chi phí vận hành và cải thiện đáng kể hiệu quả thu gom. Đội ngũ VNSolution thực sự hiểu rõ thách thức trong ngành môi trường.",
    author: "Nguyễn Văn Thành",
    role: "Giám đốc Vận hành",
    company: "Công ty TNHH Môi trường Xanh",
    industry: "Môi trường",
    rating: 5,
  },
  {
    quote: "Triển khai LIMS giúp chúng tôi số hóa hoàn toàn quy trình xét nghiệm. Từ tiếp nhận mẫu đến trả kết quả đều được kiểm soát chặt chẽ. Đây là yếu tố quan trọng giúp đạt chứng nhận ISO 17025.",
    author: "TS. Lê Thị Mai",
    role: "Giám đốc Phòng thí nghiệm",
    company: "Viện Kiểm nghiệm Chất lượng",
    industry: "Phòng thí nghiệm",
    rating: 5,
  },
  {
    quote: "Sau khi triển khai ERP cho 12 chi nhánh, chúng tôi có cái nhìn tổng quan về toàn bộ hoạt động kinh doanh. Việc ra quyết định nhanh hơn và chính xác hơn rất nhiều.",
    author: "Trần Minh Đức",
    role: "Tổng Giám đốc",
    company: "Tập đoàn Sản xuất Mekong",
    industry: "Sản xuất",
    rating: 5,
  },
  {
    quote: "Module DMS giúp quản lý mạng lưới 500+ đại lý trên toàn quốc. Theo dõi đơn hàng, công nợ và doanh số thời gian thực. Dịch vụ hỗ trợ của VNSolution cũng rất tuyệt vời.",
    author: "Phạm Hoàng Long",
    role: "Giám đốc Kinh doanh",
    company: "Công ty CP Phân phối Sài Gòn",
    industry: "Phân phối",
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
    <section id="clients" className="py-16 lg:py-24 bg-[#1A1E24]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3">Khách hàng nói gì</p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Được tin tưởng bởi hơn 200 doanh nghiệp
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Lắng nghe chia sẻ từ khách hàng về cách giải pháp của VNSolution 
            đã góp phần vào sự phát triển của doanh nghiệp.
          </p>
        </div>

        <div 
          className="mx-auto max-w-4xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative rounded-2xl border border-white/10 bg-white p-8 lg:p-10 shadow-xl">
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
              
              <blockquote className="text-lg text-[#333333] leading-relaxed lg:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {current.author.split(' ').map(n => n[0]).join('').slice(-2)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333]">{current.author}</p>
                    <p className="text-sm text-[#333333]/60">{current.role}</p>
                    <p className="text-sm text-primary font-medium">{current.company}</p>
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
          <p className="text-center text-sm text-white/60 mb-8">
            Tin tưởng bởi các doanh nghiệp hàng đầu Việt Nam
          </p>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`flex items-center justify-center rounded-xl border border-white/10 bg-[#F5F7F9] p-5 transition-smooth hover:border-primary/30 hover:shadow-sm opacity-0 animate-fade-up stagger-${index + 1}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                  <span className="text-sm font-bold text-[#333333]">{client.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
