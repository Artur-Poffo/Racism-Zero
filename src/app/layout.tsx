import { Footer } from '@/components/Footer'
import { MobileMenu } from '@/components/Navigation/MobileMenu'
import { Navbar } from '@/components/Navigation/Navbar'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Racismo Zero | Trabalho Escolar',
  description: 'Trabalho escolar sobre personalidades antirracista',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-zinc-900 text-zinc-200 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900">
        <Navbar />
        <MobileMenu />
        <main className="min-h-screen pb-10 px-5">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
