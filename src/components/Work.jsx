import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Work.css";

const BASE = import.meta.env.BASE_URL;

const categories = ["webs", "automations", "minecraft", "apps"];

const projects = [
  {
    id: "cobble-quest",
    name: "Cobble Quest",
    categories: ["minecraft", "webs"],
    kind: { es: "Tienda para servidor de Minecraft", en: "Minecraft server store" },
    text: {
      es: "Tienda de un servidor de Cobblemon en producción. El jugador paga con PayPal o tarjeta y recibe el rango o los objetos en el juego al momento: la API ejecuta los comandos en todos los servidores de la red a través del panel Pelican. Nadie entrega nada a mano.",
      en: "Live store for a Cobblemon server. Players pay with PayPal or card and get their rank or items in-game instantly: the API runs the commands on every server in the network through the Pelican panel. Nobody delivers anything by hand.",
    },
    stack: "React · TypeScript · Express 5 · Supabase · PayPal · Pelican API",
    image: `${BASE}images/cobblequest.jpg`,
    links: [
      { type: "demo", href: "https://store.wrquest.xyz" },
      { type: "code", href: "https://github.com/Maikell95/Cobble-Quest-Net-Backend" },
    ],
  },
  {
    id: "lector-correos",
    name: "Lector de correos",
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Recibo mucho correo. Este flujo lo filtra y me avisa por Telegram solo cuando escribe un posible cliente. Reglas para lo obvio e IA gratuita solo para los casos dudosos, así no gasta nada.",
      en: "I get a lot of email. This workflow filters it and pings me on Telegram only when a potential client writes. Rules for the obvious cases, free AI only for the unclear ones, so it costs nothing to run.",
    },
    stack: "n8n · IMAP · Telegram · OpenRouter · Docker",
    preview: {
      title: "Posible cliente (IA)",
      lines: ["De: Roberto Díaz", "Asunto: Consulta", "Vi tu trabajo en GitHub y quería saber si haces sistemas de reservas…"],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations" }],
  },
  {
    id: "midex",
    name: "MiDex",
    categories: ["apps"],
    kind: { es: "App Android", en: "Android app" },
    text: {
      es: "Pokédex competitiva en español. Calculadora de daño con el motor oficial de Smogon, team builder, speed tiers y estadísticas de uso por tier. Funciona sin conexión y se actualiza sola cada día.",
      en: "Competitive Pokédex in Spanish. Damage calculator on Smogon's official engine, team builder, speed tiers and usage stats per tier. Works offline and updates itself daily.",
    },
    stack: "Expo · React Native · TypeScript · @smogon/calc",
    links: [{ type: "code", href: "https://github.com/Maikell95/MiDex" }],
  },
  {
    id: "sabor-autentico",
    name: "Sabor Auténtico",
    categories: ["webs"],
    kind: { es: "Web de restaurante", en: "Restaurant website" },
    text: {
      es: "Web completa para un restaurante: menú interactivo, carrito, reservas, autenticación y panel de administración. Modo claro y oscuro.",
      en: "Full website for a restaurant: interactive menu, cart, bookings, authentication and admin panel. Light and dark mode.",
    },
    stack: "React · Node.js · PostgreSQL · Tailwind · JWT",
    image: `${BASE}images/sabor-autentico.png`,
    links: [],
  },
];

const Work = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(categories[0]);
  const visible = projects.filter((p) => p.categories.includes(active));

  return (
    <section id="work" className="section">
      <div className="container">
        <p className="section-label">{t.work.label}</p>
        <h2 className="section-title">{t.work.title}</h2>

        <div className="work-tabs" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`work-tab ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {t.work.categories[c]}
              <span className="work-tab-count mono">
                {projects.filter((p) => p.categories.includes(c)).length}
              </span>
            </button>
          ))}
        </div>

        <div className="work-list" role="tabpanel">
          {visible.map((p) => (
            <article key={p.id} className="work-item">
              <div className="work-media">
                {p.image && <img src={p.image} alt={p.name} loading="lazy" />}
                {p.preview && (
                  <div className="work-preview mono">
                    <strong>{p.preview.title}</strong>
                    {p.preview.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="work-body">
                <p className="work-kind mono">{p.kind[language]}</p>
                <h3>{p.name}</h3>
                <p className="work-text">{p.text[language]}</p>
                <p className="work-stack mono">{p.stack}</p>
                <div className="work-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.type === "demo" ? <FiExternalLink /> : <FiGithub />}
                      {l.type === "demo" ? t.work.demo : t.work.code}
                    </a>
                  ))}
                  {p.links.length === 0 && <span className="work-private">{t.work.private}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
