'use client'

import { useEffect, useState } from 'react'

export function useWaitlistStats() {
  const [count, setCount] = useState<number>(1234) // 默认显示值
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await fetch('/api/waitlist')
        if (!response.ok) {
          throw new Error('获取统计数据失败')
        }
        
        const data = await response.json()
        setCount(data.count || 0)
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误')
        // 保持默认值，不影响用户体验
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { count, isLoading, error }
}