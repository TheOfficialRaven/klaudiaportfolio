import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import styles from "./NewsletterFields.module.css";

export type NewsletterFieldsType = {
  className?: string;
  lers1?: string;
  placeholder?: string;
};

const NewsletterFields: FunctionComponent<NewsletterFieldsType> = ({
  className = "",
  lers1,
  placeholder,
}) => {
  return (
    <Box className={[styles.newsletterFields, className].join(" ")}>
      <div className={styles.lers1}>{lers1}</div>
      <TextField
        className={styles.mez1}
        placeholder={placeholder}
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#dbdbdf" },
          "& .MuiOutlinedInput-root:hover fieldset": {
            borderColor: "#ffcd55",
          },
          "& .MuiOutlinedInput-root.Mui-focused fieldset, & .MuiOutlinedInput-root:focus-within fieldset": {
            borderColor: "#ffcd55",
            borderWidth: "1px",
          },
          "& .MuiInputBase-root": {
            height: "47px",
            backgroundColor: "#fffbef",
            borderRadius: "6px",
          },
          "& .MuiInputBase-input": { color: "#62636a" },
        }}
      />
    </Box>
  );
};

export default NewsletterFields;
