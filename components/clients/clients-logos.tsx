"use client"

import { Building2 } from "lucide-react"

const clientLogos = [
  { name: "Vingroup", industry: "Bất động sản" },
  { name: "FPT Corporation", industry: "Công nghệ" },
  { name: "Masan Group", industry: "Hàng tiêu dùng" },
  { name: "Viettel", industry: "Viễn thông" },
  { name: "VNPT", industry: "Viễn thông" },
  { name: "Techcombank", industry: "Ngân hàng" },
  { name: "VPBank", industry: "Ngân hàng" },
  { name: "Vinamilk", industry: "Thực phẩm" },
  { name: "Hòa Phát", industry: "Thép" },
  { name: "PetroVietnam", industry: "Dầu khí" },
  { name: "Vietnam Airlines", industry: "Hàng không" },
  { name: "Sabeco", industry: "Đồ uống" },
]

export function ClientsLogos() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Đối tác tin cậy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Các tập đoàn và doanh nghiệp hàng đầu Việt Nam đã lựa chọn VNSolution
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground text-center">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
