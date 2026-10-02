import { MotionConfig } from 'framer-motion'
import Marquee from './components/animation/Marquee'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import { marqueeItems } from './data/content'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import BoardingSection from './components/sections/BoardingSection'
import CtaSection from './components/sections/CtaSection'
import HeroSection from './components/sections/HeroSection'
import ProgramsSection from './components/sections/ProgramsSection'
import StatsSection from './components/sections/StatsSection'
import TestimonialSection from './components/sections/TestimonialSection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <Marquee items={marqueeItems} />
        <ProgramsSection />
        <BoardingSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
