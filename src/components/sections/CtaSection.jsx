import { Mail, Phone } from 'lucide-react'
import { admissionSteps, school } from '../../data/content'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

export default function CtaSection() {
  return (
    <section id="admission" className="px-4 py-20 sm:px-6 md:py-28">
      <div
        id="contact"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b2a6f] px-6 py-14 text-white sm:px-12 md:py-20"
      >
        <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f5b800]/30 blur-3xl" />
        <Reveal className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
            Admissions are open. Give your child the Tulas advantage.
          </h2>
          <p className="mt-4 text-lg text-white/80">Three simple steps to begin their journey with us.</p>
        </Reveal>
        <ol className="relative mt-10 grid gap-4 md:grid-cols-3">
          {admissionSteps.map((s, i) => (
            <Reveal as="li" key={s.title} index={i} className="rounded-2xl border border-white/15 bg-white/10 p-6">
              <span className="font-display text-3xl font-bold text-[#f5b800]">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-white/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={school.admissionUrl}>Apply Online</Button>
          <Button href={school.phoneHref} variant="ghost">
            <Phone size={18} aria-hidden="true" /> {school.phone}
          </Button>
          <Button href={`mailto:${school.email}`} variant="ghost">
            <Mail size={18} aria-hidden="true" /> {school.email}
          </Button>
        </div>
      </div>
    </section>
  )
}
