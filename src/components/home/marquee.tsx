const words = ["Flutter", "Dart", "Django", "Firebase", "Socket.io", "Docker", "Google Maps", "REST APIs", "Clean Architecture"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-serif text-3xl italic text-ink-3">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span className="h-2 w-2 rounded-full bg-accent not-italic" />
          </span>
        ))}
      </div>
    </div>
  );
}
