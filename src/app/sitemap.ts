import { MetadataRoute } from 'next'
import glob from 'fast-glob'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docs.klever.io'
  
  // Get all MDX pages
  const pages = await glob('**/*.mdx', { cwd: 'src/app' })
  
  // Convert file paths to URLs and add metadata
  const routes: MetadataRoute.Sitemap = pages.map((page) => {
    const url = '/' + page.replace(/(^|\/)page\.mdx$/, '')
    
    return {
      url: `${baseUrl}${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: url === '/' ? 1 : 0.8,
    }
  })

  // Add any additional static routes if needed
  const additionalRoutes: MetadataRoute.Sitemap = [
    // Add any non-MDX routes here if they exist
  ]

  return [...routes, ...additionalRoutes]
}