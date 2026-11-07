import { experiences } from "@/data/site";
import { Reveal, SectionLabel } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <SectionLabel index="03">Experience</SectionLabel>
        <h2 className="mt-6 font-serif text-5xl leading-none tracking-tight md:text-6xl">
          Where I&apos;ve <em className="text-ink-3">worked.</em>
        </h2>
      </Reveal>

      <ol className="relative mt-14 space-y-4 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-line md:before:left-[calc(12rem+7px)]">
        {experiences.map((e, i) => (
          <li key={e.company}>
            <Reveal delay={i * 0.06} className="relative grid gap-4 pl-8 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-3 md:pr-10 md:pt-7 md:text-right">
                {e.period}
              </div>

              <span
                aria-hidden
                className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-bg md:left-48 md:top-7 ${
                  i === 0 ? "bg-accent" : "bg-ink-3"
                }`}
              />

              <div className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink-3 md:ml-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-3xl">{e.role}</h3>
                  <span className="text-sm text-ink-3">{e.location}</span>
                </div>
                <p className="mt-1 font-medium">{e.company}</p>
                <p className="mt-4 leading-relaxed text-ink-2">{e.description}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {e.technologies.map((t) => (
                    <li key={t} className="rounded-md bg-bg px-2 py-1 font-mono text-[11px] text-ink-2">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
