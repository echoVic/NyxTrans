export type Language = 'zh' | 'en'

export interface Translations {
  nav: {
    features: string
    workflow: string
    waitlist: string
    login: string
    getStarted: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
  }
  workflow: {
    title: string
    titleHighlight: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
    step5Title: string
    step5Desc: string
    step6Title: string
    step6Desc: string
    codeExampleTitle: string
    codeExampleDesc: string
    beforeTitle: string
    afterTitle: string
  }
  waitlist: {
    title: string
    titleHighlight: string
    subtitle: string
    benefit1Title: string
    benefit1Desc: string
    benefit2Title: string
    benefit2Desc: string
    benefit3Title: string
    benefit3Desc: string
    namePlaceholder: string
    emailPlaceholder: string
    submitButton: string
    submittingButton: string
    privacyText: string
    socialProof: string
    successTitle: string
    successDesc: string
    continueButton: string
  }
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      features: '功能特性',
      workflow: '工作流程',
      waitlist: '加入等待列表',
      login: '登录',
      getStarted: '开始使用'
    },
    hero: {
      badge: '现已开放内测 - 加入等待列表',
      title: '让代码',
      titleHighlight: '国际化',
      subtitle: '专为独立开发者和小团队打造的多语言支持工具。无需复杂配置，轻松实现全球化部署。',
      ctaPrimary: '加入等待列表',
      ctaSecondary: '查看演示',
      feature1Title: '一键配置',
      feature1Desc: '安装CLI工具，几分钟内完成配置，无需复杂设置',
      feature2Title: '智能翻译',
      feature2Desc: 'AI驱动的翻译引擎，支持人工审核和质量优化',
      feature3Title: '灵活部署',
      feature3Desc: '支持React、Vue、Next.js等主流框架'
    },
    workflow: {
      title: '简单流程，',
      titleHighlight: '轻松国际化',
      subtitle: '从代码扫描到翻译部署，NyxTrans为开发者提供完整的国际化解决方案',
      step1Title: 'CLI扫描代码',
      step1Desc: '使用命令行工具扫描项目中的文本内容',
      step2Title: '提取文本并生成Key',
      step2Desc: '智能提取文本内容并生成唯一标识符',
      step3Title: '替换代码中的文本',
      step3Desc: '将硬编码文本替换为国际化函数调用',
      step4Title: '上传文本到平台',
      step4Desc: '将提取的文本上传到NyxTrans翻译平台',
      step5Title: '翻译管理',
      step5Desc: '人工翻译、机器翻译或AI翻译多种选择',
      step6Title: '文案发布',
      step6Desc: '获取完成的翻译文件并集成到项目',
      codeExampleTitle: '代码示例',
      codeExampleDesc: '看看NyxTrans如何简化您的国际化工作流程',
      beforeTitle: '使用前 - 硬编码文本',
      afterTitle: '使用后 - 国际化支持'
    },
    waitlist: {
      title: '抢先体验 ',
      titleHighlight: 'NyxTrans',
      subtitle: '加入等待列表，成为首批用户，享受早鸟优惠和专属支持',
      benefit1Title: '优先访问权',
      benefit1Desc: '第一时间获得产品访问权限',
      benefit2Title: '早鸟优惠',
      benefit2Desc: '享受限时早鸟价格优惠',
      benefit3Title: '专属支持',
      benefit3Desc: '获得一对一技术支持服务',
      namePlaceholder: '您的姓名（可选）',
      emailPlaceholder: '您的邮箱地址',
      submitButton: '加入等待列表',
      submittingButton: '提交中...',
      privacyText: '我们承诺保护您的隐私，不会向第三方分享您的信息',
      socialProof: '已有 1,234+ 位开发者加入等待列表',
      successTitle: '感谢您的关注！',
      successDesc: '我们已收到您的申请。您将是第一批体验 NyxTrans 的用户之一。我们会在产品准备就绪时第一时间通知您。',
      continueButton: '继续了解更多'
    }
  },
  en: {
    nav: {
      features: 'Features',
      workflow: 'Workflow',
      waitlist: 'Join Waitlist',
      login: 'Login',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'Now in Beta - Join the Waitlist',
      title: 'Simplify',
      titleHighlight: 'Internationalization',
      subtitle: 'The easiest way to add multi-language support to your website. Built for indie developers and small teams who want to go global without the complexity.',
      ctaPrimary: 'Join Waitlist',
      ctaSecondary: 'View Demo',
      feature1Title: 'One-Click Setup',
      feature1Desc: 'Install our CLI tool and get started in minutes, not hours',
      feature2Title: 'Smart Translation',
      feature2Desc: 'AI-powered translations with human review options',
      feature3Title: 'Deploy Anywhere',
      feature3Desc: 'Works with React, Vue, Next.js, and any modern framework'
    },
    workflow: {
      title: 'Simple Process, ',
      titleHighlight: 'Easy Internationalization',
      subtitle: 'From code scanning to translation deployment, NyxTrans provides a complete internationalization solution for developers',
      step1Title: 'CLI Code Scanning',
      step1Desc: 'Use command-line tools to scan text content in your project',
      step2Title: 'Extract Text & Generate Keys',
      step2Desc: 'Intelligently extract text content and generate unique identifiers',
      step3Title: 'Replace Text in Code',
      step3Desc: 'Replace hardcoded text with internationalization function calls',
      step4Title: 'Upload to Platform',
      step4Desc: 'Upload extracted text to the NyxTrans translation platform',
      step5Title: 'Translation Management',
      step5Desc: 'Choose from human translation, machine translation, or AI translation',
      step6Title: 'Content Publishing',
      step6Desc: 'Get completed translation files and integrate them into your project',
      codeExampleTitle: 'Code Example',
      codeExampleDesc: 'See how NyxTrans simplifies your internationalization workflow',
      beforeTitle: 'Before - Hardcoded Text',
      afterTitle: 'After - Internationalization Support'
    },
    waitlist: {
      title: 'Get Early Access to ',
      titleHighlight: 'NyxTrans',
      subtitle: 'Join the waitlist to become one of the first users and enjoy early bird pricing and exclusive support',
      benefit1Title: 'Priority Access',
      benefit1Desc: 'Get product access as soon as it\'s available',
      benefit2Title: 'Early Bird Pricing',
      benefit2Desc: 'Enjoy limited-time early bird pricing',
      benefit3Title: 'Exclusive Support',
      benefit3Desc: 'Get one-on-one technical support',
      namePlaceholder: 'Your Name (Optional)',
      emailPlaceholder: 'Your Email Address',
      submitButton: 'Join Waitlist',
      submittingButton: 'Submitting...',
      privacyText: 'We promise to protect your privacy and will not share your information with third parties',
      socialProof: '1,234+ developers have already joined the waitlist',
      successTitle: 'Thank you for your interest!',
      successDesc: 'We have received your application. You will be one of the first users to experience NyxTrans. We will notify you as soon as the product is ready.',
      continueButton: 'Continue Learning More'
    }
  }
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.zh
}