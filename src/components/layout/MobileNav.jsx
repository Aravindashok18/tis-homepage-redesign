import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { navItems, school } from '../../data/content'
import Button from '../ui/Button'

export default function MobileNav({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.nav
      id="mobile-nav"
      aria-label="Mobile"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pb-6 pt-2 lg:hidden"
    >
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              className="flex min-h-12 items-center border-b border-line text-lg font-medium"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <Button href={school.admissionUrl} className="mt-5 w-full">
        Apply for Admission
      </Button>
    </motion.nav>
  )
}
