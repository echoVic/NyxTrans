'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { useWaitlistStats } from '@/hooks/useWaitlistStats'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional()
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export const WaitlistSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { count: waitlistCount } = useWaitlistStats()

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
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || '提交失败')
      }
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      // 这里可以添加错误提示给用户
      alert(error instanceof Error ? error.message : '提交失败，请稍后重试')
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
              Get Early Access to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NyxTrans</span>
            </h2>
            <p className="text-lg text-gray-600">
              Join the waitlist to become one of the first users and enjoy early bird pricing and exclusive support
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Priority Access</h3>
              <p className="text-sm text-gray-600">Get product access as soon as it&apos;s available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Early Bird Pricing</h3>
              <p className="text-sm text-gray-600">Enjoy limited-time early bird pricing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Support</h3>
              <p className="text-sm text-gray-600">Get one-on-one technical support</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Your Name (Optional)"
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
                    placeholder="Your Email"
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
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </Button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              We promise to protect your privacy and will not share your information with third parties
            </p>
          </form>

          {/* Social Proof */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">已有 <span className="font-semibold text-primary-600">{waitlistCount.toLocaleString()}+</span> 位开发者加入等待列表</p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full"></div>
              ))}
              <span className="text-sm text-gray-500 ml-2">+{Math.max(0, waitlistCount - 5).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}