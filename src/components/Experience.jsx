import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import './Experience.css'

const Experience = () => {
  const { t, language } = useLanguage()

  // Edita esta lista con tu experiencia real
  const experiences = [
    {
      id: 1,
      title: {
        es: 'Desarrollador Frontend',
        en: 'Frontend Developer'
      },
      company: 'Empresa Ejemplo',
      location: 'Remoto',
      startDate: '2023',
      endDate: null, // null = Presente
      description: {
        es: [
          'Desarrollo de interfaces de usuario con React y TypeScript',
          'Implementación de diseños responsivos y accesibles',
          'Colaboración con el equipo de backend para integración de APIs',
          'Optimización del rendimiento de aplicaciones web'
        ],
        en: [
          'User interface development with React and TypeScript',
          'Implementation of responsive and accessible designs',
          'Collaboration with backend team for API integration',
          'Web application performance optimization'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
    },
    {
      id: 2,
      title: {
        es: 'Desarrollador Web Junior',
        en: 'Junior Web Developer'
      },
      company: 'Startup Tech',
      location: 'Ciudad, País',
      startDate: '2022',
      endDate: '2023',
      description: {
        es: [
          'Desarrollo de sitios web con HTML, CSS y JavaScript',
          'Mantenimiento y actualización de proyectos existentes',
          'Implementación de nuevas funcionalidades según requerimientos',
          'Participación en reuniones de planificación y revisión de código'
        ],
        en: [
          'Website development with HTML, CSS and JavaScript',
          'Maintenance and update of existing projects',
          'Implementation of new features according to requirements',
          'Participation in planning meetings and code reviews'
        ]
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    },
    {
      id: 3,
      title: {
        es: 'Practicante de Desarrollo',
        en: 'Development Intern'
      },
      company: 'Tech Company',
      location: 'Ciudad, País',
      startDate: '2021',
      endDate: '2022',
      description: {
        es: [
          'Aprendizaje de tecnologías web fundamentales',
          'Apoyo en tareas de desarrollo y testing',
          'Documentación de procesos y código',
          'Trabajo en equipo bajo metodología Agile'
        ],
        en: [
          'Learning fundamental web technologies',
          'Support in development and testing tasks',
          'Documentation of processes and code',
          'Teamwork under Agile methodology'
        ]
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.experience.title}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.experience.subtitle}
        </motion.p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FiBriefcase />
                  </div>
                  <div className="timeline-date">
                    <FiCalendar />
                    <span>
                      {exp.startDate} - {exp.endDate || t.experience.present}
                    </span>
                  </div>
                </div>

                <h3 className="timeline-title">{exp.title[language]}</h3>
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">
                    <FiMapPin /> {exp.location}
                  </span>
                </div>

                <ul className="timeline-description">
                  {exp.description[language].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-technologies">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Experience
