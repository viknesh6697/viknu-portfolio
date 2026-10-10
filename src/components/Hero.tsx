import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { site } from '@/data/site'
import { Slot } from '@/components/Slot'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero__brand, .hero__title, .hero__lede, .hero__meta', {
        y: 36,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="panel hero" ref={rootRef} data-panel="intro">
      <div className="cell hero__copy">
        <p className="eyebrow">Hello, I’m</p>
        <p className="hero__brand">{site.name}.</p>
        <h1 className="hero__title">
          {site.roleLead}
          <em> {site.roleAccent}</em>
        </h1>
        <p className="hero__lede">{site.tagline}</p>
      </div>
      <div className="photo-well hero__photo">
        <Slot
          src={site.introPhoto}
          alt="Candid portrait of Vikneshvar"
          label="Profile photo"
          ratio={site.introPhotoRatio}
        />
      </div>
      <div className="cell hero__meta">
        <span>Scroll</span>
        <span className="hero__meta-line" aria-hidden="true" />
        {/* <span> →</span> */}
      </div>
      <div className="cell hero__place">{site.location}</div>
    </section>
  )
}
