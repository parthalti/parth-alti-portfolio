import { lazy, Suspense } from "react";
import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import HeroPortrait from "./HeroPortrait";

// Code-split three.js / R3F out of the main bundle — it's only fetched for
// desktop, motion-enabled visitors who will actually see it.
const HeroScene = lazy(() => import("./HeroScene"));

interface HeroVisualProps {
  className?: string;
}

export default function HeroVisual({ className = "" }: HeroVisualProps) {
  const isTouch = useIsTouchDevice();
  const reduced = usePrefersReducedMotion();

  // Mobile/touch and reduced-motion visitors get the original lightweight
  // SVG portrait instead — better performance, and it degrades gracefully.
  if (isTouch || reduced) {
    return <HeroPortrait className={className} />;
  }

  return (
    <Suspense fallback={<div className={className} />}>
      <HeroScene className={className} />
    </Suspense>
  );
}
