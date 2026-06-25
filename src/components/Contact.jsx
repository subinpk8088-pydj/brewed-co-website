import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const info = [
  { icon: '📍', label: 'Address',  val: '12B, Burgher Street, Fort Kochi\nKochi, Kerala 682001' },
  { icon: '🕐', label: 'Hours',    val: 'Mon–Fri: 7:30 AM – 9:00 PM\nSat–Sun: 8:00 AM – 10:00 PM' },
  { icon: '📞', label: 'Phone',    val: '+91 9999999999' },
  { icon: '✉️', label: 'Email',    val: 'hello@brewedandco.in' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Come <em>Say Hello</em></h2>
          <div className="divider" />
          {info.map(i => (
            <div className="info-item" key={i.label}>
              <div className="info-icon">{i.icon}</div>
              <div>
                <p className="info-label">{i.label}</p>
                <p className="info-val" style={{ whiteSpace: 'pre-line' }}>{i.val}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="section-label">Reserve a Table</p>
          <h3 className="form-heading">We'd love to have you.</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@email.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Party Size</label>
              <select>
                <option>1 person</option>
                <option>2 people</option>
                <option>3–4 people</option>
                <option>5+ people</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Message (optional)</label>
            <textarea placeholder="Any special requests..." />
          </div>
          <button
            className={`btn-submit ${sent ? 'sent' : ''}`}
            onClick={() => setSent(true)}
          >
            {sent ? 'Reservation Sent ✓' : 'Reserve My Table'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
