import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose dark:prose-invert',
        // Column layout for every direct child. It lives here and not in
        // typography.ts because the typography plugin skips `not-prose`
        // elements (code blocks, button rows, card grids), which left them
        // out of the column. `html :where(& > *)` keeps specificity low so
        // utilities such as `max-w-none` on a child still win.
        '[html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl',
      )}
      {...props}
    />
  )
}
