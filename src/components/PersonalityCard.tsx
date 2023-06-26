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
    <div
      style={{ backgroundImage: `url('${imageUrl}')` }}
      className={`group relative w-[200px] h-[200px] rounded-md object-cover bg-no-repeat bg-center overflow-hidden`}
    >
      <div className="md:opacity-0 md:group-hover:opacity-100 absolute top-0 left-0 w-full h-full backdrop-blur-lg flex flex-col items-center justify-center gap-4 transition-opacity">
        <h2 className="font-bold font-serif text-2xl">{name}</h2>
        <DefaultButton to={`/personalities/${slug}`} text="Saiba mais" />
      </div>
    </div>
  )
}
