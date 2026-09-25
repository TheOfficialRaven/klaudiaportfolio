export type ReferenciaKategoria =
  | "Összes"
  | "Weboldal"
  | "Masszázs"
  | "Szépség"
  | "Állatorvos"
  | "Szerelés";

export type Referencia = {
  id: string;
  alcim: string;
  cim: string;
  leiras: string;
  kepek: string[];
  kategoriak: Exclude<ReferenciaKategoria, "Összes">[];
};

export const referenciaKategoriak: ReferenciaKategoria[] = [
  "Összes",
  "Weboldal",
  "Masszázs",
  "Szépség",
  "Állatorvos",
  "Szerelés",
];

export const referenciak: Referencia[] = [
  {
    id: "theraplus",
    alcim: "Alcím, ami segíti a címsorodat",
    cim: "TheraPlus masszázs szalon",
    leiras:
      "Itt tudod hosszabban bemutatni, saját magad vagy a problémát, következményét, fájdalompontot, célcsoport jellemzőit, vágyott végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót, előnyt, megoldást, megoldási tervet, folyamatot, csapattagot, referenciát, bizonyítékot.",
    kepek: ["/K-p2@2x.png", "/K-p@2x.png", "/K-p4@2x.png"],
    kategoriak: ["Weboldal", "Masszázs"],
  },
  {
    id: "aquaplusz",
    alcim: "Alcím, ami segíti a címsorodat",
    cim: "AquaPlusz csőszerelés",
    leiras:
      "Itt tudod hosszabban bemutatni, saját magad vagy a problémát, következményét, fájdalompontot, célcsoport jellemzőit, vágyott végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót, előnyt, megoldást, megoldási tervet, folyamatot, csapattagot, referenciát, bizonyítékot.",
    kepek: ["/K-p-3@2x.png", "/K-p2@2x.png", "/K-p@2x.png"],
    kategoriak: ["Weboldal", "Szerelés"],
  },
  {
    id: "fatime",
    alcim: "Alcím, ami segíti a címsorodat",
    cim: "Fatime Beauty Nails szépségszalon",
    leiras:
      "Itt tudod hosszabban bemutatni, saját magad vagy a problémát, következményét, fájdalompontot, célcsoport jellemzőit, vágyott végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót, előnyt, megoldást, megoldási tervet, folyamatot, csapattagot, referenciát, bizonyítékot.",
    kepek: ["/K-p@2x.png", "/K-p-3@2x.png", "/K-p2@2x.png"],
    kategoriak: ["Weboldal", "Szépség"],
  },
  {
    id: "vetty",
    alcim: "Alcím, ami segíti a címsorodat",
    cim: "Vetty állatorvosi rendelő",
    leiras:
      "Itt tudod hosszabban bemutatni, saját magad vagy a problémát, következményét, fájdalompontot, célcsoport jellemzőit, vágyott végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót, előnyt, megoldást, megoldási tervet, folyamatot, csapattagot, referenciát, bizonyítékot.",
    kepek: ["/K-p-2@2x.png", "/K-p@2x.png", "/K-p2@2x.png"],
    kategoriak: ["Weboldal", "Állatorvos"],
  },
  {
    id: "harmonia",
    alcim: "Alcím, ami segíti a címsorodat",
    cim: "Harmónia masszázs",
    leiras:
      "Itt tudod hosszabban bemutatni, saját magad vagy a problémát, következményét, fájdalompontot, célcsoport jellemzőit, vágyott végeredményt, szolgáltatást, terméket, termékjellemzőt, funkciót, előnyt, megoldást, megoldási tervet, folyamatot, csapattagot, referenciát, bizonyítékot.",
    kepek: ["/K-p4@2x.png", "/K-p2@2x.png", "/K-p@2x.png"],
    kategoriak: ["Weboldal", "Masszázs"],
  },
];
