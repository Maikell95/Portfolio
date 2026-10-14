import { useEffect, useState } from "react";

// Escribe el texto letra a letra con un cursor de terminal. Se reescribe al cambiar de idioma.
const Typed = ({ text, delay = 250, speed = 38 }) => {
  const quieto = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(quieto ? text.length : 0);

  useEffect(() => {
    if (quieto) return setN(text.length);
    setN(0);
    let i = 0, id;
    const paso = () => {
      i += 1;
      setN(i);
      if (i < text.length) id = setTimeout(paso, speed);
    };
    id = setTimeout(paso, delay);
    return () => clearTimeout(id);
  }, [text, delay, speed, quieto]);

  return (
    <span className="typed" aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span className="typed-cursor" aria-hidden="true" />
    </span>
  );
};

export default Typed;
