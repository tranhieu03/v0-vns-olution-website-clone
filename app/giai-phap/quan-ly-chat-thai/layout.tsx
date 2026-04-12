import { Header } from "@/components/header"
import { WasteSubHeader } from "@/components/waste/waste-sub-header"
import { Footer } from "@/components/footer"

export default function WasteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <WasteSubHeader />
      {children}
      <Footer />
    </>
  )
}
