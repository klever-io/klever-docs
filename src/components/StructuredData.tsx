import { type Metadata } from 'next'

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Klever Documentation',
    description: 'Learn everything there is to know about the Klever services and integrate Klever into your product. Comprehensive guides, APIs, SDKs, and platform resources.',
    url: 'https://docs.klever.io',
    publisher: {
      '@type': 'Organization',
      name: 'Klever',
      url: 'https://klever.io',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://docs.klever.io/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function DocumentationStructuredData({ 
  title, 
  description, 
  url 
}: { 
  title: string
  description: string
  url: string 
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'Klever',
      url: 'https://klever.io',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    dateModified: new Date().toISOString(),
    datePublished: new Date().toISOString(),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}