import { NavGroup } from '@/types/NavGroup'

export const navigation: Array<NavGroup> = [
  {
    title: 'Klever Documentation',
    links: [{ title: 'Introduction', href: '/' }],
  },
  {
    title: 'AI-Assisted Development',
    links: [
      { title: 'Overview', href: '/ai' },
      {
        title: 'Klever MCPs',
        href: '/mcp',
        children: [
          {
            title: 'Klever VM',
            href: '/klever-vm',
            children: [
              {
                title: 'Setup',
                href: '/setup',
                children: [
                  { title: 'Quick Setup', href: '/quick-setup' },
                  { title: 'Run Locally', href: '/run-locally' },
                ],
              },
              {
                title: 'Reference',
                href: '/reference',
                children: [
                  { title: 'Functions', href: '/functions' },
                  { title: 'Prompts', href: '/prompts' },
                  { title: 'Knowledge Base', href: '/knowledge-base' },
                ],
              },
              { title: 'Workflow Example', href: '/workflow' },
              { title: 'Project Structure', href: '/project-structure' },
            ],
          },
          {
            title: 'Klever Connect',
            href: '/klever-connect',
            children: [
              {
                title: 'Setup',
                href: '/setup',
                children: [
                  { title: 'Marketplace', href: '/marketplace' },
                  { title: 'Manual', href: '/manual' },
                  { title: 'Public Hosted', href: '/public-hosted' },
                ],
              },
              {
                title: 'Reference',
                href: '/reference',
                children: [
                  { title: 'Tools', href: '/tools' },
                  { title: 'Resources', href: '/resources' },
                  { title: 'Env Vars', href: '/env-vars' },
                ],
              },
            ],
          },
        ],
      },
      { title: 'Skills', href: '/skills' },
    ],
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
            children: [
              { title: 'Running a Relayer', href: '/running-a-relayer' },
            ],
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
    title: 'SDKs & Tools',
    links: [
      {
        title: 'Javascript SDK',
        href: '/javascript-sdk',
        children: [
          { title: 'Node.js', href: '/node-js' },
          { title: 'Web App', href: '/web-app' },
          {
            title: 'Connect Packages',
            href: '/connect-packages',
            children: [
              { title: 'connect-core', href: '/connect-core' },
              { title: 'connect-encoding', href: '/connect-encoding' },
              { title: 'connect-crypto', href: '/connect-crypto' },
              { title: 'connect-provider', href: '/connect-provider' },
              { title: 'connect-transactions', href: '/connect-transactions' },
              { title: 'connect-wallet', href: '/connect-wallet' },
              { title: 'connect-contracts', href: '/connect-contracts' },
              { title: 'connect-react', href: '/connect-react' },
            ],
          },
        ],
      },
      {
        title: 'Go',
        href: '/go',
      },
      {
        title: 'C#',
        href: '/csharp',
      },
      { title: 'Unity', href: '/unity' },
      { title: 'Available Transactions', href: '/available-transactions' },
      { title: 'Contract Details', href: '/contract-details' },

      //Relevant Info
      { title: 'Precision', href: '/precision' },
      { title: 'KAPPS Flowcharts', href: '/kapps-flowcharts' },
      { title: 'Types', href: '/types' },

      //Legacy
      {
        title: 'Legacy',
        href: '/legacy',
        children: [
          { title: 'SDK v2 (@klever/sdk)', href: '/sdk-v2' },
        ],
      },
    ],

  },
    {
    title: 'Side Pill',
    links: [
      { title: 'Benchmark Tool', href: '/benchmark-tool' },
      { title: 'Converting Contract from ETH to Klever', href: '/converting-contract-from-eth-to-klever' }
    ],

  },
]
