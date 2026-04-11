"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Youtube } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Trụ sở chính",
    details: [
      "Tầng 15, Tòa nhà ABC Tower",
      "123 Nguyễn Văn Linh, Quận 7",
      "TP. Hồ Chí Minh, Việt Nam",
    ],
  },
  {
    icon: Phone,
    title: "Hotline",
    details: [
      "1900 1234 (24/7)",
      "028 1234 5678",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@vnsolution.vn",
      "support@vnsolution.vn",
    ],
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    details: [
      "Thứ 2 - Thứ 6: 8:00 - 18:00",
      "Thứ 7: 8:00 - 12:00",
      "Hỗ trợ kỹ thuật: 24/7",
    ],
  },
]

const offices = [
  {
    city: "Hà Nội",
    address: "Tầng 10, Tòa nhà XYZ, 456 Cầu Giấy, Hà Nội",
    phone: "024 9876 5432",
  },
  {
    city: "Đà Nẵng",
    address: "Tầng 5, Tòa nhà DEF, 789 Nguyễn Văn Linh, Đà Nẵng",
    phone: "0236 123 4567",
  },
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Main Contact Info */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#333333] mb-6">
          Thông tin liên hệ
        </h3>
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-[#333333] mb-1">{item.title}</h4>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-[#333333]/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="font-semibold text-[#333333] mb-4">Kết nối với chúng tôi</h4>
          <div className="flex gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-[#F5F7F9] rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Other Offices */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#333333] mb-6">
          Văn phòng khác
        </h3>
        <div className="space-y-5">
          {offices.map((office, index) => (
            <div key={index} className="pb-5 border-b border-gray-100 last:pb-0 last:border-0">
              <h4 className="font-semibold text-primary mb-2">{office.city}</h4>
              <p className="text-[#333333]/70 text-sm mb-1">{office.address}</p>
              <p className="text-[#333333]/70 text-sm">
                <Phone className="w-4 h-4 inline mr-1" />
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
