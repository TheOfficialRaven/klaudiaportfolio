import { FunctionComponent } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  const goTo = useAppNavigate();

  return (
    <section
      id="hero"
      data-section
      className={[styles.hero5, className].join(" ")}
    >
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
          variantMapping={{ inherit: "h1" }}
          sx={{
            fontFamily: "Ultra",
            fontWeight: "400",
            lineHeight: "130%",
          }}
        >
          Meggyőző címsor, röviden leírva
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
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
              fontSize: "14",
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
              <img width="14px" height="14px" src="/chevron-right.svg" />
            }
            disableElevation
            variant="outlined"
            onClick={() => goTo("/referenciaim")}
            sx={{
              color: "#ffcd55",
              fontSize: "14",
              borderColor: "#ffcd55",
              borderRadius: "25px",
              "&:hover": { borderColor: "#ffcd55" },
            }}
          >
            Tekintsd meg munkáim
          </Button>
        </Box>
      </section>
      <div className={styles.heroKep}>
        <img
          className={styles.heroKepImg}
          loading="lazy"
          alt=""
          src="/hero-portre.png"
        />
      </div>
      <div className={styles.feherReteg} aria-hidden="true" inert>
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
            className={[styles.cm, styles.lathatatlan].join(" ")}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{
              fontFamily: "Ultra",
              fontWeight: "400",
              lineHeight: "130%",
            }}
          >
            Meggyőző címsor, röviden leírva
          </Typography>
          <div className={[styles.lers, styles.lathatatlan].join(" ")}>
            Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
            bizonyítékaidat vagy egy előnyöd, funkciód.
          </div>
          <Box className={styles.gombok}>
            <Button
              className={styles.desktopGombok}
              tabIndex={-1}
              endIcon={
                <img
                  className={styles.feherIkon}
                  width="14px"
                  height="14px"
                  src="/chevron-right.svg"
                  alt=""
                />
              }
              disableElevation
              variant="contained"
              sx={{
                color: "#011111",
                fontSize: "14",
                background: "#fffbef",
                borderRadius: "25px",
                "&:hover": { background: "#fffbef" },
              }}
            >
              kapcsolatfelvétel
            </Button>
            <Button
              className={styles.desktopGombok}
              tabIndex={-1}
              endIcon={
                <img
                  width="14px"
                  height="14px"
                  src="/chevron-right.svg"
                  alt=""
                />
              }
              disableElevation
              variant="outlined"
              sx={{
                color: "#fffbef",
                fontSize: "14",
                borderColor: "#fffbef",
                background: "transparent",
                borderRadius: "25px",
                "&:hover": {
                  borderColor: "#fffbef",
                  background: "transparent",
                },
              }}
            >
              Tekintsd meg munkáim
            </Button>
          </Box>
        </section>
        <img
          className={[styles.hero5Child, styles.lathatatlan].join(" ")}
          alt=""
          src="/hero-portre.png"
        />
      </div>
    </section>
  );
};

export default Hero;
