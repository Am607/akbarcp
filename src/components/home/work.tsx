import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal, SectionLabel } from "@/components/ui/reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <SectionLabel index="01">Selected work</SectionLabel>
        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none tracking-tight md:text-6xl">
          Products shipped to real users, <em className="text-ink-3">at scale.</em>
        </h2>
      </Reveal>

      <ol className="mt-14 border-t border-line">
        {projects.map((p, i) => (
          <li key={p.name} className="border-b border-line">
            <Reveal className="grid gap-6 py-10 md:grid-cols-[4rem_1fr_1.1fr] md:gap-10 md:py-14">
              <span className="font-mono text-sm text-ink-3">{String(i + 1).padStart(2, "0")}</span>

              <div>
                <p className="text-sm text-ink-3">
                  {p.org} · {p.year}
                </p>
                <h3 className="mt-2 font-serif text-4xl tracking-tight md:text-5xl">{p.name}</h3>
                {p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <p className="text-lg leading-relaxed text-ink-2">{p.blurb}</p>
                <ul className="mt-6 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-xs text-ink-3">{p.stack.join(" / ")}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
