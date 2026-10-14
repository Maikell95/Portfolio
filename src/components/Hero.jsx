import { Fragment } from "react";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import Typed from "./Typed";
import "./Hero.css";

const Hero = () => {
  const { t, language } = useLanguage();
  const palabras = t.hero.title.split(" ");
  // Lo que va después del título entra cuando han salido las palabras.
  const despues = palabras.length * 45 + 150;

  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-text">
          <p className="hero-status mono">
            <span className="status-dot" /> <Typed text={t.hero.status} />
          </p>
          <h1 key={language} aria-label={t.hero.title}>
            {palabras.map((p, i) => (
              <Fragment key={i}>
                <span className="hero-word" aria-hidden="true">
                  <span style={{ "--i": i }}>{p}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="hero-intro hero-later" style={{ "--d": `${despues}ms` }}>{t.hero.intro}</p>
          <div className="hero-actions hero-later" style={{ "--d": `${despues + 120}ms` }}>
            <a href="#work" className="btn btn-primary">
              {t.hero.ctaWork} <FiArrowRight className="btn-icon" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiMessageSquare className="btn-icon" aria-hidden="true" /> {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
