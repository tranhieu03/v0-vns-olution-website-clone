"use client"

import { use } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Banknote, 
  Calendar,
  Users,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Heart,
  Building2,
  Send,
  Code,
  Palette,
  LineChart,
  Headphones
} from "lucide-react"

// Mock job data
const jobsData: Record<string, {
  id: number
  title: string
  department: string
  departmentLabel: string
  location: string
  type: string
  salary: string
  icon: React.ElementType
  urgent: boolean
  deadline: string
  experience: string
  education: string
  quantity: number
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  skills: string[]
}> = {
  "1": {
    id: 1,
    title: "Senior Backend Developer (NodeJS/Python)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 40 triệu",
    icon: Code,
    urgent: true,
    deadline: "30/05/2024",
    experience: "3 - 5 năm",
    education: "Đại học",
    quantity: 2,
    description: "VNSolution đang tìm kiếm Senior Backend Developer có kinh nghiệm với NodeJS/Python để tham gia phát triển các sản phẩm phần mềm doanh nghiệp. Bạn sẽ làm việc trong một đội ngũ năng động, sáng tạo và có cơ hội tiếp cận các công nghệ mới nhất.",
    responsibilities: [
      "Thiết kế và phát triển các API RESTful, GraphQL cho hệ thống ERP/CRM",
      "Xây dựng kiến trúc microservices có khả năng mở rộng cao",
      "Tối ưu hóa hiệu suất database và query performance",
      "Code review và mentor cho các thành viên junior trong team",
      "Tham gia vào việc đưa ra quyết định kỹ thuật cho dự án",
      "Viết unit test, integration test đảm bảo chất lượng code",
      "Làm việc với team DevOps để triển khai và monitoring hệ thống"
    ],
    requirements: [
      "Có ít nhất 3 năm kinh nghiệm với NodeJS hoặc Python",
      "Thành thạo PostgreSQL, MongoDB và Redis",
      "Hiểu biết sâu về RESTful API design và microservices architecture",
      "Có kinh nghiệm với Docker, Kubernetes là một lợi thế",
      "Khả năng làm việc độc lập và teamwork tốt",
      "Có tư duy logic, khả năng giải quyết vấn đề phức tạp",
      "Tiếng Anh đọc hiểu tài liệu kỹ thuật tốt"
    ],
    benefits: [
      "Mức lương cạnh tranh 25 - 40 triệu + bonus theo hiệu suất",
      "13 tháng lương + thưởng các dịp lễ, Tết",
      "Review lương 2 lần/năm",
      "Bảo hiểm sức khỏe cao cấp cho bản thân và gia đình",
      "15 ngày phép năm + ngày phép sinh nhật",
      "Đào tạo và hỗ trợ học tập: courses, certifications",
      "Môi trường làm việc linh hoạt, hybrid working",
      "Team building hàng quý, du lịch công ty hàng năm",
      "Laptop và thiết bị làm việc chất lượng cao"
    ],
    skills: ["NodeJS", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "GraphQL", "REST API"]
  },
  "2": {
    id: 2,
    title: "Frontend Developer (ReactJS)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội / Remote",
    type: "Full-time",
    salary: "18 - 30 triệu",
    icon: Code,
    urgent: false,
    deadline: "15/06/2024",
    experience: "2 - 4 năm",
    education: "Đại học / Cao đẳng",
    quantity: 3,
    description: "Chúng tôi đang tìm kiếm Frontend Developer có đam mê với ReactJS để xây dựng các giao diện người dùng hiện đại, responsive và mang lại trải nghiệm tuyệt vời cho khách hàng.",
    responsibilities: [
      "Phát triển giao diện web với ReactJS/NextJS",
      "Xây dựng UI components tái sử dụng và có tính mở rộng",
      "Tích hợp API RESTful và GraphQL",
      "Đảm bảo responsive design và cross-browser compatibility",
      "Tối ưu performance và accessibility",
      "Phối hợp với team design để implement UI/UX"
    ],
    requirements: [
      "2+ năm kinh nghiệm với ReactJS",
      "Thành thạo HTML5, CSS3, JavaScript/TypeScript",
      "Có kinh nghiệm với NextJS là một lợi thế",
      "Hiểu biết về state management (Redux, Zustand)",
      "Có kinh nghiệm với TailwindCSS hoặc Styled Components",
      "Khả năng làm việc nhóm và giao tiếp tốt"
    ],
    benefits: [
      "Mức lương 18 - 30 triệu + bonus",
      "13 tháng lương + thưởng lễ Tết",
      "Được làm việc remote 2-3 ngày/tuần",
      "Bảo hiểm sức khỏe cho bản thân",
      "12 ngày phép năm",
      "Đào tạo nâng cao kỹ năng",
      "Môi trường làm việc trẻ trung, năng động"
    ],
    skills: ["ReactJS", "NextJS", "TypeScript", "TailwindCSS", "Redux", "GraphQL"]
  },
  "5": {
    id: 5,
    title: "UI/UX Designer",
    department: "design",
    departmentLabel: "Thiết kế",
    location: "Hà Nội",
    type: "Full-time",
    salary: "15 - 25 triệu",
    icon: Palette,
    urgent: false,
    deadline: "20/06/2024",
    experience: "2 - 3 năm",
    education: "Đại học",
    quantity: 1,
    description: "VNSolution tìm kiếm UI/UX Designer sáng tạo để thiết kế giao diện người dùng cho các sản phẩm phần mềm doanh nghiệp.",
    responsibilities: [
      "Thiết kế UI/UX cho web và mobile applications",
      "Tạo wireframes, prototypes và mockups",
      "Nghiên cứu user và phân tích UX",
      "Xây dựng và duy trì design system",
      "Phối hợp với team development để implement design"
    ],
    requirements: [
      "2+ năm kinh nghiệm UI/UX Design",
      "Thành thạo Figma hoặc Adobe XD",
      "Có portfolio chứng minh năng lực",
      "Hiểu biết về design principles và UX best practices",
      "Có khả năng làm việc nhóm tốt"
    ],
    benefits: [
      "Mức lương 15 - 25 triệu",
      "13 tháng lương",
      "Bảo hiểm sức khỏe",
      "Môi trường sáng tạo, tự do đề xuất ý tưởng"
    ],
    skills: ["Figma", "Adobe XD", "Prototyping", "Design System", "User Research"]
  }
}

