import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiFolder, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

// Importar imágenes
import saborAutenticoImg from "/images/sabor-autentico.png";
import cobbleQuestImg from "/images/cobblequest.jpg";

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
    {
      id: 1,
      title: {
        es: "Sabor Auténtico - E-commerce de Restaurante",
        en: "Sabor Auténtico - Restaurant E-commerce",
      },
      description: {
        es: "Sitio web fullstack para restaurante con menú interactivo, carrito de compras, sistema de reservaciones, carta digital, autenticación JWT, pasarelas de pago y panel de administración.Todas las medidas de seguridad implementadas. Diseño responsivo con modo oscuro/claro.",
        en: "Fullstack restaurant website with interactive menu, shopping cart, reservation system, JWT authentication, payment gateways and admin panel. Responsive design with dark/light mode.",
      },
      image: saborAutenticoImg,
      isImage: true,
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind", "JWT"],
      category: "web",
      github: "https://github.com/Maikell95",
      featured: true,
    },
    {
      id: 2,
      title: {
        es: "Cobble Quest - Plataforma Web para Servidor Minecraft",
        en: "Cobble Quest - Minecraft Server Web Platform",
      },
      description: {
        es: "Plataforma fullstack para servidor de Minecraft Cobblemon con tienda integrada, sistema de pagos (PayPal/Stripe), wiki de Pokémon, rankings de jugadores, panel de administración, sistema de eventos y autenticación JWT. Backend con Express 5, Supabase y medidas de seguridad (Helmet, rate limiting).",
        en: "Fullstack platform for a Cobblemon Minecraft server with integrated store, payment system (PayPal/Stripe), Pokémon wiki, player rankings, admin panel, event system and JWT authentication. Backend with Express 5, Supabase and security measures (Helmet, rate limiting).",
      },
      image: cobbleQuestImg,
      isImage: true,
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Express", "Supabase", "PayPal"],
      category: "web",
      github: "https://github.com/Maikell95/Cobble-Quest-Net-Frontend",
      featured: true,
    },
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

        <motion.div className="projects-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card card ${project.featured ? "featured" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  {project.isImage ? (
                    <img 
                      src={project.image} 
                      alt={project.title[language]} 
                      className="project-img"
                    />
                  ) : (
                    <span className="project-emoji">{project.image}</span>
                  )}
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <FiFolder className="folder-icon" />
                    <h3>{project.title[language]}</h3>
                  </div>
                  <p>{project.description[language]}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-github-link"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                      >
                        <FiGithub />
                      </a>
                    </div>
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
