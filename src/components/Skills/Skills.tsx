import { outsideCode, skillGroups } from "../../data/skills"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"

export function Skills() {
  return (
    <section
      id="conhecimentos"
      aria-labelledby="tecnologias-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-24">
        <SectionHeader
          kicker="05 / CONHECIMENTOS"
          title="Tecnologias"
          titleId="tecnologias-title"
        />

        <div className="mt-12 flex flex-col gap-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.label}>
              <Reveal delay={groupIndex * 0.06}>
                <p className="text-[12px] font-medium tracking-[1px] text-muted">
                  {group.label}
                </p>
              </Reveal>
              <Reveal delay={groupIndex * 0.06 + 0.08}>
                <ul className="mt-4 flex flex-wrap items-baseline gap-x-1 gap-y-2 text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                  {group.items.map((item, itemIndex) => (
                    <li key={item} className="inline-flex items-baseline">
                      <span className="relative inline-block cursor-default rounded-sm transition-all duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:text-ink hover:after:scale-x-100 motion-safe:hover:translate-y-[-1px] motion-safe:hover:scale-[1.03]">
                        {item}
                      </span>
                      {itemIndex < group.items.length - 1 ? (
                        <span aria-hidden="true" className="px-2 text-muted/70">
                          ·
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[1px] text-muted">
              FORA DO CÓDIGO
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[640px] text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
              {outsideCode}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
