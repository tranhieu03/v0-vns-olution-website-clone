"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      label: "Giải pháp",
      hasDropdown: true,
      items: [
        { name: "Quản lý Chất thải", href: "#solutions" },
        { name: "Phòng Thí nghiệm (LIMS)", href: "#solutions" },
        { name: "Giải pháp theo ngành", href: "#solutions" },
      ],
    },
    {
      label: "Sản phẩm",
      hasDropdown: true,
      items: [
        { name: "ERP - Hoạch định nguồn lực", href: "#products" },
        { name: "CRM - Quản lý khách hàng", href: "#products" },
        { name: "HRM - Quản lý nhân sự", href: "#products" },
        { name: "DMS - Quản lý nhà phân phối", href: "#products" },
      ],
    },
    { label: "Bảng giá", href: "/bang-gia", hasDropdown: false },
    { label: "Dự án", href: "#clients", hasDropdown: false },
    { label: "Về chúng tôi", href: "#company", hasDropdown: false },
    { label: "Liên hệ", href: "#contact", hasDropdown: false },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-smooth ${
      scrolled 
        ? "bg-white/98 shadow-sm backdrop-blur-md border-b border-gray-200/50" 
        : "bg-[#F5F7F9] border-b border-transparent"
    }`}>
      <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="VNSolution - Giải pháp hoàn hảo cho doanh nghiệp"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 px-3 py-2 text-sm font-medium text-[#333333]/70 transition-colors-smooth hover:text-primary hover:bg-transparent"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-60 p-1.5">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        href={subItem.href} 
                        className="cursor-pointer px-3 py-2.5 text-sm rounded-md transition-colors-smooth"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className="px-3 py-2 text-sm font-medium text-[#333333]/70 transition-colors-smooth hover:text-primary hover:bg-transparent"
              >
                <Link href={item.href || "#"}>{item.label}</Link>
              </Button>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 text-sm text-[#333333]/70 mr-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">1900 1234</span>
          </div>
          <Button className="font-medium px-5 transition-smooth hover:shadow-md hover:shadow-primary/20">
            Nhận tư vấn
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200/50 bg-white lg:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#333333]/80 transition-colors-smooth hover:bg-[#F5F7F9] hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <Button className="w-full font-medium">
                Nhận tư vấn miễn phí
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
