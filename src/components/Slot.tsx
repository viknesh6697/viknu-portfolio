import type { CSSProperties } from 'react'

type SlotProps = {
  src?: string
  alt: string
  label: string
  className?: string
  ratio?: string
  onOpen?: () => void
}

function ratioNumber(ratio: string) {
  const [width, height] = ratio.split('/').map((part) => Number(part.trim()))
  if (!width || !height) return 1
  return width / height
}

export function Slot({ src, alt, label, className = '', ratio, onOpen }: SlotProps) {
  if (!src) {
    return (
      <div className={`slot slot--empty ${className}`} aria-hidden="true">
        <span className="slot__label">{label}</span>
      </div>
    )
  }

  const style = ratio
    ? ({ '--ratio': ratio, '--ratio-n': ratioNumber(ratio) } as CSSProperties)
    : undefined
  const fitClass = `slot slot--fit ${className}`

  if (onOpen) {
    return (
      <button className={fitClass} style={style} type="button" onClick={onOpen} aria-label={`Open ${alt}`}>
        <img className="slot__img" src={src} alt={alt} />
      </button>
    )
  }

  return (
    <div className={fitClass} style={style}>
      <img className="slot__img" src={src} alt={alt} />
    </div>
  )
}
