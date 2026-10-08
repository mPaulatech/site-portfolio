export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "FRONT-END",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "FERRAMENTAS",
    items: ["Git", "GitHub", "Linux", "npm"],
  },
  {
    label: "SUPORTE",
    items: ["Windows", "Hardware", "Redes", "Sistemas Operacionais"],
  },
]

export const outsideCode =
  "Quando não estou estudando desenvolvimento, continuo explorando Linux, tecnologia e novas formas de aprender."
