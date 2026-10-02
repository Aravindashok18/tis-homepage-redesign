import { Quote } from 'lucide-react'
import { testimonial } from '../../data/content'
import Reveal from '../animation/Reveal'

export default function TestimonialSection() {
  return (
    <section aria-label="Parent testimonial" className="bg-surface px-4 py-20 sm:px-6 md:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto text-accent" size={40} aria-hidden="true" />
        <blockquote className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
          “{testimonial.quote}”
        </blockquote>
        <p className="mt-5 text-muted">— {testimonial.by}</p>
      </Reveal>
    </section>
  )
}
