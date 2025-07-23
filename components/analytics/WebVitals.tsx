'use client'

import React, { useEffect } from 'react'
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals'

interface WindowWithGtag extends Window {
  gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void
}

function sendToAnalytics(metric: Metric) {
  // 这里可以发送到Google Analytics或其他分析服务
  console.log('Web Vitals:', metric)
  
  // 示例：发送到Google Analytics
  if (typeof window !== 'undefined') {
    const windowWithGtag = window as WindowWithGtag
    if (windowWithGtag.gtag) {
      windowWithGtag.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }
  }
}

export const WebVitals: React.FC = () => {
  useEffect(() => {
    // 监控所有Core Web Vitals指标
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onINP(sendToAnalytics) // 使用 INP 替代 FID
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  }, [])

  return null
}
