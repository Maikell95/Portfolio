import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Work.css";

const BASE = import.meta.env.BASE_URL;

const categories = ["webs", "automations", "minecraft", "apps"];

const projects = [
  {
    id: "cobble-quest-web",
    name: "Cobble Quest · Web",
    categories: ["minecraft", "webs"],
    kind: { es: "Tienda para servidor de Minecraft", en: "Minecraft server store" },
    text: {
      es: "Web y tienda de un servidor de Cobblemon en producción. Catálogo, carrito y pago con PayPal o tarjeta, rangos, wiki de Pokémon generada desde el repositorio oficial de Cobblemon y jugadores en línea en tiempo real.",
      en: "Website and store for a live Cobblemon server. Catalog, cart and PayPal or card checkout, ranks, a Pokémon wiki generated from the official Cobblemon repository and live online players.",
    },
    stack: "React 19 · TypeScript · Vite · Tailwind · PayPal JS SDK",
    image: `${BASE}images/cobblequest.jpg`,
    links: [
      { type: "demo", href: "https://store.wrquest.xyz" },
      { type: "code", href: "https://github.com/Maikell95/Cobble-Quest-Net-Frontend" },
    ],
  },
  {
    id: "cobble-quest-api",
    name: "Cobble Quest · API",
    categories: ["minecraft", "webs"],
    kind: { es: "Backend con entrega automática", en: "Backend with automatic delivery" },
    text: {
      es: "La API detrás de la tienda. Captura el pago, decide en el servidor qué comandos tocan, sin fiarse de lo que manda el navegador, y los ejecuta en todos los servidores de la red a través del panel Pelican. El jugador recibe lo que compró al momento y nadie entrega nada a mano.",
      en: "The API behind the store. It captures the payment, decides server-side which commands to run, never trusting what the browser sends, and executes them on every server in the network through the Pelican panel. Players get what they bought instantly and nobody delivers anything by hand.",
    },
    stack: "Node.js · Express 5 · TypeScript · Supabase · PayPal · Stripe · Pelican API",
    preview: {
      title: "POST /api/payments/capture-order",
      lines: [
        { es: "✓ pago capturado · PayPal", en: "✓ payment captured · PayPal" },
        "→ give Steve pokemon:rare_candy 8",
        "→ lp user Steve parent add vip",
        { es: "✓ entregado en lobby, juego y proxy", en: "✓ delivered to lobby, game and proxy" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/Cobble-Quest-Net-Backend" }],
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

        <div key={active} className="work-list" role="tabpanel">
          {visible.map((p, i) => (
            <article key={p.id} className="work-item" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="work-media">
                {p.image && <img src={p.image} alt={p.name} loading="lazy" />}
                {p.preview && (
                  <div className="work-preview mono">
                    <strong>{p.preview.title}</strong>
                    {p.preview.lines.map((line) => {
                      const text = typeof line === "string" ? line : line[language];
                      return <span key={text}>{text}</span>;
                    })}
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
