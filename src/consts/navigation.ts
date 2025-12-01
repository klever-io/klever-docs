import { NavGroup } from '@/types/NavGroup'

export const navigation: Array<NavGroup> = [
  {
    title: 'Klever Documentation',
    links: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'Klever Wallet',
    links: [{ title: 'Quickstart', href: '/quickstart' }],
  },
  {
    title: 'Tutorials',
    links: [
      { title: 'Deposit KDA Pool', href: '/tutorials/kda-pool' },
      { title: 'Klever Blockchain IDE', href: '/tutorials/kleverchain-ide' },
    ],
  },
  {
    title: 'Klever Blockchain',
    links: [
      {
        title: 'Welcome to the Klever Blockchain documentation website!',
        href: '/welcome-to-the-Klever-Blockchain-documentation-website',
      },
      {
        title: 'Getting started with Klever Blockchain',
        href: '/getting-started-with-klever-blockchain',
      },
      { title: 'API & SDK', href: '/api-and-sdk' },
      { title: 'The Klever VM', href: '/klever-vm' },
      { title:"Local Testnet", href: "/create-local-testnet" },
      {
        title: 'Smart Contracts',
        href: '/smart-contracts',
        children: [
          {
            title: 'Reference',
            href: '/reference',
            children: [
              { title: 'Anotations', href: '/annotations' },
              { title: 'Modules', href: '/modules' },
              { title: 'Payments', href: '/payments' },
              { title: 'Calls', href: '/calls' },
              { title: 'BuiltIn Contracts', href: '/builtin-contracts' },
              { title: 'Upgrading', href: '/upgrading' },
              { title: 'API Functions', href: '/api-functions' },
              { title: 'Storage Mappers', href: '/storage-mappers' },
              {
                title: 'Rust Testing Framework',
                href: '/rust-testing-framework',
              },
              {
                title: 'Testing Framework Functions Reference',
                href: '/testing-framework-functions',
              },
              { title: 'Debugging', href: '/debugging' },
              { title: 'Random Numbers', href: '/random-numbers' },
            ],
          },
          {
            title: 'Data',
            href: '/data',
            children: [
              { title: 'Simple Values', href: '/simple-values' },
              { title: 'Composite Values', href: '/composite-values' },
              { title: 'Custom Types', href: '/custom-types' },
              { title: 'Defaults', href: '/defaults' },
              { title: 'Multi-Values', href: '/multi-values' },
              { title: 'Code Metadata', href: '/code-metadata' },
              { title: 'ABI', href: '/ABI' },
            ],
          },
          {
            title: 'Best Practices',
            href: '/best-practices',
            children: [
              { title: 'Basics', href: '/basics' },
              { title: 'BigUint Operations', href: '/biguint-operations' },
              { title: 'Dynamic Allocation', href: '/dynamic-allocation' },
            ],
          },
          {
            title: 'How To',
            href: '/how-to',
            children: [
              { title: 'Call Smart Contracts from Frontend', href: '/calling-your-contract-in-the-front-end' },
              { title: 'From JavaScript to Rust', href: '/from-javascript-to-rust' },
              { title: 'Create a Crowdfunding', href: '/crowdfunding' },
            ],
          },
          {
            title: 'Config & Tooling',
            href: '/config-and-tooling',
            children: [
              { title: 'Build Reference', href: '/build-reference' },
              { title: 'Configuration', href: '/configuration' },
              { title: 'CLI', href: '/CLI' },
              { title: 'Memory Allocation', href: '/memory-allocation' },
            ],
          },
          {
            title: 'Testing',
            href: '/testing',
            children: [
              {
                title: 'Testing In Go',
                href: '/testing-in-go',
              },
              {
                title: 'Scenarios',
                href: '/scenarios',
                children: [
                  { title: 'JSON Structure', href: '/JSON-structure' },
                  { title: 'Simple Values', href: '/simple-values' },
                  { title: 'Complex Values', href: '/complex-values' },
                  { title: 'Runnning Scenarios', href: '/running-scenarios' },
                  {
                    title: 'Generating Scenarios',
                    href: '/generating-scenarios',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Using AI on KVM',
        href: '/using-ai-on-kvm',
        children: [
              { title: 'Installation Guide', href: '/ai-environment-setup' },
              { title: 'Reference', href: '/mcp-reference' },
              { title: 'Workflow Example', href: '/mcp-workflow' },
              { title: 'Project structure for I.A coding', href: '/project-structure-for-ai-coding' },
            ],
          },
      { title: 'Staking', href: '/staking' },
      { title: 'Delegation', href: '/delegation' },
      { title: 'Account Permissions', href: '/account-permissions' },
      { title: 'Multisignature', href: '/multisignature' },
      { title: 'Royalties', href: '/royalties' },
      {
        title: 'Semi-Fungible Tokens (SFT)',
        href: '/semi-fungible-tokens',
        children: [
          { title: 'Token Comparison', href: '/token-comparison' },
          { title: 'Use Cases', href: '/use-cases' },
          { title: 'Application Guide', href: '/application-guide' },
        ],
      },
      { title: 'Testnet', href: '/testnet' },
      { title: 'Contracts', href: '/contracts' },
      { title: 'Exchange Integration', href: '/exchange-integration' },
      { title: 'Node Operations', href: '/node-operations' },
      {
        title: 'Bridge',
        href: '/bridge',
        children: [
          {
            title: 'Relayers',
            href: '/relayers',
          },
          {
            title: 'Tokens',
            href: '/tokens',
          },
          {
            title: 'Transfer Flow',
            href: '/transfer-flow',
            children: [
              { title: 'From Klever Blockchain', href: '/kc-evm' },
              { title: 'To Klever Blockchain', href: '/evm-kc' },
            ],
          },
          {
            title: 'User Interaction',
            href: '/user-interaction',
          }
        ]
      },
      { title: 'Become a validator', href: '/become-a-validator' },
      { title: 'About Our Technology', href: '/about-our-technology' },
    ],
  },

  {
    title: 'Klever SDK',
    links: [
      {
        title: 'Introduction to Klever Blockchain SDK',
        href: '/introduction-to-kleverchain-sdk',
      },
      { title: 'Klever Blockchain SDKs', href: '/sdks' },
      {
        title: "Go",
        href: "/go",
      },
      {
        title: "C#",
        href: "/csharp",
      },
      {
        title: 'Node.js',
        href: '/node.js',
      },
      { title: 'Web App', href: '/web-app' },
      { title: 'Unity', href: '/unity' },
      { title: 'Available Transactions', href: '/available-transactions' },
      { title: 'Contract Details', href: '/contract-details' },

      //Relevant Info
      { title: 'Precision', href: '/precision' },
      { title: 'KAPPS Flowcharts', href: '/kapps-flowcharts' },
      { title: 'Types', href: '/types' },

      //Legacy
      { title: 'Legacy', href: '/legacy' },
    ],

  },
    {
    title: 'Side Pill',
    links: [
      { title: 'Converting Contract from ETH to Klever', href: '/converting-contract-from-eth-to-klever' }
    ],

  },
]
