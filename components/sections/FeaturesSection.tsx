'use client'

import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { Section } from '@/components/layout/Section'
import { Bot, Code2, Globe, Rocket, Shield, Zap } from 'lucide-react'
import React from 'react'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get your i18n up and running in under 5 minutes with our CLI tool and intuitive dashboard.'
  },
  {
    icon: Bot,
    title: 'AI-Powered Translation',
    description: 'Smart translation suggestions powered by advanced AI, with options for human review and editing.'
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Simple API, comprehensive documentation, and SDKs for all popular frameworks and languages.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Support for 100+ languages with automatic locale detection and regional customization.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance, data encryption, and privacy-first architecture.'
  },
  {
    icon: Rocket,
    title: 'Performance Optimized',
    description: 'Lightweight bundle size, CDN delivery, and smart caching for blazing fast load times.'
  }
]

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.icon
  
  return (
    <div className="group p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  )
}

export const FeaturesSection: React.FC = () => {
  return (
    <Section id="features" className="bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NyxTrans</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Built for indie developers and small teams who want to go global without the complexity
          </p>
        </div>

        {/* Features Grid */}
        <Grid cols={{ default: 1, md: 2, lg: 3 }} gap="lg" className="animate-fade-in">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}