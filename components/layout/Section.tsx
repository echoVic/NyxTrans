import { cn } from '@/lib/utils'
import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  padding = 'lg'
}) => {
  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-24'
  }

  return (
    <section id={id} className={cn(paddings[padding], className)}>
      {children}
    </section>
  )
}