import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

/** Boolean that flips once the page scrolls past `threshold` px. */
export default function useScrolled(threshold = 24) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > threshold))

  return scrolled
}
