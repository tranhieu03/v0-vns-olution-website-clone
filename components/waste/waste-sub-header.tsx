"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Recycle, ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const subNavItems = [
  { label: "Tổng quan", href: "/giai-phap/quan-ly-chat-thai/tinh-nang" },
  { 
    label: "Tính năng", 
    hasDropdown: true,
    items: [
      { name: "Thu gom chất thải", href: "/giai-phap/quan-ly-chat-thai/tinh-nang/thu-gom" },
      { name: "Vận chuyển & Logistics", href: "/giai-phap/quan-ly-chat-thai/tinh-nang/van-chuyen" },
      { name: "Xử lý & Tái chế", href: "/giai-phap/quan-ly-chat-thai/tinh-nang/xu-ly" },
      { name: "Báo cáo BTNMT", href: "/giai-phap/quan-ly-chat-thai/tinh-nang/bao-cao" },
    ]
  },
  { label: "Khách hàng tiêu biểu", href: "/giai-phap/quan-ly-chat-thai/khach-hang" },
  { 
    label: "Ngành nghề", 
    hasDropdown: true,
    items: [
      { name: "Sản xuất công nghiệp", href: "/giai-phap/quan-ly-chat-thai/nganh/san-xuat" },
      { name: "Y tế & Bệnh viện", href: "/giai-phap/quan-ly-chat-thai/nganh/y-te" },
      { name: "Xây dựng", href: "/giai-phap/quan-ly-chat-thai/nganh/xay-dung" },
      { name: "Thực phẩm & Đồ uống", href: "/giai-phap/quan-ly-chat-thai/nganh/thuc-pham" },
    ]
  },
  { label: "Bảng giá", href: "/giai-phap/quan-ly-chat-thai/bang-gia" },
  { label: "Kiến thức", href: "/giai-phap/quan-ly-chat-thai/kien-thuc" },
]

export function WasteSubHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <div className="sticky top-[72px] z-40 w-full bg-[#F5F7F9] border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
        {/* Product logo and name */}
        <Link href="/giai-phap/quan-ly-chat-thai" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00A86B]">
            <Recycle className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-[#002B05]">VNS Xử lý rác</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {subNavItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#00A86B] hover:bg-transparent"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 p-1.5">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        href={subItem.href} 
                        className="cursor-pointer px-3 py-2.5 text-sm rounded-md"
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
                className={`px-3 py-2 text-sm font-medium hover:bg-transparent ${
                  isActive(item.href || "") 
                    ? "text-[#00A86B]" 
                    : "text-slate-600 hover:text-[#00A86B]"
                }`}
              >
                <Link href={item.href || "#"}>{item.label}</Link>
              </Button>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-[#00A86B]">
            Đăng nhập
          </Button>
          <Button className="bg-[#00A86B] hover:bg-[#009060] text-white font-medium px-5">
            Đăng ký
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {subNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href || "#"}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive(item.href || "")
                    ? "bg-[#00A86B]/10 text-[#00A86B]"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 flex gap-3">
              <Button variant="outline" className="flex-1">Đăng nhập</Button>
              <Button className="flex-1 bg-[#00A86B] hover:bg-[#009060]">Đăng ký</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
