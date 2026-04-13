import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Factory, 
  Hospital, 
  HardHat,
  Utensils,
  Quote,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Leaf,
  ChevronRight,
  Play,
  Star,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "Khách hàng tiêu biểu - VNS Xử lý rác",
  description: "Các doanh nghiệp và tổ chức đã tin tưởng sử dụng giải pháp VNS Xử lý rác để quản lý chất thải hiệu quả.",
}

const featuredCustomers = [
  {
    id: 1,
    name: "Công ty TNHH Samsung Electronics Việt Nam",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Sản xuất điện tử",
    location: "Bắc Ninh",
    description: "Samsung đã triển khai VNS Xử lý rác để quản lý toàn bộ quy trình xử lý chất thải công nghiệp và chất thải nguy hại tại các nhà máy sản xuất.",
    testimonial: "VNS Xử lý rác đã giúp chúng tôi giảm 40% chi phí xử lý chất thải và đảm bảo 100% tuân thủ quy định môi trường. Hệ thống báo cáo tự động giúp tiết kiệm đáng kể thời gian cho đội ngũ quản lý.",
    author: "Nguyễn Văn Minh",
    position: "Giám đốc Môi trường",
    stats: [
      { label: "Giảm chi phí", value: "40%" },
      { label: "Tuân thủ", value: "100%" },
      { label: "Tiết kiệm thời gian", value: "60%" },
    ],
    tags: ["CTNH", "Tái chế", "Báo cáo tự động"],
    featured: true,
  },
  {
    id: 2,
    name: "Bệnh viện Bạch Mai",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Y tế",
    location: "Hà Nội",
    description: "Bệnh viện Bạch Mai sử dụng VNS để quản lý chất thải y tế nguy hại, đảm bảo quy trình xử lý an toàn và tuân thủ quy định của Bộ Y tế.",
    testimonial: "Giải pháp của VNS giúp chúng tôi theo dõi chính xác từng kg chất thải y tế từ khi phát sinh đến khi xử lý. Điều này rất quan trọng với an toàn bệnh viện.",
    author: "PGS.TS Trần Thị Lan",
    position: "Phó Giám đốc phụ trách Hạ tầng",
    stats: [
      { label: "Chất thải/tháng", value: "50 tấn" },
      { label: "Truy xuất nguồn gốc", value: "100%" },
      { label: "Giảm sự cố", value: "85%" },
    ],
    tags: ["CTYT", "Truy xuất", "An toàn"],
    featured: true,
  },
  {
    id: 3,
    name: "Tập đoàn Vingroup",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Bất động sản & Dịch vụ",
    location: "Toàn quốc",
    description: "Vingroup triển khai VNS Xử lý rác tại hệ thống Vincom, Vinhomes và các khách sạn Vinpearl để quản lý chất thải sinh hoạt và tái chế.",
    testimonial: "Với quy mô hoạt động rộng khắp cả nước, VNS giúp chúng tôi có cái nhìn tổng quan về toàn bộ hoạt động quản lý chất thải qua dashboard thời gian thực.",
    author: "Lê Hoàng Nam",
    position: "Giám đốc Vận hành",
    stats: [
      { label: "Điểm triển khai", value: "120+" },
      { label: "Tỷ lệ tái chế", value: "65%" },
      { label: "ROI", value: "250%" },
    ],
    tags: ["Đa điểm", "Tái chế", "Dashboard"],
    featured: true,
  },
]

const customers = [
  {
    id: 4,
    name: "Formosa Hà Tĩnh",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Thép",
    location: "Hà Tĩnh",
    description: "Quản lý chất thải công nghiệp quy mô lớn từ sản xuất thép.",
  },
  {
    id: 5,
    name: "Bệnh viện Chợ Rẫy",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Y tế",
    location: "TP.HCM",
    description: "Xử lý chất thải y tế nguy hại cho bệnh viện lớn nhất phía Nam.",
  },
  {
    id: 6,
    name: "Coteccons",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Xây dựng",
    location: "TP.HCM",
    description: "Quản lý chất thải xây dựng tại các công trình lớn.",
  },
  {
    id: 7,
    name: "Nestlé Việt Nam",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Thực phẩm",
    location: "Đồng Nai",
    description: "Tối ưu quy trình tái chế bao bì và chất thải hữu cơ.",
  },
  {
    id: 8,
    name: "Hòa Phát",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Thép & Nông nghiệp",
    location: "Hải Dương",
    description: "Giải pháp toàn diện cho chất thải công nghiệp đa ngành.",
  },
  {
    id: 9,
    name: "VinFast",
    logo: "/placeholder.svg?height=60&width=150",
    industry: "Ô tô",
    location: "Hải Phòng",
    description: "Quản lý chất thải pin và vật liệu đặc thù ngành ô tô điện.",
  },
]

const industryStats = [
  { 
    icon: Factory, 
    label: "Sản xuất", 
    count: "150+", 
    color: "bg-blue-500" 
  },
  { 
    icon: Hospital, 
    label: "Y tế", 
    count: "80+", 
    color: "bg-red-500" 
  },
  { 
    icon: HardHat, 
    label: "Xây dựng", 
    count: "60+", 
    color: "bg-amber-500" 
  },
  { 
    icon: Utensils, 
    label: "F&B", 
    count: "90+", 
    color: "bg-emerald-500" 
  },
  { 
    icon: Building2, 
    label: "Bất động sản", 
    count: "70+", 
    color: "bg-purple-500" 
  },
]

