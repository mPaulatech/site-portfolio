export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  href?: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = []
