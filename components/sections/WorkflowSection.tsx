'use client'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Code, Download, Globe, Settings, Upload, Zap } from 'lucide-react'
import { useState } from 'react'

const workflowSteps = [
  {
    id: 1,
    title: 'CLI Code Scanning',
    description: 'Use command-line tools to scan text content in your project',
    icon: Code,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Extract Text & Generate Keys',
    description: 'Intelligently extract text content and generate unique identifiers',
    icon: Settings,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Replace Text in Code',
    description: 'Replace hardcoded text with i18n function calls',
    icon: Zap,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'Upload to Platform',
    description: 'Upload extracted text to the NyxTrans translation platform',
    icon: Upload,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 5,
    title: 'Translation Management',
    description: 'Choose from human translation, machine translation, or AI translation',
    icon: Globe,
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 6,
    title: 'Content Publishing',
    description: 'Get completed translation files and integrate them into your project',
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
            Simple Process, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Easy I18n</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From code scanning to translation deployment, NyxTrans provides a complete i18n solution for developers
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
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Code Example</h3>
            <p className="text-gray-400 text-sm sm:text-base">See how NyxTrans simplifies your i18n workflow</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-red-400 font-mono">Before - Hardcoded Text</h4>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-gray-500">{/* Original code */}</div>
                <div className="text-white">
                  <span className="text-blue-400">function</span>{' '}
                  <span className="text-yellow-400">LoginForm</span>() {'{'}
                </div>
                <div className="text-white ml-4">
                  <span className="text-blue-400">return</span> (
                </div>
                <div className="text-white ml-8">
                  &lt;<span className="text-red-400">h1</span>&gt;<span className="text-green-400">&quot;Welcome to Login&quot;</span>&lt;/<span className="text-red-400">h1</span>&gt;
                </div>
                <div className="text-white ml-4">)</div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-green-400 font-mono">After - I18n Support</h4>
              <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-gray-500">{/* NyxTrans processed */}</div>
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