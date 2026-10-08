import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { navItems } from "../../data/nav"
import { site } from "../../data/site"
import { useActiveSection } from "../../hooks/useActiveSection"
import { scrollToId, scrollToTop } from "../../lib/scroll"

export function Navbar() {
  const activeId = useActiveSection()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <motion.header
      className="sticky top-0 z-40 bg-page/90 backdrop-blur-[8px]"
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-[1168px] items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#topo"
          className="text-[12px] font-medium tracking-[1px] text-ink"
          onClick={(event) => {
            event.preventDefault()
            setOpen(false)
            scrollToTop()
          }}
        >
          {site.shortName}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`relative text-[12px] font-medium tracking-[1px] transition-colors duration-300 ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                    onClick={(event) => {
                      event.preventDefault()
                      go(item.id)
                    }}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-ink transition-transform duration-300 ease-out ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="text-[12px] font-medium tracking-[1px] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "FECHAR" : "MENU"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            className="border-t border-line md:hidden"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="px-6 py-8">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[12px] font-medium tracking-[1px] text-ink"
                      onClick={(event) => {
                        event.preventDefault()
                        go(item.id)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
