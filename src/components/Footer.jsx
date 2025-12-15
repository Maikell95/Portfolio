import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ]

  const socials = [
    { icon: <FiGithub />, href: 'https://github.com' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com' },
    { icon: <FiTwitter />, href: 'https://twitter.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span>&lt;</span>Portfolio<span>/&gt;</span>
            </a>
            <p>Desarrollando experiencias digitales únicas.</p>
          </div>

          <div className="footer-links">
            <h4>Enlaces</h4>
            <nav>
              {links.map(link => (
                <a key={link.name} href={link.href}>{link.name}</a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <h4>Sígueme</h4>
            <div className="social-links">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Tu Nombre. Hecho con <FiHeart className="heart-icon" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
