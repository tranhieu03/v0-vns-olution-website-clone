"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      label: "Sản phẩm",
      hasDropdown: true,
      items: ["VNS-ERP", "VNS-HRM", "VNS-CRM", "VNS-DMS"],
    },
    {
      label: "Giải pháp",
      hasDropdown: true,
      items: ["Cho doanh nghiệp", "Cho cơ quan nhà nước", "Cho ngành y tế"],
    },
    { label: "Khách hàng", hasDropdown: false },
    { label: "Tài nguyên", hasDropdown: false },
    {
      label: "Giới thiệu",
      hasDropdown: true,
      items: ["Về chúng tôi", "Đội ngũ", "Tuyển dụng"],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">
                VN<span className="text-foreground">SOLUTION</span>
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">
                GIẢI PHÁP HOÀN HẢO CHO DOANH NGHIỆP
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem} asChild>
                      <Link href="#" className="cursor-pointer">
                        {subItem}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={item.label} variant="ghost" asChild className="text-sm font-medium text-muted-foreground hover:text-foreground">
                <Link href="#">{item.label}</Link>
              </Button>
            )
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm">
            Đăng nhập
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full">
                Đăng nhập
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
