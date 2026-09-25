import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Kp.module.css";

export type KpType = {
  className?: string;
};

const Kp: FunctionComponent<KpType> = ({ className = "" }) => {
  return (
    <main data-section className={[styles.szvegKp13, className].join(" ")}>
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
          sx={{ fontWeight: "600", fontSize: "40px", lineHeight: "130%" }}
        >
          Együttműködésünk menete
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
      </Box>
      <Box className={styles.frameParent}>
        <section className={styles.tartalomWrapper}>
          <Box className={styles.tartalom2}>
            <Box className={styles.dobozok1}>
              <Box className={styles.doboz1}>
                <Typography
                  className={styles.hex}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontFamily: "Ultra",
                    fontWeight: "400",
                    lineHeight: "130%",
                  }}
                >
                  1.
                </Typography>
                <Typography
                  className={styles.cm2}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "130%",
                  }}
                >
                  Konzultásió
                </Typography>
                <div className={styles.lers}>
                  Mutasd be a problémát, amit megoldasz, emeld ki a
                  célközönséget, bizonyítékaidat vagy egy előnyöd, funkciód.
                </div>
              </Box>
              <Box className={styles.doboz1}>
                <Typography
                  className={styles.hex}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontFamily: "Ultra",
                    fontWeight: "400",
                    lineHeight: "130%",
                  }}
                >
                  2.
                </Typography>
                <Typography
                  className={styles.cm2}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "130%",
                  }}
                >
                  Tervezés
                </Typography>
                <div className={styles.lers}>
                  Mutasd be a problémát, amit megoldasz, emeld ki a
                  célközönséget, bizonyítékaidat vagy egy előnyöd, funkciód.
                </div>
              </Box>
            </Box>
            <Box className={styles.dobozok1}>
              <Box className={styles.doboz1}>
                <Typography
                  className={styles.hex}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontFamily: "Ultra",
                    fontWeight: "400",
                    lineHeight: "130%",
                  }}
                >
                  3.
                </Typography>
                <Typography
                  className={styles.cm2}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "130%",
                  }}
                >
                  Fejlesztés
                </Typography>
                <div className={styles.lers}>
                  Mutasd be a problémát, amit megoldasz, emeld ki a
                  célközönséget, bizonyítékaidat vagy egy előnyöd, funkciód.
                </div>
              </Box>
              <Box className={styles.doboz1}>
                <Typography
                  className={styles.hex}
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{
                    fontFamily: "Ultra",
                    fontWeight: "400",
                    lineHeight: "130%",
                  }}
                >
                  4.
                </Typography>
                <Typography
                  className={styles.cm2}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "130%",
                  }}
                >
                  Átadás
                </Typography>
                <div className={styles.lers}>
                  Mutasd be a problémát, amit megoldasz, emeld ki a
                  célközönséget, bizonyítékaidat vagy egy előnyöd, funkciód.
                </div>
              </Box>
            </Box>
          </Box>
        </section>
        <img
          className={styles.kpIcon}
          loading="lazy"
          alt=""
          src="/K-p1@2x.png"
        />
      </Box>
    </main>
  );
};

export default Kp;
