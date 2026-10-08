const NAV_OFFSET = 88

export function scrollToId(id: string) {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced ? "auto" : "smooth",
  })
}

export function scrollToTop() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  window.scrollTo({
    top: 0,
    behavior: prefersReduced ? "auto" : "smooth",
  })
}
