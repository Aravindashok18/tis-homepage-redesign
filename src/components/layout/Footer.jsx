import { MapPin, Mail, Phone } from 'lucide-react'
import { footerLinks, navItems, school } from '../../data/content'
import Logo from './Logo'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#0b2a6f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/75">
            Academic excellence, holistic development, and preparing students to be global leaders.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold text-[#f5b800]">Explore</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {[...navItems, ...footerLinks].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex min-h-8 items-center text-white/80 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="space-y-3 text-sm not-italic text-white/80">
          <h2 className="font-display text-lg font-bold text-[#f5b800]">Contact</h2>
          <p className="flex gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            {school.address}
          </p>
          <p className="flex gap-3">
            <Phone size={18} className="shrink-0" aria-hidden="true" />
            <a href={school.phoneHref} className="hover:text-white">{school.phone}</a>
          </p>
          <p className="flex gap-3">
            <Mail size={18} className="shrink-0" aria-hidden="true" />
            <a href={`mailto:${school.email}`} className="hover:text-white">{school.email}</a>
          </p>
        </address>
      </div>
      <p className="border-t border-white/15 px-4 py-5 text-center text-xs text-white/60">
        © {YEAR} Tulas International School. Homepage redesign concept.
      </p>
    </footer>
  )
}
