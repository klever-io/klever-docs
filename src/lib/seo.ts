import { Metadata } from 'next'

export interface SEOProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function generateMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  type = 'article',
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const baseUrl = 'https://docs.klever.io'
  const fullUrl = `${baseUrl}${path}`
  
  const defaultKeywords = [
    'Klever',
    'blockchain',
    'documentation',
    'API',
    'SDK',
    'cryptocurrency',
    'smart contracts',
    'KLV',
  ]
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])]

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: type === 'website' ? 'website' : 'article',
      locale: 'en_US',
      url: fullUrl,
      title,
      description,
      siteName: 'Klever Docs',
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@KleverApp',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateBreadcrumbSchema(path: string) {
  const baseUrl = 'https://docs.klever.io'
  const pathSegments = path.split('/').filter(Boolean)
  
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    }
  ]
  
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      item: `${baseUrl}${currentPath}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }
}