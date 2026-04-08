import { Calendar, Boxes, ShoppingCart, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: Calendar,
    title: "Quản lý hạn sử dụng thủ công",
    description: "Theo dõi lô hàng, hạn sử dụng bằng Excel dễ sai sót, gây tồn kho thuốc hết hạn và thiệt hại tài chính lớn.",
  },
  {
    icon: Boxes,
    title: "Tồn kho phân tán nhiều nơi",
    description: "Hàng tồn kho phân bố rời rạc giữa các kho, nhà thuốc, khó kiểm soát số lượng và điều phối hàng hóa kịp thời.",
  },
  {
    icon: ShoppingCart,
    title: "Bán đa kênh thiếu đồng bộ",
    description: "Quản lý đơn hàng từ nhiều sàn TMĐT (Shopee, Lazada, TikTok Shop) riêng lẻ, dễ bị trùng đơn, sót đơn.",
  },
  {
    icon: BarChart3,
    title: "Thiếu báo cáo GDP/GPP",
    description: "Không có hệ thống báo cáo tự động theo chuẩn GDP/GPP, mất nhiều thời gian chuẩn bị khi thanh tra.",
  },
]

export function Problems() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            Doanh nghiệp dược đang gặp vấn đề gì?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Hàng trăm nhà phân phối, nhà thuốc và doanh nghiệp dược phẩm đang gặp khó khăn với quy trình quản lý thủ công, thiếu công nghệ số hóa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
