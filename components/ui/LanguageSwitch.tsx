'use client'

import type { Language } from '@/lib/i18n'
import { Globe } from 'lucide-react'
import { useState } from 'react'

interface LanguageSwitchProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  className?: string
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  currentLang,
  onLanguageChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLang)

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                currentLang === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}