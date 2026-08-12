import type { LucideIcon } from "lucide-react";
import { Layers, Server, Sigma, Lightbulb, Globe2 } from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";

interface Service {
  n: string;
  name: string;
  desc: string;
  Icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    n: "01",
    name: "Full-Stack Development",
    desc: "Building complete web applications using React, Vite, Node.js, Express, FastAPI, SQLAlchemy, REST APIs, and modern web technologies.",
    Icon: Layers,
  },
  {
    n: "02",
    name: "Backend & API Development",
    desc: "Developing reliable backend services, REST APIs, authentication systems, database-backed applications, and server-side logic.",
    Icon: Server,
  },
  {
    n: "03",
    name: "DSA & Algorithms",
    desc: "Designing efficient solutions using data structures, algorithms, dynamic programming, divide and conquer, and algorithmic problem solving.",
    Icon: Sigma,
  },
  {
    n: "04",
    name: "Problem Solving",
    desc: "Turning complex computational problems into practical and efficient implementations while focusing on time and space complexity.",
    Icon: Lightbulb,
  },
  {
    n: "05",
    name: "Web Development",
    desc: "Creating responsive, modern, and functional web applications with clean interfaces, strong user experience, and maintainable code.",
    Icon: Globe2,
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0}>
        <h2 className="text-[#0C0C0C] font-display font-black uppercase text-center mb-4" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Skills &amp; Services
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-[#0C0C0C]/50 text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-24 text-sm sm:text-base">
          A snapshot of where I spend most of my engineering time — from backend systems to algorithmic problem solving.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08} y={24} className={i === SERVICES.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <TiltCard maxTilt={6} className="h-full">
              <div
                className="group h-full flex flex-col gap-6 rounded-[28px] border border-[#0C0C0C]/10 bg-gradient-to-b from-[#0C0C0C]/[0.02] to-transparent p-7 sm:p-8 transition-colors duration-300 hover:border-[#0C0C0C]/25"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="font-display font-black leading-none text-[#0C0C0C]/10 group-hover:text-[#0C0C0C]/20 transition-colors duration-300"
                    style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
                  >
                    {s.n}
                  </span>
                  <s.Icon size={30} strokeWidth={1.3} className="text-[#0C0C0C]/70" />
                </div>
                <div className="flex flex-col gap-2.5 mt-auto">
                  <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}>
                    {s.name}
                  </h3>
                  <p className="text-[#0C0C0C]/60 font-light leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
