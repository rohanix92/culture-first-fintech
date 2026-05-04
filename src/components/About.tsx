import { motion, type Variants } from "framer-motion";

type Stat = {
  k: string;
  label: string;
  sub?: string;
  markets?: string[];
};

const stats: Stat[] = [
  { k: "500M+", label: "OOH Impressions" },
  { k: "50+", label: "Events", sub: "Conceptualised & executed" },
  {
    k: "1B+",
    label: "Content Distribution",
    sub: "10M+ subscribers · across IPs & brands",
  },
  {
    k: "5",
    label: "Markets",
    markets: ["UK", "EU", "UAE", "US", "India"],
  },
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
                  <div
                    key={s.label}
                    className="bg-card p-6 md:p-8 min-h-[200px] flex flex-col justify-between gap-6"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted leading-relaxed">
                      {s.label}
                      {s.sub && (
                        <div className="mt-1.5 text-muted/70 normal-case tracking-[0.18em]">
                          {s.sub}
                        </div>
                      )}
                    </div>

                    {s.markets ? (
                      <div className="flex flex-wrap gap-1.5">
                        {s.markets.map((m) => (
                          <span
                            key={m}
                            className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg/90 px-2 py-1 border border-border rounded-md"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="font-serif italic text-5xl md:text-6xl text-fg leading-none">
                        {s.k}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prose */}
            <div className="lg:col-span-7 space-y-7 text-lg md:text-xl leading-relaxed text-fg/85 max-w-[60ch]">
              <motion.p variants={fade} className="text-2xl md:text-3xl font-serif italic text-fg leading-snug">
                I build distribution for tech where it actually lives — in
                culture, communities, and conversations.
              </motion.p>
              <motion.p variants={fade}>
                Brand marketer at{" "}
                <a
                  href="https://www.linkedin.com/company/get-aspora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Aspora
                </a>{" "}
                (Sequoia, Greylock, YC), previously{" "}
                <a
                  href="https://www.fortuneindia.com/business-news/pocket-fm-doubles-arr-to-400-million-in-12-months-rides-ai-led-content-engine-to-global-scale/132830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Pocket FM
                </a>{" "}
                ($400M+ ARR). Scaled brands and IPs to{" "}
                <span className="text-accent-2">1B+ organic views</span>. Drove
                growth across global markets through OOH, communities, and
                experiential marketing — from billboards to WhatsApp.
              </motion.p>
              <motion.p variants={fade} className="text-fg/70">
                I care about one thing: work that shows up in CAC and revenue —
                and in real people talking about it.
              </motion.p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
