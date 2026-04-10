"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Layers } from "lucide-react"
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
      label: "Solutions",
      hasDropdown: true,
      items: ["Waste Management System", "Laboratory Information System", "Industry-Specific Solutions"],
    },
    {
      label: "Products",
      hasDropdown: true,
      items: ["ERP - Enterprise Resource Planning", "CRM - Customer Relationship", "HRM - Human Resource Management", "DMS - Document Management"],
    },
    { label: "Case Studies", hasDropdown: false },
    { label: "Resources", hasDropdown: false },
    {
      label: "Company",
      hasDropdown: true,
      items: ["About Us", "Our Team", "Partners", "Careers"],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Layers className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">
                VN<span className="text-accent">Solution</span>
              </span>
              <span className="text-[9px] text-muted-foreground -mt-0.5 uppercase tracking-wider">
                Enterprise Software
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
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
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Request Demo
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
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Request Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
