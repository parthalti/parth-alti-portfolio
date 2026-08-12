import { useEffect, useRef } from "react";
import { TECH_ITEMS, type TechItem } from "../data/tech";

function TechTile({ label, Icon }: TechItem) {
  return (
    <div className="w-[420px] h-[270px] shrink-0 rounded-2xl border border-[#D7E2EA]/10 bg-gradient-to-b from-white/[0.04] to-transparent flex flex-col items-center justify-center gap-5">
      <Icon size={64} strokeWidth={1.3} className="text-[#BBCCD7]" />
      <span className="text-[#D7E2EA] uppercase tracking-wide text-2xl font-medium text-center px-6">{label}</span>
    </div>
  );
}

const row1Items = new Array(3).fill(TECH_ITEMS.slice(0, 11)).flat();
const row2Items = new Array(3).fill(TECH_ITEMS.slice(11)).flat();

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="marquee-track gap-3" style={{ willChange: "transform" }}>
          {row1Items.map((item, i) => (
            <TechTile key={`r1-${i}`} label={item.label} Icon={item.Icon} />
          ))}
        </div>
        <div ref={row2Ref} className="marquee-track gap-3" style={{ willChange: "transform" }}>
          {row2Items.map((item, i) => (
            <TechTile key={`r2-${i}`} label={item.label} Icon={item.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
