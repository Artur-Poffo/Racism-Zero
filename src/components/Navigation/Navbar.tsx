import { LogoTitle } from './LogoTitle'
import { NavLink } from './NavLink'

export function Navbar() {
  return (
    <header className="hidden fixed w-screen py-4 px-20 lg:flex items-center justify-between backdrop-blur-md z-50">
      <LogoTitle />

      <nav className="flex items-center gap-4">
        <ul className="flex items-center justify-center gap-2">
          <NavLink name="Home" to="/" />
          <NavLink name="Personalidades" to="/personalities" />
        </ul>
      </nav>
    </header>
  )
}
