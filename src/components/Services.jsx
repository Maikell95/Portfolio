import { useLanguage } from "../context/LanguageContext";
import "./Services.css";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container">
        <p className="section-label">{t.services.label}</p>
        <h2 className="section-title">{t.services.title}</h2>
        <div className="services-grid">
          {t.services.items.map((s) => (
            <div key={s.name} className="service">
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
