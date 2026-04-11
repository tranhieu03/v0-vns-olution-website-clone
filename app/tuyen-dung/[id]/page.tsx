import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobDetail } from "@/components/careers/job-detail"
import { JobApplication } from "@/components/careers/job-application"
import { RelatedJobs } from "@/components/careers/related-jobs"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Vị trí tuyển dụng #${id} | VNSolution`,
    description: "Chi tiết vị trí tuyển dụng tại VNSolution - Gia nhập đội ngũ chuyên gia công nghệ hàng đầu",
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JobDetail jobId={id} />
        <JobApplication jobId={id} />
        <RelatedJobs currentJobId={id} />
      </main>
      <Footer />
    </div>
  )
}
