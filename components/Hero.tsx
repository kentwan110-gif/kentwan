import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              台湾康养长照<br />
              <span className="text-blue-600">专业解决方案</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Formosa Longevity Village 致力于为长者提供最优质的养老、护理和健康管理服务，让每一位长者都能享受尊严、安心和幸福的晚年生活。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                开始咨询 <ArrowRight size={20} />
              </Link>
              <Link href="/projects" className="btn-secondary inline-flex items-center justify-center gap-2">
                查看项目
              </Link>
            </div>
            <div className="flex gap-8 mt-12 text-sm text-gray-600">
              <div>
                <p className="font-bold text-2xl text-blue-600">500+</p>
                <p>服务长者</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-600">15+</p>
                <p>年行业经验</p>
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-600">98%</p>
                <p>客户满意度</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-blue-200 rounded-2xl h-96 flex items-center justify-center text-blue-600">
            <div className="text-center">
              <div className="text-6xl mb-4">🏥</div>
              <p className="text-lg font-semibold">康养长照服务中心</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
