import { TitleSection } from '@/components/TitleSection'
import { hygraph } from '@/lib/hygraph'

export default async function Personalities() {
  const { personalities } = await hygraph.request(
    `
      {
        personalities {
          slug
          name
          id
        }
      }
    `,
  )

  return (
    <div className="py-14">
      <TitleSection text="Personalidades" />

      <div>
        <pre>{JSON.stringify(personalities)}</pre>
      </div>
    </div>
  )
}
