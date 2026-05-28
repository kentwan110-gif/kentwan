const team = [
  {
    name: '李医生',
    role: '首席医学顾问',
    image: '👨‍⚕️',
  },
  {
    name: '王护士',
    role: '护理主管',
    image: '👩‍⚕️',
  },
  {
    name: '张营养师',
    role: '营养管理专家',
    image: '👨‍🔬',
  },
  {
    name: '陈社工',
    role: '社区活动主任',
    image: '👩‍💼',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">我们的团队</h2>
        <p className="section-subtitle text-center">
          由专业人士组成的护理团队
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-5xl">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
