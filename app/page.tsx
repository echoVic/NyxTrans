import { MobileTestHelper } from '@/components/dev/MobileTestHelper'
import { Footer } from '@/components/layout/Footer'
import { SimpleNavbar } from '@/components/layout/SimpleNavbar'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { WaitlistSection } from '@/components/sections/WaitlistSection'
import { WorkflowSection } from '@/components/sections/WorkflowSection'
import { structuredData } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NyxTrans - Simple I18n Solution for Developers',
  description: 'The easiest way to add multi-language support to your website. Built for indie developers and small teams.',
  keywords: ['i18n', 'internationalization', 'localization', 'translation', 'multi-language', 'developers'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nyxtrans.com',
    siteName: 'NyxTrans',
    title: 'NyxTrans - Simple I18n Solution for Developers',
    description: 'The easiest way to add multi-language support to your website. Built for indie developers and small teams.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NyxTrans - Simple I18n solution for developers and teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nyxtrans',
    creator: '@nyxtrans',
    title: 'NyxTrans - Simple I18n Solution for Developers',
    description: 'The easiest way to add multi-language support to your website. Built for indie developers and small teams.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        <SimpleNavbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <WorkflowSection />
          <WaitlistSection />
        </main>
        <Footer />
        <MobileTestHelper />
      </div>
    </>
  )
}
