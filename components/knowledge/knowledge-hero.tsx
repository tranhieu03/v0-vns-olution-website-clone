"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function KnowledgeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Trung tâm kiến thức
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Kiến thức chuyên sâu về
            <span className="block mt-2 text-white/90">phần mềm doanh nghiệp</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Khám phá tài liệu hướng dẫn, bài viết chuyên môn và các nguồn tài nguyên 
            giúp bạn tối ưu hóa việc sử dụng phần mềm.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Tìm kiếm tài liệu, hướng dẫn..."
                className="pl-12 pr-4 py-6 text-base bg-white border-0 rounded-xl shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-white/60 text-sm">Phổ biến:</span>
            {["Hướng dẫn ERP", "Tích hợp API", "Báo cáo phân tích", "Mobile App"].map((tag) => (
              <button 
                key={tag}
                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
