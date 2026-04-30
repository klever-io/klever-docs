'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'

export function TableOfContents({ className }: { className?: string }) {
  let sections = useSectionStore((s) => s.sections)
  let visibleSections = useSectionStore((s) => s.visibleSections)
  let activeSection =
    visibleSections.find((section) => section !== '_top') ?? sections[0]?.id

  if (sections.length === 0) {
    return null
  }

  return (
    <aside
      className={clsx(
        'fixed bottom-0 right-8 top-24 w-56 overflow-y-auto pb-10',
        className,
      )}
      aria-labelledby="table-of-contents-title"
    >
      <nav className="border-l border-zinc-900/10 pl-5 dark:border-white/10">
        <h2
          id="table-of-contents-title"
          className="text-xs font-semibold text-zinc-900 dark:text-white"
        >
          In this page
        </h2>
        <ol role="list" className="mt-3 space-y-1">
          {sections.map((section) => {
            let isActive = section.id === activeSection

            return (
              <li key={section.id} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="table-of-contents-active-background"
                    className="absolute inset-0 rounded-md bg-fuchsia-50 ring-1 ring-inset ring-fuchsia-500/10 dark:bg-fuchsia-500/10 dark:ring-fuchsia-400/10"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      mass: 0.5,
                    }}
                  />
                )}
                <Link
                  href={`#${section.id}`}
                  className={clsx(
                    'relative z-10 flex items-start justify-between gap-2 rounded-md px-3 py-1.5 text-sm leading-5 transition',
                    isActive
                      ? 'text-fuchsia-600 dark:text-fuchsia-300'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span>{section.title}</span>
                  {section.tag && (
                    <Tag variant="small" color="zinc">
                      {section.tag}
                    </Tag>
                  )}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}
