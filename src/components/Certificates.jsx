import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Certificates.css";

const Certificates = () => {
  const { t, language } = useLanguage();

  /*
   * ═══════════════════════════════════════════════════════════════
   * PLANTILLA DE CERTIFICADO - Copia este bloque para agregar más
   * ═══════════════════════════════════════════════════════════════
   * {
   *   id: 1,  // Número único para cada certificado
   *   title: {
   *     es: "Nombre del certificado en español",
   *     en: "Certificate name in English",
   *   },
   *   issuer: "Nombre de la institución",  // Ej: "Google", "Meta", "Coursera"
   *   date: "2024",  // Año de obtención
   *   credentialUrl: "https://...",  // URL para verificar (opcional, puede ser null)
   * },
   * ═══════════════════════════════════════════════════════════════
   */

  const certificates = [
    // Agrega tus certificados aquí usando la plantilla de arriba
  ];

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.certificates.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.certificates.subtitle}
        </motion.p>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="certificate-icon">
                <FiAward />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title[language]}</h3>
                <span className="certificate-issuer">{cert.issuer}</span>
                <div className="certificate-date">
                  <FiCalendar />
                  <span>{cert.date}</span>
                </div>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <FiExternalLink />
                  <span>{t.certificates.viewCredential}</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
