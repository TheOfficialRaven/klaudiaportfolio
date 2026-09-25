import { FunctionComponent, useState } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Visszajelzs.module.css";

export type VisszajelzsType = {
  className?: string;
};

const velemenyek = [
  {
    nev: "Gabriella Marok",
    ceg: "TheraPlus",
    szoveg:
      "“Ajánlás vagy visszajelzés az egyik vásárlódtól, amiben kiemeli legalább az egyik pozitívumát a terméknek. Ha hosszabban válaszol, akkor valószínűleg te is nagyobb területre szeretnéd berakni, hogy jobban nézzen ki.”",
    avatar: "/Rectangle-10475@2x.png",
    kep: "/Reviewer-Details@2x.png",
  },
  {
    nev: "Kovács Anna",
    ceg: "Fatime Beauty Nails",
    szoveg:
      "“Az együttműködés gördülékeny volt, a weboldal pontosan azt a hangulatot hozza, amit a szalon képvisel. Az ügyfeleim könnyen megtalálják a szolgáltatásokat.”",
    avatar: "/Rectangle-10475@2x.png",
    kep: "/K-p@2x.png",
  },
  {
    nev: "Nagy Péter",
    ceg: "AquaPlusz",
    szoveg:
      "“Végre van egy átlátható, megbízható online jelenlétünk. Az érdeklődők azonnal megtalálják az elérhetőséget, és többen keresnek minket a weben keresztül.”",
    avatar: "/Rectangle-10475@2x.png",
    kep: "/K-p-3@2x.png",
  },
];

const Visszajelzs: FunctionComponent<VisszajelzsType> = ({
  className = "",
}) => {
  const [aktivIndex, setAktivIndex] = useState(0);
  const aktiv = velemenyek[aktivIndex];
  const darab = velemenyek.length;

  const elozo = () => {
    setAktivIndex((jelenlegi) => (jelenlegi - 1 + darab) % darab);
  };

  const kovetkezo = () => {
    setAktivIndex((jelenlegi) => (jelenlegi + 1) % darab);
  };

  return (
    <section data-section className={[styles.visszajelzs14, className].join(" ")}>
      <Box className={styles.tartalom}>
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
          Ügyfélvélemények
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
      </Box>
      <Box className={styles.kpSzveg11}>
        <button
          type="button"
          className={styles.nyilGomb}
          onClick={elozo}
          aria-label="Előző vélemény"
        >
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/Vector.svg"
          />
        </button>
        <section className={styles.tartalomParent}>
          <Box className={styles.tartalom2}>
            <Box className={styles.tartalom3}>
              <img
                className={styles.tartalomChild}
                loading="lazy"
                alt=""
                src={aktiv.avatar}
              />
              <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
            </Box>
            <Typography
              className={styles.cm2}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "700", lineHeight: "130%" }}
            >
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >{`${aktiv.nev} - `}</Typography>
              <Typography
                className={styles.theraplus}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                {aktiv.ceg}
              </Typography>
            </Typography>
            <div className={styles.lers2}>{aktiv.szoveg}</div>
          </Box>
          <img
            className={styles.reviewerDetailsIcon}
            loading="lazy"
            alt=""
            src={aktiv.kep}
          />
        </section>
        <button
          type="button"
          className={[styles.nyilGomb, styles.nyilGombJobb].join(" ")}
          onClick={kovetkezo}
          aria-label="Következő vélemény"
        >
          <img
            className={[styles.vectorIcon, styles.vectorIconJobb].join(" ")}
            loading="lazy"
            alt=""
            src="/Vector.svg"
          />
        </button>
      </Box>
      <Box className={styles.lapoz}>
        {velemenyek.map((velemeny, index) => {
          const aktivPont = index === aktivIndex;
          return (
            <button
              key={velemeny.nev}
              type="button"
              aria-label={`${index + 1}. vélemény`}
              aria-current={aktivPont}
              className={[
                styles.feedbackItems,
                aktivPont ? styles.feedbackItems2 : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setAktivIndex(index)}
            />
          );
        })}
      </Box>
    </section>
  );
};

export default Visszajelzs;
