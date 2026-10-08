import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { journey } from "../../data/journey"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.65"],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="jornada"
      aria-labelledby="jornada-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-24">
        <SectionHeader
          kicker="03 / PERCURSO"
          title="Minha jornada"
          titleId="jornada-title"
        />

        <div ref={ref} className="relative mt-14 pl-0">
          <div
            aria-hidden="true"
            className="absolute top-1 bottom-3 left-[11px] w-px bg-line md:left-[27px]"
          />
          {!reduce ? (
            <motion.div
              aria-hidden="true"
              className="absolute top-1 bottom-3 left-[11px] w-px origin-top bg-accent md:left-[27px]"
              style={{ scaleY }}
            />
          ) : null}

          <ol className="flex flex-col gap-10">
            {journey.map((item, index) => (
              <li
                key={`${item.year}-${item.title}`}
                className="grid grid-cols-[72px_1fr] gap-4 md:grid-cols-[144px_1fr] md:gap-8"
              >
                <Reveal delay={index * 0.04}>
                  <p className="pt-1 text-[12px] font-medium tracking-[1px] text-accent">
                    {item.year}
                  </p>
                </Reveal>
                <Reveal delay={index * 0.04 + 0.06}>
                  <div>
                    <h3 className="text-[22px] font-medium leading-[1.2] text-ink">
                      {item.title}
                    </h3>
                    {item.detail ? (
                      <p className="mt-2 text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                        {item.detail}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
