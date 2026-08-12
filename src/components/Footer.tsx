import { Mail, Github, Linkedin, GraduationCap, ArrowUp } from "lucide-react";
import { useLenis } from "./SmoothScroll";

export default function Footer() {
  const lenis = useLenis();

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  return (
    <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-14 border-t border-[#D7E2EA]/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-[#D7E2EA] font-display font-medium uppercase tracking-wide">Parth Alti</span>
          <span className="text-[#D7E2EA] text-xs opacity-50 flex items-center gap-1.5">
            <GraduationCap size={14} /> B.Tech CSE, Ramdeobaba University &middot; Class of 2028
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:parthalti5@gmail.com"
            data-cursor="hover"
            className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/parthalti"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/parth-alti"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            aria-label="Back to top"
            className="ml-2 flex items-center justify-center w-9 h-9 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] opacity-70 hover:opacity-100 hover:border-[#D7E2EA]/40 transition-all duration-200"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
