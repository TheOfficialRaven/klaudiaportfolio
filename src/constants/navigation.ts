export type NavItem = {
  label: string;
  href: string;
};

export const mainNavItems: NavItem[] = [
  { label: "Főoldal", href: "/" },
  { label: "Referenciáim", href: "/referenciaim" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Rólam", href: "/rolam" },
];

export const contactNavItem: NavItem = {
  label: "Kapcsolat",
  href: "/kapcsolat",
};

export const footerNavItems: NavItem[] = [
  { label: "Főoldal", href: "/" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Munkáim", href: "/#munkaim" },
  { label: "Referenciáim", href: "/referenciaim" },
  { label: "Rólam", href: "/rolam" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];
