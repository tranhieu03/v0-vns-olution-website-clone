"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronRight,
  Tag,
  MessageCircle,
  ThumbsUp,
  Bookmark
} from "lucide-react"

// Mock article data
const articlesData: Record<string, {
  id: string
  title: string
  excerpt: string
  content: string[]
  category: string
  categoryId: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
    avatar: string
  }
  tags: string[]
  slug: string
}> = {
  "5-xu-huong-chuyen-doi-so-2024": {
    id: "4",
    title: "5 xu hướng chuyển đổi số doanh nghiệp năm 2024",
    excerpt: "Khám phá những xu hướng công nghệ đang định hình tương lai của doanh nghiệp Việt Nam trong năm 2024.",
    content: [
      "Chuyển đổi số không còn là lựa chọn mà đã trở thành yêu cầu bắt buộc để doanh nghiệp tồn tại và phát triển trong thời đại công nghệ 4.0. Năm 2024 đánh dấu sự bùng nổ của nhiều xu hướng công nghệ mới, tạo ra cả cơ hội lẫn thách thức cho các doanh nghiệp Việt Nam.",
      "## 1. Trí tuệ nhân tạo (AI) và Machine Learning",
      "AI đang được ứng dụng rộng rãi trong mọi lĩnh vực từ dịch vụ khách hàng với chatbot thông minh, phân tích dữ liệu kinh doanh, đến tự động hóa quy trình sản xuất. Các doanh nghiệp đầu tư vào AI sớm sẽ có lợi thế cạnh tranh đáng kể.",
      "Theo nghiên cứu của McKinsey, các công ty áp dụng AI có thể tăng hiệu suất lên đến 40% và giảm chi phí vận hành từ 20-30%. Đặc biệt trong lĩnh vực quản lý chất thải, AI giúp tối ưu hóa tuyến đường thu gom, dự báo khối lượng rác thải và cải thiện quy trình phân loại.",
      "## 2. Cloud Computing và Hybrid Infrastructure",
      "Điện toán đám mây tiếp tục là xu hướng chủ đạo với sự chuyển dịch mạnh mẽ từ on-premise sang cloud và hybrid cloud. Điều này giúp doanh nghiệp giảm chi phí đầu tư ban đầu, tăng tính linh hoạt và khả năng mở rộng.",
      "Các nền tảng ERP, CRM hiện đại đều được xây dựng trên nền tảng cloud, cho phép truy cập mọi lúc mọi nơi và đảm bảo tính bảo mật cao. VNSolution cung cấp các giải pháp cloud-native giúp doanh nghiệp dễ dàng triển khai và vận hành.",
      "## 3. Low-Code/No-Code Development",
      "Xu hướng phát triển ứng dụng không cần code hoặc ít code đang giúp các doanh nghiệp nhanh chóng số hóa quy trình mà không cần đội ngũ IT lớn. Các nền tảng low-code cho phép người dùng nghiệp vụ tự tạo ứng dụng phù hợp với nhu cầu.",
      "Điều này đặc biệt hữu ích cho SME với nguồn lực hạn chế, giúp họ nhanh chóng ứng dụng công nghệ vào quản lý kinh doanh, từ CRM đơn giản đến workflow automation phức tạp.",
      "## 4. Cybersecurity và Data Privacy",
      "Với sự gia tăng của các mối đe dọa an ninh mạng, đầu tư vào bảo mật không còn là tùy chọn. Các quy định về bảo vệ dữ liệu cá nhân ngày càng nghiêm ngặt đòi hỏi doanh nghiệp phải có chiến lược bảo mật toàn diện.",
      "Zero Trust Architecture, Multi-Factor Authentication và Endpoint Detection & Response là các giải pháp bảo mật được áp dụng rộng rãi. Doanh nghiệp cần đầu tư cả về công nghệ lẫn đào tạo nhận thức cho nhân viên.",
      "## 5. Sustainability và Green Tech",
      "Xu hướng phát triển bền vững không chỉ là trách nhiệm xã hội mà còn là yếu tố cạnh tranh. Các giải pháp công nghệ xanh giúp doanh nghiệp giảm thiểu tác động môi trường, tối ưu hóa sử dụng năng lượng và quản lý chất thải hiệu quả.",
      "VNSolution với giải pháp Quản lý Chất thải thông minh đang góp phần vào xu hướng này, giúp các doanh nghiệp và địa phương số hóa toàn bộ quy trình thu gom, vận chuyển và xử lý rác thải, hướng tới nền kinh tế tuần hoàn.",
      "## Kết luận",
      "Năm 2024 là thời điểm vàng để doanh nghiệp Việt Nam đẩy mạnh chuyển đổi số. Với sự hỗ trợ của các giải pháp công nghệ hiện đại và đội ngũ tư vấn chuyên nghiệp từ VNSolution, quá trình này sẽ trở nên đơn giản và hiệu quả hơn bao giờ hết."
    ],
    category: "Xu hướng",
    categoryId: "trend",
    date: "02/04/2024",
    readTime: "6 phút đọc",
    author: {
      name: "Nguyễn Văn An",
      role: "Tech Lead",
      avatar: "/avatars/author-1.jpg"
    },
    tags: ["Chuyển đổi số", "AI", "Cloud", "Bảo mật", "Công nghệ xanh"],
    slug: "5-xu-huong-chuyen-doi-so-2024"
  },
  "toi-uu-quy-trinh-quan-ly-kho-dms": {
    id: "5",
    title: "Cách tối ưu hóa quy trình quản lý kho với DMS",
    excerpt: "Hướng dẫn chi tiết sử dụng tính năng quản lý kho trong hệ thống DMS để tăng hiệu quả vận hành.",
    content: [
      "Quản lý kho hiệu quả là yếu tố then chốt quyết định sự thành công của doanh nghiệp phân phối. Hệ thống DMS (Distribution Management System) của VNSolution cung cấp bộ công cụ toàn diện giúp tối ưu hóa mọi khâu trong quản lý kho.",
      "## Tại sao cần DMS cho quản lý kho?",
      "Trước đây, nhiều doanh nghiệp vẫn quản lý kho bằng Excel hoặc sổ sách thủ công, dẫn đến nhiều vấn đề: sai sót số liệu, khó kiểm soát tồn kho real-time, mất thời gian kiểm kê và khó truy xuất nguồn gốc hàng hóa.",
      "DMS giải quyết triệt để các vấn đề trên với hệ thống số hóa hoàn toàn, cho phép theo dõi hàng hóa từ khi nhập kho đến khi xuất bán, đảm bảo độ chính xác tuyệt đối.",
      "## Các tính năng quản lý kho trong DMS",
      "**Quản lý nhập kho thông minh**: Hỗ trợ nhập kho bằng barcode/QR code, tự động cập nhật số lượng tồn, cảnh báo hàng sắp hết hạn và kiểm tra chất lượng đầu vào.",
      "**Quản lý xuất kho linh hoạt**: Xuất kho theo đơn hàng, xuất nội bộ, xuất trả hàng với quy trình phê duyệt đa cấp. Áp dụng FIFO/LIFO tự động.",
      "**Kiểm kê tự động**: Tính năng kiểm kê định kỳ với hỗ trợ thiết bị cầm tay, so sánh chênh lệch và tạo báo cáo tự động.",
      "**Quản lý vị trí kho**: Phân chia kho theo zone, rack, bin giúp tối ưu không gian và tăng tốc độ picking.",
      "## Hướng dẫn thiết lập ban đầu",
      "Bước 1: Thiết lập cấu trúc kho trong hệ thống - phân chia theo khu vực, loại hàng hóa.",
      "Bước 2: Import danh mục sản phẩm với đầy đủ thông tin: mã vạch, đơn vị tính, giá nhập/xuất, hạn sử dụng.",
      "Bước 3: Cấu hình quy trình phê duyệt nhập/xuất kho phù hợp với quy mô doanh nghiệp.",
      "Bước 4: Đào tạo nhân viên kho sử dụng app mobile để thao tác nhanh chóng.",
      "## Mẹo tối ưu hiệu suất",
      "- Sử dụng tính năng Auto-reorder để tự động đặt hàng khi tồn kho thấp",
      "- Áp dụng ABC Analysis để phân loại và ưu tiên quản lý hàng hóa quan trọng",
      "- Thiết lập cảnh báo tồn kho tối thiểu/tối đa để tránh thiếu hàng hoặc ứ đọng vốn",
      "- Tích hợp với module bán hàng để đồng bộ dữ liệu real-time"
    ],
    category: "Hướng dẫn",
    categoryId: "guide",
    date: "30/03/2024",
    readTime: "10 phút đọc",
    author: {
      name: "Trần Minh Đức",
      role: "Product Manager",
      avatar: "/avatars/author-2.jpg"
    },
    tags: ["DMS", "Quản lý kho", "Hướng dẫn", "Phân phối"],
    slug: "toi-uu-quy-trinh-quan-ly-kho-dms"
  }
}

