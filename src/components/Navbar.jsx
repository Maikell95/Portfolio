import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.a href="#hero" className="logo" whileHover={{ scale: 1.05 }}>
          <span className="logo-bracket">&lt;</span>
          MF.dev
          <span className="logo-bracket">/&gt;</span>
        </motion.a>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: "var(--accent-primary)" }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <motion.button
            className="lang-toggle"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={
              language === "es" ? "Switch to English" : "Cambiar a Español"
            }
          >
            <FiGlobe />
            <span>{language.toUpperCase()}</span>
          </motion.button>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
