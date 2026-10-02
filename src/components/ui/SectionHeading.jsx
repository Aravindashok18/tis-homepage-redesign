import Badge from './Badge'
import Reveal from '../animation/Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </Reveal>
  )
}