const caseStudies = [
  {
    id: 1,
    title: "Samsung giảm 40% chi phí xử lý CTNH",
    description: "Tìm hiểu cách Samsung Electronics Việt Nam tối ưu hóa quy trình quản lý chất thải nguy hại với VNS.",
    image: "/placeholder.svg?height=300&width=500",
    industry: "Sản xuất",
    readTime: "8 phút đọc",
  },
  {
    id: 2,
    title: "Bệnh viện Bạch Mai số hóa quản lý CTYT",
    description: "Case study về việc chuyển đổi số quy trình quản lý chất thải y tế tại bệnh viện hàng đầu Việt Nam.",
    image: "/placeholder.svg?height=300&width=500",
    industry: "Y tế",
    readTime: "6 phút đọc",
  },
  {
    id: 3,
    title: "Vingroup đạt 65% tỷ lệ tái chế",
    description: "Chiến lược triển khai VNS tại 120+ điểm của Vingroup và kết quả ấn tượng.",
    image: "/placeholder.svg?height=300&width=500",
    industry: "Đa ngành",
    readTime: "10 phút đọc",
  },
]

export default function FeaturedCustomersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002B05] via-[#004D0A] to-[#006B10] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              500+ Doanh nghiệp tin dùng
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Khách hàng tiêu biểu
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 text-pretty">
              Các doanh nghiệp và tổ chức hàng đầu Việt Nam đã tin tưởng sử dụng VNS Xử lý rác 
              để tối ưu hóa quy trình quản lý chất thải và bảo vệ môi trường.
            </p>
            
            {/* Industry Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {industryStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
                  <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold">{stat.count}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Customers */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Câu chuyện thành công
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu cách các doanh nghiệp hàng đầu đã tối ưu hóa quy trình quản lý chất thải với VNS
            </p>
          </div>

          <div className="space-y-12">
            {featuredCustomers.map((customer, index) => (
              <Card key={customer.id} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Image 
                            src={customer.logo} 
                            alt={customer.name}
                            width={60}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{customer.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="text-xs">{customer.industry}</Badge>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {customer.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{customer.description}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {customer.stats.map((stat) => (
                          <div key={stat.label} className="text-center p-4 bg-[#00A86B]/5 rounded-lg">
                            <p className="text-2xl font-bold text-[#00A86B]">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {customer.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button className="bg-[#00A86B] hover:bg-[#009060]">
                        Xem chi tiết
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Testimonial Side */}
                    <div className={`bg-gradient-to-br from-[#00A86B] to-[#008055] p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Quote className="w-12 h-12 text-white/30 mb-6" />
                      <blockquote className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
                        &ldquo;{customer.testimonial}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">
                            {customer.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{customer.author}</p>
                          <p className="text-white/70 text-sm">{customer.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Customers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Được tin dùng bởi các doanh nghiệp hàng đầu
            </h2>
            <p className="text-muted-foreground">
              Hơn 500 doanh nghiệp đã lựa chọn VNS Xử lý rác
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer) => (
              <Card key={customer.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <Image 
                        src={customer.logo} 
                        alt={customer.name}
                        width={50}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-[#00A86B] transition-colors">
                        {customer.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="text-xs">{customer.industry}</Badge>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {customer.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{customer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Xem tất cả khách hàng
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Kết quả khách hàng đạt được
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những con số ấn tượng từ các doanh nghiệp sử dụng VNS Xử lý rác
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">35%</h3>
              <p className="text-muted-foreground">Giảm chi phí xử lý chất thải trung bình</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">60%</h3>
              <p className="text-muted-foreground">Tiết kiệm thời gian làm báo cáo</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">55%</h3>
              <p className="text-muted-foreground">Tăng tỷ lệ tái chế trung bình</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Tuân thủ quy định môi trường</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Case Studies
              </h2>
              <p className="text-muted-foreground">
                Đọc thêm về cách các doanh nghiệp triển khai thành công
              </p>
            </div>
            <Button variant="outline">
              Xem tất cả case studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-video bg-slate-100">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-foreground">
                    {study.industry}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-[#00A86B] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{study.readTime}</span>
                    <Link 
                      href="#" 
                      className="text-sm font-medium text-[#00A86B] hover:underline flex items-center gap-1"
                    >
                      Đọc thêm
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Khách hàng nói gì về VNS
            </h2>
            <p className="text-slate-400">
              Xem video chia sẻ từ các doanh nghiệp đã sử dụng giải pháp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative aspect-video rounded-xl overflow-hidden bg-slate-800 cursor-pointer">
                <Image 
                  src="/placeholder.svg?height=300&width=500"
                  alt={`Video testimonial ${i}`}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-slate-900 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">Khách hàng {i}</p>
                  <p className="text-white/70 text-sm">Chia sẻ trải nghiệm</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                4.9/5 điểm đánh giá
              </h2>
              <p className="text-muted-foreground">
                Từ hơn 500 khách hàng doanh nghiệp
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#00A86B] mb-2">98%</p>
                <p className="text-muted-foreground">Khách hàng hài lòng</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#00A86B] mb-2">95%</p>
                <p className="text-muted-foreground">Khách hàng giới thiệu</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#00A86B] mb-2">92%</p>
                <p className="text-muted-foreground">Tỷ lệ gia hạn hợp đồng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A86B] to-[#008055]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Tham gia cùng 500+ doanh nghiệp
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Bắt đầu hành trình chuyển đổi số quản lý chất thải với VNS ngay hôm nay. 
              Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn giải pháp phù hợp cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#00A86B] hover:bg-slate-100 font-semibold px-8">
                Đăng ký dùng thử miễn phí
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
