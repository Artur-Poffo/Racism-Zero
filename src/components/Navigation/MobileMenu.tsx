'use client'

import { useState } from 'react'
import { LogoTitle } from './LogoTitle'
import { NavLink } from './NavLink'

export function MobileMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpenMenu((state) => !state)}
        className="fixed top-6 right-6 w-8 h-8 bg-zinc-950 lg:hidden z-50 rounded-sm flex flex-col items-center justify-center gap-1 cursor-pointer"
      >
        <div className="w-4/5 h-[2px] bg-zinc-300" />
        <div className="w-4/5 h-[2px] bg-zinc-300" />
        <div className="w-4/5 h-[2px] bg-zinc-300" />
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-xl z-40 ${
          isOpenMenu ? 'ml-0' : '-ml-[100vw]'
        } transition-all flex flex-col items-center justify-center gap-10`}
      >
        <LogoTitle onClick={() => setIsOpenMenu(false)} />

        <nav className="flex flex-col items-center gap-4">
          <ul className="flex flex-col items-center">
            <NavLink onClick={() => setIsOpenMenu(false)} name="Home" to="/" />
            <NavLink
              onClick={() => setIsOpenMenu(false)}
              name="Personalidades"
              to="/personalities"
            />
          </ul>
        </nav>
      </div>
    </>
  )
}
