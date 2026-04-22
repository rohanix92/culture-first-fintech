const items = [
  "700K+ NRIs reached",
  "$4B+ volume processed",
  "3 markets launched",
  "Top-2 NRI content IP",
  "Cricket-season takeovers · UAE + UK",
  "KBC × Amitabh Bachchan integration",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((it, i) => (
        <div key={`${it}-${i}`} className="flex items-center gap-10">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.16em] text-fg whitespace-nowrap">
            {it}
          </span>
          <span className="text-accent text-xs" aria-hidden>◆</span>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-border bg-bg py-6 overflow-hidden"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
}
