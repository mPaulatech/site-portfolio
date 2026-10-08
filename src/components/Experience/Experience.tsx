import { experience } from "../../data/experience"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-24">
        <SectionHeader
          kicker="02 / EXPERIÊNCIA"
          title="Experiência"
          titleId="experiencia-title"
        />

        <div className="mt-14 flex flex-col gap-16">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-8 md:grid-cols-2 md:gap-16"
            >
              <div>
                <Reveal>
                  <h3 className="text-[28px] font-medium leading-[1.2] tracking-normal text-ink">
                    {item.company}
                  </h3>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-3 text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                    {item.role}
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-3 text-[12px] font-medium tracking-[1px] text-muted">
                    {item.period}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.24}>
                <p className="text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                  {item.description}
                </p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
