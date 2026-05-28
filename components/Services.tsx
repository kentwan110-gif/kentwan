import { Heart, Users, Pill, Home } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: '健康管理',
    description: '专业的医疗团队24小时监测长者健康状况，提供个性化的健康管理方案。',
  },
  {
    icon: Pill,
    title: '护理照顾',
    description: '经过专业培训的护理人员提供日常护理、康复指导和基础医疗服务。',
  },
  {
    icon: Users,
    title: '社交活动',
    description: '丰富的社交和文化活动，帮助长者保持身心活跃，建立温暖的社区。',
  },
  {
    icon: Home,
    title: '生活照料',
    description: '从饮食、卫生到家务，我们提供全方位的生活照料服务。',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">我们的服务</h2>
        <p className="section-subtitle text-center">
          全面的康养长照服务，让长者生活更有质量
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
