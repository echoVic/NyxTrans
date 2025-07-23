'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { TeamIllustration } from '@/components/ui/TeamIllustration'
import { ArrowRight, Globe, Zap } from 'lucide-react'
import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <Section className="pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50" padding="xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              现已开放内测 - 加入等待列表
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-slide-up leading-tight">
              让代码{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-mono">
                国际化
              </span>{' '}
              变得简单
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up leading-relaxed px-4 sm:px-0" style={{ animationDelay: '0.1s' }}>
              专为独立开发者和小团队打造的多语言支持工具。
              <br className="hidden sm:block" />
              无需复杂配置，轻松实现全球化部署。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist')
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                加入等待列表
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                查看演示
              </Button>
            </div>
          </div>

          {/* 右侧插图 */}
          <div className="flex justify-center lg:justify-end">
            <TeamIllustration className="animate-float" />
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
          <div className="text-center p-4 sm:p-0">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-mono">一键配置</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              安装CLI工具，几分钟内完成配置，无需复杂设置
            </p>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-mono">智能翻译</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI驱动的翻译引擎，支持人工审核和质量优化
            </p>
          </div>
          <div className="text-center p-4 sm:p-0 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 font-mono">灵活部署</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              支持React、Vue、Next.js等主流框架
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}