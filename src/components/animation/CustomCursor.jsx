import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'
import useMousePosition from '../../hooks/useMousePosition'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select'

function Cursor() {
  const { x, y } = useMousePosition()
  const ringX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.4 })
  const scale = useMotionValue(1)
  const ringScale = useSpring(scale, { stiffness: 300, damping: 24 })

  useEffect(() => {
    document.documentElement.classList.add('custom-cursor-on')
    const onOver = (e) => scale.set(e.target.closest?.(INTERACTIVE) ? 1.8 : 1)
    const onLeave = () => scale.set(0)
    const onEnter = () => scale.set(1)
    document.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    return () => {
      document.documentElement.classList.remove('custom-cursor-on')
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [scale])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        style={{ x: ringX, y: ringY, scale: ringScale }}
        className="absolute -left-5 -top-5 h-10 w-10 rounded-full border-2 border-accent mix-blend-difference will-change-transform"
      />
      <motion.div
        style={{ x, y }}
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-accent will-change-transform"
      />
    </div>
  )
}

/** Renders only on fine-pointer devices; touch devices get nothing. */
export default function CustomCursor() {
  const fine = useFinePointer()
  return fine ? <Cursor /> : null
}
