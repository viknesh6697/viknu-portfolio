import { useEffect, useRef, useState } from 'react'

type Options = {
  damping?: number
  enabled?: boolean
  /** Seamless Intro → … → Contact → Intro loop */
  loop?: boolean
}

/**
 * Maps vertical wheel / touch into a smoothed horizontal scroll offset.
 * With `loop`, the track is expected to contain two identical panel sets;
 * offset wraps so the end meets the start.
 */
export function useHorizontalScroll({
  damping = 0.085,
  enabled = true,
  loop = false,
}: Options = {}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const target = useRef(0)
  const raf = useRef(0)
  const [progress, setProgress] = useState(0)
  const [loopWidth, setLoopWidth] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const viewportEl = viewportRef.current
    const trackEl = trackRef.current
    if (!viewportEl || !trackEl) return

    const viewport = viewportEl
    const track = trackEl

    function measureLoopWidth() {
      if (!loop) {
        return Math.max(0, track.scrollWidth - viewport.clientWidth)
      }
      // Two identical sets → one cycle is half the track
      return Math.max(0, track.scrollWidth / 2)
    }

    const wrap = (value: number, width: number) => {
      if (!loop || width <= 0) return value
      let next = value % width
      if (next < 0) next += width
      return next
    }

    const measure = () => {
      const width = measureLoopWidth()
      setLoopWidth(width)
      if (loop && width > 0) {
        target.current = wrap(target.current, width)
        offset.current = wrap(offset.current, width)
      } else {
        target.current = Math.min(target.current, width)
        offset.current = Math.min(offset.current, width)
      }
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(viewport)
    ro.observe(track)

    const onWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY

      if (delta === 0) return
      event.preventDefault()

      const width = measureLoopWidth()
      target.current += delta

      if (!loop) {
        target.current = Math.min(Math.max(target.current, 0), width)
      }
    }

    let touchX = 0
    const onTouchStart = (event: TouchEvent) => {
      touchX = event.touches[0]?.clientX ?? 0
    }
    const onTouchMove = (event: TouchEvent) => {
      const x = event.touches[0]?.clientX ?? 0
      const delta = touchX - x
      touchX = x

      const width = measureLoopWidth()
      target.current += delta

      if (!loop) {
        target.current = Math.min(Math.max(target.current, 0), width)
      }
    }

    const tick = () => {
      const width = measureLoopWidth()

      if (loop && width > 0) {
        // Keep target near offset so damping stays continuous across the wrap
        while (target.current - offset.current > width / 2) {
          target.current -= width
        }
        while (target.current - offset.current < -width / 2) {
          target.current += width
        }
      } else {
        target.current = Math.min(Math.max(target.current, 0), width)
      }

      offset.current += (target.current - offset.current) * damping

      if (Math.abs(target.current - offset.current) < 0.05) {
        offset.current = target.current
      }

      if (loop && width > 0) {
        if (offset.current >= width || offset.current < 0) {
          const wrapped = wrap(offset.current, width)
          target.current += wrapped - offset.current
          offset.current = wrapped
        }
      }

      track.style.transform = `translate3d(${-offset.current}px, 0, 0)`

      const nextProgress =
        width > 0 ? (loop ? offset.current / width : offset.current / width) : 0
      setProgress(nextProgress)
      raf.current = requestAnimationFrame(tick)
    }

    viewport.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: true })
    raf.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf.current)
      viewport.removeEventListener('wheel', onWheel)
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      ro.disconnect()
    }
  }, [damping, enabled, loop])

  const scrollTo = (x: number) => {
    if (loop && loopWidth > 0) {
      let next = x % loopWidth
      if (next < 0) next += loopWidth

      // Pick the equivalent position closest to current target (shortest path)
      const current = target.current
      const candidates = [next, next - loopWidth, next + loopWidth]
      target.current = candidates.reduce((best, candidate) =>
        Math.abs(candidate - current) < Math.abs(best - current) ? candidate : best,
      )
      return
    }

    target.current = Math.min(Math.max(x, 0), loopWidth)
  }

  const scrollToSection = (index: number) => {
    const viewport = viewportRef.current
    if (!viewport) return
    scrollTo(index * viewport.clientWidth)
  }

  return { viewportRef, trackRef, progress, scrollToSection, loopWidth }
}
