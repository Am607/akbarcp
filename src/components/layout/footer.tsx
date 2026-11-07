import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-bg/50">04 — Contact</p>
        <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Have a project in mind? <em className="text-accent">Let&apos;s build it.</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-bg/60">
          I&apos;m open to new opportunities and collaborations. The fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5 sm:text-lg"
        >
          {profile.email}
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-bg/15 bg-bg/15 sm:grid-cols-3">
          {socials.map((s) => (
            <li key={s.label} className="bg-ink">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 transition-colors hover:bg-bg/5"
              >
                <span>
                  <span className="block text-sm text-bg/50">{s.label}</span>
                  <span className="mt-1 block text-lg">{s.handle}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-bg/40 transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-3 border-t border-bg/15 pt-8 text-sm text-bg/50 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sonar" />
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
