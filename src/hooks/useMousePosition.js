import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

/** Mouse coordinates as motion values — updates never trigger React renders. */
export default function useMousePosition() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return { x, y }
}
