import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Foldal from "./pages/Foldal";
import Referenciaim from "./pages/Referenciaim";
import Rolam from "./pages/Rolam";
import Szolgaltatasok from "./pages/Szolgaltatasok";
import Kapcsolat from "./pages/Kapcsolat";
import OldalValtas from "./components/OldalValtas";
import { oldalBetoltodott } from "./utils/oldalValtas";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    oldalBetoltodott();

    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
      return () => window.clearTimeout(timer);
    }

    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname, location.hash]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Klau Portfolio";
        metaDescription = "Klau portfolio weboldal";
        break;
      case "/referenciaim":
        title = "Referenciáim | Klau Portfolio";
        metaDescription = "Válogatás a elkészült weboldalakból és arculatokból";
        break;
      case "/rolam":
        title = "Rólam | Klau Portfolio";
        metaDescription = "Ismerj meg jobban – Klau portfólió";
        break;
      case "/szolgaltatasok":
        title = "Szolgáltatások | Klau Portfolio";
        metaDescription = "Miben tudok segíteni – szolgáltatások";
        break;
      case "/kapcsolat":
        title = "Kapcsolat | Klau Portfolio";
        metaDescription = "Vedd fel velem a kapcsolatot";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Foldal />} />
        <Route path="/referenciaim" element={<Referenciaim />} />
        <Route path="/rolam" element={<Rolam />} />
        <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
      </Routes>
      <OldalValtas />
    </>
  );
}

export default App;
