import { stats } from '../../data/content'
import Reveal from '../animation/Reveal'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function StatsSection() {
  return (
    <section aria-label="TIS at a glance" className="relative z-10 -mt-10 px-4 sm:px-6">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-xl lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} index={i} className="bg-surface p-6 text-center sm:p-8">
            <dd className="font-display text-4xl font-bold text-brand sm:text-5xl">
              <AnimatedNumber value={s.value} />
              <span className="text-accent">{s.suffix}</span>
            </dd>
            <dt className="mt-2 text-sm text-muted">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
