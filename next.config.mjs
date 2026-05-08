import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/sdks',
        destination: '/javascript-sdk',
        permanent: true,
      },
      {
        source: '/web-app',
        destination: '/javascript-sdk/web-app',
        permanent: true,
      },
      {
        source: '/web-app/:path*',
        destination: '/javascript-sdk/web-app',
        permanent: true,
      },
      // KLC-2330 — VM MCP route restructure: /ai-for-kvm/* -> /mcp/klever-vm/*
      {
        source: '/ai-for-kvm',
        destination: '/mcp/klever-vm',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/ai-environment-setup',
        destination: '/mcp/klever-vm/setup',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/ai-environment-setup/quick-setup',
        destination: '/mcp/klever-vm/setup/quick-setup',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/ai-environment-setup/run-locally',
        destination: '/mcp/klever-vm/setup/run-locally',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/mcp-reference/functions',
        destination: '/mcp/klever-vm/reference/functions',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/mcp-reference/mcp-prompts',
        destination: '/mcp/klever-vm/reference/prompts',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/mcp-reference/knowledge-base',
        destination: '/mcp/klever-vm/reference/knowledge-base',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/mcp-workflow',
        destination: '/mcp/klever-vm/workflow',
        permanent: true,
      },
      {
        source: '/ai-for-kvm/project-structure-for-ai-coding',
        destination: '/mcp/klever-vm/project-structure',
        permanent: true,
      },
    ]
  },
}

export default withSearch(withMDX(nextConfig))
