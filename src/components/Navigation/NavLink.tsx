'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  name: string
  to: string
}

export function NavLink({ name, to }: NavLinkProps) {
  const path = usePathname()
  const isLinkActivate = path === to

  return (
    <li
      className={`${
        isLinkActivate
          ? 'opacity-100 underline underline-offset-4'
          : 'opacity-70'
      } hover:opacity-100 decoration-yellow-400 transition-all`}
    >
      <Link href={to}>{name}</Link>
    </li>
  )
}
