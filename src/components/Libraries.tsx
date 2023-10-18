import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoNext from '@/images/logos/next-js.svg'
import logoJs from '@/images/logos/js.svg'
import logoSvelte from '@/images/logos/svelte.svg'

const libraries = [
  {
    href: 'https://github.com/klever-io/klever-next-example',
    name: 'Next',
    description:
      'A React framework for building server-rendered and static web applications with ease.',
    logo: logoNext,
  },
  {
    href: 'https://github.com/klever-io/klever-svelte-example',
    name: 'Svelte',
    description:
      'A lightweight JavaScript library for building web applications with a focus on simplicity and efficiency.',
    logo: logoSvelte,
  },
  {
    href: 'https://github.com/klever-io/klever-vanilla-example',
    name: 'Vanilla JS',
    description:
      'Pure JavaScript for web development without libraries or frameworks.',
    logo: logoJs,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  {`Klever ${library.name} SDK`}
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
