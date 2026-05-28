import Link from 'next/link'
import { ArrowLeft, MapPin, Users } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: '台北康养中心',
    location: '台北市信义区',
    capacity: '150 位长者',
    description: '现代化的康养设施，配备完整的医疗和生活照料服务',
    image: '🏥',
    status: '运营中',
  },
  {
    id: 2,
    name: '新竹健康社区',
    location: '新竹市东区',
    capacity: '100 位长者',
    description: '温馨的社区环境，强调社交互动和文化活动',
    image: '🏘️',
    status: '运营中',
  },
  {
    id: 3,
    name: '台中护理中心',
    location: '台中市西屯区',
    capacity: '80 位长者',
    description: '专门提供高级护理和康复服务的专业机构',
    image: '🏨',
    status: '计划中',
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} />
          返回首页
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">我们的项目</h1>
        <p className="text-xl text-gray-600 mb-12">遍布台湾的康养长照服务中心</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-blue-100 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === '运营中'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-3 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-blue-600" />
                    {project.capacity}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="w-full btn-secondary">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
