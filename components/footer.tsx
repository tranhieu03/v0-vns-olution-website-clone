import Link from "next/link"
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  solutions: {
    title: "Giải pháp",
    links: [
      { label: "Quản lý Chất thải", href: "#" },
      { label: "Hệ thống Phòng thí nghiệm", href: "#" },
      { label: "Giải pháp theo ngành", href: "#" },
      { label: "Phát triển tùy chỉnh", href: "#" },
    ],
  },
  products: {
    title: "Sản phẩm",
    links: [
      { label: "Hệ thống ERP", href: "#" },
      { label: "Nền tảng CRM", href: "#" },
      { label: "Giải pháp HRM", href: "#" },
      { label: "Nền tảng DMS", href: "#" },
    ],
  },
  resources: {
    title: "Tài nguyên",
    links: [
      { label: "Tài liệu hướng dẫn", href: "#" },
      { label: "Dự án tiêu biểu", href: "#" },
      { label: "Blog & Tin tức", href: "#" },
      { label: "API Reference", href: "#" },
    ],
  },
  company: {
    title: "Công ty",
    links: [
      { label: "Về chúng tôi", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Đối tác", href: "#" },
      { label: "Liên hệ", href: "#" },
    ],
  },
}

const contactInfo = [
  { icon: Phone, text: "+84 28 3823 8888" },
  { icon: Mail, text: "contact@vnsolution.com.vn" },
  { icon: MapPin, text: "Quận 1, TP. Hồ Chí Minh, Việt Nam" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-primary" />
                <span className="relative text-xs font-bold text-primary-foreground">VN</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">
                VNSolution
              </span>
            </Link>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs">
              Giải pháp phần mềm doanh nghiệp cho quản lý chất thải, vận hành phòng thí nghiệm
              và quản lý kinh doanh toàn diện. Phục vụ khách hàng tại Việt Nam và Đông Nam Á từ năm 2009.
            </p>

            <div className="mt-4 space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <item.icon className="h-3.5 w-3.5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-smooth hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground transition-smooth hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2024 VNSolution. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
              Điều khoản Dịch vụ
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
              Chính sách Bảo mật
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
