import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.work, href: "#work" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">
          Maikel Ferrer
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
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
