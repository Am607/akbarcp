import { process, profile, skills } from "@/data/site";
import { Reveal, SectionLabel } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionLabel index="02">About</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none tracking-tight md:text-6xl">
              Think. Build. Launch. <em className="text-accent">Scale.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-ink-2">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <li key={s.step} className="bg-bg">
              <Reveal delay={i * 0.06} className="flex h-full flex-col p-6">
                <span className="font-mono text-xs text-accent">{s.step}</span>
                <h3 className="mt-10 font-serif text-3xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div id="skills" className="mt-16 grid gap-10 md:grid-cols-3">
          {skills.map((g) => (
            <Reveal key={g.group}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-3">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
