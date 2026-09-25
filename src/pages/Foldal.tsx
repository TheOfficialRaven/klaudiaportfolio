import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Fejlc from "../components/Fejlc";
import Hero from "../components/Hero";
import KrtyaKpes from "../components/KrtyaKpes";
import Szveg from "../components/Szveg";
import KrtyaIkonos from "../components/KrtyaIkonos";
import Galria from "../components/Galria";
import Kp from "../components/Kp";
import Visszajelzs from "../components/Visszajelzs";
import HrlevlFeliratkozs from "../components/HrlevlFeliratkozs";
import GYIK from "../components/GYIK";
import Lblc from "../components/Lblc";
import styles from "./Foldal.module.css";

const Foldal: FunctionComponent = () => {
  return (
    <Box className={styles.foldal}>
      <Fejlc />
      <Hero />
      <section data-section className={styles.logk2}>
        <img
          className={styles.log7Icon}
          loading="lazy"
          alt=""
          src="/Log-7@2x.png"
        />
        <img
          className={styles.log7Icon}
          loading="lazy"
          alt=""
          src="/Log-6@2x.png"
        />
        <img
          className={styles.log7Icon}
          loading="lazy"
          alt=""
          src="/Log-3@2x.png"
        />
        <img
          className={styles.log7Icon}
          loading="lazy"
          alt=""
          src="/Log-1@2x.png"
        />
      </section>
      <KrtyaKpes />
      <Szveg />
      <KrtyaIkonos />
      <Galria />
      <Kp />
      <Visszajelzs />
      <HrlevlFeliratkozs />
      <GYIK />
      <Lblc />
    </Box>
  );
};

export default Foldal;
