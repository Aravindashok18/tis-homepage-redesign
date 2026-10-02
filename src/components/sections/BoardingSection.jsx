import { CheckCircle2 } from 'lucide-react'
import { boardingPoints } from '../../data/content'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function BoardingSection() {
  return (
    <section id="boarding" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-[#0b2a6f] lg:order-1">
          <svg aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
            <circle cx="335" cy="150" r="34" fill="#f5b800" />
            <path d="M0 210 L90 120 L150 180 L230 95 L320 190 L400 140 V300 H0Z" fill="#1d4db0" opacity="0.7" />
            <path d="M0 240 L70 180 L140 230 L220 160 L300 235 L400 190 V300 H0Z" fill="#123a8c" />
            <path d="M0 275 Q100 240 200 262 T400 250 V300 H0Z" fill="#0a2257" />
          </svg>
          <p className="absolute left-6 top-6 max-w-[65%] font-display text-2xl font-bold text-white sm:text-3xl">
            A home away from home, in the foothills of Dehradun.
          </p>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Boarding life"
            title="Boarding that feels like family"
            text="Choose boarding or day schooling — either way, your child learns in a safe, supportive and inspiring environment."
          />
          <ul className="mt-8 space-y-4">
            {boardingPoints.map((point, i) => (
              <Reveal as="li" key={point} index={i} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
