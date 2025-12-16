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
