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
