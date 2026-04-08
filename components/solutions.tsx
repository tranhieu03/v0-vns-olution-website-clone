import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Store, ShoppingCart, Boxes } from "lucide-react"

const stats = [
  { value: "500+", label: "Nhà thuốc sử dụng" },
  { value: "50,000+", label: "SKU quản lý" },
  { value: "99.9%", label: "Uptime hệ thống" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
]

const products = [
  {
    id: "distro",
    name: "PharmaDistro",
    description: "Quản lý phân phối",
    icon: Truck,
    color: "bg-primary text-primary-foreground",
  },
  {
    id: "retail",
    name: "PharmaRetail",
    description: "Quản lý bán lẻ GPP",
    icon: Store,
    color: "bg-amber-500 text-white",
  },
  {
    id: "channel",
    name: "PharmaChannel",
    description: "Bán hàng đa kênh",
    icon: ShoppingCart,
    color: "bg-pink-500 text-white",
  },
  {
    id: "stock",
    name: "PharmaStock",
    description: "Quản lý kho & lô hàng",
    icon: Boxes,
    color: "bg-emerald-500 text-white",
  },
]

export function Solutions() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
              Giải pháp toàn diện cho ngành dược phẩm
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Hệ sinh thái PharmaPro là giải pháp số hóa toàn bộ quy trình từ phân phối, bán lẻ, bán đa kênh đến quản lý kho và tuân thủ quy định GDP/GPP.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Ecosystem Visualization */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              {/* Central Hub */}
              <div className="mb-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Hệ sinh thái PharmaPro tích hợp liền mạch các module quản lý dược phẩm
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${product.color}`}>
                      <product.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                ))}
              </div>

              {/* Connection Lines Visualization */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-1 flex-1 rounded bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button className="gap-2">
                  Xem Chi Tiết
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Tải Brochure
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
