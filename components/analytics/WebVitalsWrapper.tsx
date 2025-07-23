'use client'

import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

// 使用 dynamic import with ssr: false
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const WebVitals = dynamic(() => import('@/components/analytics/WebVitals').then(mod => mod.WebVitals as ComponentType<{}>), { 
  ssr: false 
})

export const WebVitalsWrapper = () => {
  return <WebVitals />
}