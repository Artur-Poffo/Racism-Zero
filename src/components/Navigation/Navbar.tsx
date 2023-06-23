import Link from 'next/link'
import { NavLink } from './NavLink'

export function Navbar() {
  return (
    <header className="fixed w-screen py-4 px-20 flex items-center justify-between backdrop-blur-md z-50">
      <Link href={'/'}>
        <h1 className="text-3xl text-zinc-200 font-bold font-serif">
          Racismo Zero
        </h1>
      </Link>

      <nav className="flex items-center gap-4">
        <ul className="flex items-center justify-center gap-2">
          <NavLink name="Home" to="/" />
          <NavLink name="Personalidades" to="/personalities" />
        </ul>
      </nav>
    </header>
  )
}
