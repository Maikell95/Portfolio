import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

// Avisos reales de mis flujos y de la tienda (los mismos que se ven en cada proyecto).
// tono: ok = algo salió bien, aviso = requiere atención, info = el sistema respondió solo.
const avisos = [
  {
    tono: "ok",
    origen: { es: "Tienda · Cobble Quest", en: "Store · Cobble Quest" },
    titulo: { es: "Pago capturado con PayPal", en: "PayPal payment captured" },
    detalle: { es: "Rango VIP entregado en lobby, juego y proxy", en: "VIP rank delivered to lobby, game and proxy" },
  },
  {
    tono: "info",
    origen: { es: "Radar de empleo", en: "Job radar" },
    titulo: { es: "Oferta nueva que encaja", en: "New matching job" },
    detalle: { es: "AI Engineer · Python, RAG · 6 puntos", en: "AI Engineer · Python, RAG · 6 points" },
  },
  {
    tono: "ok",
    origen: { es: "Captación de clientes", en: "Lead capture" },
    titulo: { es: "Lead bueno, 8/10", en: "Good lead, 8/10" },
    detalle: { es: "Quiere una web con reservas y pagos", en: "Wants a site with bookings and payments" },
  },
  {
    tono: "info",
    origen: { es: "Atención al cliente (RAG)", en: "Customer support (RAG)" },
    titulo: { es: "Respondido con la documentación", en: "Answered from the docs" },
    detalle: { es: "«¿Llegan a Playa?» Sí, mensajería 400 CUP", en: "“Do you deliver to Playa?” Yes, 400 CUP" },
  },
  {
    tono: "aviso",
    origen: { es: "Inventario", en: "Inventory" },
    titulo: { es: "Stock bajo en ACC-002", en: "Low stock on ACC-002" },
    detalle: { es: "Quedan 3. Pedido sugerido al proveedor", en: "3 left. Supplier order suggested" },
  },
  {
    tono: "ok",
    origen: { es: "Monitor de conexión", en: "Connection monitor" },
    titulo: { es: "Conexión recuperada", en: "Connection restored" },
    detalle: { es: "Tras 12 min sin internet, 2 flujos reiniciados", en: "After 12 min offline, 2 workflows restarted" },
  },
];

const VISIBLES = 4;
const CADA = 4200; // ms entre un aviso y el siguiente
const hace = (n, es) => (n === 0 ? (es ? "ahora" : "now") : es ? `hace ${n * 3} min` : `${n * 3} min ago`);

// Columna de avisos: al cargar entran uno a uno y luego sigue llegando uno nuevo arriba.
// Es el único movimiento que ocurre sin que nadie toque nada; con movimiento reducido queda quieta.
const Avisos = ({ es, local, titulo }) => {
  const quieto = useReducedMotion();
  const [total, setTotal] = useState(quieto ? VISIBLES : 1);

  useEffect(() => {
    if (quieto) return;
    const id = setInterval(() => setTotal((n) => n + 1), total < VISIBLES ? 650 : CADA);
    return () => clearInterval(id);
  }, [quieto, total]);

  // Los más recientes primero; la clave cuenta las vueltas para que cada llegada sea un aviso nuevo.
  const vistos = Array.from({ length: Math.min(total, VISIBLES) }, (_, k) => total - 1 - k);

  return (
    <aside className="avisos" aria-label={titulo}>
      <p className="avisos-titulo">
        <span className="status-dot" /> {titulo}
      </p>
      <ol className="avisos-lista">
        <AnimatePresence initial={false} mode="popLayout">
          {vistos.map((n, edad) => {
            const a = avisos[n % avisos.length];
            return (
              <motion.li
                key={n}
                layout={!quieto}
                className={`aviso aviso-${a.tono}`}
                initial={quieto ? false : { opacity: 0, y: -14, scale: 0.98 }}
                animate={{ opacity: edad === VISIBLES - 1 ? 0.45 : 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="aviso-cabecera">
                  <span>{local(a.origen)}</span>
                  <time>{hace(edad, es)}</time>
                </div>
                <strong>{local(a.titulo)}</strong>
                <span className="aviso-detalle">{local(a.detalle)}</span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>
    </aside>
  );
};

const Hero = () => {
  const { t, language } = useLanguage();
  const local = (v) => v[language];

  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-status">
            <span className="status-dot" /> {t.hero.status}
          </p>
          <h1>{t.hero.title}</h1>
          <p className="hero-intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              {t.hero.ctaWork}
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FiMessageSquare className="btn-icon" aria-hidden="true" /> {t.hero.ctaContact}
            </a>
          </div>
        </div>
        <Avisos es={language === "es"} local={local} titulo={t.work.feed} />
      </div>
    </header>
  );
};

export default Hero;
