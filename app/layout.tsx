import type { Metadata } from 'next'
import { Inter, Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter"
});

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam"
});

export const metadata: Metadata = {
  title: 'LabQC - Hệ thống Quản lý Mẫu Kiểm nghiệm Dược phẩm',
  description: 'Giải pháp phần mềm quản lý quy trình kiểm nghiệm dược phẩm cho Viện Kiểm nghiệm và cơ quan quản lý nhà nước. Số hóa quy trình lấy mẫu, kiểm nghiệm và trả kết quả theo chuẩn ISO/IEC 17025.',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${beVietnamPro.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
