import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { Radar } from "./radar";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: `${new Date().getFullYear() - profile.since}+`, label: "years shipping apps" },
  { value: "1M+", label: "ships tracked live" },
  { value: "iOS · Android", label: "in the stores" },
];

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sonar" />
              Open to new opportunities
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 font-serif text-[clamp(3.25rem,10vw,7.5rem)] leading-[0.9] tracking-tight">
              Akbar CP builds <em className="text-accent">apps</em> people actually use.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
              {profile.role} in {profile.location}. {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              See selected work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Build with me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-square rounded-[2rem] border border-line bg-surface p-6">
            <Radar className="h-full w-full" />
            <div className="absolute bottom-5 left-6 right-6 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink-3">
              <span>09.97° N</span>
              <span>Kochi</span>
              <span>76.28° E</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg px-6 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-3">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
