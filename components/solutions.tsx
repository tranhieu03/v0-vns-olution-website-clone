"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, FlaskConical, Factory, Truck, TestTube, FileCheck, BarChart3, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    id: "waste",
    category: "Giải pháp Môi trường",
    name: "Hệ thống Quản lý Chất thải",
    shortName: "Quản lý Chất thải",
    description: "Nền tảng số hóa toàn diện cho việc thu gom, vận chuyển, xử lý và báo cáo chất thải. Giúp doanh nghiệp tuân thủ quy định pháp luật về môi trường, tối ưu chi phí và nâng cao hiệu quả vận hành.",
    features: [
      { icon: Truck, text: "Quản lý thu gom & vận chuyển" },
      { icon: Factory, text: "Theo dõi xử lý chất thải" },
      { icon: BarChart3, text: "Báo cáo môi trường tự động" },
      { icon: Shield, text: "Tuân thủ quy định pháp luật" },
    ],
  },
  {
    id: "lab",
    category: "Giải pháp Phòng Thí nghiệm",
    name: "Hệ thống Quản lý Phòng Thí nghiệm",
    shortName: "LIMS",
    description: "Hệ thống LIMS (Laboratory Information Management System) giúp quản lý toàn bộ quy trình phòng thí nghiệm từ tiếp nhận mẫu, xét nghiệm đến trả kết quả. Đáp ứng tiêu chuẩn ISO 17025 và các quy định ngành.",
    features: [
      { icon: TestTube, text: "Quản lý mẫu & xét nghiệm" },
      { icon: FlaskConical, text: "Kiểm soát chất lượng QA/QC" },
      { icon: FileCheck, text: "Xuất kết quả & chứng chỉ" },
      { icon: Shield, text: "Đạt chuẩn ISO 17025" },
    ],
  },
]

export function Solutions() {
  const [activeTab, setActiveTab] = useState(0)
  const activeSolution = solutions[activeTab]

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">Giải pháp chuyên ngành</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Phần mềm chuyên biệt theo lĩnh vực
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Các giải pháp được thiết kế riêng cho ngành môi trường và phòng thí nghiệm, 
            đáp ứng đầy đủ yêu cầu nghiệp vụ và quy định pháp luật.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-white border border-slate-200 p-1.5 shadow-lg shadow-slate-200/50">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-gradient-to-r from-primary to-cyan-500 text-white shadow-md shadow-primary/30"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {solution.id === "waste" ? (
                  <Recycle className="h-4 w-4" />
                ) : (
                  <FlaskConical className="h-4 w-4" />
                )}
                {solution.shortName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-in" key={activeSolution.id}>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {activeSolution.category}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl">
              {activeSolution.name}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {activeSolution.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {activeSolution.features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border transition-smooth hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium pt-2">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <Link href={activeSolution.id === "waste" ? "/giai-phap/quan-ly-chat-thai" : "/giai-phap/lims"}>
                <Button className="gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                  Tìm hiểu chi tiết
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="gap-2 transition-smooth border-slate-300 hover:border-primary hover:text-primary">
                Xem demo
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="animate-scale-in" key={`dashboard-${activeSolution.id}`}>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-400/70"></span>
                <span className="ml-4 text-xs text-muted-foreground font-medium">
                  {activeSolution.shortName} Dashboard
                </span>
              </div>
              
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {activeSolution.id === "waste" ? (
                        <Recycle className="h-5 w-5 text-primary" />
                      ) : (
                        <FlaskConical className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{activeSolution.shortName}</p>
                      <p className="text-xs text-muted-foreground">Tổng quan hệ thống</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="text-xs text-green-600 font-medium">Hoạt động</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeSolution.id === "waste" ? (
                    <>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Điểm thu gom</p>
                        <p className="text-2xl font-bold text-foreground mt-1">2,847</p>
                        <p className="text-xs text-green-600 mt-1">+12% tháng</p>
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Chuyến hôm nay</p>
                        <p className="text-2xl font-bold text-primary mt-1">42</p>
                        <p className="text-xs text-muted-foreground mt-1">Đang vận hành</p>
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Đã xử lý</p>
                        <p className="text-2xl font-bold text-foreground mt-1">156T</p>
                        <p className="text-xs text-muted-foreground mt-1">Tuần này</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Mẫu tiếp nhận</p>
                        <p className="text-2xl font-bold text-foreground mt-1">1,247</p>
                        <p className="text-xs text-green-600 mt-1">+8% tuần</p>
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Đang xét nghiệm</p>
                        <p className="text-2xl font-bold text-primary mt-1">89</p>
                        <p className="text-xs text-muted-foreground mt-1">Trong tiến độ</p>
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <p className="text-xs text-muted-foreground">Hoàn thành</p>
                        <p className="text-2xl font-bold text-foreground mt-1">1,158</p>
                        <p className="text-xs text-green-600 mt-1">92.8% đúng hạn</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="rounded-xl bg-muted/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground">Hiệu suất 7 ngày qua</p>
                    <p className="text-xs text-muted-foreground">Cập nhật: Hôm nay</p>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {[45, 62, 58, 75, 68, 82, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/60 rounded-t-sm transition-all hover:bg-primary"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day) => (
                      <span key={day} className="text-[10px] text-muted-foreground flex-1 text-center">{day}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
