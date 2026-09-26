const IDO = 720;
const GORBE = "cubic-bezier(0.76, 0, 0.24, 1)";

let reteg: HTMLDivElement | null = null;
let kor: HTMLDivElement | null = null;
let folyamatban = false;
let oldalKesz: (() => void) | null = null;

function alak(mertek: number) {
  return `translate(-50%, -50%) scale(${mertek})`;
}

function mozgasKikapcsolva() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function kepkocka() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve());
  });
}

function beallitMeretet(elem: HTMLDivElement) {
  const atmero = Math.ceil(Math.hypot(window.innerWidth, window.innerHeight)) + 8;
  elem.style.width = `${atmero}px`;
  elem.style.height = `${atmero}px`;
}

function mozgat(elem: HTMLDivElement, innen: number, ide: number) {
  elem.style.transform = alak(innen);
  elem.getAnimations().forEach((animacio) => animacio.cancel());

  const animacio = elem.animate(
    [{ transform: alak(innen) }, { transform: alak(ide) }],
    { duration: IDO, easing: GORBE, fill: "forwards" }
  );

  return animacio.finished.then(() => {
    elem.style.transform = alak(ide);
  });
}

function varAzUjOldalra() {
  return new Promise<void>((resolve) => {
    let lezart = false;
    const vege = () => {
      if (lezart) return;
      lezart = true;
      oldalKesz = null;
      resolve();
    };
    oldalKesz = vege;
    window.setTimeout(vege, 900);
  });
}

export function oldalValtasCsatlakozik(
  ujReteg: HTMLDivElement | null,
  ujKor: HTMLDivElement | null
) {
  reteg = ujReteg;
  kor = ujKor;
}

export function oldalBetoltodott() {
  oldalKesz?.();
}

export function oldalra(action: () => void) {
  if (!reteg || !kor || mozgasKikapcsolva()) {
    action();
    return;
  }
  if (folyamatban) return;

  folyamatban = true;
  const aktivReteg = reteg;
  const aktivKor = kor;
  aktivReteg.style.pointerEvents = "auto";
  beallitMeretet(aktivKor);

  let sikerult = false;
  void mozgat(aktivKor, 0, 1)
    .then(() => {
      const root = document.documentElement;
      const elozoGorgetes = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      const vart = varAzUjOldalra();
      action();
      return vart.finally(() => {
        window.scrollTo(0, 0);
        root.style.scrollBehavior = elozoGorgetes;
      });
    })
    .then(() => kepkocka())
    .then(() => kepkocka())
    .then(() => mozgat(aktivKor, 1, 0))
    .then(() => {
      sikerult = true;
    })
    .finally(() => {
      if (!sikerult) aktivKor.style.transform = alak(0);
      aktivReteg.style.pointerEvents = "none";
      folyamatban = false;
    });
}
