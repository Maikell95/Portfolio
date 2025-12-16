import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    // Hero
    hero: {
      greeting: "Soy",
      role: "Desarrollador Web y de Automatizaciones",
      description:
        "Estudiante de Ing. en Ciberseguridad apasionado por el desarrollo web y las automatizaciones. Transformo ideas en soluciones funcionales con código limpio.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Conoce un poco más sobre mi perfil profesional",
      intro: "¡Hola! Soy",
      role: "Maikel Ferrer",
      passionate: "",
      description1:
        "Estudiante de Ingeniería en Ciberseguridad desde La Habana, Cuba. Me apasiona el desarrollo web fullstack, las automatizaciones y el mundo de la inteligencia artificial. Creo firmemente en aprender a fondo cada tecnología antes de usarla, entendiendo su funcionamiento interno en lugar de depender de soluciones rápidas.",
      description2:
        "Actualmente me especializo en crear flujos de automatización con n8n, desarrollo aplicaciones web con React y Django, y administro sistemas Linux. Mi objetivo es combinar mis conocimientos en ciberseguridad con el desarrollo para crear soluciones seguras y eficientes.",
      yearsExp: "Año aprendiendo",
      projectsCompleted: "Proyectos realizados",
      techDominated: "Tecnologías aprendidas",
      // Services
      webDesign: "Diseño Web",
      webDesignDesc:
        "Interfaces modernas e intuitivas con React y Tailwind CSS.",
      frontend: "Automatización",
      frontendDesc:
        "Flujos de trabajo inteligentes con n8n para optimizar procesos.",
      backend: "Backend & Bases de Datos",
      backendDesc:
        "APIs con Django REST Framework y bases de datos PostgreSQL.",
      responsive: "Linux & Seguridad",
      responsiveDesc:
        "Administración de sistemas y enfoque en ciberseguridad.",
    },
    // Skills
    skills: {
      title: "Skills & Tecnologías",
      subtitle:
        "Herramientas y tecnologías que utilizo para dar vida a los proyectos",
    },
    // Experience
    experience: {
      title: "Experiencia Laboral",
      subtitle: "Mi trayectoria profesional en el desarrollo de software",
      present: "Presente",
    },
    // Projects
    projects: {
      title: "Mis Proyectos",
      subtitle: "Una selección de mis trabajos más recientes",
      all: "Todos",
      automation: "Automatización",
      web: "Desarrollo Web",
      security: "Ciberseguridad",
    },
    // Contact
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      connect: "Conectemos",
      description:
        "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme si tienes alguna pregunta o propuesta.",
      email: "Email",
      location: "Ubicación",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "✅ ¡Mensaje enviado correctamente!",
      error: "❌ Error al enviar. Intenta de nuevo.",
    },
    // Footer
    footer: {
      description: "Automatizando procesos y creando soluciones web desde Cuba.",
      links: "Enlaces",
      follow: "Sígueme",
      createdWith: "Creado con",
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "I'm",
      role: "Web & Automation Developer",
      description:
        "Cybersecurity Engineering student passionate about web development and automation. I transform ideas into functional solutions with clean code.",
      viewProjects: "View Projects",
      contact: "Contact Me",
    },
    // About
    about: {
      title: "About Me",
      subtitle: "Learn a little more about my professional profile",
      intro: "Hi! I'm",
      role: "Maikel Ferrer",
      passionate: "",
      description1:
        "Cybersecurity Engineering student from Havana, Cuba. I'm passionate about fullstack web development, automation, and the world of artificial intelligence. I firmly believe in learning each technology in depth before using it, understanding its inner workings rather than relying on quick solutions.",
      description2:
        "Currently I specialize in creating automation workflows with n8n, developing web applications with React and Django, and managing Linux systems. My goal is to combine my cybersecurity knowledge with development to create secure and efficient solutions.",
      yearsExp: "Year learning",
      projectsCompleted: "Projects completed",
      techDominated: "Technologies learned",
      // Services
      webDesign: "Web Design",
      webDesignDesc:
        "Modern and intuitive interfaces with React and Tailwind CSS.",
      frontend: "Automation",
      frontendDesc:
        "Smart workflows with n8n to optimize processes.",
      backend: "Backend & Databases",
      backendDesc:
        "APIs with Django REST Framework and PostgreSQL databases.",
      responsive: "Linux & Security",
      responsiveDesc:
        "System administration and cybersecurity focus.",
    },
    // Skills
    skills: {
      title: "Skills & Technologies",
      subtitle: "Tools and technologies I use to bring projects to life",
    },
    // Experience
    experience: {
      title: "Work Experience",
      subtitle: "My professional career in software development",
      present: "Present",
    },
    // Projects
    projects: {
      title: "My Projects",
      subtitle: "A selection of my most recent works",
      all: "All",
      automation: "Automation",
      web: "Web Development",
      security: "Cybersecurity",
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      connect: "Let's Connect",
      description:
        "I'm open to new opportunities and collaborations. Feel free to contact me if you have any questions or proposals.",
      email: "Email",
      location: "Location",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "✅ Message sent successfully!",
      error: "❌ Failed to send. Please try again.",
    },
    // Footer
    footer: {
      description: "Automating processes and building web solutions from Cuba.",
      links: "Links",
      follow: "Follow me",
      createdWith: "Built with",
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
