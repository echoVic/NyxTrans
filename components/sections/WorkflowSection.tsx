'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Code, Download, Globe, Settings, Upload, Zap } from 'lucide-react'
import { useState } from 'react'

const workflowSteps = [
  {
    id: 1,
    title: 'CLI扫描代码',
    description: '使用命令行工具扫描项目中的文本内容',
    icon: Code,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: '提取文本并生成Key',
    description: '智能提取文本内容并生成唯一标识符',
    icon: Settings,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: '替换代码中的文本',
    description: '将硬编码文本替换为国际化函数调用',
    icon: Zap,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    title: '上传文本到平台',
    description: '将提取的文本上传到NyxTrans翻译平台',
    icon: Upload,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 5,
    title: '翻译管理',
    description: '人工翻译、机器翻译或AI翻译多种选择',
    icon: Globe,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 6,
    title: '文案发布',
    description: '获取完成的翻译文件并集成到项目',
    icon: Download,
    color: 'from-pink-500 to-pink-600'
  }
]

export const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <Section className="bg-gray-50" id="workflow">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            简单流程，<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">轻松国际化</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            从代码扫描到翻译部署，NyxTrans为开发者提供完整的国际化解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {workflowSteps.map((step) => {
            const Icon = step.icon
            const isActive = activeStep === step.id
            
            return (
              <div
                key={step.id}
                className={`relative bg-white rounded-xl p-4 sm:p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'border-blue-200 shadow-lg transform -translate-y-1' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                  {step.id}
                </div>

                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-mono">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* 代码示例 */}
        <div className="mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-4 sm:p-8 text-white mx-4 sm:mx-0">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">代码示例</h3>
            <p className="text-gray-400 text-sm sm:text-base">看看NyxTrans如何简化您的国际化工作流程</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-red-400 font-mono">使用前 - 硬编码文本</h4>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-gray-500">{/* 原始代码 */}</div>
                <div className="text-white">
                  <span className="text-blue-400">function</span>{' '}
                  <span className="text-yellow-400">LoginForm</span>() {'{'}
                </div>
                <div className="text-white ml-4">
                  <span className="text-blue-400">return</span> (
                </div>
                <div className="text-white ml-8">
                  &lt;<span className="text-red-400">h1</span>&gt;<span className="text-green-400">&quot;欢迎登录&quot;</span>&lt;/<span className="text-red-400">h1</span>&gt;
                </div>
                <div className="text-white ml-4">)</div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-green-400 font-mono">使用后 - 国际化支持</h4>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-gray-500">{/* NyxTrans处理后 */}</div>
                <div className="text-white">
                  <span className="text-blue-400">function</span>{' '}
                  <span className="text-yellow-400">LoginForm</span>() {'{'}
                </div>
                <div className="text-white ml-4">
                  <span className="text-blue-400">return</span> (
                </div>
                <div className="text-white ml-8">
                  &lt;<span className="text-red-400">h1</span>&gt;{'{'}
                  <span className="text-purple-400">t</span>(<span className="text-green-400">&apos;login.welcome&apos;</span>){'}'}&lt;/<span className="text-red-400">h1</span>&gt;
                </div>
                <div className="text-white ml-4">)</div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}