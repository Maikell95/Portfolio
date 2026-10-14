import { useEffect } from "react";

// Hace aparecer los elementos .reveal al entrar en pantalla (añade .in).
// Sin JS o con movimiento reducido todo se ve desde el principio.
export default function useReveal() {
  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (quieto || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    // Vigila la raíz y lo que tenga dentro: los nodos que React vuelve a crear (p. ej. al cambiar
    // de idioma, si su key cambia) también tienen que aparecer.
    const vigilar = (raiz) => {
      if (raiz.nodeType !== 1 && raiz !== document) return;
      if (raiz.matches?.(".reveal:not(.in)")) io.observe(raiz);
      raiz.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    };
    vigilar(document);
    const mo = new MutationObserver((cambios) => cambios.forEach((c) => c.addedNodes.forEach(vigilar)));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
