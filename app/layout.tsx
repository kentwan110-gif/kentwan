import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Formosa Longevity Village | 台湾康养长照',
  description: '专业的台湾康养长照解决方案，提供优质的老年护理和健康管理服务',
  keywords: '康养长照, 老年护理, 健康管理, 台湾',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
