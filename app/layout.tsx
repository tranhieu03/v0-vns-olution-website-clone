import type { Metadata, Viewport } from 'next'
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
  title: 'VNSolution - Enterprise Software Solutions | ERP, CRM, HRM, DMS & Industry Solutions',
  description: 'VNSolution delivers cutting-edge enterprise software solutions including ERP, CRM, HRM, DMS, Waste Management Systems, and Testing Laboratory Solutions. 15+ years of innovation serving businesses across Vietnam.',
  generator: 'v0.app',
  keywords: ['ERP software', 'CRM system', 'HRM solution', 'DMS', 'waste management software', 'laboratory information system', 'enterprise software Vietnam'],
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
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${beVietnamPro.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
