import { motion } from 'framer-motion'
import './Gallery.css'

const photos = [
  { seed: 'cafe-bar',     label: 'The Bar',       tall: true  },
  { seed: 'espresso-cup', label: 'Espresso',      tall: false },
  { seed: 'latte-art',    label: 'Latte Art',     tall: false },
  { seed: 'cafe-beans',   label: 'Origin Beans',  tall: false },
  { seed: 'cafe-corner',  label: 'Corner Seat',   tall: false },
]

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <p className="section-label">The Space</p>
        <h2 className="section-title"><em>A Place</em> You'll Return To</h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>
      <div className="gallery-grid">
        {photos.map((p, i) => (
          <motion.div
            key={p.seed}
            className={`gallery-item ${p.tall ? 'tall' : ''}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img
              src={`https://picsum.photos/seed/${p.seed}/${p.tall ? '600/800' : '600/400'}`}
              alt={p.label}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span>{p.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
