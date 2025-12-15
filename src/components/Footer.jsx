import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const socials = [
    { icon: <FiGithub />, href: "https://github.com/Maikell95" },
    { icon: <FiLinkedin />, href: "https://linkedin.com" },
    { icon: <FiTwitter />, href: "https://twitter.com" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span>&lt;</span>Portfolio<span>/&gt;</span>
            </a>
            <p>{t.footer.description}</p>
          </div>

          <div className="footer-links">
            <h4>{t.footer.links}</h4>
            <nav>
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <h4>{t.footer.follow}</h4>
            <div className="social-links">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Tu Nombre. {t.footer.madeWith}{" "}
            <FiHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
