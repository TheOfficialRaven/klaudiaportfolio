import { FunctionComponent, useState } from "react";
import { Typography } from "@mui/material";
import styles from "./Krdsdoboz.module.css";

export type FaqItem = {
  question: string;
  answer: string;
};

export type KrdsdobozType = {
  className?: string;
  items: FaqItem[];
  defaultOpenIndex?: number | null;
};

const Krdsdoboz: FunctionComponent<KrdsdobozType> = ({
  className = "",
  items,
  defaultOpenIndex = null,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={[styles.krdsdoboz1, className].join(" ")}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={[styles.faqItem, isOpen ? styles.faqItemOpen : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              type="button"
              className={styles.krdsTrigger}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <img
                className={[
                  styles.caretDownIcon,
                  isOpen ? styles.caretDownIconOpen : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                loading="lazy"
                alt=""
                src="/caret-down.svg"
              />
              <Typography
                className={styles.krds}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "600", lineHeight: "130%" }}
                component="span"
              >
                {item.question}
              </Typography>
            </button>
            <div
              className={[
                styles.vlaszPanel,
                isOpen ? styles.vlaszPanelOpen : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.vlaszPanelInner}>
                <div className={styles.vlaszWrapper}>
                  <div className={styles.vlasz}>{item.answer}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Krdsdoboz;
