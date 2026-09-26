import { FunctionComponent, type FormEvent } from "react";
import { Typography, Box, Button } from "@mui/material";
import NewsletterFields from "./NewsletterFields";
import styles from "./HrlevlFeliratkozs.module.css";

export type HrlevlFeliratkozsType = {
  className?: string;
  kepJobbra?: boolean;
};

const HrlevlFeliratkozs: FunctionComponent<HrlevlFeliratkozsType> = ({
  className = "",
  kepJobbra = false,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="kapcsolat"
      data-section
      className={[
        styles.hrlevlFeliratkozs11,
        kepJobbra ? styles.kepJobbra : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img className={styles.kpIcon} loading="lazy" alt="" src="/K-p3@2x.png" />
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
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "700", fontSize: "40px", lineHeight: "130%" }}
        >
          Kérj ingyenes konzultációt
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
        <form className={styles.rlap} onSubmit={handleSubmit}>
          <NewsletterFields lers1="Teljes név" placeholder="Teljes név" />
          <NewsletterFields lers1="Email" placeholder="E-mail cím" />
          <Box className={styles.gdpr}>
            <input className={styles.pipaIkon} type="checkbox" />
            <div className={styles.lers2}>
              <Typography
                className={styles.elolvastamSElfogadom}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ fontFamily: "Montserrat" }}
              >{`Elolvastam és elfogadom az `}</Typography>
              <Typography
                className={styles.adatkezelsiTjkoztatt}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
              >
                adatkezelési tájékoztatót.
              </Typography>
            </div>
          </Box>
          <Button
            className={styles.desktopGombok}
            disableElevation
            variant="contained"
            sx={{
              color: "#fffbef",
              fontSize: "14",
              background: "#ffcd55",
              borderRadius: "6px",
              "&:hover": { color: "#fffbef", background: "#ffcd55" },
            }}
            type="submit"
          >
            küldés
          </Button>
        </form>
      </section>
    </section>
  );
};

export default HrlevlFeliratkozs;
