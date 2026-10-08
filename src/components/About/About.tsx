import { aboutParagraphs } from "../../data/about"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-24">
        <SectionHeader kicker="04 / SOBRE" title="Sobre mim" titleId="sobre-title" />
        <div className="mt-8 flex max-w-[720px] flex-col gap-6">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.1 + index * 0.08}>
              <p className="text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
