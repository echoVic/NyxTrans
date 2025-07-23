'use client'

import React, { useState, useEffect } from 'react'

const deviceSizes = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12', width: 390, height: 844 },
  { name: 'iPhone 12 Pro Max', width: 428, height: 926 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'Desktop', width: 1920, height: 1080 },
]

export const MobileTestHelper: React.FC = () => {
  // 初始状态
  const [selectedDevice, setSelectedDevice] = useState(deviceSizes[0])
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  
  // 仅在客户端执行
  useEffect(() => {
    setMounted(true)
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
    
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // 非开发环境不显示
  if (process.env.NODE_ENV !== 'development') {
    return null
  }
  
  // 服务器端渲染时不显示内容
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        title="Mobile Test Tool"
      >
        📱
      </button>

      {/* Test Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-xl p-4 border border-gray-200 max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Mobile Testing</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Device Size
              </label>
              <select
                value={selectedDevice.name}
                onChange={(e) => {
                  const device = deviceSizes.find(d => d.name === e.target.value)
                  if (device) setSelectedDevice(device)
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                {deviceSizes.map((device) => (
                  <option key={device.name} value={device.name}>
                    {device.name} ({device.width}×{device.height})
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-600">
              <p>{`Current Viewport: ${selectedDevice.width}×${selectedDevice.height}`}</p>
              <p>{`Actual Viewport: ${viewportSize.width}×${viewportSize.height}`}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 text-sm">Test Checklist</h4>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Navigation displays properly on mobile</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Hero section text size is appropriate</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Feature cards layout is correct</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Forms are easy to fill on mobile</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Button touch areas are large enough</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Footer information displays completely</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                // 模拟设备尺寸
                const iframe = document.createElement('iframe')
                iframe.src = window.location.href
                iframe.style.width = selectedDevice.width + 'px'
                iframe.style.height = selectedDevice.height + 'px'
                iframe.style.border = '1px solid #ccc'
                iframe.style.position = 'fixed'
                iframe.style.top = '50%'
                iframe.style.left = '50%'
                iframe.style.transform = 'translate(-50%, -50%)'
                iframe.style.zIndex = '9999'
                iframe.style.backgroundColor = 'white'
                
                const overlay = document.createElement('div')
                overlay.style.position = 'fixed'
                overlay.style.top = '0'
                overlay.style.left = '0'
                overlay.style.width = '100%'
                overlay.style.height = '100%'
                overlay.style.backgroundColor = 'rgba(0,0,0,0.8)'
                overlay.style.zIndex = '9998'
                overlay.onclick = () => {
                  document.body.removeChild(overlay)
                  document.body.removeChild(iframe)
                }
                
                document.body.appendChild(overlay)
                document.body.appendChild(iframe)
              }}
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md text-sm hover:bg-primary-700 transition-colors"
            >
              预览设备尺寸
            </button>
          </div>
        </div>
      )}
    </>
  )
}