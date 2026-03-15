import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { language, toggleLanguage, t } = useLanguage();

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ["hero", "about", "skills", "experience", "certificates", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.certificates, href: "#certificates" },
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

        {/* Overlay para cerrar menú al tocar fuera */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10, backgroundColor: "var(--bg-secondary)" }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menú desktop */}
        <div className="nav-menu-desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="theme-icon"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </motion.div>
            </AnimatePresence>
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
