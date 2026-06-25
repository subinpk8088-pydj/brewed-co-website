import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Brewed & Co.</span>
          <p>Specialty coffee, honest hospitality, and a space that's yours. Fort Kochi, since 2019.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            {['menu', 'about', 'gallery', 'contact'].map(id => (
              <li key={id}><button onClick={() => scrollTo(id)}>{id.charAt(0).toUpperCase() + id.slice(1)}</button></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919847055210">+91 98470 55210</a></li>
            <li><a href="mailto:hello@brewedandco.in">hello@brewedandco.in</a></li>
            <li><span>Fort Kochi, Kerala</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Brewed & Co. All rights reserved. Built by VertexFlow Digital Solutions.</p>
        <div className="social-links">
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="Facebook">fb</a>
          <a href="#" aria-label="Twitter">tw</a>
        </div>
      </div>
    </footer>
  )
}
