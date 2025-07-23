'use client'

import React, { useEffect, useState } from 'react'

interface SEOCheck {
  name: string
  status: 'pass' | 'fail' | 'warning'
  message: string
}

export const SEOChecker: React.FC = () => {
  const [checks, setChecks] = useState<SEOCheck[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const performSEOChecks = () => {
      const results: SEOCheck[] = []

      // 检查页面标题
      const title = document.title
      if (title && title.length >= 30 && title.length <= 60) {
        results.push({ name: '页面标题', status: 'pass', message: `标题长度合适: ${title.length}字符` })
      } else {
        results.push({ name: '页面标题', status: 'fail', message: `标题长度不合适: ${title.length}字符 (建议30-60字符)` })
      }

      // 检查meta描述
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')
      if (metaDescription && metaDescription.length >= 120 && metaDescription.length <= 160) {
        results.push({ name: 'Meta描述', status: 'pass', message: `描述长度合适: ${metaDescription.length}字符` })
      } else {
        results.push({ name: 'Meta描述', status: 'fail', message: `描述长度不合适: ${metaDescription?.length || 0}字符 (建议120-160字符)` })
      }

      // 检查H1标签
      const h1Tags = document.querySelectorAll('h1')
      if (h1Tags.length === 1) {
        results.push({ name: 'H1标签', status: 'pass', message: '页面有且仅有一个H1标签' })
      } else {
        results.push({ name: 'H1标签', status: 'fail', message: `页面有${h1Tags.length}个H1标签 (应该只有1个)` })
      }

      // 检查图片alt属性
      const images = document.querySelectorAll('img')
      const imagesWithoutAlt = Array.from(images).filter(img => !img.getAttribute('alt'))
      if (imagesWithoutAlt.length === 0) {
        results.push({ name: '图片Alt属性', status: 'pass', message: '所有图片都有alt属性' })
      } else {
        results.push({ name: '图片Alt属性', status: 'warning', message: `${imagesWithoutAlt.length}张图片缺少alt属性` })
      }

      // 检查内部链接
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"]')
      results.push({ name: '内部链接', status: 'pass', message: `发现${internalLinks.length}个内部链接` })

      // 检查结构化数据
      const structuredData = document.querySelector('script[type="application/ld+json"]')
      if (structuredData) {
        results.push({ name: '结构化数据', status: 'pass', message: '页面包含结构化数据' })
      } else {
        results.push({ name: '结构化数据', status: 'warning', message: '未发现结构化数据' })
      }

      // 检查Open Graph标签
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDescription = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogTitle && ogDescription && ogImage) {
        results.push({ name: 'Open Graph', status: 'pass', message: '包含完整的OG标签' })
      } else {
        results.push({ name: 'Open Graph', status: 'warning', message: 'OG标签不完整' })
      }

      // 检查Twitter Card
      const twitterCard = document.querySelector('meta[name="twitter:card"]')
      if (twitterCard) {
        results.push({ name: 'Twitter Card', status: 'pass', message: '包含Twitter Card标签' })
      } else {
        results.push({ name: 'Twitter Card', status: 'warning', message: '缺少Twitter Card标签' })
      }

      // 检查Canonical URL
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        results.push({ name: 'Canonical URL', status: 'pass', message: '设置了canonical URL' })
      } else {
        results.push({ name: 'Canonical URL', status: 'warning', message: '未设置canonical URL' })
      }

      // 检查robots meta
      const robots = document.querySelector('meta[name="robots"]')
      if (robots) {
        results.push({ name: 'Robots Meta', status: 'pass', message: `Robots设置: ${robots.getAttribute('content')}` })
      } else {
        results.push({ name: 'Robots Meta', status: 'warning', message: '未设置robots meta标签' })
      }

      setChecks(results)
    }

    // 延迟执行检查，确保页面完全加载
    setTimeout(performSEOChecks, 1000)
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const passCount = checks.filter(c => c.status === 'pass').length
  const failCount = checks.filter(c => c.status === 'fail').length
  const warningCount = checks.filter(c => c.status === 'warning').length

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-20 right-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        title="SEO检查工具"
      >
        🔍
      </button>

      {/* SEO Panel */}
      {isVisible && (
        <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-xl p-4 border border-gray-200 max-w-md max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">SEO检查报告</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* 统计信息 */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
            <div className="bg-green-100 text-green-800 p-2 rounded">
              <div className="font-semibold">{passCount}</div>
              <div>通过</div>
            </div>
            <div className="bg-yellow-100 text-yellow-800 p-2 rounded">
              <div className="font-semibold">{warningCount}</div>
              <div>警告</div>
            </div>
            <div className="bg-red-100 text-red-800 p-2 rounded">
              <div className="font-semibold">{failCount}</div>
              <div>失败</div>
            </div>
          </div>

          {/* 检查结果 */}
          <div className="space-y-2">
            {checks.map((check, index) => (
              <div key={index} className="flex items-start space-x-2 p-2 rounded border">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                  check.status === 'pass' ? 'bg-green-500' :
                  check.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900">{check.name}</div>
                  <div className="text-xs text-gray-600 break-words">{check.message}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 操作按钮 */}
          <div className="mt-4 space-y-2">
            <button
              onClick={() => {
                const report = checks.map(c => `${c.name}: ${c.status.toUpperCase()} - ${c.message}`).join('\n')
                navigator.clipboard.writeText(report)
                alert('SEO报告已复制到剪贴板')
              }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              复制报告
            </button>
            <button
              onClick={() => window.open('https://search.google.com/test/mobile-friendly', '_blank')}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded text-sm hover:bg-gray-700 transition-colors"
            >
              Google移动友好测试
            </button>
          </div>
        </div>
      )}
    </>
  )
}