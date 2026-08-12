import { Github } from "lucide-react";

interface GhostButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function GhostButton({ href, label = "GitHub", className = "" }: GhostButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10 shrink-0 ${className}`}
    >
      <Github size={16} />
      {label}
    </a>
  );
}
