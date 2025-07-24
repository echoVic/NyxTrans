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
        aria-label="Illustration showing developers collaborating on internationalization"
        role="img"
      >
        {/* Background */}
        <rect width="400" height="300" fill="#F8FAFC" rx="12" />
        
        {/* Desk */}
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
        
        {/* Laptop 1 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <rect x="80" y="150" width="60" height="40" fill="#1E293B" rx="4" />
          <rect x="82" y="152" width="56" height="30" fill="#3B82F6" rx="2" />
          <rect x="85" y="155" width="50" height="24" fill="#1E40AF" rx="1" />
          {/* Code lines */}
          <rect x="87" y="157" width="20" height="2" fill="#60A5FA" />
          <rect x="87" y="161" width="30" height="2" fill="#34D399" />
          <rect x="87" y="165" width="25" height="2" fill="#F59E0B" />
          <rect x="87" y="169" width="35" height="2" fill="#EC4899" />
        </motion.g>
        
        {/* Laptop 2 */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <rect x="260" y="150" width="60" height="40" fill="#1E293B" rx="4" />
          <rect x="262" y="152" width="56" height="30" fill="#8B5CF6" rx="2" />
          <rect x="265" y="155" width="50" height="24" fill="#7C3AED" rx="1" />
          {/* Translation interface */}
          <rect x="267" y="157" width="46" height="8" fill="#A78BFA" />
          <rect x="267" y="167" width="46" height="8" fill="#C4B5FD" />
        </motion.g>
        
        {/* Person 1 - Developer */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Head */}
          <circle cx="110" cy="120" r="15" fill="#FED7AA" />
          {/* Body */}
          <rect x="100" y="135" width="20" height="25" fill="#3B82F6" rx="10" />
          {/* Arms */}
          <rect x="95" y="140" width="8" height="15" fill="#FED7AA" rx="4" />
          <rect x="117" y="140" width="8" height="15" fill="#FED7AA" rx="4" />
        </motion.g>
        
        {/* Person 2 - Translator */}
        <motion.g
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* Head */}
          <circle cx="290" cy="120" r="15" fill="#FECACA" />
          {/* Body */}
          <rect x="280" y="135" width="20" height="25" fill="#8B5CF6" rx="10" />
          {/* Arms */}
          <rect x="275" y="140" width="8" height="15" fill="#FECACA" rx="4" />
          <rect x="297" y="140" width="8" height="15" fill="#FECACA" rx="4" />
        </motion.g>
        
        {/* Connection line - representing collaboration */}
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
        
        {/* Floating icons */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Code symbol */}
          <text x="180" y="100" fill="#3B82F6" fontSize="20" fontFamily="monospace">
            {'</>'}
          </text>
        </motion.g>
        
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Translation symbol */}
          <text x="220" y="120" fill="#8B5CF6" fontSize="16">
            🌐
          </text>
        </motion.g>
        
        {/* Decorative elements */}
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