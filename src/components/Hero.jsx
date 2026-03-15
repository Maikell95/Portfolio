import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSettings } from "react-icons/fi";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiTypescript,
  SiLinux,
  SiVuedotjs,
  SiNodedotjs,
  SiNextdotjs,
  SiAngular,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t, language } = useLanguage();
  
  // Frases para el efecto typewriter
  const phrases = language === 'es' 
    ? [
        "Maikel Ferrer",
        "Full Stack Dev",
        "Automatizaciones",
        "Ciberseguridad",
      ]
    : [
        "Maikel Ferrer",
        "Full Stack Dev",
        "Automation",
        "Cybersecurity",
      ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, currentPhraseIndex === 0 ? 2000 : 1500); // Pausa más larga en el nombre
      return () => clearTimeout(pauseTimer);
    }

    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Borrando
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases]);

  // Reset cuando cambia el idioma
  useEffect(() => {
    setCurrentPhraseIndex(0);
    setCurrentText("");
    setIsDeleting(false);
    setIsPaused(false);
  }, [language]);

  const skills = [
    { icon: <SiPython />, color: "#3776AB", top: "15%", left: "55%" },
    { icon: <SiJavascript />, color: "#F7DF1E", top: "8%", left: "70%" },
    { icon: <SiReact />, color: "#61DAFB", top: "20%", left: "85%" },
    { icon: <SiHtml5 />, color: "#E34F26", top: "35%", left: "60%" },
    { icon: <SiCss3 />, color: "#1572B6", top: "30%", left: "78%" },
    { icon: <SiDjango />, color: "#092E20", top: "45%", left: "90%" },
    { icon: <SiNodedotjs />, color: "#339933", top: "55%", left: "58%" },
    { icon: <SiPostgresql />, color: "#4169E1", top: "50%", left: "75%" },
    { icon: <SiTailwindcss />, color: "#06B6D4", top: "65%", left: "88%" },
    { icon: <SiVite />, color: "#646CFF", top: "70%", left: "62%" },
    { icon: <SiGit />, color: "#F05032", top: "75%", left: "78%" },
    { icon: <SiLinux />, color: "#FCC624", top: "85%", left: "55%" },
    { icon: <FiSettings />, color: "#EA4B71", top: "80%", left: "70%" },
    { icon: <SiVuedotjs />, color: "#4FC08D", top: "12%", left: "62%" },
    { icon: <SiNextdotjs />, color: "#808080", top: "40%", left: "72%" },
    { icon: <SiTypescript />, color: "#3178C6", top: "60%", left: "82%" },
    { icon: <SiAngular />, color: "#DD0031", top: "25%", left: "92%" },
  ];

  return (
    <section id="hero" className="hero">
      {/* Iconos flotantes dispersos */}
      <div className="hero-floating-skills">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="floating-skill-icon"
            style={{
              top: skill.top,
              left: skill.left,
              color: skill.color,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {currentPhraseIndex === 0 && (
              <motion.span
                className="hero-greeting"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {t.hero.greeting}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.h1
            className="hero-name typewriter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {currentText}
            <span className="cursor">|</span>
          </motion.h1>

          <motion.div
            className="hero-role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero-role-prefix">{"<"}</span>
            <motion.span
              className="hero-role gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.hero.role}
            </motion.span>
            <span className="hero-role-prefix">{"/>"}</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewProjects}
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiMail /> {t.hero.contact}
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/Maikell95"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maikell-ferrer-4bb997399/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiLinkedin />
            </a>
            <a href="public/cv.pdf" download className="social-link">
              <FiDownload />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image-container">
              <img
                src="/Portfolio/5046582651954858759.jpg"
                alt="Maikel Ferrer"
                className="hero-photo"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
