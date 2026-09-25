import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import Doboz from "./Doboz";
import styles from "./KrtyaKpes.module.css";

export type KrtyaKpesType = {
  className?: string;
};

const KrtyaKpes: FunctionComponent<KrtyaKpesType> = ({ className = "" }) => {
  return (
    <section
      id="munkaim"
      data-section
      className={[styles.krtyaKpes1, className].join(" ")}
    >
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
          variantMapping={{ inherit: "h1" }}
          sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
        >
          Kiemelt munkáim
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
      </Box>
      <Box className={styles.tartalom2}>
        <Doboz kp="/K-p2@2x.png" cm="TheraPlus " />
        <Doboz kp="/K-p@2x.png" cm="Fatime Beauty Nails " />
      </Box>
    </section>
  );
};

export default KrtyaKpes;
