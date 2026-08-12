import type { LucideIcon } from "lucide-react";

interface CornerPanelProps {
  Icon: LucideIcon;
}

export default function CornerPanel({ Icon }: CornerPanelProps) {
  return (
    <div className="w-full h-full rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.03] flex items-center justify-center">
      <Icon size={40} strokeWidth={1.2} className="text-[#BBCCD7]" />
    </div>
  );
}
