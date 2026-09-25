import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";
import Fejlc from "../components/Fejlc";
import Lblc from "../components/Lblc";
import HrlevlFeliratkozs from "../components/HrlevlFeliratkozs";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Kapcsolat.module.css";

const Kapcsolat: FunctionComponent = () => {
  const goTo = useAppNavigate();

  const gorgetesAzUrlaphoz = () => {
    document.getElementById("kapcsolat")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          Vedd fel velem a kapcsolatot
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
            onClick={gorgetesAzUrlaphoz}
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

      <HrlevlFeliratkozs />

      <Lblc />
    </Box>
  );
};

export default Kapcsolat;
