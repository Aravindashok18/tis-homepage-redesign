import { BookOpen, Home, Palette, Trophy } from 'lucide-react'
import { programs } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = { BookOpen, Trophy, Palette, Home }

export default function ProgramsSection() {
  return (
    <section id="academics" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academics & beyond"
          title="Everything a growing mind needs"
          text="Rigorous academics, champion-level sport and a stage for creativity — all in one place."
        />
        <ul id="beyond" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <Reveal as="li" key={p.id} index={i}>
                <article className="group h-full rounded-3xl border border-line bg-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-ink transition group-hover:rotate-6">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.text}</p>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
