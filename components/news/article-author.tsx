import { Button } from "@/components/ui/button"
import { User, Mail } from "lucide-react"

export function ArticleAuthor() {
  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">VNSolution Team</h3>
                <p className="text-sm text-primary mb-2">Content Marketing</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Đội ngũ chuyên gia của VNSolution với hơn 15 năm kinh nghiệm trong lĩnh vực phần mềm doanh nghiệp. 
                  Chúng tôi chia sẻ kiến thức và xu hướng công nghệ mới nhất giúp doanh nghiệp phát triển bền vững.
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Liên hệ tác giả
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
