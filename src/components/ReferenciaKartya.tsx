import { FunctionComponent, useState } from "react";
import { Typography } from "@mui/material";
import type { Referencia } from "../data/referenciak";
import { useKepValtas } from "../hooks/useKepValtas";
import styles from "../pages/Referenciaim.module.css";

export type ReferenciaKartyaType = {
  item: Referencia;
  kepBalra?: boolean;
};

const ReferenciaKartya: FunctionComponent<ReferenciaKartyaType> = ({
  item,
  kepBalra = false,
}) => {
  const [aktivIndex, setAktivIndex] = useState(0);
  const [mozog, setMozog] = useState(false);
  const kepek = item.kepek;
  const kepSzam = kepek.length;
  const kepRef = useKepValtas(aktivIndex, mozog);

  const mutat = (index: number) => {
    if (index === aktivIndex) return;
    setMozog(true);
    setAktivIndex(index);
  };

  const elozo = () => {
    mutat((aktivIndex - 1 + kepSzam) % kepSzam);
  };

  const kovetkezo = () => {
    mutat((aktivIndex + 1) % kepSzam);
  };

  return (
    <article
      className={[styles.projekt, kepBalra ? styles.projektKepBalra : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.projektSzoveg}>
        <Typography
          className={styles.projektAlcim}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "130%" }}
        >
          {item.alcim}
        </Typography>
        <Typography
          className={styles.projektCim}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "130%",
          }}
        >
          {item.cim}
        </Typography>
        <p className={styles.projektLeiras}>{item.leiras}</p>
      </div>

      <div className={styles.karussel}>
        <button
          type="button"
          className={styles.nyil}
          onClick={elozo}
          aria-label={`${item.cim}: előző kép`}
        >
          <img className={styles.nyilIkon} src="/Vector.svg" alt="" />
        </button>

        <div className={styles.karusselKozep}>
          <img
            ref={(node) => {
              kepRef.current[0] = node;
            }}
            className={[styles.projektKep, mozog ? "kepFinom" : ""]
              .filter(Boolean)
              .join(" ")}
            src={kepek[aktivIndex]}
            alt={`${item.cim} – ${aktivIndex + 1}. kép`}
            loading="lazy"
          />
          <div className={styles.pontok} role="tablist" aria-label="Képek">
            {kepek.map((kep, index) => {
              const aktiv = index === aktivIndex;
              return (
                <button
                  key={kep}
                  type="button"
                  role="tab"
                  aria-selected={aktiv}
                  aria-label={`${index + 1}. kép`}
                  className={[styles.pont, aktiv ? styles.pontAktiv : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => mutat(index)}
                />
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={styles.nyil}
          onClick={kovetkezo}
          aria-label={`${item.cim}: következő kép`}
        >
          <img
            className={[styles.nyilIkon, styles.nyilIkonJobb].join(" ")}
            src="/Vector.svg"
            alt=""
          />
        </button>
      </div>
    </article>
  );
};

export default ReferenciaKartya;
