import { Terminal, Boxes, Code2, Globe, GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import TiltCard from "./TiltCard";
import CornerPanel from "./visuals/CornerPanel";

const ABOUT_PARA_1 =
  "I'm a B.Tech Computer Science Engineering student who builds working software, not just textbook solutions. My work spans data structures and algorithms, dynamic programming, full-stack web development, backend APIs, and practical problem solving. I enjoy turning ideas into working applications and continuously improving my technical depth through real projects and competitive programming.";
const ABOUT_PARA_2 =
  "I'm currently seeking a Software Engineering internship where algorithmic thinking can become production-quality code.";

const ABOUT_STATS = [
  { value: "6+", label: "Shipped Projects" },
  { value: "2028", label: "Expected Graduation" },
  { value: "DSA", label: "Core Focus" },
  { value: "WEB", label: "Development" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square"
      >
        <TiltCard maxTilt={10}>
          <CornerPanel Icon={Terminal} />
        </TiltCard>
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square"
      >
        <TiltCard maxTilt={10}>
          <CornerPanel Icon={Boxes} />
        </TiltCard>
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square"
      >
        <TiltCard maxTilt={10}>
          <CornerPanel Icon={Code2} />
        </TiltCard>
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square"
      >
        <TiltCard maxTilt={10}>
          <CornerPanel Icon={Globe} />
        </TiltCard>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-4xl mx-auto text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          <AnimatedText text={ABOUT_PARA_1} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]" />
          <AnimatedText text={ABOUT_PARA_2} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]" />
        </div>

        <FadeIn delay={0.1} y={20} className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
          {ABOUT_STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="hero-heading font-black text-3xl sm:text-4xl">{s.value}</span>
              <span className="text-[#D7E2EA] text-[0.65rem] sm:text-xs uppercase tracking-widest opacity-60">{s.label}</span>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <div className="flex items-center gap-2.5 text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest border border-[#D7E2EA]/15 rounded-full px-5 py-2.5">
            <GraduationCap size={16} strokeWidth={1.5} />
            <span>B.Tech CSE &middot; Ramdeobaba University &middot; Class of 2028</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
