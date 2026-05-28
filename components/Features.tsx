import { CheckCircle } from 'lucide-react'

const features = [
  '专业医疗团队（医生、护士、营养师）',
  '智能健康监测系统',
  '温馨舒适的居住环境',
  '个性化的护理计划',
  '24小时应急响应',
  '定期健康评估和调整',
  '家属沟通平台',
  '文化和娱乐活动',
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title">为什么选择我们</h2>
            <p className="text-gray-600 mb-8">
              我们不仅提供专业的养老服务，更重要的是提供一个充满关爱、温暖和尊严的生活环境。
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-blue-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <p className="text-lg font-semibold text-blue-600">家庭式关怀</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
