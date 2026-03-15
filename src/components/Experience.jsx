import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Experience.css";

const Experience = () => {
  const { t, language } = useLanguage();

  /*
   * ═══════════════════════════════════════════════════════════════
   * PLANTILLA DE EXPERIENCIA - Copia este bloque para agregar más
   * ═══════════════════════════════════════════════════════════════
   * {
   *   id: 1,  // Número único para cada experiencia
   *   title: {
   *     es: "Título del puesto en español",
   *     en: "Job title in English",
   *   },
   *   company: "Nombre de la empresa",
   *   location: "Ciudad, País",
   *   startDate: "2024",      // Año de inicio
   *   endDate: null,          // null = Presente, o "2025" para fecha específica
   *   description: {
   *     es: [
   *       "Responsabilidad o logro 1",
   *       "Responsabilidad o logro 2",
   *       "Responsabilidad o logro 3",
   *     ],
   *     en: [
   *       "Responsibility or achievement 1",
   *       "Responsibility or achievement 2",
   *       "Responsibility or achievement 3",
   *     ],
   *   },
   *   technologies: ["Tech1", "Tech2", "Tech3"],
   * },
   * ═══════════════════════════════════════════════════════════════
   */

  const experiences = [
    {
      id: 1,
      title: {
        es: "Desarrollador Web Freelancer",
        en: "Freelance Web Developer",
      },
      company: "Freelance",
      location: "La Habana, Cuba",
      startDate: "2024",
      endDate: null,
      description: {
        es: [
          "Desarrollo de sitios web y aplicaciones a medida para clientes diversos",
          "Creación de flujos de automatización con n8n para optimizar procesos de negocio",
          "Diseño e implementación de interfaces modernas y responsivas con React y Tailwind CSS",
          "Desarrollo de APIs REST y gestión de bases de datos PostgreSQL",
        ],
        en: [
          "Development of custom websites and applications for diverse clients",
          "Creation of automation workflows with n8n to optimize business processes",
          "Design and implementation of modern, responsive interfaces with React and Tailwind CSS",
          "REST API development and PostgreSQL database management",
        ],
      },
      technologies: ["React", "Node.js", "PostgreSQL", "n8n", "Tailwind CSS"],
    },
    // Agrega tus experiencias aquí usando la plantilla de arriba
  ];

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
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
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
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
