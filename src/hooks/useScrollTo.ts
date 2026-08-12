import { useCallback } from "react";
import { useLenis } from "../components/SmoothScroll";

/**
 * Returns an anchor click handler that scrolls to the target section id.
 * Uses the shared Lenis instance for eased scrolling when present, and falls
 * back to native scrollIntoView (respecting reduced motion) otherwise.
 */
export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el, { offset: -88 });
      } else {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }

      history.pushState(null, "", `#${id}`);
    },
    [lenis]
  );
}
