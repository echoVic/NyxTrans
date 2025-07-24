export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NyxTrans',
  description: 'NyxTrans is a powerful i18n solution that helps developers add multi-language support to their websites quickly and easily. With our simple API and easy integration process, you can add multi-language support to your website in just a few minutes with minimal code changes.',
  url: 'https://nyxtrans.com',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  featureList: [
    'CLI tool for automated text extraction and translation workflow',
    'Web platform for translation management and collaboration',
    'Frontend and backend SDKs for seamless integration',
    'AI-powered translation with GPT integration',
    'Support for React, Vue, Angular, Node.js, Python, and Java',
    'Batch processing for efficient workflow',
    'Real-time translation updates',
    'Simple key-based text replacement system'
  ],
  screenshot: 'https://nyxtrans.com/og-image.jpg',
  softwareVersion: '0.0.1',
  datePublished: '2025-08-15',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127'
  }
}

export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is NyxTrans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NyxTrans is a powerful i18n solution that helps developers add multi-language support to their websites quickly and easily. With our simple API and easy integration process, you can add multi-language support to your website in just a few minutes with minimal code changes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does NyxTrans work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NyxTrans provides a powerful i18n solution that helps developers add multi-language support to their websites quickly and easily. With our simple API and easy integration process, you can add multi-language support to your website in just a few minutes with minimal code changes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is NyxTrans free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NyxTrans offers a free tier for small projects and indie developers. We also have paid plans for larger teams and enterprises.'
      }
    }
  ]
}

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NyxTrans',
  url: 'https://nyxtrans.com',
  logo: 'https://nyxtrans.com/logo.png',
  description: 'Simple i18n solution for developers',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@nyxtrans.com',
    contactType: 'customer service'
  },
  sameAs: [
    'https://twitter.com/echo_vic',
    'https://github.com/echoVic/nyxtrans'
  ]
}
