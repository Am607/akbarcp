"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const THEME_EVENT = "themechange";

function subscribeTheme(cb: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", cb);
  window.addEventListener(THEME_EVENT, cb);
  return () => {
    mq.removeEventListener("change", cb);
    window.removeEventListener(THEME_EVENT, cb);
  };
}

function isDark() {
  const explicit = document.documentElement.dataset.theme;
  return explicit ? explicit === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function ThemeToggle() {
  // null on the server, so the icon only renders once the real theme is known.
  const dark = useSyncExternalStore<boolean | null>(subscribeTheme, isDark, () => null);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-ink hover:text-ink"
    >
      {dark === null ? null : dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-serif text-lg italic text-bg">
            a
          </span>
          <span className="text-sm font-medium tracking-tight">Akbar CP</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-ink"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line py-4 font-serif text-3xl"
            >
              {item.name}
              <span className="font-mono text-xs text-ink-3">→</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
