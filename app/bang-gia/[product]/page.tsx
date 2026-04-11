import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductPricingHero } from "@/components/pricing/product-pricing-hero"
import { ProductPricingPlans } from "@/components/pricing/product-pricing-plans"
import { ProductPricingFeatures } from "@/components/pricing/product-pricing-features"
import { ProductPricingFaq } from "@/components/pricing/product-pricing-faq"
import { ProductPricingCta } from "@/components/pricing/product-pricing-cta"

interface PageProps {
  params: Promise<{ product: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product } = await params
  const productNames: Record<string, string> = {
    erp: "ERP",
    crm: "CRM", 
    hrm: "HRM",
    dms: "DMS"
  }
  const name = productNames[product] || product.toUpperCase()
  
  return {
    title: `Bảng giá ${name} | VNSolution`,
    description: `Chi tiết bảng giá và các gói dịch vụ ${name} của VNSolution - Giải pháp phần mềm doanh nghiệp hàng đầu`,
  }
}

export default async function ProductPricingPage({ params }: PageProps) {
  const { product } = await params
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductPricingHero product={product} />
        <ProductPricingPlans product={product} />
        <ProductPricingFeatures product={product} />
        <ProductPricingFaq product={product} />
        <ProductPricingCta product={product} />
      </main>
      <Footer />
    </div>
  )
}
