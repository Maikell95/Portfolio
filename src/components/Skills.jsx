import { useState } from "react";
import { motion } from "framer-motion";
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
  SiDotnet,
  SiLinux,
  SiVuedotjs,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiAngular,
} from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    // Fila 1: Lenguajes base
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    // Fila 2: Frameworks Frontend
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Vue", icon: <SiVuedotjs />, color: "#4FC08D" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#808080" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    // Fila 3: Backend y herramientas
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "n8n", icon: <FiSettings />, color: "#EA4B71" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.skills.subtitle}
        </motion.p>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`skill-chip ${activeSkill === skill.name ? "active" : ""}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              style={{ "--skill-color": skill.color }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
            >
              <span className="skill-name">{skill.name}</span>
              <span className="skill-icon">{skill.icon}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
