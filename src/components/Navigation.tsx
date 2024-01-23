'use client'

import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { TreeNavigationItem } from './TreeNavigationItem'

export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
    children?: Array<TreeNavGroup>
  }>
}

export interface TreeNavGroup {
  title: string
  href: string
  children?: Array<TreeNavGroup>
}

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

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

function VisibleSectionHighlight({
  group,
  pathname,
}: {
  group: NavGroup
  pathname: string
}) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation(),
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0],
    ),
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight

  let isFromChildren = false
  let top =
    group.links.findIndex((link) => {
      if (link.href === pathname) return true

      if (link.children) {
        isFromChildren = true
        return findActivePageRecursive({
          parentRef: link.href,
          pathname,
          children: link.children,
        })
      }
    }) *
      itemHeight +
    firstVisibleSectionIndex * itemHeight

  let final = isFromChildren ? remToPx(2) : height

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height: final, top }}
    />
  )
}

export function findActivePageRecursive({
  pathname,
  parentRef,
  children,
}: {
  parentRef: string
  pathname: string
  children: Array<TreeNavGroup>
}): boolean {
  if (!children) return false

  let isValid =
    children.findIndex((child) => {
      if (
        parentRef + child.href === pathname ||
        pathname.includes(parentRef + child.href)
      )
        return true

      if (child.children) {
        return findActivePageRecursive({
          parentRef: parentRef + child.href,
          pathname,
          children: child.children,
        })
      }
    }) !== -1

  return isValid
}

function ActivePageMarker({
  group,
  pathname,
}: {
  group: NavGroup
  pathname: string
}) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => {
    if (link.href === pathname) return true

    if (link.children) {
      return findActivePageRecursive({
        parentRef: link.href,
        pathname,
        children: link.children,
      })
    }
  })
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-fuchsia-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({
  group,
  className,
}: {
  group: NavGroup
  className?: string
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [pathname, sections] = useInitialValue(
    [usePathname(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation,
  )

  let isActiveGroup =
    group.links.findIndex((link) => {
      if (link.href === pathname) return true

      if (link.children) {
        return findActivePageRecursive({
          parentRef: link.href,
          pathname,
          children: link.children,
        })
      }
    }) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) =>
            link.children && link.children.length > 0 ? (
              <TreeNavigationItem
                key={link.href}
                href={link.href}
                childrens={link.children}
                title={link.title}
                pathname={pathname}
              />
            ) : (
              <motion.li key={link.href} layout="position" className="relative">
                <NavLink href={link.href} active={link.href === pathname}>
                  {link.title}
                </NavLink>
                <AnimatePresence mode="popLayout" initial={false}>
                  {link.href === pathname && sections.length > 0 && (
                    <motion.ul
                      role="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {sections.map((section) => (
                        <li key={section.id}>
                          <NavLink
                            href={`${link.href}#${section.id}`}
                            tag={section.tag}
                            isAnchorLink
                          >
                            {section.title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ),
          )}
        </ul>
      </div>
    </li>
  )
}

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
      { title: 'Become a validator', href: '/become-a-validator' },
      { title: 'Staking', href: '/staking' },
      { title: 'Delegation', href: '/delegation' },
      { title: 'Account Permissions', href: '/account-permissions' },
      { title: 'Multisignature', href: '/multisignature' },
      { title: 'Royalties', href: '/royalties' },
      { title: 'Testnet', href: '/testnet' },
      { title: 'Contracts', href: '/contracts' },
      { title: 'Exchange Integration', href: '/exchange-integration' },
      { title: 'Node Operations', href: '/node-operations' },
      { title: 'About Our Technology', href: '/about-our-technology' },
    ],
  },

  {
    title: 'Klever SDK',
    links: [
      {
        title: 'Introduction to KleverChain SDK',
        href: '/introduction-to-kleverchain-sdk',
      },
      { title: 'KleverChain SDKs', href: '/sdks' },
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
]

export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : ''}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
