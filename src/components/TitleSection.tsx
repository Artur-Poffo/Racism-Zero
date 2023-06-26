'use client'

import { motion } from 'framer-motion'

interface TitleSectionProps {
  text: string
}

export function TitleSection({ text }: TitleSectionProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex items-center justify-center gap-4 my-5"
    >
      <div className="hidden md:inline w-5 h-1 bg-zinc-200" />
      <h1 className="text-3xl md:text-4xl tracking-widest uppercase font-serif font-bold text-center">
        {text}
      </h1>
      <div className="hidden md:inline w-5 h-1 bg-zinc-200" />
    </motion.div>
  )
}
