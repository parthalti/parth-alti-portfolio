import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * A short, skippable loading sequence shown once per browser session.
 * Keeps the user waiting no longer than ~1.1s, and is bypassed entirely
 * for reduced-motion users or on repeat visits within the same session.
 */
export default function Loader() {
  const reduced = usePrefersReducedMotion();
  const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("pa-loaded") === "1";
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(reduced || alreadySeen);

  useEffect(() => {
    if (reduced || alreadySeen) return;

    let raf: number;
    const start = performance.now();
    const durationMs = 1000;

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("pa-loaded", "1");
        setTimeout(() => setDone(true), 200);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, alreadySeen]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6"
          style={{ background: "#0C0C0C" }}
        >
          <span className="hero-heading font-black uppercase tracking-tight text-[10vw] sm:text-4xl md:text-5xl">
            Parth Alti
          </span>
          <div className="w-[160px] sm:w-[200px] h-px bg-[#D7E2EA]/15 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full"
              style={{ width: `${progress}%`, background: "var(--accent-gradient)" }}
            />
          </div>
          <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-[0.3em] font-medium">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
