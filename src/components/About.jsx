import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiDatabase, FiSmartphone } from 'react-icons/fi'
import './About.css'

const About = () => {
  const services = [
    {
      icon: <FiLayout />,
      title: 'Diseño Web',
      description: 'Interfaces modernas, intuitivas y atractivas que cautivan a los usuarios.'
    },
    {
      icon: <FiCode />,
      title: 'Desarrollo Frontend',
      description: 'Código limpio y optimizado con las últimas tecnologías del mercado.'
    },
    {
      icon: <FiDatabase />,
      title: 'Backend',
      description: 'APIs robustas y bases de datos escalables para tu aplicación.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Responsive',
      description: 'Diseños que se adaptan perfectamente a cualquier dispositivo.'
    }
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sobre Mí
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Conoce un poco más sobre mi perfil profesional
        </motion.p>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>¡Hola! Soy un <span className="gradient-text">Desarrollador Web</span> apasionado</h3>
            <p>
              Con experiencia en el desarrollo de aplicaciones web modernas y funcionales. 
              Me especializo en crear experiencias de usuario excepcionales utilizando 
              las tecnologías más actuales del mercado.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
              siempre buscando las mejores prácticas de desarrollo. Disfruto aprendiendo 
              nuevas tecnologías y enfrentando desafíos técnicos.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Proyectos completados</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Tecnologías dominadas</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-services"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
