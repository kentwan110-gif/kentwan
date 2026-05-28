import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Formosa Longevity Village</h3>
            <p className="text-gray-400">台湾康养长照专业解决方案</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">导航</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-white transition">服务</Link></li>
              <li><Link href="#features" className="hover:text-white transition">特色</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">博客</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">项目</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:contact@formosalong.com" className="hover:text-white transition">contact@formosalong.com</a></li>
              <li><a href="tel:+886123456789" className="hover:text-white transition">+886 1234 56789</a></li>
              <li>台湾 • 台北</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">关注我们</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">微博</a></li>
              <li><a href="#" className="hover:text-white transition">微信</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Formosa Longevity Village. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
