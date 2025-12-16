import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { t, language } = useLanguage();

  /*
   * ═══════════════════════════════════════════════════════════════
   * PLANTILLA DE PROYECTO - Copia este bloque para agregar más
   * ═══════════════════════════════════════════════════════════════
   * {
   *   id: 1,  // Número único para cada proyecto
   *   title: {
   *     es: "Nombre del proyecto en español",
   *     en: "Project name in English",
   *   },
   *   description: {
   *     es: "Descripción breve del proyecto en español.",
   *     en: "Brief project description in English.",
   *   },
   *   image: "🚀",  // Emoji representativo o ruta a imagen
   *   tags: ["React", "Node.js", "PostgreSQL"],  // Tecnologías usadas
   *   category: "web",  // "automation", "web" o "security"
   *   github: "https://github.com/Maikell95/proyecto",  // URL del repo
   *   demo: "https://tu-demo.com",  // URL del demo (opcional)
   *   featured: true,  // true = se muestra más grande
   * },
   * ═══════════════════════════════════════════════════════════════
   */

  const projects = [
    // Agrega tus proyectos aquí usando la plantilla de arriba
  ];

  const filters = [
    { key: "all", label: t.projects.all },
    { key: "automation", label: t.projects.automation },
    { key: "web", label: t.projects.web },
    { key: "security", label: t.projects.security },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? "active" : ""}`}
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
                className={`project-card card ${project.featured ? "featured" : ""}`}
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
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
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
