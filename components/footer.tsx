import Link from "next/link"
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  products: {
    title: "Sản phẩm",
    links: [
      { label: "VNS - ERP", href: "#" },
      { label: "VNS - HRM", href: "#" },
      { label: "VNS - CRM", href: "#" },
      { label: "VNS - DMS", href: "#" },
    ],
  },
  solutions: {
    title: "Giải pháp",
    links: [
      { label: "Giải pháp cho ngành dược", href: "#" },
      { label: "Giải pháp cho hệ thống xử lý rác", href: "#" },
      { label: "Giải pháp cho cơ quan nhà nước", href: "#" },
      { label: "Giải pháp cho doanh nghiệp SME", href: "#" },
    ],
  },
  resources: {
    title: "Tài nguyên",
    links: [
      { label: "Blog", href: "#" },
      { label: "Hướng dẫn sử dụng", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  company: {
    title: "Về chúng tôi",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Đội ngũ", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Liên hệ", href: "#" },
    ],
  },
}

const contactInfo = [
  { icon: Phone, text: "Hotline: 1900 123 456" },
  { icon: Mail, text: "Email: contact@vnsolution.vn" },
  { icon: MapPin, text: "Tầng 10, Tòa nhà ABC, Cầu Giấy, Hà Nội" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  VN<span className="text-foreground">SOLUTION</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Nền tảng quản trị doanh nghiệp toàn diện, giúp số hóa quy trình và tối ưu hiệu suất.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 VNSolution. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Điều khoản sử dụng
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
