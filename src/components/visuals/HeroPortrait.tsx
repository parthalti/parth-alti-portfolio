interface HeroPortraitProps {
  className?: string;
}

export default function HeroPortrait({ className = "" }: HeroPortraitProps) {
  return (
    <svg viewBox="0 0 520 520" className={`w-full h-full ${className}`} fill="none">
      <defs>
        <linearGradient id="coreGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBCCD7" />
          <stop offset="100%" stopColor="#646973" />
        </linearGradient>
      </defs>
      <circle cx="260" cy="260" r="240" stroke="url(#coreGrad)" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx="260" cy="260" r="190" stroke="url(#coreGrad)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 10" />
      <circle cx="260" cy="260" r="140" stroke="url(#coreGrad)" strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="90" fill="url(#coreGrad)" fillOpacity="0.08" stroke="url(#coreGrad)" strokeWidth="1.5" />
      <g stroke="url(#coreGrad)" strokeWidth="2" strokeLinecap="round">
        <path d="M225 235 L195 260 L225 285" />
        <path d="M295 235 L325 260 L295 285" />
        <path d="M268 220 L252 300" />
      </g>
      {[
        [260, 20],
        [500, 260],
        [260, 500],
        [20, 260],
        [400, 100],
        [400, 420],
        [120, 100],
        [120, 420],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#BBCCD7" fillOpacity="0.6" />
      ))}
    </svg>
  );
}
