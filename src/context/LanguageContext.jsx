import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    nav: {
      work: "Trabajo",
      services: "Servicios",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      title: "Sistemas que trabajan solos.",
      intro:
        "Webs, APIs y automatizaciones con IA que cobran, responden y avisan sin que nadie esté mirando. Soy Maikel Ferrer, desarrollador en La Habana y estudiante de último año de Ingeniería en Ciberseguridad.",
      ctaWork: "Ver proyectos",
      ctaContact: "Escríbeme",
      status: "Disponible para proyectos",
    },
    work: {
      label: "trabajo",
      title: "Lo que he hecho",
      more: "Más proyectos",
      feed: "Ahora mismo, en mis sistemas",
      demo: "Ver en vivo",
      code: "Código",
      private: "Proyecto privado",
      prev: "Proyecto anterior",
      next: "Proyecto siguiente",
      goTo: "Ir al proyecto",
      categories: {
        all: "Todos",
        webs: "Webs",
        apis: "APIs",
        automations: "Automatizaciones",
        minecraft: "Minecraft",
        apps: "Apps",
      },
    },
    services: {
      label: "servicios",
      title: "Lo que hago",
      items: [
        {
          name: "Webs",
          text: "Tiendas, reservas y paneles de administración. Con pagos, despliegue y seguridad desde el principio.",
        },
        {
          name: "APIs y software a medida",
          text: "Backends con Node.js y PostgreSQL, integraciones con pasarelas de pago y servicios externos, y herramientas internas para tu negocio.",
        },
        {
          name: "Automatizaciones",
          text: "Flujos con n8n, bots de Telegram e integraciones entre servicios. Lo que haces a mano cada día, que pase solo.",
        },
        {
          name: "Servicios dedicados",
          text: "Para servidores de Minecraft: tiendas con entrega automática en el juego, webs del servidor, scripts de KubeJS y plugins.",
        },
      ],
    },
    about: {
      label: "sobre mí",
      title: "Desarrollador con base en ciberseguridad",
      p1: "Vivo en La Habana y trabajo en remoto. Estoy en el último año de Ingeniería en Ciberseguridad en la UCI, y se nota en lo que entrego: validación en el servidor, límites de peticiones y nada de fiarse de lo que llega del navegador.",
      p2: "Me gusta entender cómo funciona cada pieza por dentro antes de usarla.",
      stack: "Stack",
      languages: "Idiomas",
      languagesValue: "Español nativo, inglés B1+",
    },
    contact: {
      label: "contacto",
      title: "Cuéntame qué necesitas",
      text: "Respondo por correo o Telegram. Si ya tienes una idea de plazos o presupuesto, inclúyela.",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar",
      sending: "Enviando…",
      success: "Mensaje enviado. Te respondo pronto.",
      error: "No se pudo enviar. Escríbeme directamente al correo.",
      cv: "Descargar CV",
    },
    footer: {
      location: "La Habana, Cuba",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Systems that run on their own.",
      intro:
        "Websites, APIs and AI automations that take payments, answer and alert you while nobody is watching. I'm Maikel Ferrer, a developer based in Havana and a final-year Cybersecurity Engineering student.",
      ctaWork: "See projects",
      ctaContact: "Get in touch",
      status: "Available for projects",
    },
    work: {
      label: "work",
      title: "What I've built",
      more: "More projects",
      feed: "Right now, in my systems",
      demo: "Live",
      code: "Code",
      private: "Private project",
      prev: "Previous project",
      next: "Next project",
      goTo: "Go to project",
      categories: {
        all: "All",
        webs: "Websites",
        apis: "APIs",
        automations: "Automations",
        minecraft: "Minecraft",
        apps: "Apps",
      },
    },
    services: {
      label: "services",
      title: "What I do",
      items: [
        {
          name: "Websites",
          text: "Stores, booking systems and admin panels. Payments, deployment and security built in from day one.",
        },
        {
          name: "APIs & custom software",
          text: "Node.js and PostgreSQL backends, integrations with payment gateways and external services, and internal tools for your business.",
        },
        {
          name: "Automations",
          text: "n8n workflows, Telegram bots and integrations between services. What you do by hand every day, done for you.",
        },
        {
          name: "Dedicated services",
          text: "For Minecraft servers: stores with automatic in-game delivery, server websites, KubeJS scripts and plugins.",
        },
      ],
    },
    about: {
      label: "about",
      title: "A developer grounded in cybersecurity",
      p1: "I live in Havana and work remotely. I'm in my final year of Cybersecurity Engineering at UCI, and it shows in what I ship: server-side validation, rate limiting and never trusting what comes from the browser.",
      p2: "I like to understand how each piece works inside before I use it.",
      stack: "Stack",
      languages: "Languages",
      languagesValue: "Spanish (native), English B1+",
    },
    contact: {
      label: "contact",
      title: "Tell me what you need",
      text: "I reply by email or Telegram. If you already have a timeline or budget in mind, include it.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Message sent. I'll get back to you soon.",
      error: "Couldn't send it. Email me directly instead.",
      cv: "Download CV",
    },
    footer: {
      location: "Havana, Cuba",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
