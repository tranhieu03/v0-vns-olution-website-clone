"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, CheckCircle2, Send } from "lucide-react"

export function JobApplication({ jobId }: { jobId: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Ứng tuyển thành công!
            </h2>
            <p className="text-muted-foreground mb-6">
              Cảm ơn bạn đã quan tâm đến vị trí này. Chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong vòng 3-5 ngày làm việc.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Gửi thêm ứng tuyển khác
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Ứng tuyển
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Gửi hồ sơ ứng tuyển
            </h2>
            <p className="mt-4 text-muted-foreground">
              Điền thông tin bên dưới để ứng tuyển. Chúng tôi sẽ liên hệ bạn sớm nhất có thể.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
            <input type="hidden" name="jobId" value={jobId} />
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên *</Label>
                <Input 
                  id="fullName" 
                  placeholder="Nguyễn Văn A" 
                  required 
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@example.com" 
                  required 
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input 
                  id="phone" 
                  placeholder="0912 345 678" 
                  required 
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Số năm kinh nghiệm *</Label>
                <Input 
                  id="experience" 
                  placeholder="VD: 3 năm" 
                  required 
                  className="bg-secondary/50"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="portfolio">Link Portfolio / LinkedIn</Label>
              <Input 
                id="portfolio" 
                placeholder="https://linkedin.com/in/your-profile" 
                className="bg-secondary/50"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="cv">Tải lên CV *</Label>
              <div className="relative">
                <input
                  type="file"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
                <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-border hover:border-primary/50 bg-secondary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    {fileName ? (
                      <p className="text-sm font-medium text-foreground">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-foreground">Click để tải lên hoặc kéo thả file</p>
                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Tối đa 5MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="coverLetter">Thư xin việc</Label>
              <Textarea 
                id="coverLetter" 
                placeholder="Giới thiệu ngắn về bản thân và lý do bạn muốn ứng tuyển vị trí này..."
                rows={5}
                className="bg-secondary/50 resize-none"
              />
            </div>

            <div className="mt-8">
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Gửi hồ sơ ứng tuyển
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Bằng việc gửi hồ sơ, bạn đồng ý với <a href="#" className="text-primary hover:underline">Chính sách bảo mật</a> của chúng tôi.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
