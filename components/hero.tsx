import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck, Truck, Store, ShoppingCart, Boxes, TrendingUp, AlertTriangle } from "lucide-react"

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
              <ShieldCheck className="h-4 w-4" />
              <span>Tuân thủ GDP/GPP - Chuẩn Bộ Y tế</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Phần mềm Quản lý Dược phẩm Toàn diện
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Giải pháp số hóa cho nhà phân phối, chuỗi nhà thuốc và bán hàng đa kênh. 
              Quản lý lô hàng, hạn sử dụng, kết nối sàn TMĐT Shopee, Lazada, TikTok Shop.
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
                    <div className="text-xs font-medium text-muted-foreground">PharmaPro Dashboard</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid gap-3">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Sản phẩm", value: "12,458", icon: Boxes, color: "bg-primary/10 text-primary" },
                        { label: "Đơn hàng", value: "847", icon: ShoppingCart, color: "bg-amber-100 text-amber-600" },
                        { label: "Doanh thu", value: "2.8 tỷ", icon: TrendingUp, color: "bg-green-100 text-green-600" },
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
                    
                    {/* Chart Placeholder - Revenue by channel */}
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="mb-2 text-xs font-medium text-muted-foreground">Doanh thu theo kênh bán</p>
                      <div className="flex items-end justify-between gap-1 h-16">
                        {[70, 55, 40, 35, 25, 45, 60, 50, 65, 40, 55, 75].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-primary/60"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
                        <span>Phân phối</span>
                        <span>Bán lẻ</span>
                        <span>Shopee</span>
                        <span>Lazada</span>
                      </div>
                    </div>
                    
                    {/* Alert - Expiry Warning */}
                    <div className="flex items-center gap-3 rounded-lg bg-amber-50 border border-amber-200 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-amber-800">Cảnh báo hạn sử dụng</p>
                        <p className="text-[10px] text-amber-600">24 sản phẩm sắp hết hạn trong 60 ngày</p>
                      </div>
                    </div>
                    
                    {/* Recent Orders */}
                    <div className="space-y-2">
                      {[
                        { code: "ĐH-2024-0847", customer: "Nhà thuốc An Khang", amount: "45.2 tr", status: "success" },
                        { code: "ĐH-2024-0846", customer: "Pharmacity Q.1", amount: "32.8 tr", status: "warning" },
                        { code: "ĐH-2024-0845", customer: "Long Châu Bình Thạnh", amount: "28.5 tr", status: "success" },
                      ].map((order, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-muted/30 p-2">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${order.status === 'success' ? 'bg-green-100' : 'bg-amber-100'}`}>
                            <Store className={`h-4 w-4 ${order.status === 'success' ? 'text-green-600' : 'text-amber-600'}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium">{order.code}</p>
                            <p className="text-[10px] text-muted-foreground">{order.customer}</p>
                          </div>
                          <span className="text-xs font-semibold text-primary">{order.amount}</span>
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
                    <Truck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Đơn giao hôm nay</p>
                    <p className="text-sm font-semibold text-primary">156 đơn</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tuân thủ</p>
                    <p className="text-sm font-semibold text-green-600">GDP/GPP</p>
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
