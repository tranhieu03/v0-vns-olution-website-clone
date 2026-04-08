import { CheckCircle, Truck, Store, ShoppingCart, Boxes, Building2, Users, BarChart3, Package, Calendar, Zap, Globe } from "lucide-react"

const products = [
  {
    id: "distro",
    name: "PharmaDistro",
    title: "Hệ thống Quản lý Phân phối Dược phẩm",
    description: "PharmaDistro là giải pháp quản lý phân phối dược phẩm toàn diện cho các đại lý cấp 1, cấp 2. Quản lý đơn hàng B2B, công nợ đại lý, chính sách giá theo khách hàng, và tracking lô hàng theo chuẩn GDP.",
    features: [
      "Quản lý đơn hàng B2B và công nợ đại lý",
      "Chính sách giá phân cấp theo khách hàng",
      "Tracking lô hàng, số đăng ký thuốc",
      "Báo cáo doanh số theo vùng miền",
    ],
    icon: Truck,
    secondaryIcon: Building2,
    reverse: false,
  },
  {
    id: "retail",
    name: "PharmaRetail",
    title: "Phần mềm Quản lý Nhà thuốc GPP",
    description: "PharmaRetail là giải pháp quản lý nhà thuốc bán lẻ tuân thủ chuẩn GPP. Hỗ trợ bán hàng nhanh, quản lý tồn kho theo lô, cảnh báo hạn sử dụng, tra cứu tương tác thuốc và xuất báo cáo Bộ Y tế tự động.",
    features: [
      "POS bán hàng nhanh, quét barcode",
      "Cảnh báo hạn sử dụng tự động",
      "Tra cứu tương tác thuốc realtime",
      "Xuất báo cáo GPP theo chuẩn Bộ Y tế",
    ],
    icon: Store,
    secondaryIcon: Users,
    reverse: true,
  },
  {
    id: "channel",
    name: "PharmaChannel",
    title: "Bán hàng Đa kênh & Sàn TMĐT",
    description: "PharmaChannel kết nối và đồng bộ đơn hàng từ Shopee, Lazada, TikTok Shop, Sendo về một hệ thống duy nhất. Tự động cập nhật tồn kho, in vận đơn, và quản lý đánh giá khách hàng.",
    features: [
      "Tích hợp Shopee, Lazada, TikTok Shop",
      "Đồng bộ tồn kho realtime giữa các kênh",
      "Tự động in vận đơn GHN, GHTK, J&T",
      "Quản lý đánh giá và phản hồi khách hàng",
    ],
    icon: ShoppingCart,
    secondaryIcon: Globe,
    reverse: false,
  },
  {
    id: "stock",
    name: "PharmaStock",
    title: "Quản lý Kho Dược phẩm Thông minh",
    description: "PharmaStock là hệ thống quản lý kho dược phẩm với tính năng theo dõi lô hàng, hạn sử dụng, điều kiện bảo quản và xuất nhập kho theo FIFO/FEFO. Tích hợp mã vạch và QR code theo chuẩn ngành dược.",
    features: [
      "Quản lý theo lô, số lô, hạn sử dụng",
      "Xuất kho theo FIFO/FEFO tự động",
      "Cảnh báo nhiệt độ, độ ẩm kho lạnh",
      "Kiểm kê kho bằng thiết bị cầm tay",
    ],
    icon: Boxes,
    secondaryIcon: Calendar,
    reverse: true,
  },
]

