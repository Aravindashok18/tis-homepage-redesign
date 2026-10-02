import { motion } from 'framer-motion'

/** Fades/slides children in once when scrolled into view. `index` staggers siblings. */
export default function Reveal({ as = 'div', index = 0, className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}
