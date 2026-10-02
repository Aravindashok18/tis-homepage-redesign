import { Sprout, Users } from 'lucide-react'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About TIS"
            title="Seamless opportunities for every child"
            text="Established in 2012 under Rishabh Educational Trust, Tulas International School offers world-class education, modern facilities, and a nurturing environment for academic, social, and cultural development."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal index={1} className="rounded-3xl bg-brand p-7 text-brand-ink">
            <Users aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-bold">6:1 attention</h3>
            <p className="mt-2 text-sm opacity-85">A student–teacher ratio that lets every child be known and heard.</p>
          </Reveal>
          <Reveal index={2} className="rounded-3xl border border-line bg-surface p-7 sm:mt-8">
            <Sprout aria-hidden="true" className="text-brand" />
            <h3 className="mt-4 font-display text-xl font-bold">Pollution-free campus</h3>
            <p className="mt-2 text-sm text-muted">22 acres of clean air and open space to learn, play and grow.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
