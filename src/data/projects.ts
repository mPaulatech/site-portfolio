import brisaCover from "../assets/brisa-cover.svg"

export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  href?: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: "brisa",
    title: "Brisa — Previsão do Tempo",
    description:
      "Aplicação web de previsão do tempo com busca por cidade, exibição das condições climáticas atuais e previsão para os próximos dias.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/mPaulatech/side-projects/tree/main/Weather",
    image: brisaCover,
    imageAlt: "Capa do projeto Brisa, aplicação de previsão do tempo para São Paulo",
  },
]