// Similar jobs data
const similarJobs = [
  {
    id: "3",
    title: "DevOps Engineer",
    location: "Hà Nội",
    salary: "25 - 45 triệu",
    type: "Full-time"
  },
  {
    id: "4",
    title: "Mobile Developer (React Native)",
    location: "Hồ Chí Minh",
    salary: "20 - 35 triệu",
    type: "Full-time"
  }
]

const departmentColors: Record<string, string> = {
  "Kỹ thuật": "bg-primary/10 text-primary border-primary/20",
  "Thiết kế": "bg-accent/10 text-accent border-accent/20",
  "Kinh doanh": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Hỗ trợ": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const job = jobsData[id]
  
  // Fallback to default job if not found
  const displayJob = job || jobsData["1"]
  const IconComponent = displayJob.icon

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
              <span className="text-muted-foreground">/</span>
              <Link href="/tuyen-dung" className="text-muted-foreground hover:text-primary transition-colors">
                Tuyển dụng
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium truncate max-w-[200px] lg:max-w-none">
                {displayJob.title}
              </span>
            </div>
          </div>
        </div>

        {/* Job Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 lg:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Link 
              href="/tuyen-dung" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại danh sách
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className={`text-xs ${departmentColors[displayJob.departmentLabel]}`}>
                      {displayJob.departmentLabel}
                    </Badge>
                    {displayJob.urgent && (
                      <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                        Tuyển gấp
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {displayJob.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {displayJob.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {displayJob.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Banknote className="h-4 w-4" />
                      {displayJob.salary}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Hạn nộp: {displayJob.deadline}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <Button variant="outline" size="lg" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Lưu tin
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Chia sẻ
                </Button>
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                  Ứng tuyển ngay
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Kinh nghiệm</p>
                        <p className="font-semibold text-foreground">{displayJob.experience}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Học vấn</p>
                        <p className="font-semibold text-foreground">{displayJob.education}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Số lượng</p>
                        <p className="font-semibold text-foreground">{displayJob.quantity} người</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Hình thức</p>
                        <p className="font-semibold text-foreground">{displayJob.type}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4">Mô tả công việc</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {displayJob.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4">Trách nhiệm công việc</h2>
                  <ul className="space-y-3">
                    {displayJob.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4">Yêu cầu ứng viên</h2>
                  <ul className="space-y-3">
                    {displayJob.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4">Quyền lợi được hưởng</h2>
                  <ul className="space-y-3">
                    {displayJob.benefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-4">Kỹ năng yêu cầu</h2>
                  <div className="flex flex-wrap gap-2">
                    {displayJob.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-secondary/50 text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Info */}
                <div className="p-6 rounded-xl bg-card border border-border sticky top-24">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">VNSolution</h3>
                      <p className="text-sm text-muted-foreground">Công nghệ thông tin</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Quy mô:</span>
                      <span className="font-medium text-foreground">100 - 200 nhân viên</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Địa chỉ:</span>
                      <span className="font-medium text-foreground">Hà Nội, Việt Nam</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Website:</span>
                      <Link href="/" className="font-medium text-primary hover:underline">
                        vnsolution.vn
                      </Link>
                    </div>
                  </div>

                  <Button className="w-full gap-2 bg-primary hover:bg-primary/90" size="lg">
                    <Send className="h-4 w-4" />
                    Ứng tuyển ngay
                  </Button>
                </div>

                {/* Similar Jobs */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-foreground mb-4">Việc làm tương tự</h3>
                  <div className="space-y-4">
                    {similarJobs.map((sjob) => (
                      <Link
                        key={sjob.id}
                        href={`/tuyen-dung/${sjob.id}`}
                        className="block p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <h4 className="font-medium text-foreground text-sm mb-2">{sjob.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {sjob.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Banknote className="h-3 w-3" />
                            {sjob.salary}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Bạn phù hợp với vị trí này?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Gửi CV ngay hôm nay để không bỏ lỡ cơ hội gia nhập đội ngũ VNSolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 font-medium">
                <Send className="h-4 w-4" />
                Ứng tuyển ngay
              </Button>
              <Button size="lg" variant="outline" className="gap-2 font-medium bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                <Heart className="h-4 w-4" />
                Lưu tin này
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
