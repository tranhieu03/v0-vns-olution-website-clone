import Link from "next/link"
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Layers } from "lucide-react"

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Waste Management System", href: "#" },
      { label: "Laboratory Information System", href: "#" },
      { label: "Industry Solutions", href: "#" },
      { label: "Custom Development", href: "#" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { label: "ERP System", href: "#" },
      { label: "CRM Platform", href: "#" },
      { label: "HRM Solution", href: "#" },
      { label: "DMS Platform", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "API Reference", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
}

const contactInfo = [
  { icon: Phone, text: "+84 28 3823 8888" },
  { icon: Mail, text: "contact@vnsolution.com" },
  { icon: MapPin, text: "District 1, Ho Chi Minh City, Vietnam" },
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  VN<span className="text-accent">Solution</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Enterprise software solutions for waste management, laboratory operations, 
              and comprehensive business management. Serving clients across Vietnam and 
              Southeast Asia since 2009.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-accent" />
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
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
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
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
            © 2024 VNSolution. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-accent">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
