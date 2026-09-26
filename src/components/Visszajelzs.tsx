import { FunctionComponent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Visszajelzs.module.css";

const VALTAS_IDO = 20000;

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
  const [irany, setIrany] = useState<1 | -1>(1);
  const [ciklus, setCiklus] = useState(0);
  const [fent, setFent] = useState(false);
  const [rejtett, setRejtett] = useState(false);
  const szunet = fent || rejtett;
  const aktiv = velemenyek[aktivIndex];
  const darab = velemenyek.length;
  const szovegRef = useRef<HTMLDivElement>(null);
  const kepRef = useRef<HTMLImageElement>(null);
  const elsoLepes = useRef(true);

  useLayoutEffect(() => {
    if (elsoLepes.current) {
      elsoLepes.current = false;
      return;
    }
    for (const elem of [szovegRef.current, kepRef.current]) {
      if (!elem) continue;
      elem.style.animation = "none";
      void elem.offsetWidth;
      elem.style.animation = "";
    }
  }, [aktivIndex, irany]);

  const leptet = (index: number, kovetkezoIrany: 1 | -1, kezbol: boolean) => {
    if (index === aktivIndex) return;
    setIrany(kovetkezoIrany);
    setAktivIndex(index);
    if (kezbol) setCiklus((jelenlegi) => jelenlegi + 1);
  };

  const elozo = () => {
    leptet((aktivIndex - 1 + darab) % darab, -1, true);
  };

  const kovetkezo = () => {
    leptet((aktivIndex + 1) % darab, 1, true);
  };

  useEffect(() => {
    const frissit = () => setRejtett(document.hidden);
    document.addEventListener("visibilitychange", frissit);
    return () => document.removeEventListener("visibilitychange", frissit);
  }, []);

  useEffect(() => {
    if (szunet) return undefined;
    const id = window.setInterval(() => {
      setIrany(1);
      setAktivIndex((jelenlegi) => (jelenlegi + 1) % darab);
    }, VALTAS_IDO);
    return () => window.clearInterval(id);
  }, [szunet, ciklus, darab]);

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
      <div
        className={styles.csuszka}
        onMouseEnter={() => setFent(true)}
        onMouseLeave={() => setFent(false)}
        onFocus={() => setFent(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setFent(false);
          }
        }}
      >
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
          <div
            ref={szovegRef}
            className={styles.tartalom2}
            data-irany={irany}
          >
            <Box className={styles.tartalom3}>
              <img
                className={styles.tartalomChild}
                loading="lazy"
                alt=""
                src={aktiv.avatar}
              />
              <img className={styles.icon} loading="lazy" alt="" src="/idezojel.svg" />
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
          </div>
          <img
            ref={kepRef}
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
              aria-current={aktivPont ? "true" : undefined}
              className={[
                styles.feedbackItems,
                aktivPont ? styles.feedbackItems2 : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => leptet(index, index > aktivIndex ? 1 : -1, true)}
            />
          );
        })}
      </Box>
      </div>
    </section>
  );
};

export default Visszajelzs;
