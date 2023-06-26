import { DefaultButton } from '../DefaultButton'
import { TitleSection } from '../TitleSection'

export function AboutSection() {
  return (
    <section id="about">
      <>
        <TitleSection text="Sobre" />

        <div className="flex flex-col items-center text-center gap-4">
          <p className="max-w-md">
            Um projeto escolar que abrange as histórias e feitos das maiores
            personalidades antirracistas
          </p>
          <DefaultButton text="Ver personalidades" to="/personalities" />
        </div>
      </>
    </section>
  )
}
