import { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import Krdsdoboz, { type FaqItem } from "./Krdsdoboz";
import styles from "./GYIK.module.css";

export type GYIKType = {
  className?: string;
};

const faqColumn1: FaqItem[] = [
  {
    question: "Kérdés, ami felmerülhet az érdeklődőben?",
    answer:
      "Válasz, ami eloszlat minden kételyt az érdeklődőben és arra ösztönzi, hogy megrendelje a terméket vagy szolgáltatást.",
  },
  {
    question: "Mennyi idő alatt készül el egy projekt?",
    answer:
      "A határidő a projekt méretétől függ. Az első konzultáció után pontos ütemtervet kapsz.",
  },
  {
    question: "Milyen szolgáltatásokat kínálsz?",
    answer:
      "Webdesign, arculattervezés és vizuális tartalomkészítés – egy helyen, egységes megjelenéssel.",
  },
];

const faqColumn2: FaqItem[] = [
  {
    question: "Hogyan indulunk el együtt?",
    answer:
      "Írj a kapcsolatfelvételi űrlapon, és 48 órán belül visszajelzek egy rövid egyeztetéssel.",
  },
  {
    question: "Van lehetőség utólagos módosításra?",
    answer:
      "Igen, a projekt átadása után is kérhetsz finomhangolást a megbeszélt kereteken belül.",
  },
  {
    question: "Milyen formában dolgozunk?",
    answer:
      "Online, átlátható lépésekben: briefing, koncepció, visszajelzés, véglegesítés.",
  },
];

const GYIK: FunctionComponent<GYIKType> = ({ className = "" }) => {
  return (
    <section
      id="gyik"
      data-section
      className={[styles.gyik1, className].join(" ")}
    >
      <Typography
        className={styles.cm}
        variant="inherit"
        variantMapping={{ inherit: "h2" }}
        sx={{ fontWeight: "700", lineHeight: "130%" }}
      >
        Gyakran ismételt kérdések
      </Typography>
      <section className={styles.krdsdobozok}>
        <Krdsdoboz items={faqColumn1} defaultOpenIndex={0} />
        <Krdsdoboz items={faqColumn2} defaultOpenIndex={0} />
      </section>
    </section>
  );
};

export default GYIK;
