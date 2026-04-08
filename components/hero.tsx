import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Phần mềm quản lý tài liệu và quy trình doanh nghiệp
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Tự động hóa quy trình, tối ưu hệ thống quản lý nội bộ, và nâng cao hiệu suất vận hành doanh nghiệp với nền tảng VNSolution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                Dùng thử miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="h-4 w-4" />
                Đặt lịch DEMO
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Miễn phí 14 ngày • Không cần thẻ tín dụng
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Dashboard Card */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <div className="rounded-xl bg-white p-4 shadow-lg">
                  {/* Dashboard Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="h-2 w-24 rounded bg-muted" />
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid gap-3">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Doanh thu", value: "2.5 tỷ", color: "bg-primary/10 text-primary" },
                        { label: "Đơn hàng", value: "1,234", color: "bg-accent/10 text-accent" },
                        { label: "Khách hàng", value: "856", color: "bg-green-100 text-green-600" },
                      ].map((stat) => (
                        <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                          <p className="text-xs opacity-70">{stat.label}</p>
                          <p className="text-lg font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Placeholder */}
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="flex items-end justify-between gap-1 h-20">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-primary/60"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Table Preview */}
                    <div className="space-y-2">
                      {[1, 2, 3].map((row) => (
                        <div key={row} className="flex items-center gap-3 rounded-lg bg-muted/30 p-2">
                          <div className="h-8 w-8 rounded-full bg-primary/20" />
                          <div className="flex-1 space-y-1">
                            <div className="h-2 w-24 rounded bg-muted" />
                            <div className="h-2 w-16 rounded bg-muted/50" />
                          </div>
                          <div className="h-2 w-12 rounded bg-accent/50" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-4 top-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hoàn thành</p>
                    <p className="text-sm font-semibold">+24 tác vụ</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tăng trưởng</p>
                    <p className="text-sm font-semibold text-green-600">+32%</p>
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
