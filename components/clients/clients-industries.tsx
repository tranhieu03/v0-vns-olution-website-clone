"use client"

import { 
  Factory, 
  ShoppingCart, 
  Building, 
  Truck, 
  Heart, 
  GraduationCap,
  Landmark,
  Plane
} from "lucide-react"

const industries = [
  {
    icon: Factory,
    name: "Sản xuất",
    count: "120+",
    description: "Nhà máy, xưởng sản xuất",
  },
  {
    icon: ShoppingCart,
    name: "Bán lẻ",
    count: "150+",
    description: "Chuỗi cửa hàng, siêu thị",
  },
  {
    icon: Building,
    name: "Bất động sản",
    count: "80+",
    description: "Chủ đầu tư, môi giới",
  },
  {
    icon: Truck,
    name: "Logistics",
    count: "60+",
    description: "Vận tải, kho bãi",
  },
  {
    icon: Landmark,
    name: "Tài chính",
    count: "40+",
    description: "Ngân hàng, bảo hiểm",
  },
  {
    icon: Heart,
    name: "Y tế",
    count: "30+",
    description: "Bệnh viện, phòng khám",
  },
  {
    icon: GraduationCap,
    name: "Giáo dục",
    count: "25+",
    description: "Trường học, trung tâm",
  },
  {
    icon: Plane,
    name: "Du lịch",
    count: "35+",
    description: "Khách sạn, lữ hành",
  },
]

export function ClientsIndustries() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Phục vụ đa ngành nghề
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            VNSolution cung cấp giải pháp chuyên biệt cho từng ngành, đáp ứng đặc thù kinh doanh riêng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {industry.name}
              </h3>
              <div className="text-2xl font-bold text-primary mb-1">
                {industry.count}
              </div>
              <div className="text-sm text-muted-foreground">
                {industry.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