export function Products() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-24">
          {products.map((product) => (
            <div
              key={product.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                product.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={product.reverse ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  <product.icon className="h-4 w-4" />
                  {product.name}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {product.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-pretty">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Preview */}
              <div className={product.reverse ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                  <div className="rounded-xl bg-muted/50 p-4">
                    {/* Mock Dashboard */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-8 w-8 rounded flex items-center justify-center ${
                            product.id === 'distro' ? 'bg-primary/20' :
                            product.id === 'retail' ? 'bg-amber-100' :
                            product.id === 'channel' ? 'bg-pink-100' : 'bg-emerald-100'
                          }`}>
                            <product.icon className={`h-4 w-4 ${
                              product.id === 'distro' ? 'text-primary' :
                              product.id === 'retail' ? 'text-amber-600' :
                              product.id === 'channel' ? 'text-pink-600' : 'text-emerald-600'
                            }`} />
                          </div>
                          <div className="text-sm font-medium">{product.name}</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-xs text-muted-foreground">Online</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { 
                            label: product.id === 'distro' ? 'Đại lý' : product.id === 'retail' ? 'Đơn hôm nay' : product.id === 'channel' ? 'Đơn chờ xử lý' : 'Sản phẩm', 
                            value: product.id === 'distro' ? '245' : product.id === 'retail' ? '89' : product.id === 'channel' ? '156' : '12,458' 
                          },
                          { 
                            label: product.id === 'distro' ? 'Đơn B2B' : product.id === 'retail' ? 'Doanh thu' : product.id === 'channel' ? 'Shopee' : 'Sắp hết hạn', 
                            value: product.id === 'distro' ? '67' : product.id === 'retail' ? '45.2 tr' : product.id === 'channel' ? '89 đơn' : '24' 
                          },
                          { label: 'Tăng trưởng', value: '+18%' },
                        ].map((stat, i) => (
                          <div key={i} className="rounded-lg bg-background p-3 shadow-sm">
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                            <div className={`mt-1 text-lg font-bold ${i === 2 ? 'text-green-600' : 'text-foreground'}`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Content Area */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">
                            {product.id === 'distro' ? 'Doanh số theo vùng' : product.id === 'retail' ? 'Doanh thu theo giờ' : product.id === 'channel' ? 'Đơn hàng theo sàn' : 'Tồn kho theo nhóm'}
                          </div>
                          <div className="flex items-end gap-1">
                            {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t ${
                                  product.id === 'distro' ? 'bg-primary/60' :
                                  product.id === 'retail' ? 'bg-amber-400' :
                                  product.id === 'channel' ? 'bg-pink-400' : 'bg-emerald-400'
                                }`}
                                style={{ height: `${h}px` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">Hiệu suất</div>
                          <div className="flex items-center justify-center">
                            <div className={`h-16 w-16 rounded-full border-8 ${
                              product.id === 'distro' ? 'border-primary/30 border-t-primary' :
                              product.id === 'retail' ? 'border-amber-200 border-t-amber-500' :
                              product.id === 'channel' ? 'border-pink-200 border-t-pink-500' : 'border-emerald-200 border-t-emerald-500'
                            }`} />
                          </div>
                        </div>
                      </div>

                      {/* Activity List */}
                      <div className="rounded-lg bg-background p-3 shadow-sm">
                        <div className="space-y-2">
                          {[
                            { 
                              text: product.id === 'distro' ? 'ĐH-B2B-0523 - Đã giao hàng' : 
                                    product.id === 'retail' ? 'Panadol Extra - Bán 5 hộp' : 
                                    product.id === 'channel' ? 'Shopee #SP847 - Chờ lấy hàng' : 
                                    'Lô A2024-05 - Nhập kho', 
                              status: 'success' 
                            },
                            { 
                              text: product.id === 'distro' ? 'ĐH-B2B-0522 - Đang giao' : 
                                    product.id === 'retail' ? 'Vitamin C 1000 - Còn 12 hộp' : 
                                    product.id === 'channel' ? 'Lazada #LZ156 - Đang đóng gói' : 
                                    'Lô B2024-03 - HSD còn 45 ngày', 
                              status: 'warning' 
                            },
                            { 
                              text: product.id === 'distro' ? 'Công nợ - NT An Khang' : 
                                    product.id === 'retail' ? 'Efferalgan - Cần nhập thêm' : 
                                    product.id === 'channel' ? 'TikTok #TK089 - Mới' : 
                                    'Kiểm kê kho A - Hoàn thành', 
                              status: 'info' 
                            },
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 rounded bg-muted/30 p-2">
                              <div className={`h-2 w-2 rounded-full ${
                                item.status === 'success' ? 'bg-green-500' :
                                item.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-xs">{item.text}</span>
                            </div>
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
