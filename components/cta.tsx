"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, Shield, Zap, Users } from "lucide-react"

const benefits = [
  { icon: Zap, text: "Demo miễn phí 30 phút" },
  { icon: Clock, text: "Phản hồi trong 2 giờ làm việc" },
  { icon: Users, text: "Tư vấn 1-1 với chuyên gia" },
  { icon: Shield, text: "Không spam, cam kết bảo mật" },
]

const contactInfo = [
  { icon: Phone, label: "Hotline", value: "1900 1234", highlight: true },
  { icon: Mail, label: "Email", value: "contact@vnsolution.com.vn" },
  { icon: MapPin, label: "Văn phòng", value: "Quận 1, TP. Hồ Chí Minh" },
  { icon: Clock, label: "Giờ làm việc", value: "8:00 - 17:30 (T2 - T6)" },
]

const urgencyStats = [
  { value: "200+", label: "Doanh nghiệp đã tin dùng" },
  { value: "7 ngày", label: "Thời gian triển khai" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
]

export function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    solution: "",
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
            <p className="text-sm font-medium text-primary mb-3">Bắt đầu ngay hôm nay</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
              Đăng ký Demo miễn phí 30 phút
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Chỉ cần <strong className="text-foreground">2 phút</strong> điền form. 
              Chuyên gia sẽ liên hệ trong <strong className="text-foreground">2 giờ</strong> để demo trực tiếp giải pháp phù hợp với doanh nghiệp bạn.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-sm font-semibold text-foreground mb-4">Con số ấn tượng</p>
              <div className="grid grid-cols-3 gap-4">
                {urgencyStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-sm font-semibold text-foreground mb-4">Liên hệ trực tiếp</p>
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">Nhận Demo ngay</h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Miễn phí
                </span>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Cảm ơn bạn!</h3>
                  <p className="mt-3 text-muted-foreground">
                    Chuyên gia sẽ liên hệ bạn trong <strong className="text-foreground">2 giờ làm việc</strong> tới.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: "",
                        phone: "",
                        solution: "",
                      })
                    }}
                  >
                    Gửi yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ tên *</Label>
                    <Input
                      id="name"
                      placeholder="Nhập họ tên của bạn"
                      required
                      className="h-12"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0xxx xxx xxx"
                      required
                      className="h-12"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="solution">Bạn quan tâm giải pháp nào? *</Label>
                    <Select
                      value={formState.solution}
                      onValueChange={(value) => setFormState({ ...formState, solution: value })}
                      required
                    >
                      <SelectTrigger id="solution" className="h-12">
                        <SelectValue placeholder="Chọn giải pháp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All-in-one (ERP+CRM+HRM+DMS)</SelectItem>
                        <SelectItem value="erp">ERP - Quản lý Tài chính & Sản xuất</SelectItem>
                        <SelectItem value="crm">CRM - Quản lý Bán hàng</SelectItem>
                        <SelectItem value="hrm">HRM - Quản lý Nhân sự</SelectItem>
                        <SelectItem value="dms">DMS - Quản lý Nhà phân phối</SelectItem>
                        <SelectItem value="waste">Hệ thống Quản lý Chất thải</SelectItem>
                        <SelectItem value="lab">LIMS - Phòng thí nghiệm</SelectItem>
                        <SelectItem value="other">Chưa xác định - Cần tư vấn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 h-14 text-base font-semibold transition-smooth hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Nhận Demo miễn phí ngay
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Shield className="h-3.5 w-3.5" />
                      <span>Không spam</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Phản hồi 2 giờ</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Zap className="h-3.5 w-3.5" />
                      <span>Chỉ 2 phút</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
