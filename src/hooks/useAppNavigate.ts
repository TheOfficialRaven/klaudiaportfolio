import { useLocation, useNavigate } from "react-router-dom";
import { goTo } from "../utils/goTo";

export function useAppNavigate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (href: string) => goTo(href, navigate, pathname);
}
