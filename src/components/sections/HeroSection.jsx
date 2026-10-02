import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Trophy } from 'lucide-react'
import { rankings, school } from '../../data/content'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-[#0b2a6f] pt-32 pb-20 text-white md:pt-44 md:pb-28"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#f5b800]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge className="!bg-white/10 !text-[#f5b800]">
              <Trophy size={14} aria-hidden="true" /> #1 school in Dehradun
            </Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Where young minds become <span className="text-[#f5b800]">global leaders.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-white/85">
            Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be
            global leaders — on a 22-acre campus in the Doon valley.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={school.admissionUrl}>
              Apply for Admission <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost">
              Book a Campus Visit
            </Button>
          </motion.div>
          <motion.p variants={item} className="mt-6 flex items-center gap-2 text-sm text-white/70">
            <MapPin size={16} aria-hidden="true" /> Chakrata Road, Selaqui, Dehradun
          </motion.p>
        </motion.div>

        <motion.div style={{ y: cardY }} className="relative">
          <div
            aria-hidden="true"
            className="spin-slow pointer-events-none absolute -inset-6 rounded-full border border-dashed border-[#f5b800]/40"
          />
          <span
            aria-hidden="true"
            className="float absolute -right-2 -top-6 z-10 rounded-full bg-[#f5b800] px-4 py-2 text-sm font-semibold text-[#1a1400] shadow-lg"
          >
            Est. 2012
          </span>
          <span
            aria-hidden="true"
            className="float absolute -bottom-5 -left-3 z-10 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0b2a6f] shadow-lg [animation-delay:1.5s]"
          >
            CBSE · Boarding &amp; Day
          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8"
          >
          <p className="text-sm font-semibold tracking-widest text-[#f5b800] uppercase">Ranked among the best</p>
          <ul className="mt-5 divide-y divide-white/15">
            {rankings.map((r) => (
              <li key={r.where} className="flex items-baseline gap-4 py-4">
                <span className="font-display text-5xl font-bold text-[#f5b800]">{r.rank}</span>
                <span className="text-lg text-white/90">{r.where}</span>
              </li>
            ))}
          </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
