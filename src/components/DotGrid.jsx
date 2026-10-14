import { useEffect, useRef } from "react";

// Fondo de toda la página: cuadrícula de puntos casi invisible que se enciende en verde → morado
// alrededor del ratón. Sin ratón (móvil) un foco se pasea despacio. Con movimiento reducido queda quieta.
const PASO = 28;
const RADIO = 170;

const DotGrid = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const css = getComputedStyle(document.documentElement);
    const hex = (v) => css.getPropertyValue(v).trim();
    const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
    const verde = rgb(hex("--accent"));
    const morado = rgb(hex("--accent-2"));
    const base = rgb(hex("--text-muted"));
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, dpr = 1, raton = null, foco = { x: 0, y: 0 }, raf = 0;
    const t0 = performance.now();

    const medir = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dibujar = (t) => {
      ctx.clearRect(0, 0, w, h);
      if (!quieto) {
        if (raton) {
          foco.x += (raton.x - foco.x) * 0.15;
          foco.y += (raton.y - foco.y) * 0.15;
        } else {
          const s = (t - t0) / 1000;
          foco.x += (w * (0.55 + 0.35 * Math.sin(s * 0.21)) - foco.x) * 0.03;
          foco.y += (h * (0.5 + 0.35 * Math.sin(s * 0.33 + 1)) - foco.y) * 0.03;
        }
      }
      for (let y = PASO / 2; y < h; y += PASO) {
        for (let x = PASO / 2; x < w; x += PASO) {
          const d = quieto ? Infinity : Math.hypot(x - foco.x, y - foco.y);
          const k = d < RADIO ? 1 - d / RADIO : 0;
          if (k > 0) {
            const m = Math.min(1, d / RADIO * 1.4);
            const c = verde.map((v, i) => Math.round(v + (morado[i] - v) * m));
            ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.15 + k * 0.7})`;
            ctx.beginPath();
            ctx.arc(x, y, 1 + k * 1.1, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = `rgba(${base[0]},${base[1]},${base[2]},0.2)`;
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
      }
      if (!quieto) raf = requestAnimationFrame(dibujar);
    };

    const mover = (e) => {
      if (e.pointerType === "mouse") raton = { x: e.clientX, y: e.clientY };
    };
    const salir = (e) => {
      if (!e.relatedTarget) raton = null;
    };

    medir();
    foco = { x: w * 0.6, y: h * 0.5 };
    const ro = new ResizeObserver(() => { medir(); if (quieto) dibujar(0); });
    ro.observe(canvas);
    window.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("mouseout", salir);
    dibujar(t0);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", mover);
      document.removeEventListener("mouseout", salir);
    };
  }, []);

  return <canvas ref={ref} className="dot-grid" aria-hidden="true" />;
};

export default DotGrid;
