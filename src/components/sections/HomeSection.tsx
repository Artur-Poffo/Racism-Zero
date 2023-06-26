import Image from 'next/image'
import ArrowDown from '../../../public/custom-icons/arrow-down.svg'

export function HomeSection() {
  return (
    <section id="home">
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold font-serif">Racismo Zero</h1>
          <span className="font-serif text-lg max-w-md text-center underline underline-offset-4 decoration-yellow-400">
            Um projeto com o intuito de espalhar a história de algumas
            personalidades antirracista adiante
          </span>
        </div>

        <Image
          className="absolute bottom-[100px] invert"
          src={ArrowDown}
          width={20}
          height={20}
          alt=""
        />
      </div>
    </section>
  )
}
