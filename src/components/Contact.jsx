import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
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
        "Tuo5eqSdqpZaoEry6",
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

  const contactInfo = [
    {
      icon: <FiMail />,
      label: t.contact.email,
      value: "maikeudis@gmail.com",
      href: "mailto:maikeudis@gmail.com",
    },
    {
      icon: <FiMapPin />,
      label: t.contact.location,
      value: "La Habana, Cuba",
      href: "#",
    },
  ];

  const socials = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Maikell95",
      label: "GitHub",
    },
    { icon: <FiLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.contact.subtitle}
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>{t.contact.connect}</h3>
            <p>{t.contact.description}</p>

            <div className="contact-details">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                rows="5"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                t.contact.sending
              ) : (
                <>
                  <FiSend /> {t.contact.send}
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t.contact.success}
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t.contact.error || "Error al enviar. Intenta de nuevo."}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
