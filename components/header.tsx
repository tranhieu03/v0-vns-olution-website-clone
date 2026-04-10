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
      label: "Giải pháp",
      hasDropdown: true,
      items: [
        "Hệ thống quản lý chất thải",
        "Phần mềm phòng thí nghiệm",
        "Giải pháp theo ngành",
      ],
    },
    {
      label: "Sản phẩm",
      hasDropdown: true,
      items: [
        "ERP - Quản trị doanh nghiệp",
        "CRM - Quản lý khách hàng",
        "HRM - Quản lý nhân sự",
        "DMS - Quản lý tài liệu",
      ],
    },
    { label: "Dự án tiêu biểu", hasDropdown: false },
    { label: "Tin tức", hasDropdown: false },
    {
      label: "Về chúng tôi",
      hasDropdown: true,
      items: ["Giới thiệu", "Đội ngũ", "Đối tác", "Tuyển dụng"],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-primary" />
            <span className="relative text-sm font-bold text-primary-foreground">VN</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-foreground">
              VNSolution
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide">
              Phần mềm doanh nghiệp
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground hover:bg-transparent"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem} asChild>
                      <Link href="#" className="cursor-pointer text-sm">
                        {subItem}
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
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground hover:bg-transparent"
              >
                <Link href="#">{item.label}</Link>
              </Button>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" className="text-sm font-medium">
            Đăng nhập
          </Button>
          <Button size="sm" className="text-sm font-medium">
            Liên hệ tư vấn
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
        <div className="border-t border-border/40 bg-background lg:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-smooth hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border/40">
              <Button variant="outline" size="sm" className="w-full">
                Đăng nhập
              </Button>
              <Button size="sm" className="w-full">
                Liên hệ tư vấn
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
