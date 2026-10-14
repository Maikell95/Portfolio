import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.work, href: "#work" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    // Activa = la sección que contiene la línea central de la pantalla.
    // Se recalcula al hacer scroll y cuando cambia la altura de las secciones (p. ej. al cambiar de pestaña).
    const calcular = () => {
      if (window.scrollY < 200) return setActiveSection(null);
      const centro = window.innerHeight / 2;
      const actual = sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= centro && r.bottom > centro;
      });
      setActiveSection(actual ? `#${actual.id}` : null);
    };
    let pendiente = false;
    const onScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        calcular();
      });
    };
    const ro = new ResizeObserver(onScroll);
    sections.forEach((s) => ro.observe(s));
    window.addEventListener("scroll", onScroll, { passive: true });
    calcular();

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">
          Maikel Ferrer
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "active" : ""}
              aria-current={activeSection === item.href ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="nav-button mono"
            onClick={toggleLanguage}
            title={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            className="nav-button menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
