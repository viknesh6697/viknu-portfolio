import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { projects, site } from '@/data/site'

type NavProps = {
  progress: number
  onNavigate: (index: number) => void
}

const links = [
  { label: 'Intro', index: 0 },
  { label: 'Works', index: 1 },
  { label: 'About', index: 1 + projects.length },
  { label: 'Experience', index: 2 + projects.length },
  { label: 'Contact', index: 3 + projects.length },
]

export function Nav({ progress, onNavigate }: NavProps) {
  const barRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.to(barRef.current, {
      scaleX: progress,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: true,
    })
  }, [progress])

  return (
    <header className="nav">
      <button className="nav__brand" type="button" onClick={() => onNavigate(0)}>
        {site.name}.
      </button>

      <nav className="nav__links" aria-label="Primary">
        {links.map((link) => (
          <button
            key={link.label}
            type="button"
            className="nav__link"
            onClick={() => onNavigate(link.index)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="nav__progress" aria-hidden="true">
        <span ref={barRef} className="nav__progress-bar" />
      </div>
    </header>
  )
}
