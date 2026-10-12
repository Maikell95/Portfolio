import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-status mono">
            <span className="status-dot" /> {t.hero.status}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="hero-intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              {t.hero.ctaWork}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
        <img
          className="hero-photo"
          src={`${import.meta.env.BASE_URL}5046582651954858759.jpg`}
          alt="Maikel Ferrer"
          width="280"
          height="280"
        />
      </div>
    </header>
  );
};

export default Hero;
