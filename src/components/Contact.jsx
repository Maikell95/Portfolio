import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes integrar con EmailJS, Formspree, etc.
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'tu@email.com',
      href: 'mailto:tu@email.com'
    },
    {
      icon: <FiMapPin />,
      label: 'Ubicación',
      value: 'Tu Ciudad, País',
      href: '#'
    }
  ]

  const socials = [
    { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Conectemos</h3>
            <p>
              Estoy abierto a nuevas oportunidades y colaboraciones. 
              No dudes en contactarme si tienes alguna pregunta o propuesta.
            </p>

            <div className="contact-details">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows="5"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Enviando...'
              ) : (
                <>
                  <FiSend /> Enviar mensaje
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ ¡Mensaje enviado correctamente!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
