import { Mail, MapPin, Phone, Send } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>WarmPaws</h2>
        <p>Winter pet care, grooming and comfort services in one easy place.</p>
      </div>
      <div className="footer-list">
        <span>
          <Phone size={16} /> +880 1712-000000
        </span>
        <span>
          <Mail size={16} /> hello@warmpaws.com
        </span>
        <span>
          <MapPin size={16} /> Dhaka, Bangladesh
        </span>
      </div>
      <div className="footer-list">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <div className="socials">
          <a href="#" aria-label="Facebook">
            <Send size={18} />
          </a>
          <a href="#" aria-label="Instagram">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
