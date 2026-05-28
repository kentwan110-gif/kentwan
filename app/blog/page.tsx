import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '老年人营养管理的重要性',
    excerpt: '合理的营养对长者的健康和生活质量至关重要...',
    date: '2024-05-20',
    category: '健康知识',
  },
  {
    id: 2,
    title: '康养社区如何提高长者的社交生活',
    excerpt: '社交互动对老年人的身心健康有重要影响...',
    date: '2024-05-15',
    category: '社区生活',
  },
  {
    id: 3,
    title: '长期护理保险的申请指南',
    excerpt: '了解如何申请长期护理保险以获得更好的保障...',
    date: '2024-05-10',
    category: '保险指南',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} />
          返回首页
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">康养长照博客</h1>
        <p className="text-xl text-gray-600 mb-12">分享健康知识、护理技巧和社区故事</p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                  阅读全文 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
