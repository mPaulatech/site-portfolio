import { Reveal } from "../Reveal/Reveal"

type SectionHeaderProps = {
  kicker: string
  title: string
  titleId?: string
  large?: boolean
}

export function SectionHeader({
  kicker,
  title,
  titleId,
  large = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-[1104px]">
      <Reveal>
        <p className="text-[12px] font-medium tracking-[1px] text-muted">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08} y={large ? 28 : 18}>
        <h2
          id={titleId}
          className={
            large
              ? "mt-5 text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.06em] text-ink"
              : "mt-5 text-[clamp(2rem,4vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.037em] text-ink"
          }
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
