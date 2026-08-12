export function PriceChartVisual() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <line x1="20" y1="220" x2="380" y2="220" stroke="#D7E2EA" strokeOpacity="0.2" />
      {[20, 30, 45, 25, 60, 50, 75, 55, 90, 70].map((h, i) => (
        <rect key={i} x={30 + i * 35} y={220 - h * 1.6} width="18" rx="4" height={h * 1.6} fill="url(#barGrad)" />
      ))}
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBCCD7" />
          <stop offset="100%" stopColor="#646973" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d="M30 190 L65 160 L100 175 L135 120 L170 140 L205 90 L240 110 L275 60 L310 95 L345 40"
        stroke="#BE4C00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SequenceAlignVisual() {
  const top = ["A", "T", "G", "C", "T", "A", "G", "C"];
  const bottom = ["A", "T", "C", "C", "T", "A", "A", "C"];
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      {top.map((c, i) => {
        const match = c === bottom[i];
        const x = 40 + i * 42;
        return (
          <g key={i}>
            <circle cx={x} cy={90} r="15" stroke="#BBCCD7" strokeWidth="1.5" />
            <text x={x} y={95} textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit">
              {c}
            </text>
            <circle cx={x} cy={170} r="15" stroke="#BBCCD7" strokeWidth="1.5" />
            <text x={x} y={175} textAnchor="middle" fill="#D7E2EA" fontSize="13" fontFamily="Kanit">
              {bottom[i]}
            </text>
            {match && <line x1={x} y1={105} x2={x} y2={155} stroke="#BE4C00" strokeWidth="2" />}
          </g>
        );
      })}
    </svg>
  );
}

export function TreeVisual() {
  const nodes = [
    { x: 200, y: 40 },
    { x: 120, y: 120 },
    { x: 280, y: 120 },
    { x: 70, y: 200 },
    { x: 170, y: 200 },
    { x: 230, y: 200 },
    { x: 330, y: 200 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#BBCCD7"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 0 ? 18 : 14}
          stroke="#D7E2EA"
          strokeWidth="1.5"
          fill={i === 0 ? "#BE4C00" : "#0C0C0C"}
          fillOpacity={i === 0 ? 0.3 : 1}
        />
      ))}
    </svg>
  );
}

export function SplitBlocksVisual() {
  const blocks = [
    { x: 20, w: 340 },
    { x: 20, w: 160 },
    { x: 200, w: 160 },
    { x: 20, w: 70 },
    { x: 110, w: 70 },
    { x: 200, w: 70 },
    { x: 290, w: 70 },
  ];
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" fill="none">
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={20 + i * 26}
          width={b.w}
          height="16"
          rx="4"
          stroke="#BBCCD7"
          strokeWidth="1.2"
          fill={i === blocks.length - 1 ? "#BE4C00" : "none"}
          fillOpacity={0.5}
        />
      ))}
    </svg>
  );
}

export function BrowserVisual() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <rect x="20" y="20" width="360" height="220" rx="16" stroke="#D7E2EA" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="20" y1="60" x2="380" y2="60" stroke="#D7E2EA" strokeOpacity="0.2" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={44 + i * 18} cy={40} r="5" fill="#BBCCD7" fillOpacity="0.4" />
      ))}
      {[100, 140, 180].map((y, i) => (
        <rect key={i} x="44" y={y} width={i === 2 ? 140 : 300} height="14" rx="4" fill="#D7E2EA" fillOpacity="0.15" />
      ))}
    </svg>
  );
}

export function CalculatorVisual() {
  const cells = new Array(12).fill(0);
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <rect x="130" y="20" width="140" height="40" rx="8" stroke="#D7E2EA" strokeOpacity="0.3" strokeWidth="1.5" />
      {cells.map((_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <rect
            key={i}
            x={130 + col * 48}
            y={80 + row * 42}
            width="40"
            height="34"
            rx="8"
            stroke="#BBCCD7"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            fill={i === 11 ? "#BE4C00" : "none"}
            fillOpacity="0.4"
          />
        );
      })}
    </svg>
  );
}
