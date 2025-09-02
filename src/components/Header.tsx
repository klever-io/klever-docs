'use client'

import clsx from 'clsx'
import { create } from 'zustand'
import Link from 'next/link'
import { forwardRef, Suspense, Fragment, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Dialog, Transition } from '@headlessui/react'

import { Logo } from '@/components/Logo'
import {
  useIsInsideMobileNavigation,
  IsInsideMobileNavigationContext,
} from './MobileNavigationContext'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Navigation } from '@/components/Navigation'

export function MobileNavigationDialog({
  isOpen,
  close,
}: {
  isOpen: boolean
  close: () => void
}) {
  let pathname = usePathname()
  let searchParams = useSearchParams()
  let initialPathname = useRef(pathname).current
  let initialSearchParams = useRef(searchParams).current

  useEffect(() => {
    if (pathname !== initialPathname || searchParams !== initialSearchParams) {
      close()
    }
  }, [pathname, searchParams, close, initialPathname, initialSearchParams])

  function onClickDialog(event: React.MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLElement)) {
      return
    }

    let link = event.target.closest('a')
    if (
      link &&
      link.pathname + link.search + link.hash ===
        window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClickCapture={onClickDialog}
        onClose={close}
        className="fixed inset-0 z-50 lg:hidden"
      >
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40" />
        </Transition.Child>

        <Dialog.Panel>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Header />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="duration-500 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="duration-500 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <motion.div
              layoutScroll
              className="fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
            >
              <Navigation />
            </motion.div>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  )
}

export const useMobileNavigationStore = create<{
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function MobileNavigation() {
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let { isOpen, toggle, close } = useMobileNavigationStore()
  let ToggleIcon = isOpen ? XIcon : MenuIcon

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-zinc-900 dark:stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <Suspense fallback={null}>
          <MobileNavigationDialog isOpen={isOpen} close={close} />
        </Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  )
}

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  { className?: string }
>(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem
              href="https://docs.klever.org/api-and-sdk"
            >
              API
            </TopLevelNavItem>
            <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
            <TopLevelNavItem href="https://forum.klever.org/">
              Support
            </TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  )
})
