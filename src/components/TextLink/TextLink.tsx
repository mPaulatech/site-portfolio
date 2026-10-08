import type { AnchorHTMLAttributes, ReactNode } from "react"

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  arrow?: boolean
  muted?: boolean
}

export function TextLink({
  children,
  arrow = false,
  muted = false,
  className = "",
  ...props
}: TextLinkProps) {
  return (
    <a
      className={`group inline-flex w-fit items-center gap-2 text-[12px] font-medium tracking-[1px] text-ink transition-colors duration-300 ease-out hover:text-ink ${className}`}
      {...props}
    >
      <span
        className={`relative after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 ${muted ? "text-muted group-hover:text-ink" : ""}`}
      >
        {children}
      </span>
      {arrow ? (
        <span
          aria-hidden="true"
          className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
        >
          →
        </span>
      ) : null}
    </a>
  )
}
