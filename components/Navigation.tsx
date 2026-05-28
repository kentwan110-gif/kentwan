'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FLV</span>
            </div>
            <span className="font-bold text-gray-900">Formosa Longevity</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
              服务
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
              特色
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              博客
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
              项目
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              联系
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block py-2 text-gray-700 hover:text-blue-600">
              服务
            </Link>
            <Link href="#features" className="block py-2 text-gray-700 hover:text-blue-600">
              特色
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-blue-600">
              博客
            </Link>
            <Link href="/projects" className="block py-2 text-gray-700 hover:text-blue-600">
              项目
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
              联系
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
