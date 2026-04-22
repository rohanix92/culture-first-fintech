import { motion, type Variants } from "framer-motion";

const stats = [
  { k: "1M+", v: "NRIs reached" },
  { k: "$4B+", v: "Remittance volume" },
  { k: "4", v: "Markets · UK · EU · UAE · US" },
  { k: "250K+", v: "Nrishaala subscribers" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="px-5 md:px-10 py-28 md:py-40 border-b border-border">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            variants={fade}
            className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-12"
          >
            ◆ 01 — About
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Stats */}
            <motion.div variants={fade} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                {stats.map((s) => (
                  <div key={s.v} className="bg-card p-7 md:p-8 min-h-[170px] flex flex-col justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {s.v}
                    </div>
                    <div className="font-serif italic text-5xl md:text-6xl text-fg leading-none mt-6">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prose */}
            <div className="lg:col-span-7 space-y-7 text-lg md:text-xl leading-relaxed text-fg/85 max-w-[60ch]">
              <motion.p variants={fade}>
                I'm <span className="text-accent">Rohan</span> — a brand
                marketer who believes the best fintech marketing doesn't feel
                like fintech marketing. It feels like culture. At Aspora
                (Sequoia, Greylock, Y Combinator-backed, $4B+ in NRI remittance
                volume), I build the brand across the UK, UAE, and US — where
                the product is invisible but the community is everything.
              </motion.p>
              <motion.p variants={fade}>
                That's meant reaching 700K+ NRIs through above-the-line (Amitabh
                Bachchan on KBC, UK cricket-season OOH, Dubai street takeovers,
                UAE front-page newspaper gambles), cultural moments (Leicester
                Mela, BAPS Neasden, Eid gifting), and original content IP —{" "}
                <span className="text-accent-2">Nrishaala</span>, the
                YouTube-first talk show I built from zero into one of the top-2
                content properties in the global NRI category (250K+ subs,
                videos crossing 50M+ views).
              </motion.p>
              <motion.p variants={fade}>
                I think in campaigns, ship in sprints, and measure in both
                spreadsheets and WhatsApp forwards from aunties. Always game to
                talk brand, fintech, diaspora culture, and how to make paid
                media feel earned.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
