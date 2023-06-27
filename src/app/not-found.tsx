import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-serif font-bold">Página não encontrada</h1>
      <Link
        href={'/'}
        className="underline underline-offset-4 decoration-yellow-400 hover:text-yellow-400 transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  )
}
