"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content: "VNSolution đã giúp chúng tôi chuyển đổi số toàn diện, từ quản lý nhân sự đến quy trình sản xuất. Hiệu suất làm việc tăng 45% chỉ sau 6 tháng triển khai.",
    author: "Nguyễn Văn Minh",
    position: "Giám đốc điều hành",
    company: "Công ty CP Sản xuất ABC",
    industry: "Sản xuất",
    rating: 5,
  },
  {
    id: 2,
    content: "Hệ thống CRM của VNSolution giúp đội ngũ sales của chúng tôi quản lý khách hàng hiệu quả hơn. Doanh số tăng 30% sau khi triển khai hệ thống.",
    author: "Trần Thị Hương",
    position: "Giám đốc kinh doanh",
    company: "Tập đoàn Bất động sản XYZ",
    industry: "Bất động sản",
    rating: 5,
  },
  {
    id: 3,
    content: "Đội ngũ hỗ trợ của VNSolution rất chuyên nghiệp và tận tâm. Mọi vấn đề đều được giải quyết nhanh chóng. Chúng tôi rất hài lòng với dịch vụ.",
    author: "Lê Hoàng Nam",
    position: "CTO",
    company: "Công ty Công nghệ DEF",
    industry: "Công nghệ",
    rating: 5,
  },
  {
    id: 4,
    content: "Phần mềm quản lý kho của VNSolution giúp chúng tôi tối ưu hóa tồn kho, giảm 25% chi phí lưu kho và cải thiện đáng kể quy trình xuất nhập hàng.",
    author: "Phạm Đức Thắng",
    position: "Giám đốc vận hành",
    company: "Công ty Logistics GHI",
    industry: "Logistics",
    rating: 5,
  },
]

export function ClientsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những phản hồi chân thực từ các doanh nghiệp đã và đang sử dụng giải pháp VNSolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-2xl border border-border p-8 lg:p-12">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
            
            <div className="relative">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
