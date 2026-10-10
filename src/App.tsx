import { useEffect, useState, type ReactNode } from 'react'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ProjectPanel } from '@/components/ProjectPanel'
import { About, Contact } from '@/components/AboutContact'
import { Experience } from '@/components/Experience'
import { projects } from '@/data/site'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(min-width: ${breakpoint}px)`).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [breakpoint])

  return isDesktop
}

function Panels({ clone = false }: { clone?: boolean }) {
  const suffix = clone ? '-clone' : ''

  return (
    <>
      <Hero />
      {projects.map((project, index) => (
        <ProjectPanel
          key={`${project.id}${suffix}`}
          project={project}
          index={index}
        />
      ))}
      <About />
      <Experience />
      <Contact />
    </>
  )
}

function LoopSet({ children, hidden }: { children: ReactNode; hidden?: boolean }) {
  return (
    <div className="track__set" aria-hidden={hidden || undefined}>
      {children}
    </div>
  )
}

export default function App() {
  const isDesktop = useIsDesktop()
  const { viewportRef, trackRef, progress, scrollToSection } = useHorizontalScroll({
    enabled: isDesktop,
    loop: isDesktop,
  })

  const handleNavigate = (index: number) => {
    if (isDesktop) {
      scrollToSection(index)
      return
    }

    const panels = trackRef.current?.querySelectorAll<HTMLElement>('.track__set:first-child .panel')
    panels?.[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={isDesktop ? 'app app--horizontal' : 'app app--vertical'}>
      <Nav progress={progress} onNavigate={handleNavigate} />

      <div className="viewport" ref={viewportRef}>
        <div className="track" ref={trackRef}>
          <LoopSet>
            <Panels />
          </LoopSet>
          {isDesktop ? (
            <LoopSet hidden>
              <Panels clone />
            </LoopSet>
          ) : null}
        </div>
      </div>
    </div>
  )
}
