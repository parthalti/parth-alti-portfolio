import { useEffect, useState } from "react";

/**
 * True for touch / coarse-pointer devices (phones, tablets). Used to disable
 * the custom cursor and swap the 3D hero scene for a lighter static visual.
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    setIsTouch(query.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return isTouch;
}
