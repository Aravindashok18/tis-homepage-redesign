import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { navItems, school } from '../../data/content'
import useScrolled from '../../hooks/useScrolled'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import Logo from './Logo'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-[#0b2a6f] text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <span>One of India’s top boarding &amp; day schools</span>
          <a href={school.phoneHref} className="flex items-center gap-2 font-medium hover:text-[#f5b800]">
            <Phone size={14} aria-hidden="true" /> {school.phone}
          </a>
        </div>
      </div>
      <div
        className={`relative border-b transition-colors duration-300 ${
          scrolled || open ? 'border-line bg-bg/90 backdrop-blur-lg' : 'border-transparent bg-bg/60 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-accent/15 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button href={school.admissionUrl} className="hidden !min-h-11 sm:inline-flex">
              Apply Now
            </Button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>{open && <MobileNav onClose={() => setOpen(false)} />}</AnimatePresence>
      </div>
    </header>
  )
}
