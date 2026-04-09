import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck, FlaskConical, FileCheck, ClipboardList, CheckCircle2, Clock, AlertCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>Tuân thủ ISO/IEC 17025 - Chuẩn quốc tế</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Hệ thống Quản lý Mẫu Kiểm nghiệm Dược phẩm
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Giải pháp số hóa toàn bộ quy trình kiểm nghiệm cho Viện Kiểm nghiệm và cơ quan quản lý nhà nước. 
              Từ tiếp nhận mẫu, phân công kiểm nghiệm đến trả kết quả - tất cả trên một nền tảng duy nhất.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                Yêu cầu Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="h-4 w-4" />
                Xem giới thiệu
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Đã triển khai tại 15+ Viện/Trung tâm Kiểm nghiệm trên toàn quốc
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Dashboard Card */}
              <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  {/* Dashboard Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">LabQC - Quản lý Mẫu</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid gap-3">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Mẫu tiếp nhận", value: "1,247", icon: ClipboardList, color: "bg-primary/10 text-primary" },
                        { label: "Đang kiểm nghiệm", value: "89", icon: FlaskConical, color: "bg-amber-100 text-amber-600" },
                        { label: "Đã trả kết quả", value: "1,158", icon: FileCheck, color: "bg-green-100 text-green-600" },
                      ].map((stat) => (
                        <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                          <div className="flex items-center gap-1">
                            <stat.icon className="h-3 w-3" />
                            <p className="text-xs opacity-70">{stat.label}</p>
                          </div>
                          <p className="text-base font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Progress Pipeline */}
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="mb-3 text-xs font-medium text-muted-foreground">Quy trình kiểm nghiệm mẫu</p>
                      <div className="flex items-center justify-between">
                        {[
                          { label: "Tiếp nhận", count: 45, color: "bg-primary" },
                          { label: "Phân tích", count: 32, color: "bg-amber-500" },
                          { label: "Kiểm tra", count: 28, color: "bg-blue-500" },
                          { label: "Phê duyệt", count: 15, color: "bg-purple-500" },
                          { label: "Trả KQ", count: 12, color: "bg-green-500" },
                        ].map((step, i) => (
                          <div key={step.label} className="flex flex-col items-center">
                            <div className={`h-10 w-10 rounded-full ${step.color} flex items-center justify-center text-white text-xs font-bold`}>
                              {step.count}
                            </div>
                            <span className="text-[9px] mt-1 text-muted-foreground">{step.label}</span>
                            {i < 4 && <div className="absolute translate-x-8 w-6 h-0.5 bg-border" />}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Recent Samples */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Mẫu mới tiếp nhận</p>
                      {[
                        { code: "KN-2024-0847", name: "Paracetamol 500mg", status: "testing", statusText: "Đang KN" },
                        { code: "KN-2024-0846", name: "Amoxicillin 250mg", status: "pending", statusText: "Chờ phân tích" },
                        { code: "KN-2024-0845", name: "Vitamin C 1000mg", status: "completed", statusText: "Đạt" },
                      ].map((sample, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-muted/30 p-2">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            sample.status === 'completed' ? 'bg-green-100' : 
                            sample.status === 'testing' ? 'bg-amber-100' : 'bg-blue-100'
                          }`}>
                            {sample.status === 'completed' ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : sample.status === 'testing' ? (
                              <FlaskConical className="h-4 w-4 text-amber-600" />
                            ) : (
                              <Clock className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium">{sample.code}</p>
                            <p className="text-[10px] text-muted-foreground">{sample.name}</p>
                          </div>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            sample.status === 'completed' ? 'bg-green-100 text-green-700' : 
                            sample.status === 'testing' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                          }`}>{sample.statusText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-4 top-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tỷ lệ đạt chuẩn</p>
                    <p className="text-sm font-semibold text-green-600">98.5%</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 hidden rounded-lg bg-white p-3 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Mẫu cần xử lý gấp</p>
                    <p className="text-sm font-semibold text-amber-600">12 mẫu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
