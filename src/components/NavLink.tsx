'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { Tag } from '@/components/Tag'

export function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
  childPx = '',
}: {
  href: string
  children: React.ReactNode
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
  childPx?: string
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : childPx !== '' ? 'pl-' + childPx : 'pl-4',
        active
          ? childPx !== ''
            ? 'rounded-md bg-slate-400/[.06] text-fuchsia-400 dark:bg-slate-400/[.03]'
            : 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}
