import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam"
});

export const metadata: Metadata = {
  title: 'VNSolution - Giải pháp Phần mềm Doanh nghiệp | ERP, CRM, HRM, DMS',
  description: 'VNSolution cung cấp giải pháp phần mềm doanh nghiệp toàn diện bao gồm ERP, CRM, HRM, DMS, Hệ thống Quản lý Chất thải và Giải pháp Phòng thí nghiệm. Hơn 15 năm kinh nghiệm phục vụ doanh nghiệp tại Việt Nam.',
  generator: 'v0.app',
  keywords: ['phần mềm ERP', 'hệ thống CRM', 'giải pháp HRM', 'DMS', 'phần mềm quản lý chất thải', 'hệ thống thông tin phòng thí nghiệm', 'phần mềm doanh nghiệp Việt Nam'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b5998',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} font-sans`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
