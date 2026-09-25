import { FunctionComponent } from "react";
import { Typography, Button } from "@mui/material";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Szveg.module.css";

export type SzvegType = {
  className?: string;
};

const Szveg: FunctionComponent<SzvegType> = ({ className = "" }) => {
  const goTo = useAppNavigate();

  return (
    <section
      id="rolam"
      data-section
      className={[styles.kpSzveg1, className].join(" ")}
    >
      <img className={styles.kpIcon} loading="lazy" alt="" src="/K-p4@2x.png" />
      <section className={styles.tartalom}>
        <Typography
          className={styles.alcm}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "130%" }}
        >
          Alcím, ami segíti a címsorodat
        </Typography>
        <Typography
          className={styles.cm}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
        >
          Rövid bemutatkozás
        </Typography>
        <div className={styles.lers}>
          Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
          következményét, fájdalompontot, célcsoport jellemzőit, vágyott
          végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
          előnyt, megoldást, megoldási tervet, folyamatot, csapattagot,
          referenciát, bizonyítékot.
        </div>
        <Button
          className={styles.desktopGombok}
          endIcon={<img width="14px" height="14px" src="/chevron-right.svg" />}
          disableElevation
          variant="contained"
          onClick={() => goTo("/kapcsolat")}
          sx={{
            color: "#f4e9da",
            fontSize: "14",
            background: "#ffcd55",
            borderRadius: "25px",
            "&:hover": { background: "#ffcd55" },
          }}
        >
          Kattints ide
        </Button>
      </section>
    </section>
  );
};

export default Szveg;
