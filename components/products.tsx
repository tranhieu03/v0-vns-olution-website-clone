import { CheckCircle, MapPin, Truck, Factory, RotateCcw, Route, Gauge, BarChart3, Leaf } from "lucide-react"

const products = [
  {
    id: "collect",
    name: "EcoCollect",
    title: "Hệ thống Thu gom Rác thải Thông minh",
    description: "EcoCollect là module quản lý thu gom rác thải với tính năng quy hoạch tuyến đường tối ưu, giám sát vị trí xe realtime qua GPS, và tự động phân bổ công việc cho đội thu gom. Giúp tiết kiệm 30% chi phí nhiên liệu và tăng 40% hiệu suất thu gom.",
    features: [
      "Quy hoạch tuyến đường thu gom tự động bằng AI",
      "Giám sát vị trí xe realtime qua GPS/IoT",
      "Cảnh báo thùng rác đầy tự động",
      "Báo cáo khối lượng rác theo khu vực",
    ],
    icon: MapPin,
    secondaryIcon: Route,
    reverse: false,
  },
  {
    id: "transport",
    name: "EcoTransport",
    title: "Quản lý Vận chuyển và Đội xe",
    description: "EcoTransport là giải pháp quản lý toàn diện đội xe vận chuyển rác thải, từ lịch bảo trì, quản lý lái xe, đến theo dõi hành trình chi tiết. Tích hợp cân điện tử và camera giám sát để đảm bảo vận chuyển đúng quy định.",
    features: [
      "Quản lý lịch bảo trì xe tự động",
      "Tích hợp cân điện tử ghi nhận khối lượng",
      "Camera AI giám sát quá trình vận chuyển",
      "Định vị GPS và theo dõi hành trình",
    ],
    icon: Truck,
    secondaryIcon: Gauge,
    reverse: true,
  },
  {
    id: "process",
    name: "EcoProcess",
    title: "Quản lý Trạm Xử lý Chất thải",
    description: "EcoProcess hỗ trợ quản lý vận hành các trạm xử lý, nhà máy đốt rác, bãi chôn lấp với các tính năng giám sát công suất, quản lý chỉ số môi trường, và tự động hóa quy trình xử lý theo tiêu chuẩn quốc tế.",
    features: [
      "Giám sát công suất xử lý realtime",
      "Quản lý chỉ số môi trường (khí thải, nước thải)",
      "Tự động hóa quy trình vận hành",
      "Báo cáo tuân thủ quy định pháp luật",
    ],
    icon: Factory,
    secondaryIcon: BarChart3,
    reverse: false,
  },
  {
    id: "recycle",
    name: "EcoRecycle",
    title: "Quản lý Phân loại và Tái chế",
    description: "EcoRecycle giúp quản lý quy trình phân loại rác tại nguồn, theo dõi tỷ lệ tái chế, và kết nối với các đơn vị thu mua phế liệu. Tăng giá trị thu hồi từ rác thải và giảm lượng rác chôn lấp.",
    features: [
      "Theo dõi tỷ lệ phân loại tại nguồn",
      "Quản lý kho phế liệu và vật liệu tái chế",
      "Kết nối đơn vị thu mua tự động",
      "Báo cáo giảm phát thải CO2",
    ],
    icon: RotateCcw,
    secondaryIcon: Leaf,
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
                            product.id === 'collect' ? 'bg-primary/20' :
                            product.id === 'transport' ? 'bg-amber-100' :
                            product.id === 'process' ? 'bg-blue-100' : 'bg-emerald-100'
                          }`}>
                            <product.icon className={`h-4 w-4 ${
                              product.id === 'collect' ? 'text-primary' :
                              product.id === 'transport' ? 'text-amber-600' :
                              product.id === 'process' ? 'text-blue-600' : 'text-emerald-600'
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
                          { label: product.id === 'collect' ? 'Điểm thu gom' : product.id === 'transport' ? 'Xe hoạt động' : product.id === 'process' ? 'Công suất' : 'Tái chế', value: product.id === 'collect' ? '156' : product.id === 'transport' ? '48' : product.id === 'process' ? '85%' : '2,400 tấn' },
                          { label: product.id === 'collect' ? 'Hoàn thành' : product.id === 'transport' ? 'Chuyến/ngày' : product.id === 'process' ? 'Xử lý/ngày' : 'Thu hồi', value: product.id === 'collect' ? '89%' : product.id === 'transport' ? '124' : product.id === 'process' ? '450 tấn' : '35%' },
                          { label: 'Hiệu suất', value: '+12%' },
                        ].map((stat, i) => (
                          <div key={i} className="rounded-lg bg-background p-3 shadow-sm">
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                            <div className={`mt-1 text-lg font-bold ${i === 2 ? 'text-primary' : 'text-foreground'}`}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Content Area */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">
                            {product.id === 'collect' ? 'Lượng rác theo giờ' : product.id === 'transport' ? 'Số chuyến theo ngày' : product.id === 'process' ? 'Công suất xử lý' : 'Tỷ lệ tái chế'}
                          </div>
                          <div className="flex items-end gap-1">
                            {[30, 50, 40, 70, 55, 80, 65].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t ${
                                  product.id === 'collect' ? 'bg-primary/60' :
                                  product.id === 'transport' ? 'bg-amber-400' :
                                  product.id === 'process' ? 'bg-blue-400' : 'bg-emerald-400'
                                }`}
                                style={{ height: `${h}px` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg bg-background p-4 shadow-sm">
                          <div className="text-xs font-medium text-muted-foreground mb-2">Tổng quan</div>
                          <div className="flex items-center justify-center">
                            <div className={`h-16 w-16 rounded-full border-8 ${
                              product.id === 'collect' ? 'border-primary/30 border-t-primary' :
                              product.id === 'transport' ? 'border-amber-200 border-t-amber-500' :
                              product.id === 'process' ? 'border-blue-200 border-t-blue-500' : 'border-emerald-200 border-t-emerald-500'
                            }`} />
                          </div>
                        </div>
                      </div>

                      {/* Activity List */}
                      <div className="rounded-lg bg-background p-3 shadow-sm">
                        <div className="space-y-2">
                          {[
                            { text: product.id === 'collect' ? 'Tuyến 01 - Hoàn thành' : product.id === 'transport' ? 'Xe 48B-12345 - Đang chạy' : product.id === 'process' ? 'Lò đốt #1 - Hoạt động' : 'Nhựa - 850kg thu gom', status: 'success' },
                            { text: product.id === 'collect' ? 'Tuyến 02 - Đang thực hiện' : product.id === 'transport' ? 'Xe 48B-67890 - Bảo trì' : product.id === 'process' ? 'Lò đốt #2 - Bảo trì' : 'Giấy - 1,200kg thu gom', status: 'warning' },
                            { text: product.id === 'collect' ? 'Tuyến 03 - Chờ xử lý' : product.id === 'transport' ? 'Xe 48B-11111 - Chờ lệnh' : product.id === 'process' ? 'Bãi chôn lấp - 60%' : 'Kim loại - 320kg thu gom', status: 'info' },
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
