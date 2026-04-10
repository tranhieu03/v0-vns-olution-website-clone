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
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react"

const benefits = [
  "Tư vấn miễn phí với chuyên gia",
  "Đề xuất giải pháp phù hợp",
  "Đánh giá không ràng buộc",
  "Phản hồi nhanh trong 24 giờ",
]

const contactInfo = [
  { icon: Phone, label: "Điện thoại", value: "+84 28 3823 8888" },
  { icon: Mail, label: "Email", value: "contact@vnsolution.com.vn" },
  { icon: MapPin, label: "Địa chỉ", value: "Quận 1, TP. Hồ Chí Minh, Việt Nam" },
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
    <section id="consultation" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Bắt đầu ngay</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
              Đăng ký Tư vấn Miễn phí
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Sẵn sàng chuyển đổi hoạt động kinh doanh? Đội ngũ chuyên gia của chúng tôi
              sẵn sàng giúp bạn tìm ra giải pháp phù hợp. Điền form và chúng tôi sẽ liên hệ
              trong vòng 24 giờ với đánh giá cá nhân hóa.
            </p>

            <ul className="mt-6 space-y-2.5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Hoặc liên hệ trực tiếp
              </p>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">{item.label}</p>
                    <p className="text-xs font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-lg lg:p-6">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Cảm ơn bạn!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Yêu cầu của bạn đã được gửi. Đội ngũ chúng tôi sẽ liên hệ trong vòng 24 giờ.
                  </p>
                  <Button
                    className="mt-5"
                    variant="outline"
                    size="sm"
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs">Họ và tên *</Label>
                      <Input
                        id="name"
                        placeholder="Nhập họ tên"
                        required
                        className="h-9 text-sm"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs">Email công việc *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@congty.com"
                        required
                        className="h-9 text-sm"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs">Tên công ty *</Label>
                      <Input
                        id="company"
                        placeholder="Công ty của bạn"
                        required
                        className="h-9 text-sm"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-xs">Số điện thoại</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+84 xxx xxx xxx"
                        className="h-9 text-sm"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="solution" className="text-xs">Giải pháp quan tâm *</Label>
                    <Select
                      value={formState.solution}
                      onValueChange={(value) => setFormState({ ...formState, solution: value })}
                      required
                    >
                      <SelectTrigger id="solution" className="h-9 text-sm">
                        <SelectValue placeholder="Chọn giải pháp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="waste">Hệ thống Quản lý Chất thải</SelectItem>
                        <SelectItem value="lab">Hệ thống Phòng thí nghiệm (LIMS)</SelectItem>
                        <SelectItem value="erp">ERP - Quản trị Doanh nghiệp</SelectItem>
                        <SelectItem value="crm">CRM - Quản lý Khách hàng</SelectItem>
                        <SelectItem value="hrm">HRM - Quản lý Nhân sự</SelectItem>
                        <SelectItem value="dms">DMS - Quản lý Tài liệu</SelectItem>
                        <SelectItem value="multiple">Nhiều giải pháp</SelectItem>
                        <SelectItem value="other">Khác / Chưa xác định</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs">Mô tả nhu cầu</Label>
                    <Textarea
                      id="message"
                      placeholder="Mô tả thách thức hiện tại và mục tiêu bạn muốn đạt được..."
                      rows={3}
                      className="text-sm resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 h-10 text-sm font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Đang gửi..."
                    ) : (
                      <>
                        Đăng ký Tư vấn
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground">
                    Bằng việc gửi form này, bạn đồng ý với{" "}
                    <a href="#" className="underline hover:text-foreground transition-smooth">Chính sách Bảo mật</a>
                    {" "}và{" "}
                    <a href="#" className="underline hover:text-foreground transition-smooth">Điều khoản Dịch vụ</a>.
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
