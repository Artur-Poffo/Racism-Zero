import { PersonalityCard } from '@/components/PersonalityCard'
import { TitleSection } from '@/components/TitleSection'
import { hygraph } from '@/lib/hygraph'

interface PersonalityArrayData {
  slug: string
  name: string
  image: { url: string }
}

export default async function Personalities() {
  const { personalities }: { personalities: PersonalityArrayData[] } =
    await hygraph.request(
      `
      {
        personalities {
          slug
          name
          image {
            url
          }
        }
      }
    `,
    )

  return (
    <div className="py-20">
      <TitleSection text="Personalidades" />

      <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-15 my-10">
        {personalities.map(({ image, name, slug }, _) => {
          return (
            <PersonalityCard
              key={slug}
              slug={slug}
              name={name}
              imageUrl={image.url}
            />
          )
        })}
      </div>
    </div>
  )
}
