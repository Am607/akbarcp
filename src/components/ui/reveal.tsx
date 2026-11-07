import type { CSSProperties, ReactNode } from "react";

// Content is fully visible in the server HTML; the fade-in only applies once
// the `js` class is on <html> (see layout) and RevealObserver marks it in view.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div data-reveal className={className} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-3">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      {children}
    </p>
  );
}
