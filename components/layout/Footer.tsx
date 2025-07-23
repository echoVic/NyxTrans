'use client'

import { Container } from '@/components/layout/Container'
import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">NyxTrans</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                为独立开发者和小团队提供最简单的国际化解决方案，让您的产品轻松走向全球。
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">功能特性</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">定价方案</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">使用案例</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">更新日志</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">文档</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">API 参考</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">帮助中心</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NyxTrans. 保留所有权利。
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                服务条款
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie 政策
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}