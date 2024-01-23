import { NavGroup, TreeNavGroup, NavLink } from './Navigation'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

interface TreeNavigationItemProps {
  pathname: string
  childrens: Array<TreeNavGroup>
  title: string
  href: string
}

export function TreeNavigationItem({
  title,
  href,
  childrens,
  pathname,
}: TreeNavigationItemProps) {
  function renderLinks(
    i: number,
    href: string,
    pathname: string,
    childrens: Array<TreeNavGroup>,
  ) {
    if (childrens.length == 0) {
      return
    }

    return (
      <>
        {childrens.map((g) => {
          return (
            <li key={g.href}>
              <NavLink
                childPx={`${(i + 1) * 3 + 1 > 10 ? 10 : (i + 1) * 3 + 1} `}
                href={href + g.href}
                active={
                  href + g.href === pathname || pathname.includes(href + g.href)
                }
              >
                {i > 2 ? 'ㅤ'.repeat(i - 2) + ' ' + g.title : g.title}
              </NavLink>

              {href + g.href === pathname ||
              pathname.includes(href + g.href) ? (
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
                  {renderLinks(
                    i + 1,
                    href + g.href,
                    pathname,
                    g.children || [],
                  )}
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
          )
        })}
      </>
    )
  }

  return (
    <motion.li key={href} layout="position" className="relative">
      <NavLink href={href} active={href === pathname}>
        {title}
      </NavLink>
      <AnimatePresence mode="popLayout" initial={false}>
        {href === '/' + pathname.split('/')[1] &&
          childrens &&
          childrens.length > 0 && (
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
              {renderLinks(1, href, pathname, childrens || [])}
            </motion.ul>
          )}
      </AnimatePresence>
    </motion.li>
  )
}
