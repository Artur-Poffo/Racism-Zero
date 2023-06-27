'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DefaultButton } from './DefaultButton'

interface PersonalityCardProps {
  imageUrl: string
  name: string
  slug: string
}

export function PersonalityCard({
  imageUrl,
  name,
  slug,
}: PersonalityCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 70 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      className={`group relative w-[200px] h-[200px] rounded-md overflow-hidden`}
    >
      <Image
        src={imageUrl}
        alt="Imagem da personalidade antirracista"
        width={200}
        height={200}
        className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-no-repeat"
      />
      <div className="md:opacity-0 md:group-hover:opacity-100 absolute top-0 left-0 w-full h-full backdrop-blur-lg flex flex-col items-center justify-center gap-4 text-center transition-opacity px-1">
        <h2 className="font-bold font-serif text-2xl">{name}</h2>
        <DefaultButton to={`/personalities/${slug}`} text="Saiba mais" />
      </div>
    </motion.div>
  )
}
