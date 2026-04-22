function AvailableChip() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1.5">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80">
        Available for work · Q3 2026
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top nav row */}
      <header className="flex items-center justify-between px-6 md:px-12 lg:px-20 pt-8">
        <div className="font-mono text-xs uppercase tracking-[0.22em]">
          ◆ Maya Khanna
        </div>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
          <a href="#work" className="hover:text-orange transition-colors">Work</a>
          <a href="#about" className="hover:text-orange transition-colors">About</a>
          <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
        </nav>
        <AvailableChip />
      </header>

      {/* Hero body */}
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-5xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-10 animate-fade-up">
            Brand Marketer · London · 2026
          </div>

          <h1
            className="font-serif text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.95] tracking-[-0.02em] italic text-foreground animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            I make fintech feel{" "}
            <span className="text-orange">like pop culture.</span>
          </h1>

          <p
            className="mt-10 max-w-[560px] text-base md:text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Brand & marketing at Aspora — building the cultural vocabulary for
            32M NRIs sending money home. From Amitabh Bachchan on KBC to the
            first-ever NRI cricket-season OOH in the UK.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-all hover:gap-4"
            >
              See the work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-4 text-foreground font-medium text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Say hi
            </a>
          </div>
        </div>
      </div>

      {/* Bottom corner meta */}
      <div className="px-6 md:px-12 lg:px-20 pb-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>Scroll ↓</span>
        <span>Portfolio / Vol. 04</span>
      </div>
    </section>
  );
}
