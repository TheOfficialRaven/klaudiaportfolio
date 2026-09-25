import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Doboz1.module.css";

export type Doboz1Type = {
  className?: string;
  ikondoboz?: string;
  cm?: string;

  /** Style props */
  cmMargin?: CSSProperties["margin"];
  cmFontWeight?: CSSProperties["fontWeight"];
};

const Doboz1: FunctionComponent<Doboz1Type> = ({
  className = "",
  ikondoboz,
  cm,
  cmMargin,
  cmFontWeight,
}) => {
  const cmStyle: CSSProperties = useMemo(() => {
    return {
      margin: cmMargin,
      fontWeight: cmFontWeight,
    };
  }, [cmMargin, cmFontWeight]);

  return (
    <Box className={[styles.doboz1, className].join(" ")}>
      <Box className={styles.ikondobozParent}>
        <img
          className={styles.ikondobozIcon}
          loading="lazy"
          alt=""
          src={ikondoboz}
        />
        <Typography
          className={styles.cm}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "130%" }}
          style={cmStyle}
        >
          {cm}
        </Typography>
        <div className={styles.lers}>
          Mutasd be a problémát, amit megoldasz, emeld ki a célközönséget,
          bizonyítékaidat vagy egy előnyöd, funkciód.
        </div>
      </Box>
    </Box>
  );
};

export default Doboz1;
