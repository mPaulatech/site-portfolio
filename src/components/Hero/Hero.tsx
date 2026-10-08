import { motion, useReducedMotion } from "motion/react"
import { site } from "../../data/site"
import { scrollToId } from "../../lib/scroll"
import { TextLink } from "../TextLink/TextLink"

export function Hero() {
  const reduce = useReducedMotion()
  const hidden = reduce ? false : { opacity: 0, y: 18 }
  const shown = { opacity: 1, y: 0 }
  const transition = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-72px)] flex-col"
    >
      <div className="mx-auto flex w-full max-w-[1104px] flex-1 flex-col items-center justify-center px-6 pb-10 pt-16 text-center md:px-8">
        <motion.p
          className="text-[17px] font-normal leading-[1.6] tracking-[-0.02em] text-ink"
          initial={hidden}
          animate={shown}
          transition={{ ...transition, delay: 0.08 }}
        >
          {site.greeting}
        </motion.p>

        <motion.h1
          id="hero-title"
          className="mt-4 max-w-[16ch] text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={shown}
          transition={{ ...transition, delay: 0.18, duration: 0.85 }}
        >
          {site.headline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[580px] text-[17px] font-normal leading-[1.6] tracking-[-0.02em] text-muted"
          initial={hidden}
          animate={shown}
          transition={{ ...transition, delay: 0.32 }}
        >
          {site.subtitle}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={hidden}
          animate={shown}
          transition={{ ...transition, delay: 0.44 }}
        >
          <TextLink
            href="#projetos"
            arrow
            onClick={(event) => {
              event.preventDefault()
              scrollToId("projetos")
            }}
          >
            VER PROJETOS
          </TextLink>
        </motion.div>
      </div>

      <motion.p
        className="mx-auto w-full max-w-[1104px] px-6 pb-10 text-center text-[12px] font-medium tracking-[1px] text-muted md:px-8"
        initial={hidden}
        animate={shown}
        transition={{ ...transition, delay: 0.52 }}
      >
        {site.location}
      </motion.p>
    </section>
  )
}
