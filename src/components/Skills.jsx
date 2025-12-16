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
  SiCplusplus,
  SiDotnet,
  SiLinux,
} from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "Python", icon: <SiPython />, color: "#3776AB", level: 55 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 50 },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: 60 },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: 55 },
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: 45 },
    { name: "Django", icon: <SiDjango />, color: "#092E20", level: 45 },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", level: 50 },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 45 },
    { name: "C#", icon: <SiDotnet />, color: "#512BD4", level: 40 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 50 },
    { name: "n8n", icon: <FiSettings />, color: "#EA4B71", level: 65 },
    { name: "Linux", icon: <SiLinux />, color: "#FCC624", level: 70 },
    { name: "Git", icon: <SiGit />, color: "#F05032", level: 45 },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 50 },
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

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
