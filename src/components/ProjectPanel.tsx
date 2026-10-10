import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/data/site'
import { Slot } from '@/components/Slot'

type ProjectPanelProps = {
  project: Project
  index: number
}

function ratioNumber(ratio?: string) {
  if (!ratio) return 1
  const [width, height] = ratio.split('/').map((part) => Number(part.trim()))
  if (!width || !height) return 1
  return width / height
}

export function ProjectPanel({ project, index }: ProjectPanelProps) {
  const [openSrc, setOpenSrc] = useState<string | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!openSrc) return

    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenSrc(null)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [openSrc])

  return (
    <section className="panel project" data-panel={`work-${index}`}>
      <div className="cell project__index">{project.id}</div>
      <div className="cell project__body">
        <p className="project__meta">{project.role}</p>
        <h2 className="project__title" id={titleId}>
          {project.title}
        </h2>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className="project__github" href={project.href} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
      <div
        className="project__gallery"
        style={
          {
            '--main': ratioNumber(project.imageRatio),
            '--extra': ratioNumber(project.extraImageRatio),
          } as CSSProperties
        }
      >
        <button
          className="project__visual"
          type="button"
          onClick={() => setOpenSrc(project.image)}
          aria-label={`Open ${project.title}`}
          style={{ aspectRatio: project.imageRatio }}
        >
          <img className="project__media" src={project.image} alt={project.imageAlt} />
        </button>
        <div className="project__caption">
          <span>{project.title}</span>
          <span>{project.role}</span>
        </div>
        <Slot
          className="project__extra"
          src={project.extraImage}
          alt={project.extraImageAlt ?? `${project.title} detail`}
          label="Image"
          ratio={project.extraImageRatio}
          onOpen={project.extraImage ? () => setOpenSrc(project.extraImage ?? null) : undefined}
        />
      </div>
      {openSrc
        ? createPortal(
            <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={titleId}>
              <button className="lightbox__backdrop" type="button" aria-label="Close" onClick={() => setOpenSrc(null)} />
              <div className="lightbox__frame">
                <button
                  ref={closeRef}
                  className="lightbox__close"
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpenSrc(null)}
                >
                  X
                </button>
                <img
                  className="lightbox__media"
                  src={openSrc}
                  alt={openSrc === project.image ? project.imageAlt : (project.extraImageAlt ?? project.title)}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
