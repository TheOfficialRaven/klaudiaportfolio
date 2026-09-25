import { FunctionComponent, useState } from "react";
import { Typography } from "@mui/material";
import Doboz1 from "./Doboz1";
import styles from "./KrtyaIkonos.module.css";

export type KrtyaIkonosType = {
  className?: string;
};

const KrtyaIkonos: FunctionComponent<KrtyaIkonosType> = ({
  className = "",
}) => {
  const [doboz1Items] = useState([
    {
      ikondoboz: "/Ikondoboz2@2x.png",
      cm: "Weboldalkészítés",
      cmMargin: "0" as const,
      cmFontWeight: "700" as const,
    },
    {
      ikondoboz: "/Ikondoboz3@2x.png",
      cm: "Landing page",
      cmMargin: undefined,
      cmFontWeight: undefined,
    },
    {
      ikondoboz: "/Ikondoboz4@2x.png",
      cm: "Branding & arculat",
      cmMargin: undefined,
      cmFontWeight: undefined,
    },
  ]);
  const [doboz1Items1] = useState([
    {
      ikondoboz: "/Ikondoboz@2x.png",
      cm: "Automatizáció és AI integráció",
      cmMargin: "unset" as const,
      cmFontWeight: "unset" as const,
    },
    {
      ikondoboz: "/Ikondoboz1@2x.png",
      cm: "Nyomdai & marketing anyagok",
      cmMargin: "unset" as const,
      cmFontWeight: "unset" as const,
    },
    {
      ikondoboz: "/Ikondoboz5@2x.png",
      cm: "Weboldal felújítás & karbantartás",
      cmMargin: "unset" as const,
      cmFontWeight: "unset" as const,
    },
  ]);
  return (
    <section
      id="szolgaltatasok"
      data-section
      className={[styles.krtyaIkonos13, className].join(" ")}
    >
      <Typography
        className={styles.cm}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "700", lineHeight: "130%" }}
      >
        Szolgáltatásaim
      </Typography>
      <section className={styles.dobozok}>
        {doboz1Items.map((item, index) => (
          <Doboz1
            key={index}
            ikondoboz={item.ikondoboz}
            cm={item.cm}
            cmMargin={item.cmMargin}
            cmFontWeight={item.cmFontWeight}
          />
        ))}
      </section>
      <section className={styles.dobozok}>
        {doboz1Items1.map((item, index) => (
          <Doboz1
            key={index}
            ikondoboz={item.ikondoboz}
            cm={item.cm}
            cmMargin={item.cmMargin}
            cmFontWeight={item.cmFontWeight}
          />
        ))}
      </section>
    </section>
  );
};

export default KrtyaIkonos;
