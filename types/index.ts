export interface WaitlistFormData {
  email: string
  name?: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}