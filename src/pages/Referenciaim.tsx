import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import Fejlc from "../components/Fejlc";
import Lblc from "../components/Lblc";
import ReferenciaKartya from "../components/ReferenciaKartya";
import Visszajelzs from "../components/Visszajelzs";
import { referenciak } from "../data/referenciak";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Referenciaim.module.css";

const Referenciaim: FunctionComponent = () => {
  const goTo = useAppNavigate();

  const gorgetesAMunkakhoz = () => {
    document.getElementById("referenciak")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box className={styles.oldal}>
      <Fejlc />

      <section data-section className={styles.fej}>
        <Typography
          className={styles.alcim}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "130%" }}
        >
          Alcím, ami segíti a címsorodat
        </Typography>
        <Typography
          className={styles.cim}
          variant="inherit"
          variantMapping={{ inherit: "h1" }}
          sx={{
            fontFamily: "Ultra",
            fontWeight: "400",
            fontSize: "60px",
            lineHeight: "130%",
          }}
        >
          Tekintsd meg munkáim
        </Typography>
        <p className={styles.leiras}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </p>
        <Box className={styles.gombok}>
          <Button
            className={styles.desktopGombok}
            endIcon={
              <img width="14px" height="14px" src="/chevron-right.svg" />
            }
            disableElevation
            variant="contained"
            onClick={() => goTo("/kapcsolat")}
            sx={{
              color: "#fffbef",
              fontSize: "14px",
              background: "#ffcd55",
              borderRadius: "25px",
              "&:hover": { background: "#ffcd55" },
            }}
          >
            kapcsolatfelvétel
          </Button>
          <Button
            className={styles.desktopGombok}
            endIcon={
              <img
                width="14px"
                height="14px"
                src="/chevron-right.svg"
                style={{ filter: "brightness(0) saturate(100%) invert(80%) sepia(42%) saturate(749%) hue-rotate(359deg) brightness(103%) contrast(103%)" }}
              />
            }
            disableElevation
            variant="outlined"
            onClick={gorgetesAMunkakhoz}
            sx={{
              color: "#ffcd55",
              fontSize: "14px",
              borderColor: "#ffcd55",
              borderRadius: "25px",
              "&:hover": { borderColor: "#ffcd55" },
            }}
          >
            Tekintsd meg munkáim
          </Button>
        </Box>
      </section>

      <section data-section className={styles.logok}>
        <img className={styles.logo} alt="" src="/Log-7@2x.png" />
        <img className={styles.logo} alt="" src="/Log-6@2x.png" />
        <img className={styles.logo} alt="" src="/Log-3@2x.png" />
        <img className={styles.logo} alt="" src="/Log-1@2x.png" />
      </section>

      <section id="referenciak" data-section className={styles.lista}>
        {referenciak.map((item, index) => (
          <ReferenciaKartya
            key={item.id}
            item={item}
            kepBalra={index % 2 === 0}
          />
        ))}
      </section>

      <section data-section className={styles.cta}>
        <div className={styles.ctaSzoveg}>
          <Typography
            className={styles.ctaCim}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
          >
            Jó weboldal fontossága
          </Typography>
          <p className={styles.ctaLeiras}>
            Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
            következményét, fájdalompontot, célcsoport jellemzőit, vágyott
            végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
            előnyt, megoldást, megoldási tervet, folyamatot, csapattagot,
            referenciát, bizonyítékot.
          </p>
        </div>
        <Button
          className={styles.ctaGomb}
          endIcon={<img width="14px" height="14px" src="/chevron-right.svg" />}
          disableElevation
          variant="contained"
          onClick={() => goTo("/kapcsolat")}
          sx={{
            color: "#fffbef",
            fontSize: "14px",
            background: "#011111",
            borderRadius: "25px",
            "&:hover": { background: "#011111" },
          }}
        >
          Kattints ide
        </Button>
      </section>

      <Visszajelzs />

      <Lblc />
    </Box>
  );
};

export default Referenciaim;
