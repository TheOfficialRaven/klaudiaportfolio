import type { MouseEvent } from "react";
import type { NavigateFunction } from "react-router-dom";
import { scrollToSection, type SectionId } from "./scrollToSection";

const pageRoutes = ["/referenciaim", "/rolam", "/szolgaltatasok", "/kapcsolat"];

function isCurrentPath(href: string, pathname: string) {
  return href === pathname || (href === "/" && pathname === "/");
}

function goToSamePageTop(href: string, pathname: string) {
  if (pageRoutes.includes(href) && pathname === href) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return true;
  }
  return false;
}

export function handleNavClick(
  event: MouseEvent,
  href: string,
  pathname: string
) {
  if (goToSamePageTop(href, pathname)) {
    event.preventDefault();
    return;
  }

  if (href === "/" && pathname === "/") {
    event.preventDefault();
    scrollToSection("hero");
    return;
  }

  if (href.startsWith("/#") && document.getElementById(href.slice(2))) {
    event.preventDefault();
    scrollToSection(href.slice(2) as SectionId);
  }
}

export function goTo(
  href: string,
  navigate: NavigateFunction,
  pathname: string
) {
  if (pageRoutes.includes(href)) {
    if (goToSamePageTop(href, pathname)) return;
    navigate(href);
    return;
  }

  if (href === "/" || href === "/#hero") {
    if (pathname === "/") {
      scrollToSection("hero");
      return;
    }
    navigate("/");
    return;
  }

  if (href.startsWith("/#")) {
    const sectionId = href.slice(2) as SectionId;
    if (document.getElementById(sectionId)) {
      scrollToSection(sectionId);
      return;
    }
    navigate({ pathname: "/", hash: href.slice(1) });
    return;
  }

  if (!isCurrentPath(href, pathname)) {
    navigate(href);
  }
}
