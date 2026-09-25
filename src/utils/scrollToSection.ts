export type SectionId =
  | "hero"
  | "munkaim"
  | "szolgaltatasok"
  | "rolam"
  | "kapcsolat"
  | "gyik";

export function scrollToSection(sectionId: SectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
