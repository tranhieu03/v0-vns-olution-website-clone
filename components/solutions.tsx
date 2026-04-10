"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, FlaskConical, Factory, Truck, TestTube, FileCheck, BarChart3, Shield } from "lucide-react"

const solutions = [
  {
    id: "waste",
    category: "MÔI TRƯỜNG",
    name: "Hệ thống Quản lý Chất thải",
    description: "Nền tảng số hóa toàn diện cho thu gom, xử lý, theo dõi và báo cáo tuân thủ chất thải. Tối ưu hóa lộ trình, giảm chi phí và đáp ứng các quy định về môi trường.",
    features: [
      { icon: Truck, text: "Tối ưu lộ trình thu gom" },
      { icon: Factory, text: "Quản lý cơ sở xử lý" },
      { icon: BarChart3, text: "Dashboard phân tích thời gian thực" },
      { icon: Shield, text: "Tự động hóa báo cáo tuân thủ" },
    ],
    accent: "accent",
  },
  {
    id: "lab",
    category: "PHÒNG THÍ NGHIỆM",
    name: "Giải pháp Phòng thí nghiệm",
    description: "Hệ thống LIMS (Laboratory Information Management System) toàn diện cho theo dõi mẫu, quản lý xét nghiệm, kiểm soát chất lượng và tuân thủ quy định trong nhiều ngành công nghiệp.",
    features: [
      { icon: TestTube, text: "Quản lý vòng đời mẫu" },
      { icon: FlaskConical, text: "Quy trình xét nghiệm tự động" },
      { icon: FileCheck, text: "Quy trình đảm bảo chất lượng" },
      { icon: Shield, text: "Sẵn sàng tuân thủ ISO 17025" },
    ],
    accent: "primary",
  },
]

export function Solutions() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Giải pháp ngành</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Phần mềm chuyên biệt cho các ngành phức tạp
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Giải pháp được xây dựng riêng để đáp ứng những thách thức đặc thù của ngành
            quản lý chất thải và vận hành phòng thí nghiệm với độ chính xác và tuân thủ cao.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, idx) => (
            <div
              key={solution.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {solution.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                  {solution.name}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {solution.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-2.5">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        solution.accent === "accent" ? "bg-accent/10" : "bg-primary/10"
                      }`}>
                        <feature.icon className={`h-4 w-4 ${
                          solution.accent === "accent" ? "text-accent" : "text-primary"
                        }`} />
                      </div>
                      <span className="text-xs text-foreground pt-1.5 leading-tight">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className={`gap-2 text-sm ${
                    solution.accent === "accent" ? "bg-accent hover:bg-accent/90" : ""
                  }`}>
                    Tìm hiểu thêm
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-xl border border-border bg-card p-1.5 shadow-lg">
                  <div className="rounded-lg bg-muted/50 p-5">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`h-8 w-8 rounded-md flex items-center justify-center ${
                            solution.accent === "accent" ? "bg-accent/15" : "bg-primary/15"
                          }`}>
                            {solution.id === "waste" ? (
                              <Recycle className={`h-4 w-4 ${solution.accent === "accent" ? "text-accent" : "text-primary"}`} />
                            ) : (
                              <FlaskConical className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground">{solution.name}</p>
                            <p className="text-[10px] text-muted-foreground">Tổng quan Dashboard</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          <span className="text-[10px] text-muted-foreground">Trực tiếp</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {solution.id === "waste" ? (
                          <>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Điểm thu gom</p>
                              <p className="text-lg font-bold text-foreground">2,847</p>
                            </div>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Tuyến hôm nay</p>
                              <p className="text-lg font-bold text-accent">42</p>
                            </div>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Đã xử lý (tấn)</p>
                              <p className="text-lg font-bold text-foreground">156</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Mẫu đang xử lý</p>
                              <p className="text-lg font-bold text-foreground">1,247</p>
                            </div>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Đang xét nghiệm</p>
                              <p className="text-lg font-bold text-primary">89</p>
                            </div>
                            <div className="rounded-md bg-background p-3">
                              <p className="text-[10px] text-muted-foreground">Hoàn thành</p>
                              <p className="text-lg font-bold text-foreground">1,158</p>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="rounded-md bg-background p-3">
                        <p className="text-[10px] font-medium text-muted-foreground mb-2">Hiệu suất tuần</p>
                        <div className="flex items-end gap-1.5 h-16">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-sm transition-smooth ${
                                solution.accent === "accent" ? "bg-accent/50" : "bg-primary/50"
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-1.5">
                          {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day) => (
                            <span key={day} className="text-[8px] text-muted-foreground">{day}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
