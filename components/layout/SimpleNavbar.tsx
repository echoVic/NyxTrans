'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { Globe, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const SimpleNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'zh' | 'en'>('zh')

  const navItems = language === 'zh' ? [
    { label: '功能特性', href: '#features' },
    { label: '工作流程', href: '#workflow' },
    { label: '加入等待列表', href: '#waitlist' },
  ] : [
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Join Waitlist', href: '#waitlist' },
  ]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}
              </span>
            </button>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              {language === 'zh' ? '登录' : 'Login'}
            </Link>
            <Button size="sm">{language === 'zh' ? '开始使用' : 'Get Started'}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'zh' ? '🇺🇸 Switch to English' : '🇨🇳 切换到中文'}</span>
                </button>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'zh' ? '登录' : 'Login'}
                </Link>
                <Button size="sm" className="w-fit">{language === 'zh' ? '开始使用' : 'Get Started'}</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}