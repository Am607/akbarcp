// Decorative sonar — a nod to MarineRadar. Pure SVG + CSS animation.
const blips = [
  { x: 128, y: 92, d: "0.6s" },
  { x: 214, y: 150, d: "1.9s" },
  { x: 96, y: 206, d: "3.4s" },
  { x: 188, y: 236, d: "4.6s" },
  { x: 236, y: 84, d: "1.2s" },
];

export function Radar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} role="img" aria-label="Animated radar sweep">
      <defs>
        <linearGradient id="sweep-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--sonar)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--sonar)" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="var(--line)" strokeWidth="1">
        {[150, 112, 74, 36].map((r) => (
          <circle key={r} cx="160" cy="160" r={r} />
        ))}
        <line x1="10" y1="160" x2="310" y2="160" />
        <line x1="160" y1="10" x2="160" y2="310" />
      </g>

      <g className="radar-sweep">
        <path d="M160 160 L160 10 A150 150 0 0 1 266 54 Z" fill="url(#sweep-fill)" />
        <line x1="160" y1="160" x2="266" y2="54" stroke="var(--sonar)" strokeWidth="1.5" />
      </g>

      {blips.map((b) => (
        <g key={`${b.x}-${b.y}`}>
          <circle cx={b.x} cy={b.y} r="3" fill="var(--accent)" />
          <circle
            cx={b.x}
            cy={b.y}
            r="6"
            fill="none"
            stroke="var(--accent)"
            className="radar-ping"
            style={{ animationDelay: b.d }}
          />
        </g>
      ))}

      <circle cx="160" cy="160" r="4" fill="var(--ink)" />
    </svg>
  );
}
