import { useLanguage } from "../context/LanguageContext";
import "./About.css";

const stack = [
  "React",
  "TypeScript",
  "Node.js / Express",
  "PostgreSQL / Supabase",
  "React Native / Expo",
  "n8n",
  "KubeJS",
  "Docker",
  "Linux",
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container about-inner">
        <div>
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="about-text">{t.about.p1}</p>
          <p className="about-text">{t.about.p2}</p>
        </div>
        <dl className="about-facts">
          <dt>{t.about.stack}</dt>
          <dd className="mono">{stack.join(" · ")}</dd>
          <dt>{t.about.languages}</dt>
          <dd>{t.about.languagesValue}</dd>
        </dl>
      </div>
    </section>
  );
};

export default About;
