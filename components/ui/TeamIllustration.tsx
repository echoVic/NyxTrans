'use client'

import { motion } from 'framer-motion'

interface TeamIllustrationProps {
  className?: string
}

export const TeamIllustration: React.FC<TeamIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* 背景 */}
        <rect width="400" height="300" fill="#F8FAFC" rx="12" />
        
        {/* 桌子 */}
        <motion.rect
          x="50"
          y="180"
          width="300"
          height="80"
          fill="#E2E8F0"
          rx="8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        {/* 笔记本电脑1 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <rect x="80" y="150" width="60" height="40" fill="#1E293B" rx="4" />
          <rect x="82" y="152" width="56" height="30" fill="#3B82F6" rx="2" />
          <rect x="85" y="155" width="50" height="24" fill="#1E40AF" rx="1" />
          {/* 代码行 */}
          <rect x="87" y="157" width="20" height="2" fill="#60A5FA" />
          <rect x="87" y="161" width="30" height="2" fill="#34D399" />
          <rect x="87" y="165" width="25" height="2" fill="#F59E0B" />
          <rect x="87" y="169" width="35" height="2" fill="#EC4899" />
        </motion.g>
        
        {/* 笔记本电脑2 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <rect x="260" y="150" width="60" height="40" fill="#1E293B" rx="4" />
          <rect x="262" y="152" width="56" height="30" fill="#8B5CF6" rx="2" />
          <rect x="265" y="155" width="50" height="24" fill="#7C3AED" rx="1" />
          {/* 翻译界面 */}
          <rect x="267" y="157" width="46" height="8" fill="#A78BFA" />
          <rect x="267" y="167" width="46" height="8" fill="#C4B5FD" />
        </motion.g>
        
        {/* 人物1 - 开发者 */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* 头部 */}
          <circle cx="110" cy="120" r="15" fill="#FED7AA" />
          {/* 身体 */}
          <rect x="100" y="135" width="20" height="25" fill="#3B82F6" rx="10" />
          {/* 手臂 */}
          <rect x="95" y="140" width="8" height="15" fill="#FED7AA" rx="4" />
          <rect x="117" y="140" width="8" height="15" fill="#FED7AA" rx="4" />
        </motion.g>
        
        {/* 人物2 - 翻译者 */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* 头部 */}
          <circle cx="290" cy="120" r="15" fill="#FECACA" />
          {/* 身体 */}
          <rect x="280" y="135" width="20" height="25" fill="#8B5CF6" rx="10" />
          {/* 手臂 */}
          <rect x="275" y="140" width="8" height="15" fill="#FECACA" rx="4" />
          <rect x="297" y="140" width="8" height="15" fill="#FECACA" rx="4" />
        </motion.g>
        
        {/* 连接线 - 表示协作 */}
        <motion.path
          d="M140 165 Q200 140 260 165"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        
        {/* 浮动图标 */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* 代码符号 */}
          <text x="180" y="100" fill="#3B82F6" fontSize="20" fontFamily="monospace">
            {'</>'}
          </text>
        </motion.g>
        
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* 翻译符号 */}
          <text x="220" y="120" fill="#8B5CF6" fontSize="16">
            🌐
          </text>
        </motion.g>
        
        {/* 装饰元素 */}
        <motion.circle
          cx="350"
          cy="50"
          r="3"
          fill="#60A5FA"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="50"
          cy="80"
          r="2"
          fill="#8B5CF6"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
        />
      </svg>
    </div>
  )
}