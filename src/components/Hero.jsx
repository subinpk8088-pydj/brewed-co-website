import { motion } from 'framer-motion'
import './Hero.css'

const fade = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-pattern" />
      <div className="hero-inner">
        <motion.p className="hero-eyebrow" {...fade(0.1)}>
          Specialty Coffee · Fort Kochi
        </motion.p>
        <motion.h1 {...fade(0.3)}>
          Coffee Crafted.<br />
          <em>Moments Made.</em>
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.5)}>
          Single-origin beans. Unhurried mornings. A room that feels like yours.
          Your third place in the heart of Kochi.
        </motion.p>
        <motion.div className="hero-btns" {...fade(0.7)}>
          <button className="btn-primary" onClick={() => scrollTo('menu')}>
            Explore Our Menu
          </button>
          <button className="btn-outline" onClick={() => scrollTo('about')}>
            Our Story
          </button>
        </motion.div>
        <motion.div className="hero-badge" {...fade(0.9)}>
          <span>☕</span>
          <p>Open today · 7:30 AM – 9:00 PM</p>
        </motion.div>
      </div>
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="scroll-line" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  )
}
