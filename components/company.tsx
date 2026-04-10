import { Target, Lightbulb, Heart, Award, TrendingUp, Users } from "lucide-react"

const milestones = [
  { year: "2009", event: "Thành lập tại TP. Hồ Chí Minh" },
  { year: "2012", event: "Triển khai ERP doanh nghiệp đầu tiên" },
  { year: "2015", event: "Mở rộng sang lĩnh vực quản lý chất thải" },
  { year: "2018", event: "Ra mắt giải pháp phòng thí nghiệm" },
  { year: "2021", event: "Cột mốc 100 khách hàng doanh nghiệp" },
  { year: "2024", event: "Mở rộng khu vực Đông Nam Á" },
]

const stats = [
  { value: "15+", label: "Năm kinh nghiệm", icon: Award },
  { value: "200+", label: "Khách hàng doanh nghiệp", icon: Users },
  { value: "50+", label: "Chuyên gia ngành", icon: Target },
  { value: "98%", label: "Tỷ lệ giữ chân khách hàng", icon: TrendingUp },
]

const values = [
  {
    icon: Target,
    title: "Xuất sắc",
    description: "Chúng tôi theo đuổi tiêu chuẩn cao nhất trong mọi giải pháp cung cấp, đảm bảo tác động có thể đo lường được cho khách hàng.",
  },
  {
    icon: Lightbulb,
    title: "Đổi mới",
    description: "Không ngừng cập nhật công nghệ để mang đến các giải pháp tiên tiến cho những thách thức kinh doanh phức tạp.",
  },
  {
    icon: Heart,
    title: "Đối tác",
    description: "Xây dựng mối quan hệ bền vững, coi mỗi dự án là sự hợp tác thực sự vì thành công chung.",
  },
]

export function Company() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Về VNSolution</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
              Xây dựng tương lai của phần mềm doanh nghiệp
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Từ năm 2009, VNSolution đã tiên phong trong lĩnh vực phát triển phần mềm doanh nghiệp
              tại Việt Nam. Từ một đội ngũ nhỏ với tầm nhìn lớn, chúng tôi đã phát triển thành
              nhà cung cấp giải pháp kinh doanh toàn diện hàng đầu phục vụ khách hàng đa ngành.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Chuyên môn của chúng tôi trải dài từ quản lý chất thải, hệ thống thông tin phòng thí nghiệm
              đến toàn bộ các công cụ quản lý doanh nghiệp. Chúng tôi kết hợp kiến thức sâu về ngành
              với năng lực kỹ thuật xuất sắc để mang đến giải pháp chuyển đổi kinh doanh thực sự.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-foreground mb-6">Hành trình của chúng tôi</h3>
            <div className="relative">
              <div className="absolute left-2.5 top-0 h-full w-px bg-border" />

              <div className="space-y-4">
                {milestones.map((milestone, idx) => (
                  <div key={milestone.year} className="relative flex gap-4 pl-8">
                    <div className={`absolute left-0 top-1 h-5 w-5 rounded-full border-3 ${
                      idx === milestones.length - 1
                        ? "border-accent bg-accent/20"
                        : "border-border bg-background"
                    }`} />

                    <div className="flex-1 rounded-lg border border-border bg-card p-3">
                      <span className="text-xs font-bold text-accent">{milestone.year}</span>
                      <p className="mt-0.5 text-sm text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Giá trị cốt lõi</h3>
            <p className="mt-2 text-sm text-muted-foreground">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-card p-6 text-center transition-smooth hover:border-primary/20 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-base font-bold text-foreground">{value.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