// Related articles
const relatedArticles = [
  {
    id: "6",
    title: "VNSolution mở rộng đội ngũ tại Đà Nẵng",
    category: "Tin công ty",
    date: "28/03/2024",
    slug: "vnsolution-mo-rong-da-nang"
  },
  {
    id: "7",
    title: "Cập nhật tính năng mới: Dashboard Analytics",
    category: "Sản phẩm",
    date: "25/03/2024",
    slug: "cap-nhat-dashboard-analytics"
  },
  {
    id: "8",
    title: "Hội thảo: Ứng dụng AI trong quản lý nhân sự",
    category: "Tin công ty",
    date: "22/03/2024",
    slug: "hoi-thao-ai-quan-ly-nhan-su"
  }
]

const categoryColors: Record<string, string> = {
  "Sản phẩm": "bg-primary/10 text-primary border-primary/20",
  "Hướng dẫn": "bg-accent/10 text-accent border-accent/20",
  "Tin công ty": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Xu hướng": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

// Default article for fallback
const defaultArticle = articlesData["5-xu-huong-chuyen-doi-so-2024"]

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const article = articlesData[slug] || defaultArticle

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link href="/tin-tuc" className="text-muted-foreground hover:text-primary transition-colors">
                Tin tức
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium truncate max-w-[200px] lg:max-w-[400px]">
                {article.title}
              </span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <Link 
              href="/tin-tuc" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại tin tức
            </Link>

            <div className="max-w-4xl">
              <Badge variant="outline" className={`mb-4 ${categoryColors[article.category]}`}>
                {article.category}
              </Badge>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-foreground mb-6 leading-tight text-balance">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{article.author.name}</p>
                    <p className="text-sm text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center mb-8 overflow-hidden">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Article Body */}
                <article className="prose prose-lg max-w-none">
                  {article.content.map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-xl lg:text-2xl font-bold text-foreground mt-8 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      )
                    }
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <p key={index} className="font-semibold text-foreground">
                          {paragraph.replace(/\*\*/g, "")}
                        </p>
                      )
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <li key={index} className="text-muted-foreground ml-4">
                          {paragraph.replace("- ", "")}
                        </li>
                      )
                    }
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    )
                  })}
                </article>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-secondary/50 hover:bg-secondary cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Share */}
                <div className="mt-8 p-6 rounded-xl bg-secondary/30 border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        Hữu ích
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Bookmark className="h-4 w-4" />
                        Lưu bài
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground mr-2">Chia sẻ:</span>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{article.author.name}</h3>
                      <p className="text-sm text-primary mb-2">{article.author.role}</p>
                      <p className="text-sm text-muted-foreground">
                        Chuyên gia công nghệ với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm doanh nghiệp. 
                        Đam mê chia sẻ kiến thức và giúp doanh nghiệp chuyển đổi số thành công.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Table of Contents */}
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-bold text-foreground mb-4">Mục lục</h3>
                    <nav className="space-y-2">
                      {article.content
                        .filter(p => p.startsWith("## "))
                        .map((heading, index) => (
                          <a 
                            key={index}
                            href={`#section-${index}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {heading.replace("## ", "")}
                          </a>
                        ))
                      }
                    </nav>
                  </div>

                  {/* Related Articles */}
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-bold text-foreground mb-4">Bài viết liên quan</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.id}
                          href={`/tin-tuc/${relatedArticle.slug}`}
                          className="block group"
                        >
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                            {relatedArticle.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="outline" className={`text-xs ${categoryColors[relatedArticle.category]}`}>
                              {relatedArticle.category}
                            </Badge>
                            <span>{relatedArticle.date}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border">
                    <h3 className="font-bold text-foreground mb-2">Nhận bản tin</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Đăng ký để nhận những bài viết mới nhất
                    </p>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <Button className="w-full" size="sm">
                        Đăng ký
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Xem thêm bài viết</h2>
              <Link href="/tin-tuc">
                <Button variant="outline" className="gap-2">
                  Tất cả bài viết
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.id}
                  href={`/tin-tuc/${article.slug}`}
                  className="group flex flex-col rounded-xl bg-card border border-border overflow-hidden hover-lift"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className={`text-xs mb-3 ${categoryColors[article.category]}`}>
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
