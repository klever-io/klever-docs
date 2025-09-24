import glob from 'fast-glob'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { StructuredData } from '@/components/StructuredData'

import { type Section } from '@/components/SectionProvider'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Klever Docs',
    default: 'Klever Documentation',
  },
  description: 'Learn everything there is to know about the Klever services and integrate Klever into your product. Comprehensive guides, APIs, SDKs, and platform resources.',
  keywords: ['Klever', 'blockchain', 'documentation', 'API', 'SDK', 'cryptocurrency', 'smart contracts', 'KLV'],
  authors: [{ name: 'Klever' }],
  creator: 'Klever',
  publisher: 'Klever',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://docs.klever.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.klever.io',
    title: 'Klever Documentation',
    description: 'Learn everything there is to know about the Klever services and integrate Klever into your product. Comprehensive guides, APIs, SDKs, and platform resources.',
    siteName: 'Klever Docs',
    // Note: Add an actual og-image.png (1200x630) to the public folder
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Klever Documentation',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klever Documentation',
    description: 'Learn everything there is to know about the Klever services and integrate Klever into your product.',
    // Note: Add an actual og-image.png (1200x630) to the public folder
    // images: ['/og-image.png'],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
