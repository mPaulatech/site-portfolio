import { projects } from "../../data/projects"
import { site } from "../../data/site"
import { Reveal } from "../Reveal/Reveal"
import { SectionHeader } from "../SectionHeader/SectionHeader"
import { TextLink } from "../TextLink/TextLink"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto max-w-[1104px] px-6 py-20 md:px-8 md:py-24">
        <SectionHeader
          kicker="01 / PROJETOS"
          title="Projetos"
          titleId="projetos-title"
        />

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
            Projetos que construí enquanto desenvolvo minhas habilidades em
            desenvolvimento web.
          </p>
        </Reveal>

        {projects.length > 0 ? (
          <div className="mt-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <Reveal delay={0.2}>
              <p className="max-w-[640px] text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
                Os projetos serão apresentados aqui. Enquanto isso, acompanhe
                meu trabalho no GitHub.
              </p>
            </Reveal>
            <Reveal delay={0.28} className="mt-8">
              <TextLink
                href={site.github.href}
                arrow
                target="_blank"
                rel="noreferrer"
              >
                EXPLORAR GITHUB
              </TextLink>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
