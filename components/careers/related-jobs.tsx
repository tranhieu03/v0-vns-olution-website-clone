import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Banknote, ArrowRight, Code, Palette, LineChart } from "lucide-react"

const relatedJobs = [
  {
    id: 2,
    title: "Frontend Developer (ReactJS)",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội / Remote",
    type: "Full-time",
    salary: "18 - 30 triệu",
    icon: Code,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    departmentLabel: "Kỹ thuật",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 45 triệu",
    icon: Code,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    departmentLabel: "Thiết kế",
    location: "Hà Nội",
    type: "Full-time",
    salary: "15 - 25 triệu",
    icon: Palette,
  },
  {
    id: 7,
    title: "Business Development Manager",
    departmentLabel: "Kinh doanh",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25 - 50 triệu",
    icon: LineChart,
  },
]

const departmentColors: Record<string, string> = {
  "Kỹ thuật": "bg-primary/10 text-primary border-primary/20",
  "Thiết kế": "bg-accent/10 text-accent border-accent/20",
  "Kinh doanh": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
}

export function RelatedJobs({ currentJobId }: { currentJobId: string }) {
  const filtered = relatedJobs.filter(job => job.id.toString() !== currentJobId).slice(0, 3)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Vị trí tương tự</h2>
            <p className="mt-2 text-muted-foreground">Có thể bạn cũng quan tâm</p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex gap-2">
            <Link href="/tuyen-dung">
              Xem tất cả
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <Link
              key={job.id}
              href={`/tuyen-dung/${job.id}`}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover-lift"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <job.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <Badge variant="outline" className={`text-xs mb-2 ${departmentColors[job.departmentLabel]}`}>
                  {job.departmentLabel}
                </Badge>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Banknote className="h-3 w-3" />
                    {job.salary}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/tuyen-dung">
              Xem tất cả vị trí
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
