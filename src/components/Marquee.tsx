const items = [
  "700K+ NRIs reached",
  "$4B+ volume processed",
  "3 markets launched",
  "Top-2 NRI content IP",
  "First UK NRI cricket OOH",
  "KBC × Amitabh Bachchan integration",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((it) => (
        <div key={it} className="flex items-center gap-10">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/80 whitespace-nowrap">
            {it}
          </span>
          <span className="text-orange text-sm" aria-hidden>◆</span>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-border bg-background py-5 overflow-hidden"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
}
