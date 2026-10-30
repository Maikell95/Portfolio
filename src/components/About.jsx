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
          <h2 className="section-title reveal">{t.about.title}</h2>
          <p className="about-text reveal">{t.about.p1}</p>
          <p className="about-text reveal">{t.about.p2}</p>
        </div>
        <dl className="about-facts reveal" style={{ "--i": 2 }}>
          <dt>{t.about.stack}</dt>
          <dd className="mono">{stack.join(", ")}</dd>
          <dt>{t.about.languages}</dt>
          <dd>{t.about.languagesValue}</dd>
        </dl>
      </div>
    </section>
  );
};

export default About;
