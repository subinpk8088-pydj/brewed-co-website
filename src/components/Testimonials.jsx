import { motion } from 'framer-motion'
import './Testimonials.css'

const reviews = [
  {
    text: "I've traveled for coffee before. I didn't expect to find it this good in Fort Kochi. The cold brew alone is worth the trip across town.",
    name: 'Anjali Menon', role: 'Food Writer, The Hindu',
  },
  {
    text: "I work from here every Thursday. The Wi-Fi is fast, the music is always right, and nobody rushes you. My second office.",
    name: 'Rohan Krishnan', role: 'Product Designer',
  },
  {
    text: "The masala chai here makes me feel like my grandmother is in the kitchen. That's the highest compliment I can give any café.",
    name: 'Priya Nair', role: 'Regular since 2020',
  },
]

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="testi-header">
        <p className="section-label">What They Say</p>
        <h2 className="section-title">Regulars <em>Speak</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>
      <div className="testi-grid">
        {reviews.map((r, i) => (
          <motion.div
            className="testi-card"
            key={r.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="stars">★★★★★</div>
            <p className="testi-text">"{r.text}"</p>
            <div className="testi-author">
              <strong>{r.name}</strong>
              <span>{r.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
