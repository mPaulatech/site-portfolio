import { motion, useReducedMotion } from "motion/react"
import type { Project } from "../../data/projects"
import { TextLink } from "../TextLink/TextLink"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className="group grid gap-8 border-t border-line py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:py-16"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            }
      }
    >
      {project.image ? (
        <motion.div
          className="overflow-hidden bg-line/40"
          initial={reduce ? false : { opacity: 0, scale: 1.05 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? `Prévia do projeto ${project.title}`}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        </motion.div>
      ) : (
        <div
          aria-hidden="true"
          className="aspect-[16/10] bg-line/50 transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
        />
      )}

      <div className="transition-transform duration-500 ease-out motion-safe:md:group-hover:translate-x-1.5">
        <h3 className="text-[22px] font-medium leading-[1.2] text-ink">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.6] tracking-[-0.02em] text-muted">
          {project.description}
        </p>
        <p className="mt-5 text-[12px] font-medium tracking-[1px] text-muted transition-opacity duration-500 md:opacity-70 md:group-hover:opacity-100">
          {project.technologies.join(" · ")}
        </p>
        {project.href ? (
          <div className="mt-6">
            <TextLink href={project.href} arrow target="_blank" rel="noreferrer">
              VER PROJETO
            </TextLink>
          </div>
        ) : null}
      </div>
    </motion.article>
  )
}
