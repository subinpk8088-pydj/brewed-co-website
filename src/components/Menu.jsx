import { motion } from 'framer-motion'
import './Menu.css'

const items = [
  { icon: '☕', name: 'Espresso',      desc: 'Single-origin, pulled at 93°C. Intense, clean, bold.',        price: '₹120' },
  { icon: '🥛', name: 'Latte',         desc: 'Velvety microfoam over a double ristretto. Comfort in a cup.', price: '₹180' },
  { icon: '🧊', name: 'Cold Brew',     desc: '18-hour cold steep. Smooth, zero bitterness.',                price: '₹200' },
  { icon: '☁️', name: 'Cappuccino',    desc: 'Equal thirds — espresso, steamed milk, dense foam.',          price: '₹160' },
  { icon: '🍃', name: 'Matcha Latte',  desc: 'Ceremonial-grade matcha in oat milk. Earthy and calm.',       price: '₹220' },
  { icon: '🫚', name: 'Masala Chai',   desc: 'Kerala spice blend steeped low and slow. Warm and bold.',     price: '₹140' },
]

export default function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <p className="section-label">What We Brew</p>
        <h2 className="section-title">Our <em>Signature</em> Menu</h2>
        <div className="divider" style={{ margin: '0 auto 0' }} />
      </div>
      <div className="menu-grid">
        {items.map((item, i) => (
          <motion.div
            className="menu-card"
            key={item.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <div className="card-icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="card-price">{item.price}</span>
            <div className="card-line" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
