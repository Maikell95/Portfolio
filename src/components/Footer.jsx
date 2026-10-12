import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner mono">
        <span>© {new Date().getFullYear()} Maikel Ferrer</span>
        <span>{t.footer.location}</span>
      </div>
    </footer>
  );
};

export default Footer;
