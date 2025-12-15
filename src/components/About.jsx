import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiDatabase, FiSmartphone } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: <FiLayout />,
      title: t.about.webDesign,
      description: t.about.webDesignDesc
    },
    {
      icon: <FiCode />,
      title: t.about.frontend,
      description: t.about.frontendDesc
    },
    {
      icon: <FiDatabase />,
      title: t.about.backend,
      description: t.about.backendDesc
    },
    {
      icon: <FiSmartphone />,
      title: t.about.responsive,
      description: t.about.responsiveDesc
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
          {t.about.title}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.about.subtitle}
        </motion.p>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>{t.about.intro} <span className="gradient-text">{t.about.role}</span> {t.about.passionate}</h3>
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">{t.about.yearsExp}</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t.about.projectsCompleted}</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">{t.about.techDominated}</span>
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
