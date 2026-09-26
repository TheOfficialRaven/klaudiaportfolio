import { useLayoutEffect, useRef } from "react";

export function useKepValtas(kulcs: unknown, aktiv: boolean) {
  const elemek = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    if (!aktiv) return;
    for (const elem of elemek.current) {
      if (!elem) continue;
      elem.style.animation = "none";
      void elem.offsetWidth;
      elem.style.animation = "";
    }
  }, [kulcs, aktiv]);

  return elemek;
}
