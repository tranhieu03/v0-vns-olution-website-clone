"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  Eye, 
  ChevronLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  CheckCircle2
} from "lucide-react"

const articles: Record<string, {
  id: string
  title: string
  excerpt: string
  category: string
  categoryId: string
  date: string
  readTime: string
  views: number
  content: {
    type: "paragraph" | "heading" | "list" | "quote" | "image"
    text?: string
    items?: string[]
  }[]
  tags: string[]
}> = {
  "5-xu-huong-chuyen-doi-so-2024": {
    id: "4",
    title: "5 xu hướng chuyển đổi số doanh nghiệp năm 2024",
    excerpt: "Khám phá những xu hướng công nghệ đang định hình tương lai của doanh nghiệp Việt Nam trong năm 2024.",
    category: "Xu hướng",
    categoryId: "trend",
    date: "02/04/2024",
    readTime: "6 phút đọc",
    views: 1520,
    content: [
      {
        type: "paragraph",
        text: "Chuyển đổi số không còn là xu hướng mà đã trở thành yêu cầu bắt buộc đối với mọi doanh nghiệp muốn tồn tại và phát triển trong thời đại công nghệ 4.0. Năm 2024 đánh dấu bước ngoặt quan trọng khi nhiều công nghệ mới được ứng dụng rộng rãi hơn."
      },
      {
        type: "heading",
        text: "1. Trí tuệ nhân tạo (AI) và Machine Learning"
      },
      {
        type: "paragraph",
        text: "AI không còn là khái niệm xa vời mà đã trở thành công cụ thiết thực trong quản lý doanh nghiệp. Từ chatbot hỗ trợ khách hàng, phân tích dữ liệu đến dự báo xu hướng thị trường, AI đang thay đổi cách doanh nghiệp vận hành."
      },
      {
        type: "list",
        items: [
          "Chatbot AI hỗ trợ khách hàng 24/7",
          "Phân tích dữ liệu tự động và đưa ra insights",
          "Dự báo nhu cầu và tối ưu tồn kho",
          "Cá nhân hóa trải nghiệm khách hàng"
        ]
      },
      {
        type: "heading",
        text: "2. Cloud Computing và Hybrid Cloud"
      },
      {
        type: "paragraph",
        text: "Mô hình hybrid cloud kết hợp giữa public cloud và private cloud đang được nhiều doanh nghiệp lựa chọn. Điều này giúp tối ưu chi phí trong khi vẫn đảm bảo tính bảo mật cho dữ liệu nhạy cảm."
      },
      {
        type: "quote",
        text: "Theo báo cáo của Gartner, 85% doanh nghiệp sẽ áp dụng mô hình cloud-first vào năm 2025."
      },
      {
        type: "heading",
        text: "3. Automation và RPA"
      },
      {
        type: "paragraph",
        text: "Robotic Process Automation (RPA) giúp tự động hóa các tác vụ lặp đi lặp lại, giảm thiểu sai sót do con người và tăng năng suất làm việc. Các phần mềm ERP hiện đại như VNSolution ERP đã tích hợp sẵn các tính năng automation."
      },
      {
        type: "heading",
        text: "4. Cybersecurity và Zero Trust"
      },
      {
        type: "paragraph",
        text: "Với sự gia tăng của các cuộc tấn công mạng, bảo mật không còn là tùy chọn mà là ưu tiên hàng đầu. Mô hình Zero Trust - không tin tưởng bất kỳ ai trong hoặc ngoài mạng - đang được áp dụng rộng rãi."
      },
      {
        type: "heading",
        text: "5. Data-Driven Decision Making"
      },
      {
        type: "paragraph",
        text: "Ra quyết định dựa trên dữ liệu thay vì cảm tính là xu hướng tất yếu. Các công cụ Business Intelligence (BI) và Data Analytics giúp doanh nghiệp hiểu rõ hơn về khách hàng, thị trường và nội bộ doanh nghiệp."
      },
      {
        type: "paragraph",
        text: "VNSolution cung cấp bộ giải pháp toàn diện giúp doanh nghiệp chuyển đổi số hiệu quả, từ ERP, CRM đến HRM và DMS. Liên hệ ngay để được tư vấn miễn phí!"
      }
    ],
    tags: ["Chuyển đổi số", "AI", "Cloud", "Automation", "Doanh nghiệp"]
  },
  "toi-uu-quy-trinh-quan-ly-kho-dms": {
    id: "5",
    title: "Cách tối ưu hóa quy trình quản lý kho với DMS",
    excerpt: "Hướng dẫn chi tiết sử dụng tính năng quản lý kho trong hệ thống DMS để tăng hiệu quả vận hành.",
    category: "Hướng dẫn",
    categoryId: "guide",
    date: "30/03/2024",
    readTime: "10 phút đọc",
    views: 890,
    content: [
      {
        type: "paragraph",
        text: "Quản lý kho hiệu quả là yếu tố then chốt để tối ưu chi phí vận hành và đảm bảo chuỗi cung ứng hoạt động trơn tru. Bài viết này sẽ hướng dẫn bạn cách sử dụng các tính năng quản lý kho trong hệ thống DMS của VNSolution."
      },
      {
        type: "heading",
        text: "Tổng quan về module Quản lý kho"
      },
      {
        type: "paragraph",
        text: "Module quản lý kho trong DMS được thiết kế để đáp ứng mọi nhu cầu từ quản lý tồn kho cơ bản đến các nghiệp vụ phức tạp như quản lý nhiều kho, theo dõi serial/lot number, và tích hợp với các hệ thống khác."
      },
      {
        type: "list",
        items: [
          "Quản lý nhập xuất kho theo thời gian thực",
          "Theo dõi tồn kho tối thiểu/tối đa",
          "Cảnh báo hàng sắp hết hạn",
          "Báo cáo tồn kho đa chiều",
          "Kiểm kê kho định kỳ"
        ]
      },
      {
        type: "heading",
        text: "Bước 1: Thiết lập danh mục kho"
      },
      {
        type: "paragraph",
        text: "Đầu tiên, bạn cần thiết lập cấu trúc kho bao gồm: kho chính, kho phụ, vị trí lưu trữ. Việc phân chia rõ ràng giúp dễ dàng tìm kiếm và quản lý hàng hóa."
      },
      {
        type: "heading",
        text: "Bước 2: Nhập liệu sản phẩm"
      },
      {
        type: "paragraph",
        text: "Đảm bảo thông tin sản phẩm được nhập đầy đủ: mã SKU, tên sản phẩm, đơn vị tính, tồn kho tối thiểu, vị trí lưu trữ mặc định."
      },
      {
        type: "heading",
        text: "Bước 3: Thiết lập quy trình xuất nhập kho"
      },
      {
        type: "paragraph",
        text: "Xây dựng quy trình chuẩn cho các nghiệp vụ: phiếu nhập kho, phiếu xuất kho, phiếu chuyển kho, phiếu kiểm kê. Mỗi quy trình có thể được phê duyệt tự động hoặc qua nhiều cấp."
      }
    ],
    tags: ["DMS", "Quản lý kho", "Hướng dẫn", "Tối ưu"]
  },
  "vnsolution-mo-rong-da-nang": {
    id: "6",
    title: "VNSolution mở rộng đội ngũ tại Đà Nẵng",
    excerpt: "Nhằm phục vụ tốt hơn khách hàng khu vực miền Trung, VNSolution chính thức khai trương văn phòng tại Đà Nẵng.",
    category: "Tin công ty",
    categoryId: "company",
    date: "28/03/2024",
    readTime: "4 phút đọc",
    views: 650,
    content: [
      {
        type: "paragraph",
        text: "VNSolution vui mừng thông báo chính thức khai trương văn phòng mới tại thành phố Đà Nẵng, đánh dấu bước phát triển quan trọng trong chiến lược mở rộng thị trường khu vực miền Trung - Tây Nguyên."
      },
      {
        type: "heading",
        text: "Cam kết phục vụ khách hàng miền Trung"
      },
      {
        type: "paragraph",
        text: "Với văn phòng mới tại Đà Nẵng, VNSolution cam kết mang đến dịch vụ hỗ trợ nhanh chóng và chuyên nghiệp hơn cho các doanh nghiệp trong khu vực. Đội ngũ tại đây bao gồm các chuyên gia tư vấn, triển khai và hỗ trợ kỹ thuật giàu kinh nghiệm."
      },
      {
        type: "quote",
        text: "Đây là bước đi chiến lược của VNSolution nhằm rút ngắn khoảng cách địa lý, mang đến trải nghiệm dịch vụ tốt nhất cho khách hàng miền Trung - CEO VNSolution"
      },
      {
        type: "heading",
        text: "Địa chỉ văn phòng mới"
      },
      {
        type: "paragraph",
        text: "Văn phòng Đà Nẵng: Tầng 15, Tòa nhà ABC Tower, 123 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng. Hotline: 1900 1234 (ext 2)"
      }
    ],
    tags: ["Tin công ty", "Đà Nẵng", "Mở rộng"]
  }
}

const categoryColors: Record<string, string> = {
  "Sản phẩm": "bg-primary/10 text-primary border-primary/20",
  "Hướng dẫn": "bg-accent/10 text-accent border-accent/20",
  "Tin công ty": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Xu hướng": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function ArticleDetail({ slug }: { slug: string }) {
  const article = articles[slug] || articles["5-xu-huong-chuyen-doi-so-2024"]

  return (
    <article className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/tin-tuc" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Quay lại trang tin tức
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className={categoryColors[article.category]}>
                {article.category}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {article.views.toLocaleString()} lượt xem
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {block.text}
                    </p>
                  )
                case "heading":
                  return (
                    <h2 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                      {block.text}
                    </h2>
                  )
                case "list":
                  return (
                    <ul key={index} className="space-y-2 mb-6 ml-1">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                case "quote":
                  return (
                    <blockquote key={index} className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-lg">
                      <p className="text-foreground italic">{block.text}</p>
                    </blockquote>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Tags:</span>
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-secondary/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 p-6 rounded-2xl bg-secondary/30 border border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-medium text-foreground">Chia sẻ bài viết:</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Link2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
