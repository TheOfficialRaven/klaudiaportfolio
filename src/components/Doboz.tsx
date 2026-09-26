import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Doboz.module.css";

export type DobozType = {
  className?: string;
  kp?: string;
  cm?: string;
};

const Doboz: FunctionComponent<DobozType> = ({ className = "", kp, cm }) => {
  const goTo = useAppNavigate();

  return (
    <section className={[styles.doboz1, className].join(" ")}>
      <img className={styles.kpIcon} loading="lazy" alt="" src={kp} />
      <Typography
        className={styles.cm}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "700", lineHeight: "130%" }}
      >
        {cm}
      </Typography>
      <div className={styles.lers}>
        Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
        bizonyítékaidat vagy egy előnyöd, funkciód. Már csak össze kell
        válogatnod kedvenceidet, és mehet a legózás! Írj nyugodtan saját
        szövegeket is.
      </div>
      <button
        type="button"
        className={styles.gomb}
        onClick={() => goTo("/referenciaim")}
      >
        <Typography
          className={styles.gombszveg}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600", lineHeight: "130%" }}
          component="span"
        >
          Kattints ide
        </Typography>
        <img
          className={styles.ikonIcon}
          loading="lazy"
          alt=""
          src="/Ikon.svg"
        />
      </button>
    </section>
  );
};

export default Doboz;
