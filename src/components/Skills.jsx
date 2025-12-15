import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  // Edita esta lista con tus skills reales
  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 90 },
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: 85 },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: 95 },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: 90 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: 75 },
    { name: "Git", icon: <SiGit />, color: "#F05032", level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 85 },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 70 },
    { name: "Python", icon: <SiPython />, color: "#3776AB", level: 65 },
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
