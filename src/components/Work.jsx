import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import "./Work.css";

const BASE = import.meta.env.BASE_URL;

const categories = ["webs", "apis", "automations", "minecraft", "apps"];

// Cuántos proyectos de cada categoría salen en la pestaña "Todos".
const POR_CATEGORIA_EN_TODOS = 2;

// Proyectos destacados: añade `featured: true` a un proyecto para fijarlo arriba.
// Sale el primero en sus categorías y es de los que se eligen para "Todos".
// Si hay varios destacados, mantienen entre ellos el orden de esta lista.

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
    categories: ["apis", "minecraft"],
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
    id: "captacion-clientes",
    name: { es: "Captación de clientes", en: "Lead capture" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Cada mensaje del formulario de este portafolio se convierte en un lead: la IA saca el tipo de trabajo, el presupuesto y el plazo y lo puntúa del 1 al 10. Se guarda, el cliente recibe una respuesta al momento en su idioma y a mí me llega el aviso. Si se relanza, no duplica nada.",
      en: "Every message from this portfolio's contact form becomes a lead: AI extracts the type of work, budget and timeline and scores it from 1 to 10. It gets stored, the client gets an instant reply in their language and I get notified. Re-runs never duplicate anything.",
    },
    stack: "n8n · EmailJS · IMAP · SMTP · OpenRouter · Data Tables · Telegram",
    preview: {
      title: { es: "🟢 Lead bueno · 8/10 · web", en: "🟢 Good lead · 8/10 · web" },
      lines: [
        { es: "Raul <raul@ejemplo.com>", en: "Raul <raul@example.com>" },
        { es: "💰 200 USD · web para su negocio", en: "💰 200 USD · website for his business" },
        { es: "✉️ Ya le llegó la respuesta automática", en: "✉️ Auto-reply already sent" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/captacion-clientes" }],
  },
  {
    id: "atencion-rag",
    featured: true,
    name: { es: "Atención al cliente con IA (RAG)", en: "AI customer support (RAG)" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Un asistente que responde a los clientes solo con la información del negocio: horarios, precios, políticas. Cargas documentos y los busca por significado. Recuerda la conversación, contesta en el idioma del cliente y, si no sabe algo o piden una persona, me avisa por Telegram.",
      en: "An assistant that answers customers using only the business's own information: hours, prices, policies. You upload documents and it searches them by meaning. It remembers the conversation, replies in the customer's language and, if it doesn't know or they ask for a person, pings me on Telegram.",
    },
    stack: "n8n · Supabase · pgvector · Edge Functions · OpenRouter · Telegram",
    preview: {
      title: { es: "Chat del negocio", en: "Business chat" },
      lines: [
        { es: "Cliente: ¿Abrís los sábados?", en: "Customer: Are you open on Saturdays?" },
        { es: "Asistente: Sí, de 10:00 a 14:00.", en: "Assistant: Yes, from 10:00 to 14:00." },
        { es: "Cliente: ¿y el domingo?", en: "Customer: and on Sunday?" },
        { es: "Asistente: Los domingos cerramos.", en: "Assistant: We're closed on Sundays." },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/atencion-rag" }],
  },
  {
    id: "devoluciones",
    name: { es: "Devoluciones", en: "Returns" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Formulario de devolución para una tienda. Comprueba que el pedido existe y está en plazo, la IA clasifica el motivo y las reglas de la tienda deciden si toca cambio o reembolso. El cliente recibe su número por correo, al equipo le llega el aviso y al resolverla se le notifica al cliente.",
      en: "Return request form for a store. It checks the order exists and is within the return window, AI classifies the reason and the store's rules decide between exchange or refund. The customer gets their number by email, the team gets notified and the customer hears back when it's resolved.",
    },
    stack: "n8n · Form · OpenRouter · Data Tables · SMTP · Telegram",
    preview: {
      title: { es: "📦 Devolución nueva · DEV-261014-GBA7", en: "📦 New return · DEV-261014-GBA7" },
      lines: [
        { es: "Pedido PED-1004 · hace 16 días", en: "Order PED-1004 · 16 days ago" },
        { es: "Motivo: defectuoso · 📷 1 foto", en: "Reason: defective · 📷 1 photo" },
        { es: "💡 Propuesta: reembolso", en: "💡 Proposal: refund" },
        { es: "✉️ Confirmación enviada al cliente", en: "✉️ Confirmation sent to the customer" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/devoluciones" }],
  },
  {
    id: "inventario-stock",
    name: { es: "Inventario con stock bajo", en: "Low-stock inventory" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Cada venta, entrada o ajuste actualiza el stock y queda registrado. Si un producto baja del mínimo avisa al momento, una sola vez al día. Cada mañana manda lo que falta, cuántos días aguanta y el pedido sugerido para cada proveedor. Si todo está bien, no manda nada.",
      en: "Every sale, restock or adjustment updates stock and gets logged. When a product drops below its minimum it alerts right away, once a day at most. Every morning it sends what's running low, how many days it lasts and the suggested order per supplier. If everything's fine, it stays quiet.",
    },
    stack: "n8n · Webhook · Data Tables · Schedule · Telegram",
    preview: {
      title: { es: "🟠 Stock bajo · ACC-002", en: "🟠 Low stock · ACC-002" },
      lines: [
        { es: "Quedan 7 (mínimo 8) tras venta de 5", en: "7 left (minimum 8) after selling 5" },
        { es: "Cobertura ≈ 10 días · TecnoHogar", en: "Lasts ≈ 10 days · TecnoHogar" },
        { es: "Sugerido pedir: 21 u (325,50 €)", en: "Suggested order: 21 units (€325.50)" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/inventario-stock" }],
  },
  {
    id: "lector-documentos",
    name: { es: "Lector de documentos", en: "Document reader" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Subes un contrato, factura o informe en PDF, DOCX o TXT y te devuelve lo importante: resumen, fechas y plazos, importes, riesgos y preguntas que conviene hacer. Los documentos largos los lee por partes. Si el PDF es escaneado o está vacío, te lo dice claro.",
      en: "Upload a contract, invoice or report as PDF, DOCX or TXT and get back what matters: summary, dates and deadlines, amounts, risks and questions worth asking. Long documents are read in parts. If the PDF is scanned or empty, it tells you plainly.",
    },
    stack: "n8n · Form · Extract From File · OpenRouter · Data Tables · Telegram",
    preview: {
      title: { es: "📄 Contrato de desarrollo web", en: "📄 Web development contract" },
      lines: [
        { es: "• 18.500 € en pagos por hitos", en: "• €18,500 paid by milestones" },
        { es: "• Mantenimiento con renovación automática", en: "• Maintenance renews automatically" },
        { es: "⚠️ Cancelar antes de 12 meses: 50 % pendiente", en: "⚠️ Cancel before 12 months: 50% of the rest" },
        { es: "❓ ¿Se firman los anexos antes de empezar?", en: "❓ Are the annexes signed before starting?" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/lector-documentos" }],
  },
  {
    id: "analizador-excel",
    name: { es: "Analizador de Excel", en: "Excel analyzer" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Le mando una hoja de cálculo a mi bot de Telegram y me explica todo lo que hay dentro: qué datos tiene, qué calcula cada fórmula, de qué hoja sale cada cosa y qué está mal. Los números los saca el código y la IA solo los explica, así no inventa nada. El texto del mensaje es la pregunta y la responde primero.",
      en: "I send a spreadsheet to my Telegram bot and it explains everything inside: what data it holds, what each formula calculates, which sheet feeds which, and what's broken. The numbers come from code and the AI only explains them, so nothing is made up. The message text is the question, and it answers that first.",
    },
    stack: "n8n · Telegram · JavaScript · OpenRouter · Data Tables",
    preview: {
      title: { es: "📊 ventas_2026.xlsx", en: "📊 sales_2026.xlsx" },
      lines: [
        { es: "• 3 hojas, 1.240 filas, 412 fórmulas en 6 patrones", en: "• 3 sheets, 1,240 rows, 412 formulas in 6 patterns" },
        { es: "• Ventas!H = Cantidad × Precio (119 filas)", en: "• Sales!H = Quantity × Price (119 rows)" },
        { es: "⚠️ 3 celdas con #¡REF! en Resumen", en: "⚠️ 3 cells with #REF! in Summary" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/analizador-excel" }],
  },
  {
    id: "radar-empleo",
    name: { es: "Radar de empleo", en: "Job radar" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Vigila cada 30 minutos los canales de Telegram y las webs de empleo donde busco trabajo, puntúa cada oferta según mi perfil y me avisa al momento de las que encajan. Descarta las de otros países o fuera de lo mío, no repite ofertas y cada mañana a las 9 me manda el resumen.",
      en: "Every 30 minutes it checks the Telegram channels and job sites I follow, scores each offer against my profile and alerts me right away about the ones that fit. It filters out country-locked or off-profile roles, never repeats an offer and sends me a summary every morning at 9.",
    },
    stack: "n8n · Telegram · JavaScript · RSS · Schedule",
    preview: {
      title: { es: "🔔 Oferta nueva", en: "🔔 New job" },
      lines: [
        "AI Engineer · Python · RAG",
        { es: "🔥 6 puntos (IA, Python, remoto global)", en: "🔥 6 points (AI, Python, global remote)" },
        { es: "☀️ 9:00 · resumen con 4 ofertas", en: "☀️ 9:00 · summary with 4 offers" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/radar-empleo" }],
  },
  {
    id: "lector-correos",
    name: { es: "Lector de correos", en: "Email reader" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Recibo mucho correo. Este flujo lo filtra y me avisa por Telegram solo cuando escribe un posible cliente. Reglas para lo obvio e IA gratuita solo para los casos dudosos, así no gasta nada.",
      en: "I get a lot of email. This workflow filters it and pings me on Telegram only when a potential client writes. Rules for the obvious cases, free AI only for the unclear ones, so it costs nothing to run.",
    },
    stack: "n8n · IMAP · Telegram · OpenRouter · Docker",
    preview: {
      title: { es: "Posible cliente (IA)", en: "Potential client (AI)" },
      lines: [
        { es: "De: Roberto Díaz", en: "From: Roberto Díaz" },
        { es: "Asunto: Consulta", en: "Subject: Inquiry" },
        { es: "Vi tu trabajo en GitHub y quería saber si haces sistemas de reservas…", en: "I saw your work on GitHub and wanted to know if you build booking systems…" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/lector-correos-clientes" }],
  },
  {
    id: "vigilante-errores",
    name: { es: "Vigilante de errores", en: "Error watchdog" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Cuando un flujo de n8n falla, decide qué hacer. Si es por conexión, lo relanza hasta 3 veces esperando 2, 10 y 30 minutos; si no, me avisa por Telegram al momento. El mismo fallo repetido solo avisa una vez cada 30 minutos.",
      en: "When an n8n workflow fails, it decides what to do. Connection errors get retried up to 3 times, waiting 2, 10 and 30 minutes; anything else pings me on Telegram right away. A repeated failure only notifies once every 30 minutes.",
    },
    stack: "n8n · n8n REST API · Telegram",
    preview: {
      title: { es: "Fallo en n8n", en: "n8n failure" },
      lines: [
        { es: "Flujo: Lector de correos", en: "Workflow: Email reader" },
        "Error: ETIMEDOUT",
        { es: "Falló 4 veces (original + 3 reintentos).", en: "Failed 4 times (original + 3 retries)." },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/vigilante-errores" }],
  },
  {
    id: "monitor-conexion",
    name: { es: "Monitor de conexión", en: "Connection monitor" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Comprueba internet cada minuto. Cuando vuelve tras una caída, reinicia los flujos activos y relanza todo lo que falló mientras no había conexión. Así un corte de luz o de red no deja trabajo perdido.",
      en: "Checks the connection every minute. When it comes back after an outage, it restarts active workflows and re-runs everything that failed while offline, so a power or network cut leaves no work behind.",
    },
    stack: "n8n · n8n REST API · Telegram",
    preview: {
      title: { es: "Conexión recuperada", en: "Connection restored" },
      lines: [
        { es: "Tras 12 min sin internet.", en: "After 12 min offline." },
        { es: "Reinicié 2 flujos.", en: "Restarted 2 workflows." },
        { es: "Relancé 5 ejecuciones.", en: "Re-ran 5 executions." },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/monitor-conexion" }],
  },
  {
    id: "asistente-telegram",
    name: { es: "Asistente de Telegram", en: "Telegram assistant" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n + IA", en: "n8n + AI automation" },
    text: {
      es: "Le pregunto a mi bot por mi n8n y responde con datos reales: qué hace cada flujo, qué falló, cuántos leads llegaron o qué seguimientos tengo. Un puente en Docker le pasa los mensajes, así n8n no queda expuesto a internet y solo atiende mi chat.",
      en: "I ask my bot about my n8n and it answers with real data: what each workflow does, what failed, how many leads came in or which follow-ups are due. A small Docker bridge relays the messages, so n8n is never exposed to the internet and only my chat gets answers.",
    },
    stack: "n8n · Telegram Bot API · Python · Docker · OpenRouter",
    preview: {
      title: { es: "¿Hubo errores esta semana?", en: "Any errors this week?" },
      lines: [
        { es: "Sí, 2:", en: "Yes, 2:" },
        { es: "• 12/10 · Vigilante · sin DNS (cayó internet)", en: "• 12/10 · Watchdog · no DNS (internet down)" },
        { es: "• 13/10 · Resumen · parámetro mal formado", en: "• 13/10 · Summary · malformed parameter" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/asistente-telegram" }],
  },
  {
    id: "respaldo-diario",
    name: { es: "Respaldo diario", en: "Daily backup" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Cada noche guarda todos mis flujos y tablas en un repo privado de GitHub, un archivo por flujo, y solo hace commit si algo cambió, así el historial muestra cambios reales. Además me manda el .zip por Telegram.",
      en: "Every night it saves all my workflows and tables to a private GitHub repo, one file per workflow, and only commits when something changed, so the history shows real changes. It also sends me the .zip on Telegram.",
    },
    stack: "n8n · GitHub Git Data API · Telegram",
    preview: {
      title: { es: "Respaldo de n8n · 13/10", en: "n8n backup · 13/10" },
      lines: [
        { es: "7 flujos · 2 tablas", en: "7 workflows · 2 tables" },
        { es: "GitHub: cambios guardados", en: "GitHub: changes saved" },
        "respaldo-n8n-2026-10-13.zip",
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/respaldo-diario" }],
  },
  {
    id: "resumen-semanal",
    name: { es: "Resumen semanal", en: "Weekly summary" },
    categories: ["automations"],
    kind: { es: "Automatización con n8n", en: "n8n automation" },
    text: {
      es: "Los lunes me llega por Telegram cómo fue la semana: leads y cuáles siguen sin respuesta, seguimientos de clientes pendientes o vencidos, errores de cada flujo y actividad en GitHub.",
      en: "Every Monday I get a Telegram summary of the week: leads and which are still unanswered, client follow-ups due or overdue, errors per workflow and GitHub activity.",
    },
    stack: "n8n · Data Tables · GitHub API · Telegram",
    preview: {
      title: { es: "Resumen semanal", en: "Weekly summary" },
      lines: [
        { es: "📬 3 leads · 1 bueno", en: "📬 3 leads · 1 good" },
        { es: "🎯 🔴 1 seguimiento vencido", en: "🎯 🔴 1 overdue follow-up" },
        { es: "🐙 15 commits en 5 repos", en: "🐙 15 commits across 5 repos" },
      ],
    },
    links: [{ type: "code", href: "https://github.com/Maikell95/n8n_automations/tree/main/resumen-semanal" }],
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

// Al cambiar de pestaña: la lista sale hacia arriba y la nueva entra escalonada.
const lista = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18, ease: "easeIn" } },
};
const tarjeta = {
  initial: { opacity: 0, y: 18, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] } },
};

const destacadosPrimero = (lista) => [...lista].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

const deCategoria = (c) => destacadosPrimero(projects.filter((p) => p.categories.includes(c)));

// "Todos": los N primeros de cada categoría, sin repetir los que están en varias.
const todos = (() => {
  const vistos = new Set();
  const lista = [];
  for (const c of categories) {
    for (const p of deCategoria(c).slice(0, POR_CATEGORIA_EN_TODOS)) {
      if (!vistos.has(p.id)) {
        vistos.add(p.id);
        lista.push(p);
      }
    }
  }
  return lista;
})();

const pestanas = ["all", ...categories];
const proyectosDe = (c) => (c === "all" ? todos : deCategoria(c));

// Carrusel de "Todos": entra de derecha a izquierda cada INTERVALO ms.
// Se pausa con el ratón encima o con el foco dentro; flechas, puntos y arrastre con el dedo.
const INTERVALO = 5500;
const desliza = {
  entra: (d) => ({ x: d > 0 ? 90 : -90, opacity: 0 }),
  centro: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } },
  sale: (d) => ({ x: d > 0 ? -90 : 90, opacity: 0, transition: { duration: 0.28, ease: "easeIn" } }),
};

const Carrusel = ({ items, render, quieto, t }) => {
  const [[i, dir], setPos] = useState([0, 1]);
  const [pausa, setPausa] = useState(false);
  const ir = (n, d) => setPos([(n + items.length) % items.length, d]);

  useEffect(() => {
    if (quieto || pausa || items.length < 2) return;
    const id = setTimeout(() => ir(i + 1, 1), INTERVALO);
    return () => clearTimeout(id);
  }, [i, pausa, quieto, items.length]);

  const p = items[i];
  return (
    <div
      className="carrusel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setPausa(false)}
    >
      <div className="carrusel-ventana">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={p.id}
            className="carrusel-diapo"
            custom={dir}
            variants={quieto ? undefined : desliza}
            initial="entra"
            animate="centro"
            exit="sale"
            drag={quieto ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x < -60 || velocity.x < -500) ir(i + 1, 1);
              else if (offset.x > 60 || velocity.x > 500) ir(i - 1, -1);
            }}
          >
            {render(p)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carrusel-controles">
        <button type="button" className="carrusel-flecha" aria-label={t.work.prev} onClick={() => ir(i - 1, -1)}>
          <FiChevronLeft aria-hidden="true" />
        </button>
        <div className="carrusel-puntos">
          {items.map((x, n) => (
            <button
              key={x.id}
              type="button"
              className={`carrusel-punto ${n === i ? "on" : ""}`}
              aria-label={`${t.work.goTo} ${n + 1}`}
              aria-current={n === i}
              onClick={() => ir(n, n >= i ? 1 : -1)}
            >
              {n === i && !quieto && (
                <span key={i} className="carrusel-progreso" style={{ animationDuration: `${INTERVALO}ms`, animationPlayState: pausa ? "paused" : "running" }} />
              )}
            </button>
          ))}
        </div>
        <button type="button" className="carrusel-flecha" aria-label={t.work.next} onClick={() => ir(i + 1, 1)}>
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const Work = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState("all");
  const visible = proyectosDe(active);
  const quieto = useReducedMotion();
  const local = (v) => (typeof v === "string" ? v : v[language]);

  const contenido = (p) => (
    <>
      <div className="work-media">
        {p.image && <img src={p.image} alt={local(p.name)} loading="lazy" draggable="false" />}
        {p.preview && (
          <div className="work-preview mono">
            <strong>{local(p.preview.title)}</strong>
            {p.preview.lines.map((line) => {
              const text = local(line);
              return <span key={text}>{text}</span>;
            })}
          </div>
        )}
      </div>
      <div className="work-body">
        <p className="work-kind mono">{p.kind[language]}</p>
        <h3>{local(p.name)}</h3>
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
    </>
  );

  return (
    <section id="work" className="section">
      <div className="container">
        <p className="section-label reveal">{t.work.label}</p>
        <h2 className="section-title reveal">{t.work.title}</h2>

        <div className="work-tabs reveal" role="tablist">
          {pestanas.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`work-tab ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {active === c && (
                <motion.span
                  layoutId="work-tab-pill"
                  className="work-tab-pill"
                  transition={quieto ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="work-tab-label">{t.work.categories[c]}</span>
              <span className="work-tab-count mono">{proyectosDe(c).length}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="work-list"
            role="tabpanel"
            variants={quieto ? undefined : lista}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {active === "all" ? (
              <motion.div variants={quieto ? undefined : tarjeta}>
                <Carrusel
                  items={visible}
                  quieto={quieto}
                  t={t}
                  render={(p) => <article className="work-item">{contenido(p)}</article>}
                />
              </motion.div>
            ) : (
              visible.map((p) => (
                <motion.article key={p.id} className="work-item" variants={quieto ? undefined : tarjeta}>
                  {contenido(p)}
                </motion.article>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
