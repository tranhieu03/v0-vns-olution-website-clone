"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Sparkles } from "lucide-react"

export function NewsNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border border-primary/10 p-8 lg:p-12 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Đăng ký nhận tin
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Nhận thông tin mới nhất về phần mềm doanh nghiệp, hướng dẫn sử dụng và 
            ưu đãi đặc biệt trực tiếp vào email của bạn.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-emerald-700">
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất cho bạn.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 bg-white border-border focus:border-primary focus:ring-primary"
                />
                <Button type="submit" size="lg" className="h-12 px-6 font-medium">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Đăng ký
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Chúng tôi cam kết bảo mật thông tin của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
              </p>
            </form>
          )}

          {/* Features */}
          <div className="mt-8 pt-8 border-t border-primary/10 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2x</p>
              <p className="text-xs text-muted-foreground">Bài viết / tuần</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">5,000+</p>
              <p className="text-xs text-muted-foreground">Người đăng ký</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p className="text-xs text-muted-foreground">Miễn phí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
