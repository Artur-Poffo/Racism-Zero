import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface LogoTitleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function LogoTitle({ ...rest }: LogoTitleProps) {
  return (
    <Link href={'/'} {...rest}>
      <h1 className="text-3xl text-zinc-200 font-bold font-serif">
        Racismo Zero
      </h1>
    </Link>
  )
}
