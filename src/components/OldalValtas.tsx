import { useEffect, useRef } from "react";
import { oldalValtasCsatlakozik } from "../utils/oldalValtas";
import styles from "./OldalValtas.module.css";

export default function OldalValtas() {
  const retegRef = useRef<HTMLDivElement>(null);
  const korRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    oldalValtasCsatlakozik(retegRef.current, korRef.current);
    return () => oldalValtasCsatlakozik(null, null);
  }, []);

  return (
    <div ref={retegRef} className={styles.reteg} aria-hidden="true">
      <div ref={korRef} className={styles.kor} />
    </div>
  );
}
