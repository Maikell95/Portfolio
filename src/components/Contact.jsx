import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiSend } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS - Credenciales configuradas
    emailjs
      .sendForm(
        "service_2fs9yrk",
        "template_pvzquo3",
        formRef.current,
        "aFtSWaMGLLszp6Myw",
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("Error:", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        },
      );
  };

  const links = [
    { icon: <FiMail />, label: "maikeudis@gmail.com", href: "mailto:maikeudis@gmail.com" },
    { icon: <FaTelegramPlane />, label: "Telegram", href: "https://t.me/+5355865065" },
    { icon: <FiGithub />, label: "GitHub", href: "https://github.com/Maikell95" },
    { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/maikelferrer/" },
  ];

  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <div>
          <p className="section-label reveal">{t.contact.label}</p>
          <h2 className="section-title reveal">{t.contact.title}</h2>
          <p className="contact-text reveal">{t.contact.text}</p>
          <ul className="contact-links reveal">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.icon} {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} download>
                <FiDownload /> {t.contact.cv}
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form reveal" style={{ "--i": 2 }}>
          <label>
            {t.contact.name}
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            {t.contact.email}
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            {t.contact.message}
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? t.contact.sending : t.contact.send}
            <FiSend className="btn-icon" aria-hidden="true" />
          </button>
          {status === "success" && <p className="form-status ok">{t.contact.success}</p>}
          {status === "error" && <p className="form-status error">{t.contact.error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
