import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { footerNavItems } from "../constants/navigation";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Lblc.module.css";

export type LblcType = {
  className?: string;
};

const Lblc: FunctionComponent<LblcType> = ({ className = "" }) => {
  const goTo = useAppNavigate();

  return (
    <section data-section className={[styles.lblc8, className].join(" ")}>
      <button
        type="button"
        className={styles.logoButton}
        onClick={() => goTo("/")}
        aria-label="Ugrás a főoldalra"
      >
        <img className={styles.logIcon} loading="lazy" alt="" src="/Log.svg" />
      </button>
      <Box className={styles.men} component="nav" aria-label="Lábléc navigáció">
        {footerNavItems.map(({ label, href }) => (
          <button
            key={label}
            type="button"
            className={[styles.lers, styles.navLink].join(" ")}
            onClick={() => goTo(href)}
          >
            {label}
          </button>
        ))}
      </Box>
      <img className={styles.lblc8Child} alt="" src="/Line-8.svg" />
      <Box className={styles.socialMedia}>
        <img
          className={styles.facebookIcon}
          loading="lazy"
          alt=""
          src="/facebook.svg"
        />
        <img
          className={styles.facebookIcon}
          loading="lazy"
          alt=""
          src="/instagram.svg"
        />
      </Box>
      <div className={styles.lers}>© Cégnév Kft. - Minden jog fenntartva!</div>
      <div className={styles.lers2}>Adatkezelési tájékoztató</div>
    </section>
  );
};

export default Lblc;
