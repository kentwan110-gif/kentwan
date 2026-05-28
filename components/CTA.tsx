import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          准备好开始了吗？
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          联系我们了解更多关于 Formosa Longevity Village 的信息
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@formosalong.com"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-bold"
          >
            发送邮件
          </a>
          <a
            href="tel:+886123456789"
            className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-bold"
          >
            致电我们
          </a>
        </div>
      </div>
    </section>
  )
}
