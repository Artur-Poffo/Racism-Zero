import Link from 'next/link'

interface DefaultButtonProps {
  text: string
  to?: string
}

export function DefaultButton({ text, to }: DefaultButtonProps) {
  return (
    <Link href={to || '/'}>
      <button className="bg-zinc-200 text-zinc-900 rounded-sm py-2 px-4 border border-zinc-200 font-serif font-bold uppercase hover:bg-transparent hover:text-zinc-200 transition-all">
        {text}
      </button>
    </Link>
  )
}
