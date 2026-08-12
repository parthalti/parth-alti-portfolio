import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollTo } from "../hooks/useScrollTo";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const scrollTo = useScrollTo();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-500"
        style={{
          background: scrolled ? "rgba(12,12,12,0.55)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(215,226,234,0.08)" : "1px solid transparent",
        }}
      >
        <nav className="flex items-center justify-between px-5 sm:px-8 md:px-10 py-4 md:py-5 max-w-7xl mx-auto">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "auto" });
              history.pushState(null, "", "#top");
            }}
            className="text-[#D7E2EA] font-display font-bold uppercase tracking-widest text-sm md:text-base"
            data-cursor="hover"
          >
            Parth<span className="accent-text">.</span>Alti
          </a>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  onClick={scrollTo(link.id)}
                  data-cursor="hover"
                  className="text-sm uppercase tracking-wider font-medium transition-colors duration-200"
                  style={{ color: active === link.id ? "#D7E2EA" : "rgba(215,226,234,0.55)" }}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--accent-orange)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-6 h-[1.5px] bg-[#D7E2EA]"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-[1.5px] bg-[#D7E2EA]"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-6 h-[1.5px] bg-[#D7E2EA]"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-[64px] left-0 right-0 z-40 md:hidden px-5 pb-6 pt-2"
            style={{ background: "rgba(12,12,12,0.92)", backdropFilter: "blur(16px)" }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      scrollTo(link.id)(e);
                      setMenuOpen(false);
                    }}
                    className="block py-3.5 text-lg uppercase tracking-wide font-medium border-b border-[#D7E2EA]/10"
                    style={{ color: active === link.id ? "#D7E2EA" : "rgba(215,226,234,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
