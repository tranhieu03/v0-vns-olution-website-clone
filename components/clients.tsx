const clients = [
  { name: "Viện Kiểm nghiệm thuốc TW", logo: "VIỆN KN TW" },
  { name: "Trung tâm KN Dược TP.HCM", logo: "TT KN HCM" },
  { name: "Trung tâm KN Hà Nội", logo: "TT KN HN" },
  { name: "Trung tâm KN Đà Nẵng", logo: "TT KN ĐN" },
  { name: "Viện KN Vắc xin Sinh phẩm", logo: "VIỆN VXSP" },
  { name: "Cục Quản lý Dược", logo: "CỤC QLD" },
]

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Đơn vị đã triển khai
          </h2>
          <p className="mt-4 text-muted-foreground">
            LabQC được tin dùng bởi các Viện Kiểm nghiệm, Trung tâm Kiểm nghiệm và cơ quan quản lý nhà nước trên toàn quốc.
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
                <span className="text-xs font-bold text-muted-foreground/60 text-center">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col items-center text-center">
            <svg className="h-10 w-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-4 text-lg text-foreground text-pretty">
              &quot;LabQC đã giúp Viện Kiểm nghiệm chúng tôi số hóa hoàn toàn quy trình quản lý mẫu, giảm 70% thời gian xử lý hồ sơ và nâng cao tính minh bạch trong công tác kiểm nghiệm. Hệ thống tuân thủ đầy đủ tiêu chuẩn ISO/IEC 17025.&quot;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-foreground">PGS.TS. Nguyễn Văn Minh</p>
              <p className="text-sm text-muted-foreground">Viện trưởng - Viện Kiểm nghiệm thuốc Trung ương</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
