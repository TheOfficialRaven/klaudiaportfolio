import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import { useKepValtas } from "../hooks/useKepValtas";
import styles from "./Galria.module.css";

export type GalriaType = {
  className?: string;
};

const oldalak = [
  ["/K-p-3@2x.png", "/K-p-2@2x.png", "/K-p-1@2x.png"],
  ["/K-p2@2x.png", "/K-p@2x.png", "/K-p4@2x.png"],
];

const Galria: FunctionComponent<GalriaType> = ({ className = "" }) => {
  const [aktivOldal, setAktivOldal] = useState(0);
  const [mozog, setMozog] = useState(false);
  const kepekRef = useKepValtas(aktivOldal, mozog);
  const oldalSzam = oldalak.length;
  const kepek = oldalak[aktivOldal];

  const mutat = (index: number) => {
    if (index === aktivOldal) return;
    setMozog(true);
    setAktivOldal(index);
  };

  const elozo = () => {
    mutat((aktivOldal - 1 + oldalSzam) % oldalSzam);
  };

  const kovetkezo = () => {
    mutat((aktivOldal + 1) % oldalSzam);
  };

  return (
    <section data-section className={[styles.galria6, className].join(" ")}>
      <Box className={styles.galria}>
        <button
          type="button"
          className={styles.nyilGomb}
          onClick={elozo}
          aria-label="Előző galéria oldal"
        >
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/Vector.svg"
          />
        </button>
        {kepek.map((kep, index) => (
          <img
            key={index}
            ref={(node) => {
              kepekRef.current[index] = node;
            }}
            className={[styles.kp3Icon, mozog ? "kepFinom" : ""]
              .filter(Boolean)
              .join(" ")}
            loading="lazy"
            alt=""
            src={kep}
          />
        ))}
        <button
          type="button"
          className={styles.nyilGomb}
          onClick={kovetkezo}
          aria-label="Következő galéria oldal"
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
        {oldalak.map((_, index) => {
          const aktivPont = index === aktivOldal;
          return (
            <button
              key={index}
              type="button"
              aria-label={`${index + 1}. galéria oldal`}
              aria-current={aktivPont ? true : undefined}
              className={[styles.hex, aktivPont ? styles.rgb : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => mutat(index)}
            />
          );
        })}
      </Box>
    </section>
  );
};

export default Galria;
