"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  Banknote, 
  ArrowRight,
  Code,
  Palette,
  LineChart,
  Headphones
} from "lucide-react"

const departments = [
  { id: "all", label: "Tất cả", count: 20 },
  { id: "engineering", label: "Kỹ thuật", count: 10 },
  { id: "design", label: "Thiết kế", count: 3 },
  { id: "business", label: "Kinh doanh", count: 5 },
  { id: "support", label: "Hỗ trợ", count: 2 },
]

const jobs = [
  {
    id: 1,
    title: "Senior Backend Developer (NodeJS/Python)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 40 triệu",
    icon: Code,
    urgent: true,
  },
  {
    id: 2,
    title: "Frontend Developer (ReactJS)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội / Remote",
    type: "Full-time",
    salary: "18 - 30 triệu",
    icon: Code,
    urgent: false,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 45 triệu",
    icon: Code,
    urgent: true,
  },
  {
    id: 4,
    title: "Mobile Developer (React Native)",
    department: "engineering",
    departmentLabel: "Kỹ thuật",
    location: "Hồ Chí Minh",
    type: "Full-time",
    salary: "20 - 35 triệu",
    icon: Code,
    urgent: false,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "design",
    departmentLabel: "Thiết kế",
    location: "Hà Nội",
    type: "Full-time",
    salary: "15 - 25 triệu",
    icon: Palette,
    urgent: false,
  },
  {
    id: 6,
    title: "Product Designer",
    department: "design",
    departmentLabel: "Thiết kế",
    location: "Hà Nội / Remote",
    type: "Full-time",
    salary: "20 - 35 triệu",
    icon: Palette,
    urgent: true,
  },
  {
    id: 7,
    title: "Business Development Manager",
    department: "business",
    departmentLabel: "Kinh doanh",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 50 triệu",
    icon: LineChart,
    urgent: false,
  },
  {
    id: 8,
    title: "Sales Executive (B2B)",
    department: "business",
    departmentLabel: "Kinh doanh",
    location: "Hồ Chí Minh",
    type: "Full-time",
    salary: "15 - 30 triệu",
    icon: LineChart,
    urgent: false,
  },
  {
    id: 9,
    title: "Customer Success Manager",
    department: "support",
    departmentLabel: "Hỗ trợ",
    location: "Hà Nội",
    type: "Full-time",
    salary: "18 - 28 triệu",
    icon: Headphones,
    urgent: false,
  },
  {
    id: 10,
    title: "Technical Support Engineer",
    department: "support",
    departmentLabel: "Hỗ trợ",
    location: "Đà Nẵng",
    type: "Full-time",
    salary: "12 - 20 triệu",
    icon: Headphones,
    urgent: false,
  },
]

const departmentColors: Record<string, string> = {
  "Kỹ thuật": "bg-primary/10 text-primary border-primary/20",
  "Thiết kế": "bg-accent/10 text-accent border-accent/20",
  "Kinh doanh": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Hỗ trợ": "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

export function CareersJobs() {
  const [activeDepartment, setActiveDepartment] = useState("all")

  const filteredJobs = activeDepartment === "all"
    ? jobs
    : jobs.filter(job => job.department === activeDepartment)

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Vị trí đang tuyển
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Tìm công việc phù hợp với bạn
          </h2>
          <p className="mt-4 text-muted-foreground">
            Khám phá các cơ hội nghề nghiệp hấp dẫn tại VNSolution
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {departments.map((dept) => (
            <Button
              key={dept.id}
              variant={activeDepartment === dept.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveDepartment(dept.id)}
              className={activeDepartment === dept.id 
                ? "font-medium" 
                : "font-medium bg-card hover:bg-primary/5 hover:text-primary hover:border-primary/30"
              }
            >
              {dept.label}
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-white/20 text-xs">
                {dept.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/tuyen-dung/${job.id}`}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover-lift"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <job.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                  {job.urgent && (
                    <Badge className="flex-shrink-0 bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                      Hot
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Banknote className="h-3.5 w-3.5" />
                    {job.salary}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`text-xs ${departmentColors[job.departmentLabel]}`}>
                    {job.departmentLabel}
                  </Badge>
                  <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" className="gap-2 font-medium px-8">
            Xem tất cả vị trí
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
