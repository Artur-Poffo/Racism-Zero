import NotFound from '@/app/not-found'
import { hygraph } from '@/lib/hygraph'
import Image from 'next/image'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PersonalityProps {
  params: {
    slug: string
  }
}

interface PersonalityData {
  image: {
    url: string
  }
  name: string
  content: string
}

export const revalidate = 60 * 60 * 2 // 2 hours

export default async function Personality({
  params: { slug },
}: PersonalityProps) {
  const { personality }: { personality: PersonalityData } =
    await hygraph.request(
      `
    query PersonalityData {
      personality(where: {slug: "${slug}"}) {
      image {
        url
      }
      name
      content
      }
    }
    `,
    )

  return (
    <div className={`${personality ? 'py-20' : 'py-0'}`}>
      {personality ? (
        <article className="flex flex-col gap-40">
          <header className="h-[30vh] w-full bg-indigo-800 rounded-lg flex flex-col items-center justify-end">
            <div className="flex flex-col items-center justify-center gap-5 -mb-[120px]">
              <Image
                src={personality.image.url}
                width={200}
                height={200}
                alt="Imagem da personalidade antirracista"
                className="w-[200px] h-[200px] object-cover bg-center bg-no-repeat rounded-md border-4 border-zinc-200"
              />
              <h1 className="text-4xl font-serif font-bold underline decoration-yellow-400 underline-offset-8">
                {personality.name}
              </h1>
            </div>
          </header>
          <main className="w-full md:max-w-screen-md mx-auto">
            <ReactMarkdown className="prose prose-invert max-w-none break-words prose-h2:text-zinc-100 prose-h2:text-3xl prose-h2:font-serif prose-img:rounded-md prose-a:underline prose-a:underline-offset-4 prose-a:decoration-yellow-400 prose-a:transition-colors prose-a:font-normal hover:prose-a:text-yellow-400">
              {personality.content}
            </ReactMarkdown>
          </main>
        </article>
      ) : (
        <NotFound />
      )}
    </div>
  )
}
