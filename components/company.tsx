import { Target, Lightbulb, Handshake, Award, TrendingUp, Users } from "lucide-react"

const milestones = [
  { year: "2009", event: "Thành lập công ty tại TP. Hồ Chí Minh" },
  { year: "2012", event: "Triển khai hệ thống ERP đầu tiên" },
  { year: "2015", event: "Ra mắt giải pháp quản lý chất thải" },
  { year: "2018", event: "Phát triển hệ thống LIMS" },
  { year: "2021", event: "Đạt mốc 100 khách hàng doanh nghiệp" },
  { year: "2024", event: "Mở rộng thị trường khu vực" },
]

const stats = [
  { value: "15+", label: "Năm kinh nghiệm", icon: Award },
  { value: "200+", label: "Khách hàng doanh nghiệp", icon: Users },
  { value: "50+", label: "Chuyên gia kỹ thuật", icon: Target },
  { value: "98%", label: "Khách hàng hài lòng", icon: TrendingUp },
]

const values = [
  {
    icon: Target,
    title: "Chất lượng",
    description: "Cam kết cung cấp giải pháp đạt tiêu chuẩn cao nhất, đảm bảo hiệu quả thực tế cho doanh nghiệp.",
  },
  {
    icon: Lightbulb,
    title: "Sáng tạo",
    description: "Không ngừng nghiên cứu và ứng dụng công nghệ mới để mang đến giải pháp tối ưu.",
  },
  {
    icon: Handshake,
    title: "Đồng hành",
    description: "Xây dựng mối quan hệ lâu dài, đồng hành cùng khách hàng trong suốt quá trình phát triển.",
  },
]

export function Company() {
  return (
    <section id="company" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-primary mb-3">Về VNSolution</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Đối tác công nghệ tin cậy của doanh nghiệp Việt
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Được thành lập từ năm 2009, VNSolution là đơn vị tiên phong trong lĩnh vực 
              phát triển phần mềm quản lý doanh nghiệp tại Việt Nam. Với đội ngũ hơn 50 
              chuyên gia giàu kinh nghiệm, chúng tôi tự hào đồng hành cùng hơn 200 doanh 
              nghiệp trong nhiều ngành nghề khác nhau.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Từ các giải pháp quản lý môi trường, phòng thí nghiệm đến hệ thống quản trị 
              tổng thể doanh nghiệp - chúng tôi kết hợp hiểu biết sâu về nghiệp vụ với 
              năng lực công nghệ để tạo ra những sản phẩm thực sự hữu ích.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`flex items-start gap-4 opacity-0 animate-fade-up stagger-${index + 1}`}
                  style={{ animationFillMode: 'forwards' }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Chặng đường phát triển</h3>
            <div className="relative">
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

              <div className="space-y-4">
                {milestones.map((milestone, idx) => (
                  <div 
                    key={milestone.year} 
                    className={`relative flex gap-5 pl-10 opacity-0 animate-slide-up stagger-${idx + 1}`}
                    style={{ animationFillMode: 'forwards' }}
                  >
                    <div className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-smooth ${
                      idx === milestones.length - 1
                        ? "border-primary bg-primary"
                        : "border-primary/30 bg-background"
                    }`}>
                      {idx === milestones.length - 1 && (
                        <span className="w-2 h-2 rounded-full bg-primary-foreground"></span>
                      )}
                    </div>

                    <div className="flex-1 rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/20 hover:shadow-sm">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                      <p className="mt-1 text-sm text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">Giá trị cốt lõi</h3>
            <p className="mt-3 text-muted-foreground">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all hover-lift hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 opacity-0 animate-fade-up stagger-${index + 1}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 transition-all group-hover:from-primary group-hover:to-cyan-500 group-hover:shadow-lg group-hover:shadow-primary/30">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">{value.title}</h4>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
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
