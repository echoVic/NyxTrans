import { WebVitalsWrapper } from '@/components/analytics/WebVitalsWrapper'
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'NyxTrans - Simple I18n Solution for Developers',
  description: 'The easiest way to add multi-language support to your website. Built for indie developers and small teams.',
  keywords: ['i18n', 'internationalization', 'localization', 'translation', 'multi-language', 'developers'],
  authors: [{ name: 'NyxTrans Team' }],
  creator: 'NyxTrans',
  publisher: 'NyxTrans',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nyxtrans.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://nyxtrans.com'
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#1e40af',
  },
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
        alt: 'NyxTrans - Simple internationalization solution for developers and teams',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IJ9i8LXRMJmbt-dtpHRyVTeNQvtC6xwFpAfsGj7lQIk',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
        <WebVitalsWrapper />
        <Analytics />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'NyxTrans',
              url: 'https://nyxtrans.com',
              description: 'Simple i18n solution for developers and teams',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://nyxtrans.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <link rel="alternate" hrefLang="en" href="https://nyxtrans.com" />
        <link rel="alternate" hrefLang="zh-CN" href="https://nyxtrans.com/zh" />
        <link rel="alternate" hrefLang="ja" href="https://nyxtrans.com/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://nyxtrans.com" />
      </body>
    </html>
  )
}
