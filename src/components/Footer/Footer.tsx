import { site } from "../../data/site"
import { Reveal } from "../Reveal/Reveal"
import { TextLink } from "../TextLink/TextLink"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Reveal>
        <div className="mx-auto flex max-w-[1104px] flex-col gap-8 px-6 py-12 md:px-8 md:py-14">
          <div>
            <p className="text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
              {site.name}
            </p>
            <p className="mt-3 text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
              {site.footerNote}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <TextLink
              href={site.github.href}
              target="_blank"
              rel="noreferrer"
              muted
            >
              {site.github.short}
            </TextLink>
            <TextLink
              href={site.linkedin.href}
              target="_blank"
              rel="noreferrer"
              muted
            >
              {site.linkedin.label}
            </TextLink>
          </div>

          <p className="text-[12px] font-medium tracking-[1px] text-muted">
            © {site.copyrightYear} {site.name}
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
