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
      greeting: "👋 ¡Hola! Soy",
      role: "Desarrollador Web",
      description:
        "Apasionado por crear experiencias web únicas y funcionales. Transformo ideas en código limpio y diseños atractivos.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Conoce un poco más sobre mi perfil profesional",
      intro: "¡Hola! Soy un",
      role: "Desarrollador Web",
      passionate: "apasionado",
      description1:
        "Con experiencia en el desarrollo de aplicaciones web modernas y funcionales. Me especializo en crear experiencias de usuario excepcionales utilizando las tecnologías más actuales del mercado.",
      description2:
        "Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre buscando las mejores prácticas de desarrollo. Disfruto aprendiendo nuevas tecnologías y enfrentando desafíos técnicos.",
      yearsExp: "Años de experiencia",
      projectsCompleted: "Proyectos completados",
      techDominated: "Tecnologías dominadas",
      // Services
      webDesign: "Diseño Web",
      webDesignDesc:
        "Interfaces modernas, intuitivas y atractivas que cautivan a los usuarios.",
      frontend: "Desarrollo Frontend",
      frontendDesc:
        "Código limpio y optimizado con las últimas tecnologías del mercado.",
      backend: "Backend",
      backendDesc:
        "APIs robustas y bases de datos escalables para tu aplicación.",
      responsive: "Responsive",
      responsiveDesc:
        "Diseños que se adaptan perfectamente a cualquier dispositivo.",
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
      frontend: "Frontend",
      fullstack: "Full Stack",
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
    },
    // Footer
    footer: {
      description: "Desarrollando experiencias digitales únicas.",
      links: "Enlaces",
      follow: "Sígueme",
      madeWith: "Hecho con",
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
      greeting: "👋 Hi! I'm",
      role: "Web Developer",
      description:
        "Passionate about creating unique and functional web experiences. I transform ideas into clean code and attractive designs.",
      viewProjects: "View Projects",
      contact: "Contact Me",
    },
    // About
    about: {
      title: "About Me",
      subtitle: "Learn a little more about my professional profile",
      intro: "Hi! I'm a",
      role: "Web Developer",
      passionate: "passionate",
      description1:
        "With experience in developing modern and functional web applications. I specialize in creating exceptional user experiences using the most current technologies in the market.",
      description2:
        "My approach focuses on writing clean, maintainable and scalable code, always seeking best development practices. I enjoy learning new technologies and facing technical challenges.",
      yearsExp: "Years of experience",
      projectsCompleted: "Projects completed",
      techDominated: "Technologies mastered",
      // Services
      webDesign: "Web Design",
      webDesignDesc:
        "Modern, intuitive and attractive interfaces that captivate users.",
      frontend: "Frontend Development",
      frontendDesc:
        "Clean and optimized code with the latest market technologies.",
      backend: "Backend",
      backendDesc: "Robust APIs and scalable databases for your application.",
      responsive: "Responsive",
      responsiveDesc: "Designs that adapt perfectly to any device.",
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
      frontend: "Frontend",
      fullstack: "Full Stack",
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
    },
    // Footer
    footer: {
      description: "Developing unique digital experiences.",
      links: "Links",
      follow: "Follow me",
      madeWith: "Made with",
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
