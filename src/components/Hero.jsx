import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const roles = ['Desarrollador Web', 'Frontend Developer', 'React Developer']

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            👋 ¡Hola! Soy
          </motion.span>

          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Tu Nombre
          </motion.h1>

          <motion.div 
            className="hero-role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero-role-prefix">{'<'}</span>
            <motion.span 
              className="hero-role gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Desarrollador Web
            </motion.span>
            <span className="hero-role-prefix">{'/>'}</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Apasionado por crear experiencias web únicas y funcionales.
            Transformo ideas en código limpio y diseños atractivos.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiMail /> Contactar
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin />
            </a>
            <a href="/cv.pdf" download className="social-link">
              <FiDownload />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image-container">
              <div className="hero-avatar">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="floating-badge badge-1">
              <span>⚛️</span> React
            </div>
            <div className="floating-badge badge-2">
              <span>🚀</span> Vite
            </div>
            <div className="floating-badge badge-3">
              <span>✨</span> CSS3
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
