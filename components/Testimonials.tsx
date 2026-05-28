import { Star } from 'lucide-react'

const testimonials = [
  {
    name: '王阿姨',
    role: '长者',
    content: '在这里我感到很放心，照护人员很贴心，医生也经常来看望我们。',
    stars: 5,
  },
  {
    name: '李先生',
    role: '家属',
    content: '能看到母亲在这里开心地生活，我们作为子女也就放心了。',
    stars: 5,
  },
  {
    name: '陈阿公',
    role: '长者',
    content: '这里的环境舒适，人很热心，还有很多活动可以参加。',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">用户评价</h2>
        <p className="section-subtitle text-center">
          来自长者和家属的真实反馈
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">" {testimonial.content} "</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
