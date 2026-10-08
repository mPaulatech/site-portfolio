import { useEffect, useState } from "react"
import { navItems } from "../data/nav"

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const ids = navItems.map((item) => item.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top,
          )

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
