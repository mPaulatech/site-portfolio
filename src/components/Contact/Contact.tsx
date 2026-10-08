import { site } from "../../data/site"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"

const contactLinks = [
  {
    href: site.github.href,
    label: site.github.label,
    external: true,
  },
  {
    href: site.linkedin.href,
    label: site.linkedin.label,
    external: true,
  },
  {
    href: `mailto:${site.email}`,
    label: site.email,
    external: false,
  },
  ...(site.resumeHref
    ? [
        {
          href: site.resumeHref,
          label: "Currículo",
          external: true,
        },
      ]
    : []),
]

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker="06 / CONTATO"
          title="Vamos conversar?"
          titleId="contato-title"
          large
        />

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
            Estou aberta a oportunidades em tecnologia, desenvolvimento e
            suporte.
          </p>
        </Reveal>

        <ul className="mt-10 flex flex-col gap-4 sm:mt-12">
          {contactLinks.map((link, index) => (
            <li key={link.href}>
              <Reveal delay={0.22 + index * 0.06}>
                <a
                  href={link.href}
                  className="group inline-flex w-fit items-baseline gap-3 text-[17px] leading-[1.6] tracking-[-0.02em] text-muted transition-colors duration-300 hover:text-ink"
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-[12px] tracking-[1px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
