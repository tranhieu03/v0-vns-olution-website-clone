import Link from "next/link"
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Pill } from "lucide-react"

const footerLinks = {
  products: {
    title: "Sản phẩm",
    links: [
      { label: "PharmaDistro - Phân phối", href: "#" },
      { label: "PharmaRetail - Bán lẻ", href: "#" },
      { label: "PharmaChannel - Đa kênh", href: "#" },
      { label: "PharmaStock - Quản lý kho", href: "#" },
    ],
  },
  solutions: {
    title: "Giải pháp",
    links: [
      { label: "Cho nhà phân phối dược", href: "#" },
      { label: "Cho chuỗi nhà thuốc GPP", href: "#" },
      { label: "Cho bệnh viện & phòng khám", href: "#" },
      { label: "Bán hàng trên sàn TMĐT", href: "#" },
    ],
  },
  resources: {
    title: "Tài nguyên",
    links: [
      { label: "Blog dược phẩm", href: "#" },
      { label: "Hướng dẫn sử dụng", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Quy định GDP/GPP", href: "#" },
    ],
  },
  company: {
    title: "Liên hệ",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Đội ngũ", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Đối tác", href: "#" },
    ],
  },
}

const contactInfo = [
  { icon: Phone, text: "Hotline: 1900 636 789" },
  { icon: Mail, text: "Email: contact@pharmapro.vn" },
  { icon: MapPin, text: "Tầng 12, Tòa nhà Pharma Tower, Quận 1, TP.HCM" },
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Pill className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">
                  Pharma<span className="text-foreground">Pro</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Giải pháp phần mềm quản lý dược phẩm toàn diện cho nhà phân phối, chuỗi nhà thuốc và bán hàng đa kênh.
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
            © 2024 PharmaPro. Tất cả quyền được bảo lưu.
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
