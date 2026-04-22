export function Intro() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: stat block */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-6">
            ◆ 01 — Intro
          </div>
          <div className="aspect-[4/5] w-full bg-foreground text-background rounded-sm p-8 flex flex-col justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
              Backed by
            </div>
            <div>
              <div className="font-serif italic text-5xl md:text-6xl leading-none">$4B+</div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 max-w-[24ch]">
                NRI remittance volume processed across UK · UAE · US
              </div>
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
              <span>Sequoia</span>
              <span>Greylock</span>
              <span>YC</span>
            </div>
          </div>
        </aside>

        {/* Right: prose */}
        <div className="lg:col-span-7 lg:pt-12">
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] mb-12">
            A brand marketer who believes the best fintech marketing{" "}
            <span className="text-orange">doesn't feel like fintech marketing.</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/85 max-w-[58ch]">
            <p>
              It feels like culture. At Aspora — backed by Sequoia, Greylock,
              and Y Combinator, with $4B+ in NRI remittance volume — I build
              the brand across the UK, UAE, and US, where the product is
              invisible but the community is everything.
            </p>
            <p>
              That means writing copy that sounds like a WhatsApp voice note
              from your cousin in Wembley. Casting Amitabh Bachchan on KBC
              because it's the closest thing India has to a national living
              room. Buying the first-ever NRI cricket-season billboards on the
              A406 because diaspora deserves prime time, not a Facebook ad.
            </p>
            <p>
              I treat every campaign like a piece of pop culture — built to be
              quoted, screenshotted, and forwarded. Not just measured.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
            {[
              ["700K+", "NRIs reached"],
              ["3", "Markets launched"],
              ["#2", "NRI content IP"],
              ["1st", "UK cricket OOH"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-serif italic text-4xl md:text-5xl text-foreground">{k}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
