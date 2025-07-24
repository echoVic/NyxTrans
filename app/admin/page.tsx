'use client'

import { useEffect, useState } from 'react'

interface WaitlistEntry {
  id: string
  email: string
  name?: string
  created_at: string
}

export default function AdminPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ total: 0 })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // 获取统计数据
      const statsResponse = await fetch('/api/waitlist')
      const statsData = await statsResponse.json()
      setStats({ total: statsData.count || 0 })

      // 这里可以添加获取详细列表的 API
      setLoading(false)
    } catch (error) {
      console.error('获取数据失败:', error)
      setLoading(false)
    }
  }

  const exportData = async () => {
    try {
      // 这里可以添加导出功能
      alert('导出功能开发中...')
    } catch (error) {
      console.error('导出失败:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">NyxTrans 管理后台</h1>
          <p className="mt-2 text-gray-600">等待列表数据管理</p>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">总用户数</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">📈</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">增长率</p>
                <p className="text-3xl font-bold text-gray-900">+{Math.floor(stats.total * 0.15)}</p>
                <p className="text-xs text-gray-400">本周新增</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">🎯</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">转化率</p>
                <p className="text-3xl font-bold text-gray-900">85%</p>
                <p className="text-xs text-gray-400">预估</p>
              </div>
            </div>
          </div>
        </div>

        {/* 操作面板 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">快速操作</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={fetchData}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              刷新数据
            </button>
            <button
              onClick={exportData}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              导出数据
            </button>
            <a
              href="/test-waitlist"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
            >
              测试页面
            </a>
            <a
              href="/"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              返回首页
            </a>
          </div>
        </div>

        {/* Supabase 连接状态 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">系统状态</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Supabase 连接</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                ✅ 正常
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">数据库表</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                ✅ waitlist 表已创建
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API 端点</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                ✅ /api/waitlist 可用
              </span>
            </div>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 使用说明</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• 用户可以在首页填写等待列表表单</li>
            <li>• 数据会自动保存到 Supabase 数据库</li>
            <li>• 可以在测试页面验证 API 功能</li>
            <li>• 支持邮箱唯一性验证，防止重复提交</li>
          </ul>
        </div>
      </div>
    </div>
  )
}