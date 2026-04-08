import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Leaf, Truck, Factory, RotateCcw } from "lucide-react"

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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground">
              <Leaf className="h-4 w-4" />
              <span>Giải pháp xanh cho tương lai bền vững</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Phần mềm Quản lý Xử lý Rác thải Thông minh
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Tối ưu hóa quy trình thu gom, vận chuyển, xử lý và tái chế chất thải. Nâng cao hiệu suất vận hành, giảm chi phí và bảo vệ môi trường với nền tảng EcoWaste Pro.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                Dùng thử miễn phí
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="h-4 w-4" />
                Xem Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Miễn phí 14 ngày - Không cần thẻ tín dụng
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
                    <div className="text-xs font-medium text-muted-foreground">EcoWaste Dashboard</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid gap-3">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Rác thu gom", value: "1,250 tấn", icon: Truck, color: "bg-primary/10 text-primary" },
                        { label: "Tái chế", value: "420 tấn", icon: RotateCcw, color: "bg-amber-100 text-amber-600" },
                        { label: "Xử lý", value: "830 tấn", icon: Factory, color: "bg-blue-100 text-blue-600" },
                      ].map((stat) => (
                        <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                          <div className="flex items-center gap-1">
                            <stat.icon className="h-3 w-3" />
                            <p className="text-xs opacity-70">{stat.label}</p>
                          </div>
                          <p className="text-base font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Placeholder - Waste collection by area */}
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">Lượng rác theo khu vực</p>
                      <div className="flex items-end justify-between gap-1 h-16">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-primary/60"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Collection Routes */}
                    <div className="space-y-2">
                      {[
                        { route: "Tuyến 01 - Quận Hoàn Kiếm", status: "Đang thu gom", progress: 75 },
                        { route: "Tuyến 02 - Quận Hai Bà Trưng", status: "Hoàn thành", progress: 100 },
                        { route: "Tuyến 03 - Quận Đống Đa", status: "Chờ xử lý", progress: 30 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-muted/30 p-2">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${item.progress === 100 ? 'bg-primary/20' : 'bg-amber-100'}`}>
                            <Truck className={`h-4 w-4 ${item.progress === 100 ? 'text-primary' : 'text-amber-600'}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium">{item.route}</p>
                            <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                              <div 
                                className={`h-full rounded-full ${item.progress === 100 ? 'bg-primary' : 'bg-amber-500'}`}
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{item.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-4 top-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <RotateCcw className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tỷ lệ tái chế</p>
                    <p className="text-sm font-semibold text-primary">33.6%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">CO2 giảm thiểu</p>
                    <p className="text-sm font-semibold text-green-600">-2,500 tấn</p>
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
