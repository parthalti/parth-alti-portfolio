import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const SOCIALS = [
  { label: "Email", href: "mailto:parthalti5@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/parthalti", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/parth-alti", Icon: Linkedin },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    if (reduced || !glowRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative bg-[#0C0C0C] z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 overflow-hidden"
    >
      {/* Cursor-reactive glow — a lightweight CSS alternative to a 3D scene,
          keeping this section's background interactive without extra WebGL cost. */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[520px] h-[520px] rounded-full opacity-[0.16] blur-[100px] will-change-transform"
        style={{ background: "radial-gradient(circle, #B600A8 0%, #7621B0 40%, transparent 72%)" }}
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10">
        <FadeIn delay={0}>
          <span className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-[0.35em] font-medium">
            Get in touch
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 9vw, 120px)" }}
          >
            Let&rsquo;s build
            <br />
            something real
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-lg text-sm sm:text-base">
            Open to Software Engineering internships and collaborative projects where algorithmic
            thinking meets production-quality code. Reach out and let&rsquo;s talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <ContactButton className="text-sm sm:text-base" />
        </FadeIn>

        <FadeIn delay={0.4} y={10} className="flex items-center gap-6 sm:gap-8 pt-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              data-cursor="hover"
              className="text-[#D7E2EA] opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
