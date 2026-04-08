import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Solutions } from "@/components/solutions"
import { Products } from "@/components/products"
import { Clients } from "@/components/clients"
import { Trust } from "@/components/trust"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Solutions />
        <Products />
        <Clients />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
