const clients = [
  { name: "Vingroup", logo: "VG" },
  { name: "FPT Corporation", logo: "FPT" },
  { name: "Viettel", logo: "VT" },
  { name: "Masan Group", logo: "MS" },
  { name: "Techcombank", logo: "TCB" },
  { name: "MB Bank", logo: "MB" },
]

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Khách hàng tin dùng
          </h2>
          <p className="mt-4 text-muted-foreground">
            VNSolution đồng hành cùng doanh nghiệp đa ngành, giúp tối ưu hệ thống quản lý nội bộ và tự động hóa quy trình.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-full items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground/60">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-col items-center text-center">
            <svg className="h-10 w-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-4 text-lg text-foreground text-pretty">
              &quot;VNSolution đã giúp chúng tôi số hóa toàn bộ quy trình vận hành, giảm 60% thời gian xử lý hồ sơ và tăng 40% năng suất làm việc của nhân viên.&quot;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-foreground">Nguyễn Văn Minh</p>
              <p className="text-sm text-muted-foreground">Giám đốc CNTT - Công ty ABC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
