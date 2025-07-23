'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  name: z.string().min(2, '姓名至少需要2个字符').optional()
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export const WaitlistSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema)
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true)
    
    try {
      // 这里可以集成实际的API调用
      console.log('Waitlist submission:', data)
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Section className="bg-primary-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              感谢您的关注！
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              我们已收到您的申请。您将是第一批体验 NyxTrans 的用户之一。
              我们会在产品准备就绪时第一时间通知您。
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
            >
              继续了解更多
            </Button>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="bg-primary-50" id="waitlist">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              抢先体验 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NyxTrans</span>
            </h2>
            <p className="text-lg text-gray-600">
              加入等待列表，成为首批用户，享受早鸟优惠和专属支持
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">优先访问权</h3>
              <p className="text-sm text-gray-600">第一时间获得产品访问权限</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">早鸟优惠</h3>
              <p className="text-sm text-gray-600">享受限时早鸟价格优惠</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">专属支持</h3>
              <p className="text-sm text-gray-600">获得一对一技术支持服务</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="您的姓名（可选）"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="您的邮箱地址"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? '提交中...' : '加入等待列表'}
              </Button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              我们承诺保护您的隐私，不会向第三方分享您的信息
            </p>
          </form>

          {/* Social Proof */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">已有 <span className="font-semibold text-primary-600">1,234+</span> 位开发者加入等待列表</p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full"></div>
              ))}
              <span className="text-sm text-gray-500 ml-2">+1229</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}