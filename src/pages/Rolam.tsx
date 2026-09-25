import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import Fejlc from "../components/Fejlc";
import Lblc from "../components/Lblc";
import HrlevlFeliratkozs from "../components/HrlevlFeliratkozs";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Rolam.module.css";

const elonyok = [
  { cim: "Ügyfélközpontúság" },
  { cim: "Garancia" },
  { cim: "Minőség" },
];

const Rolam: FunctionComponent = () => {
  const goTo = useAppNavigate();

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
          Ismerj meg jobban
        </Typography>
        <p className={styles.fejLeiras}>
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
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(80%) sepia(42%) saturate(749%) hue-rotate(359deg) brightness(103%) contrast(103%)",
                }}
              />
            }
            disableElevation
            variant="outlined"
            onClick={() => goTo("/referenciaim")}
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

      <section data-section className={styles.bemutatkozas}>
        <img
          className={styles.bemutatkozasKep}
          src="/K-p4@2x.png"
          alt=""
          loading="lazy"
        />
        <div className={styles.bemutatkozasSzoveg}>
          <Typography
            className={styles.alcim}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "130%" }}
          >
            Alcím, ami segíti a címsorodat
          </Typography>
          <Typography
            className={styles.szekcioCim}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
          >
            Bemutatkozás
          </Typography>
          <p className={styles.leiras}>
            Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
            következményét, fájdalompontot, célcsoport jellemzőit, vágyott
            végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
            előnyt, megoldást, megoldási tervet, folyamatot, csapattagot,
            referenciát, bizonyítékot.
          </p>
          <p className={styles.leiras}>
            Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
            következményét, fájdalompontot, célcsoport jellemzőit, vágyott
            végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
            előnyt, megoldást, megoldási tervet, folyamatot, csapattagot,
            referenciát.
          </p>
          <svg
            className={styles.alairas}
            viewBox="0 0 280 90"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 78C28 18 48 8 62 38C74 64 58 82 46 62C62 52 118 22 148 34C176 45 154 78 178 58C198 42 232 20 268 28"
              stroke="#ffcd55"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      <section data-section className={styles.elonyok}>
        <Typography
          className={styles.alcimKozep}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "130%" }}
        >
          Alcím, ami segíti a címsorodat
        </Typography>
        <Typography
          className={styles.szekcioCim}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
        >
          Mellettem szóló előnyök
        </Typography>
        <p className={styles.elonyLeiras}>
          Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
          következményét, fájdalompontot, célcsoport jellemzőit, vágyott
          végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
          előnyt, megoldást, megoldási tervet, folyamatot, csapattagot,
          referenciát, bizonyítékot.
        </p>
        <div className={styles.elonyKartyak}>
          {elonyok.map((elony) => (
            <article key={elony.cim} className={styles.elonyKartya}>
              <span className={styles.elonyIkon} aria-hidden="true" />
              <Typography
                className={styles.elonyCim}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "130%" }}
              >
                {elony.cim}
              </Typography>
              <p className={styles.elonyKartyaLeiras}>
                Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
                bizonyítékaidat vagy egy előnyöd, funkciód.
              </p>
            </article>
          ))}
        </div>
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

      <section data-section className={styles.munkatars}>
        <img
          className={styles.munkatarsKep}
          src="/Group-8729@2x.png"
          alt=""
          loading="lazy"
        />
        <div className={styles.munkatarsSzoveg}>
          <Typography
            className={styles.alcim}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "130%" }}
          >
            Alcím, ami segíti a címsorodat
          </Typography>
          <Typography
            className={styles.szekcioCim}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
          >
            Munkatársam
          </Typography>
          <p className={styles.leiras}>
            Itt tudod hosszabban bemutatni, saját magad vagy a problémát,
            következményét, fájdalompontot, célcsoport jellemzőit, vágyott
            végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót,
            előnyt, megoldást.
          </p>
          <svg
            className={styles.dirdulas}
            viewBox="0 0 220 48"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 30C28 8 52 42 78 22C104 2 128 36 154 18C180 0 198 28 216 16"
              stroke="#ffcd55"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M18 40C40 22 62 44 88 28C114 12 140 40 168 26"
              stroke="#ffcd55"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      <HrlevlFeliratkozs kepJobbra />

      <Lblc />
    </Box>
  );
};

export default Rolam;
