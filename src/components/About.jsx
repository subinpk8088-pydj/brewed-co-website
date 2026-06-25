import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { value: '6+',  label: 'Years Brewing' },
  { value: '12',  label: 'Origin Farms' },
  { value: '340+', label: 'Regulars' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://picsum.photos/seed/cafe-interior/600/750"
            alt="Brewed & Co. interior"
          />
          <div className="img-badge">Est. 2019</div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="section-label">Our Story</p>
          <h2 className="section-title">More Than <em>Just Coffee</em></h2>
          <div className="divider" />
          <p>Brewed & Co. started as a quiet obsession — a belief that great coffee shouldn't require a flight to Milan. We opened in 2019, tucked into a heritage building in Fort Kochi, with secondhand furniture and a La Marzocca that cost more than our rent.</p>
          <p>Every bean is traceable to a named farm. Every cup is made by someone who has spent years learning how not to rush it. We source from Coorg, Chikmagalur, and Wayanad — beans that carry the character of the land.</p>
          <p>This isn't a coffee chain. It's a room where time slows down a little.</p>
          <div className="about-stats">
            {stats.map(s => (
              <div className="stat" key={s.label}>
                <h4>{s.value}</h4>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
