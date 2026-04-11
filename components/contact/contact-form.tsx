"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Phần mềm ERP",
  "Phần mềm CRM",
  "Phần mềm HRM",
  "Phần mềm DMS",
  "Quản lý chất thải",
  "Phần mềm LIMS",
  "Tư vấn chuyển đổi số",
  "Khác",
]

const companySizes = [
  "1-10 nhân viên",
  "11-50 nhân viên",
  "51-200 nhân viên",
  "201-500 nhân viên",
  "Trên 500 nhân viên",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-3">
          Gửi yêu cầu thành công!
        </h3>
        <p className="text-[#333333]/70 mb-6">
          Cảm ơn bạn đã liên hệ. Đội ngũ tư vấn của VNSolution sẽ phản hồi 
          trong vòng 24 giờ làm việc.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              company: "",
              companySize: "",
              service: "",
              message: "",
            })
          }}
        >
          Gửi yêu cầu khác
        </Button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100"
    >
      <h3 className="text-xl font-bold text-[#333333] mb-6">
        Gửi yêu cầu tư vấn
      </h3>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <Input
              required
              placeholder="Nguyễn Văn A"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              required
              type="email"
              placeholder="email@congty.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <Input
              required
              type="tel"
              placeholder="0912 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Tên công ty
            </label>
            <Input
              placeholder="Công ty TNHH ABC"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Quy mô công ty
            </label>
            <Select
              value={formData.companySize}
              onValueChange={(value) => setFormData({ ...formData, companySize: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn quy mô" />
              </SelectTrigger>
              <SelectContent>
                {companySizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Dịch vụ quan tâm <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn dịch vụ" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#333333] mb-2">
            Nội dung yêu cầu
          </label>
          <Textarea
            rows={4}
            placeholder="Mô tả chi tiết nhu cầu của bạn..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Đang gửi...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Gửi yêu cầu tư vấn
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
