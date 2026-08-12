import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GhostButton from "./GhostButton";
import TiltCard from "./TiltCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const reduced = usePrefersReducedMotion();
  const { Visual } = project;

  return (
    <div ref={targetRef} className="relative h-[160vh]">
      <div className="sticky top-24 md:top-32 h-[85vh] flex items-center" style={{ top: `${96 + index * 28}px` }}>
        <motion.div style={{ scale: reduced ? 1 : scale }} className="w-full">
          <TiltCard maxTilt={4} lift={false}>
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="hero-heading font-black leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}>
                    {project.n}
                  </span>
                  <div className="flex flex-col gap-1 pt-2 sm:pt-4">
                    <span className="text-[#D7E2EA] uppercase tracking-widest text-[0.65rem] sm:text-xs opacity-60">{project.category}</span>
                    <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: "clamp(1.2rem, 3vw, 2.4rem)" }}>
                      {project.name}
                    </h3>
                  </div>
                </div>
                <GhostButton href={project.github} label="GitHub" />
              </div>

              <div className="flex flex-col md:flex-row gap-6 flex-1 min-h-0">
                <div className="md:w-[40%] flex flex-col gap-4 overflow-auto">
                  <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base opacity-80">{project.desc}</p>
                  {project.details.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {project.details.map((d, i) => (
                        <li key={i} className="text-[#D7E2EA] text-xs sm:text-sm opacity-60 flex gap-2">
                          <span className="text-[#BBCCD7]">&mdash;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[0.65rem] sm:text-xs uppercase tracking-wide text-[#D7E2EA] border border-[#D7E2EA]/30 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/15 bg-white/[0.02] p-4 sm:p-6 min-h-[200px] flex items-center justify-center">
                  <Visual />
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  );
}
