"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react"

const benefits = [
  "Tư vấn miễn phí với chuyên gia",
  "Đề xuất giải pháp phù hợp nhu cầu",
  "Demo sản phẩm trực tiếp",
  "Phản hồi trong vòng 24 giờ",
]

const contactInfo = [
  { icon: Phone, label: "Hotline", value: "1900 1234", highlight: true },
  { icon: Mail, label: "Email", value: "contact@vnsolution.com.vn" },
  { icon: MapPin, label: "Văn phòng", value: "Quận 1, TP. Hồ Chí Minh" },
  { icon: Clock, label: "Giờ làm việc", value: "8:00 - 17:30 (T2 - T6)" },
]

export function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    solution: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-primary mb-3">Liên hệ tư vấn</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Đăng ký Nhận tư vấn Miễn phí
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Bạn đang tìm kiếm giải pháp phần mềm phù hợp? Đội ngũ chuyên gia của chúng tôi 
              sẵn sàng lắng nghe và tư vấn giải pháp tối ưu cho doanh nghiệp của bạn.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li 
                  key={benefit} 
                  className={`flex items-center gap-3 opacity-0 animate-slide-up stagger-${index + 1}`}
                  style={{ animationFillMode: 'forwards' }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Thông tin liên hệ</p>
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      item.highlight ? "bg-primary text-primary-foreground" : "bg-background border border-border"
                    }`}>
                      <item.icon className={`h-5 w-5 ${item.highlight ? "" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className={`text-sm font-medium ${item.highlight ? "text-primary" : "text-foreground"}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Cảm ơn bạn!</h3>
                  <p className="mt-3 text-muted-foreground">
                    Yêu cầu tư vấn đã được ghi nhận. Chúng tôi sẽ liên hệ trong vòng 24 giờ làm việc.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        solution: "",
                        message: "",
                      })
                    }}
                  >
                    Gửi yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        placeholder="Nhập họ tên của bạn"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email công việc *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@congty.com"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Tên công ty *</Label>
                      <Input
                        id="company"
                        placeholder="Tên doanh nghiệp của bạn"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0xxx xxx xxx"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Giải pháp quan tâm *</Label>
                    <Select
                      value={formState.solution}
                      onValueChange={(value) => setFormState({ ...formState, solution: value })}
                      required
                    >
                      <SelectTrigger id="solution">
                        <SelectValue placeholder="Chọn giải pháp bạn quan tâm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waste">Hệ thống Quản lý Chất thải</SelectItem>
                        <SelectItem value="lab">Hệ thống Phòng thí nghiệm (LIMS)</SelectItem>
                        <SelectItem value="erp">ERP - Hoạch định Nguồn lực</SelectItem>
                        <SelectItem value="crm">CRM - Quản lý Khách hàng</SelectItem>
                        <SelectItem value="hrm">HRM - Quản lý Nhân sự</SelectItem>
                        <SelectItem value="dms">DMS - Quản lý Nhà phân phối</SelectItem>
                        <SelectItem value="multiple">Nhiều giải pháp</SelectItem>
                        <SelectItem value="other">Khác / Chưa xác định</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mô tả nhu cầu (không bắt buộc)</Label>
                    <Textarea
                      id="message"
                      placeholder="Mô tả về thách thức hiện tại hoặc mục tiêu bạn muốn đạt được..."
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 h-12 text-base font-medium transition-smooth hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Đăng ký Tư vấn Miễn phí
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Bằng việc đăng ký, bạn đồng ý với{" "}
                    <a href="#" className="underline hover:text-primary transition-colors-smooth">Chính sách Bảo mật</a>
                    {" "}của chúng tôi.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
