import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const { t, language } = useLanguage()

  // Edita esta lista con tus proyectos reales
  const projects = [
    {
      id: 1,
      title: {
        es: 'E-Commerce App',
        en: 'E-Commerce App'
      },
      description: {
        es: 'Tienda online completa con carrito de compras, autenticación y pasarela de pagos.',
        en: 'Complete online store with shopping cart, authentication and payment gateway.'
      },
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: {
        es: 'Dashboard Analytics',
        en: 'Analytics Dashboard'
      },
      description: {
        es: 'Panel de control interactivo con gráficos dinámicos y reportes en tiempo real.',
        en: 'Interactive control panel with dynamic charts and real-time reports.'
      },
      image: '📊',
      tags: ['React', 'Chart.js', 'API'],
      category: 'frontend',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: {
        es: 'Task Manager',
        en: 'Task Manager'
      },
      description: {
        es: 'Aplicación de gestión de tareas con drag & drop y sincronización en la nube.',
        en: 'Task management app with drag & drop and cloud sync.'
      },
      image: '✅',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 4,
      title: {
        es: 'Weather App',
        en: 'Weather App'
      },
      description: {
        es: 'Aplicación del clima con geolocalización y pronóstico de 7 días.',
        en: 'Weather app with geolocation and 7-day forecast.'
      },
      image: '🌤️',
      tags: ['JavaScript', 'API', 'CSS3'],
      category: 'frontend',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: {
        es: 'Blog Personal',
        en: 'Personal Blog'
      },
      description: {
        es: 'Blog con sistema de comentarios, categorías y panel de administración.',
        en: 'Blog with comment system, categories and admin panel.'
      },
      image: '📝',
      tags: ['Next.js', 'Markdown', 'Vercel'],
      category: 'fullstack',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
      title: {
        es: 'Landing Page',
        en: 'Landing Page'
      },
      description: {
        es: 'Landing page moderna y animada para producto SaaS.',
        en: 'Modern and animated landing page for SaaS product.'
      },
      image: '🚀',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/Maikell95',
      demo: 'https://demo.com',
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: t.projects.all },
    { key: 'frontend', label: t.projects.frontend },
    { key: 'fullstack', label: t.projects.fullstack }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.projects.subtitle}
        </motion.p>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <FiFolder className="folder-icon" />
                    <h3>{project.title[language]}</h3>
                  </div>
                  <p>{project.description[language]}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
