import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  solutions: {
    title: "Giải pháp",
    links: [
      { label: "Quản lý Chất thải", href: "#solutions" },
      { label: "Phòng Thí nghiệm LIMS", href: "#solutions" },
      { label: "Giải pháp theo ngành", href: "#solutions" },
    ],
  },
  products: {
    title: "Sản phẩm",
    links: [
      { label: "ERP - Hoạch định nguồn lực", href: "#products" },
      { label: "CRM - Quản lý khách hàng", href: "#products" },
      { label: "HRM - Quản lý nhân sự", href: "#products" },
      { label: "DMS - Quản lý nhà phân phối", href: "#products" },
    ],
  },
  resources: {
    title: "Tài nguyên",
    links: [
      { label: "Kiến thức", href: "/kien-thuc" },
      { label: "Khách hàng", href: "/khach-hang" },
      { label: "Blog & Tin tức", href: "/tin-tuc" },
    ],
  },
  company: {
    title: "Công ty",
    links: [
      { label: "Giới thiệu", href: "/ve-chung-toi/gioi-thieu" },
      { label: "Tuyển dụng", href: "/tuyen-dung" },
      { label: "Liên hệ", href: "/ve-chung-toi/lien-he" },
    ],
  },
}

const contactInfo = [
  { icon: Phone, text: "1900 1234" },
  { icon: Mail, text: "contact@vnsolution.com.vn" },
  { icon: MapPin, text: "Quận 1, TP. Hồ Chí Minh" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1E24]">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="VNSolution"
                width={160}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Giải pháp phần mềm quản lý toàn diện cho doanh nghiệp: Môi trường, 
              Phòng thí nghiệm, ERP, CRM, HRM và DMS.
            </p>

            <div className="mt-6 space-y-2.5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-white/70">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-smooth hover:border-primary hover:text-primary hover:bg-primary/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors-smooth hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © 2024 VNSolution. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/60 hover:text-primary transition-colors-smooth">
              Điều khoản Dịch vụ
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-primary transition-colors-smooth">
              Chính sách Bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
