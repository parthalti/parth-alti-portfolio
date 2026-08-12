import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface CharProps {
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: string;
}

function Char({ progress, index, total, children }: CharProps) {
  const start = total > 0 ? index / total : 0;
  const end = total > 0 ? (index + 1) / total : 1;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{children}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>{children}</motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((ch, i) => (
        <Char key={i} progress={scrollYProgress} index={i} total={chars.length}>
          {ch === " " ? "\u00A0" : ch}
        </Char>
      ))}
    </p>
  );
}
