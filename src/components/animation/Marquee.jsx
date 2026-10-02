import { Star } from 'lucide-react'

/** Infinite horizontal ticker. The list is rendered twice so the -50% keyframe loops seamlessly. */
export default function Marquee({ items }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 font-display text-2xl font-bold sm:text-4xl">
          {item}
          <Star size={20} className="fill-accent text-accent" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className="group overflow-hidden border-y border-line bg-surface py-6 text-ink/80" role="presentation">
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
