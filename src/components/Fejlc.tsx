import { FunctionComponent, useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { contactNavItem, mainNavItems } from "../constants/navigation";
import { useAppNavigate } from "../hooks/useAppNavigate";
import styles from "./Fejlc.module.css";

export type FejlcType = {
  className?: string;
};

const Fejlc: FunctionComponent<FejlcType> = ({ className = "" }) => {
  const goTo = useAppNavigate();
  const { pathname } = useLocation();
  const [menuNyitva, setMenuNyitva] = useState(false);
  const [gorgetve, setGorgetve] = useState(false);

  useEffect(() => {
    setMenuNyitva(false);
  }, [pathname]);

  useEffect(() => {
    const frissit = () => setGorgetve(window.scrollY > 8);
    frissit();
    window.addEventListener("scroll", frissit, { passive: true });
    return () => window.removeEventListener("scroll", frissit);
  }, [pathname]);

  const navigal = (href: string) => {
    setMenuNyitva(false);
    goTo(href);
  };

  const fooldalTetejen = pathname === "/" && !gorgetve && !menuNyitva;

  return (
    <section
      data-section
      className={[
        styles.fejlc1,
        fooldalTetejen ? styles.fejlcBeleolvad : styles.fejlcLekerekitett,
        menuNyitva ? styles.fejlcMenuNyitva : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className={styles.logoButton}
        onClick={() => navigal("/")}
        aria-label="Ugrás a főoldalra"
      >
        <img className={styles.logIcon} loading="lazy" alt="" src="/Log1.svg" />
      </button>
      <button
        type="button"
        className={[styles.menuGomb, menuNyitva ? styles.menuGombNyitva : ""]
          .filter(Boolean)
          .join(" ")}
        aria-expanded={menuNyitva}
        aria-controls="fo-navigacio"
        aria-label={menuNyitva ? "Menü bezárása" : "Menü megnyitása"}
        onClick={() => setMenuNyitva((nyitva) => !nyitva)}
      >
        <span className={styles.menuVonalka} />
        <span className={styles.menuVonalka} />
        <span className={styles.menuVonalka} />
      </button>
      <Box
        id="fo-navigacio"
        className={[styles.men, menuNyitva ? styles.menNyitva : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.menBelso}>
          <div className={styles.menTartalom}>
          <nav className={styles.men2} aria-label="Fő navigáció">
            {mainNavItems.map(({ label, href }) => {
              const aktiv = href === pathname;

              return (
                <button
                  key={label}
                  type="button"
                  className={[
                    styles.lers3,
                    styles.navLink,
                    aktiv ? styles.navLinkAktiv : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => navigal(href)}
                >
                  {label}
                </button>
              );
            })}
          </nav>
          <Button
            className={styles.desktopGombok}
            disableElevation
            variant="contained"
            onClick={() => navigal(contactNavItem.href)}
            sx={{
              color: "#fffbef",
              fontSize: "14",
              background: "#011111",
              borderRadius: "25px",
              fontWeight: 600,
              "&:hover": { background: "#011111" },
            }}
          >
            {contactNavItem.label}
          </Button>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Fejlc;
