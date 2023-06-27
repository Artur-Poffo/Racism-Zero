import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full p-5 flex items-center justify-center gap-2">
      <Link
        className="opacity-60 hover:opacity-100 transition-opacity"
        href={'https://github.com/Artur-Poffo/racismo-zero'}
      >
        Source Code on GitHub
      </Link>
    </footer>
  )
}
