import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import GhostButton from "./GhostButton";
import HeroVisual from "./visuals/HeroVisual";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="top" className="relative h-screen flex flex-col pt-24 md:pt-28" style={{ overflowX: "clip" }}>
      {/* Ambient background glow — echoes the accent gradient used on the CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: "radial-gradient(circle, #B600A8 0%, #7621B0 45%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "radial-gradient(circle, #BE4C00 0%, transparent 70%)" }}
      />

      <div className="relative flex-1 flex flex-col justify-between">
        <FadeIn delay={0.1} y={40} className="overflow-hidden w-full mt-2 sm:mt-2 px-4 md:px-8">
          <p className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-[0.35em] font-medium mb-3 md:mb-5">
            Software Engineer &middot; Full-Stack &amp; Systems
          </p>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&rsquo;m parth
          </h1>
        </FadeIn>

        <Magnet
          padding={150}
          strength={3}
          baseTransform="translateX(-50%)"
          className="absolute left-1/2 z-10 top-1/2 sm:top-auto sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-square"
        >
          <FadeIn delay={0.6} y={30}>
            <HeroVisual className="w-full h-full" />
          </FadeIn>
        </Magnet>

        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-8 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
          <FadeIn delay={0.35} y={20} className="max-w-[240px] sm:max-w-[220px] md:max-w-[260px]">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              a software engineer driven by building working software, solving complex problems, and creating impactful web applications
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <ContactButton />
            <GhostButton href="https://github.com/parthalti" label="GitHub" />
          </FadeIn>
        </div>
      </div>

      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden md:flex absolute bottom-6 right-8 flex-col items-center gap-2 z-20"
          aria-hidden="true"
        >
          <span className="text-[#D7E2EA]/40 text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#D7E2EA]/50 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
