"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  Banknote, 
  Calendar,
  Users,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  Share2,
  Heart,
  CheckCircle2
} from "lucide-react"

const jobs: Record<string, {
  id: number
  title: string
  department: string
  departmentLabel: string
  location: string
  type: string
  salary: string
  experience: string
  education: string
  deadline: string
  quantity: number
  urgent: boolean
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
    experience: "3-5 năm",
    education: "Đại học",
    deadline: "30/05/2024",
    quantity: 2,
    urgent: true,
    description: "Chúng tôi đang tìm kiếm Senior Backend Developer có kinh nghiệm với NodeJS và Python để tham gia phát triển các sản phẩm ERP, CRM cho doanh nghiệp. Bạn sẽ làm việc trong môi trường năng động, được tiếp xúc với công nghệ mới và có cơ hội phát triển sự nghiệp.",
    responsibilities: [
      "Thiết kế và phát triển API RESTful cho các hệ thống enterprise",
      "Tối ưu hóa hiệu suất database và query phức tạp",
      "Review code và hướng dẫn các thành viên junior",
      "Tham gia thiết kế kiến trúc hệ thống microservices",
      "Viết unit test và integration test đảm bảo chất lượng code",
      "Phối hợp với team Frontend và DevOps để triển khai sản phẩm",
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành CNTT hoặc tương đương",
      "Có ít nhất 3 năm kinh nghiệm với NodeJS hoặc Python",
      "Thành thạo SQL và NoSQL databases (PostgreSQL, MongoDB, Redis)",
      "Hiểu biết về microservices, Docker, Kubernetes",
      "Kinh nghiệm với message queue (RabbitMQ, Kafka)",
      "Khả năng làm việc nhóm và giao tiếp tốt",
    ],
    benefits: [
      "Mức lương cạnh tranh, review 2 lần/năm",
      "Thưởng tháng 13 + thưởng hiệu suất",
      "Bảo hiểm sức khỏe cho bản thân và gia đình",
      "Laptop và thiết bị làm việc cao cấp",
      "Môi trường làm việc linh hoạt, hỗ trợ remote",
      "Du lịch công ty hàng năm",
      "Cơ hội training và phát triển nghề nghiệp",
    ],
    skills: ["NodeJS", "Python", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Redis", "RabbitMQ"],
  },
  "2": {
    id: 2,
    title: "Frontend Developer (ReactJS)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội / Remote",
    type: "Full-time",
    salary: "18 - 30 triệu",
    experience: "2-4 năm",
    education: "Đại học",
    deadline: "15/05/2024",
    quantity: 3,
    urgent: false,
    description: "Tham gia phát triển giao diện người dùng cho các sản phẩm phần mềm doanh nghiệp sử dụng ReactJS và NextJS. Bạn sẽ làm việc với design system hiện đại và có cơ hội đóng góp vào các dự án lớn.",
    responsibilities: [
      "Phát triển UI/UX cho các ứng dụng web sử dụng ReactJS/NextJS",
      "Xây dựng và maintain design system, component library",
      "Tối ưu hiệu suất ứng dụng và trải nghiệm người dùng",
      "Làm việc chặt chẽ với team Design và Backend",
      "Viết test và documentation cho code",
      "Tham gia code review và chia sẻ kiến thức",
    ],
    requirements: [
      "2+ năm kinh nghiệm với ReactJS",
      "Thành thạo TypeScript, HTML5, CSS3",
      "Kinh nghiệm với NextJS, Redux/Zustand",
      "Hiểu biết về responsive design và accessibility",
      "Kinh nghiệm với REST API và GraphQL",
      "Có khả năng làm việc độc lập và teamwork",
    ],
    benefits: [
      "Mức lương cạnh tranh theo năng lực",
      "Thưởng tháng 13 + bonus dự án",
      "Bảo hiểm sức khỏe premium",
      "Hỗ trợ làm việc remote linh hoạt",
      "Ngân sách học tập và phát triển",
      "Team building và du lịch hàng năm",
    ],
    skills: ["ReactJS", "NextJS", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  "3": {
    id: 3,
    title: "DevOps Engineer",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 45 triệu",
    experience: "3-5 năm",
    education: "Đại học",
    deadline: "20/05/2024",
    quantity: 1,
    urgent: true,
    description: "Quản lý hạ tầng cloud và CI/CD pipeline cho các sản phẩm của công ty. Đảm bảo hệ thống hoạt động ổn định, bảo mật và có khả năng mở rộng.",
    responsibilities: [
      "Xây dựng và duy trì CI/CD pipelines",
      "Quản lý hạ tầng cloud (AWS/GCP/Azure)",
      "Triển khai và quản lý Kubernetes clusters",
      "Monitoring, logging và alerting systems",
      "Đảm bảo security và compliance",
      "Tối ưu chi phí và hiệu suất hạ tầng",
    ],
    requirements: [
      "3+ năm kinh nghiệm DevOps/SRE",
      "Thành thạo Docker, Kubernetes, Terraform",
      "Kinh nghiệm với AWS hoặc GCP",
      "Hiểu biết về CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
      "Scripting skills (Bash, Python)",
      "Kiến thức về security best practices",
    ],
    benefits: [
      "Lương cao cạnh tranh thị trường",
      "Chứng chỉ cloud được tài trợ",
      "Môi trường làm việc chuyên nghiệp",
      "Cơ hội học hỏi công nghệ mới",
      "Bảo hiểm và phúc lợi đầy đủ",
      "Work-life balance tốt",
    ],
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Linux", "Python"],
  },
  "5": {
    id: 5,
    title: "UI/UX Designer",
    department: "design",
    departmentLabel: "Thiết kế",
    location: "Hà Nội",
    type: "Full-time",
    salary: "15 - 25 triệu",
    experience: "2-3 năm",
    education: "Đại học",
    deadline: "25/05/2024",
    quantity: 2,
    urgent: false,
    description: "Thiết kế giao diện và trải nghiệm người dùng cho các sản phẩm phần mềm doanh nghiệp. Tham gia vào toàn bộ quy trình design từ research đến delivery.",
    responsibilities: [
      "Thiết kế UI/UX cho web và mobile applications",
      "Thực hiện user research và usability testing",
      "Xây dựng và maintain design system",
      "Tạo wireframes, mockups và prototypes",
      "Phối hợp với developers để implement design",
      "Tham gia brainstorm và ideation sessions",
    ],
    requirements: [
      "2+ năm kinh nghiệm UI/UX Design",
      "Thành thạo Figma, Adobe XD",
      "Portfolio thể hiện quá trình design thinking",
      "Hiểu biết về accessibility và responsive design",
      "Có khả năng làm việc với developers",
      "Kỹ năng communication tốt",
    ],
    benefits: [
      "Mức lương theo năng lực",
      "Licence các tools design",
      "Tham gia các hội thảo design",
      "Môi trường sáng tạo",
      "Phúc lợi đầy đủ",
      "Flexible working",
    ],
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design System"],
  },
  "7": {
    id: 7,
    title: "Business Development Manager",
    department: "business",
    departmentLabel: "Kinh doanh",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 50 triệu",
    experience: "5+ năm",
    education: "Đại học",
    deadline: "30/05/2024",
    quantity: 1,
    urgent: false,
    description: "Phát triển kinh doanh và mở rộng thị trường cho các sản phẩm phần mềm doanh nghiệp. Xây dựng và duy trì mối quan hệ với khách hàng chiến lược.",
    responsibilities: [
      "Phát triển chiến lược kinh doanh và mở rộng thị trường",
      "Xây dựng và duy trì quan hệ với khách hàng enterprise",
      "Quản lý pipeline và đạt mục tiêu doanh số",
      "Làm việc với team Product để phát triển solutions",
      "Tham gia các sự kiện và hội thảo ngành",
      "Báo cáo và phân tích kết quả kinh doanh",
    ],
    requirements: [
      "5+ năm kinh nghiệm Business Development",
      "Có network trong lĩnh vực enterprise software",
      "Kỹ năng đàm phán và presentation xuất sắc",
      "Hiểu biết về các giải pháp ERP, CRM",
      "Tiếng Anh giao tiếp tốt",
      "Có khả năng làm việc dưới áp lực",
    ],
    benefits: [
      "Lương cứng + commission hấp dẫn",
      "Xe công ty hoặc phụ cấp di chuyển",
      "Điện thoại và laptop cao cấp",
      "Cơ hội phát triển lên vị trí Director",
      "Bảo hiểm premium cho gia đình",
      "Du lịch nước ngoài hàng năm",
    ],
    skills: ["B2B Sales", "Enterprise Software", "Negotiation", "CRM", "Strategic Planning"],
  },
}

const departmentColors: Record<string, string> = {
  "Kỹ thuật": "bg-primary/10 text-primary border-primary/20",
  "Thiết kế": "bg-accent/10 text-accent border-accent/20",
  "Kinh doanh": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Hỗ trợ": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function JobDetail({ jobId }: { jobId: string }) {
  const job = jobs[jobId] || jobs["1"]

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/tuyen-dung" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Quay lại danh sách tuyển dụng
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className={departmentColors[job.departmentLabel]}>
                      {job.departmentLabel}
                    </Badge>
                    {job.urgent && (
                      <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                        Tuyển gấp
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Banknote className="h-4 w-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Kinh nghiệm</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {job.experience}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Học vấn</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    {job.education}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Số lượng</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    {job.quantity} người
                  </span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Hạn nộp</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    <Calendar className="h-4 w-4 text-primary" />
                    {job.deadline}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Mô tả công việc</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Trách nhiệm công việc</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Yêu cầu ứng viên</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quyền lợi</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="p-6 rounded-2xl bg-card border border-border sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ứng tuyển ngay</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Gửi CV của bạn để ứng tuyển vị trí này. Chúng tôi sẽ liên hệ trong vòng 3-5 ngày làm việc.
              </p>
              <Button className="w-full mb-3" size="lg">
                Ứng tuyển vị trí này
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Gửi CV qua email
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Hoặc gửi CV tới: <a href="mailto:hr@vnsolution.vn" className="text-primary hover:underline">hr@vnsolution.vn</a>
              </p>
            </div>

            {/* Skills */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Kỹ năng yêu cầu</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <h3 className="text-lg font-semibold text-foreground mb-2">Liên hệ HR</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Có thắc mắc về vị trí này? Liên hệ phòng nhân sự.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> hr@vnsolution.vn</p>
                <p><strong>Hotline:</strong> 1900 1234</p>
                <p><strong>Giờ làm việc:</strong> 8:00 - 17:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
