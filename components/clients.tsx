const clients = [
  { name: "URENCO Hà Nội", logo: "URENCO" },
  { name: "CITENCO TP.HCM", logo: "CITENCO" },
  { name: "Môi trường Đà Nẵng", logo: "MTDN" },
  { name: "VWS", logo: "VWS" },
  { name: "Sông Công Xanh", logo: "SCX" },
  { name: "Biwase", logo: "BIWASE" },
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
            EcoWaste Pro đồng hành cùng các công ty môi trường đô thị, khu công nghiệp và cơ quan quản lý môi trường trên toàn quốc.
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
                <span className="text-lg font-bold text-muted-foreground/60">
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
              &quot;EcoWaste Pro đã giúp chúng tôi tối ưu 35% chi phí vận hành, giảm 40% thời gian quy hoạch tuyến đường thu gom và nâng cao tỷ lệ tái chế lên 28%. Đây là bước tiến quan trọng trong chuyển đổi số ngành môi trường.&quot;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-foreground">Ông Nguyễn Văn Hùng</p>
              <p className="text-sm text-muted-foreground">Phó Giám đốc - Công ty TNHH MTV Môi trường Đô thị Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
