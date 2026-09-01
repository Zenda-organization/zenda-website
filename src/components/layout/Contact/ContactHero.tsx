import { ZContainer } from "@/components/common/ZContainer";

export function ContactHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-36
        pb-16

        sm:pt-40
        sm:pb-20

        lg:pt-44
        lg:pb-24
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

      <ZContainer>
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#0F4C81]
            "
          >
            Contacto
          </span>

          <h1
            className="
              mt-4
              text-4xl
              font-bold
              tracking-[-0.03em]
              text-slate-950

              sm:text-5xl

              lg:text-6xl
              lg:leading-[1.05]
            "
          >
            Vamos transformar a sua
            <br />
            <span className="text-[#0F4C81]">próxima ideia.</span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            Tem um projeto, uma necessidade ou simplesmente quer saber como a tecnologia pode ajudar
            o seu negócio? Fale connosco.
          </p>
        </div>
      </ZContainer>
    </section>
  );
}
