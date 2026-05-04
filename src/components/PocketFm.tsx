import { motion, type Variants } from "framer-motion";
import { Youtube, ArrowUpRight } from "lucide-react";

type Channel = {
  name: string;
  handle: string;
  href: string;
  avatar: string;
  note: string;
};

const pocketFmChannels: Channel[] = [
  {
    name: "Pocket FM Dramas",
    handle: "@pocketfm.dramas",
    href: "https://youtube.com/@pocketfm.dramas",
    avatar:
      "https://yt3.googleusercontent.com/YCUw9CM8_JOt1EgEK2rTPMZvCcHHfxaygHu-HRg38wYx5CMudXnGwM9-4dITBCTSTStXnPzS=s900-c-k-c0x00ffffff-no-rj",
    note: "Flagship dramas channel",
  },
  {
    name: "Pocket FM Hindi Drama Shows",
    handle: "@pocketfm_hindi_drama_shows",
    href: "https://youtube.com/@pocketfm_hindi_drama_shows",
    avatar:
      "https://yt3.googleusercontent.com/OeaZAkaBLXGzs5JwW14CbwF402bzxLWg1dSZSlINrx3cPQktLf0khVZSlFRzgSv-SI_k49CNZw=s900-c-k-c0x00ffffff-no-rj",
    note: "Long-form Hindi drama IP",
  },
  {
    name: "Pocket FM India Hindi",
    handle: "@pocketfm_india_hindi",
    href: "https://youtube.com/@pocketfm_india_hindi",
    avatar:
      "https://yt3.googleusercontent.com/axlXEShlRH6zyoUH1CUNuqsaj9DQ_QjcTBOyVeVVQBZhOvvhfYsruD0roSfjQRBCJ_oo-Fw5Yg=s900-c-k-c0x00ffffff-no-rj",
    note: "India-first distribution channel",
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

export function PocketFm() {
  return (
    <section
      id="pocketfm"
      className="px-5 md:px-10 py-28 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div
            variants={fade}
            className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-10"
          >
            ◆ 06 — Pocket FM · Distribution at scale
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <motion.h2
              variants={fade}
              className="lg:col-span-6 font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em]"
            >
              More brands. <span className="text-accent-2">More distribution.</span>
            </motion.h2>
            <motion.p
              variants={fade}
              className="lg:col-span-6 text-lg md:text-xl leading-relaxed text-fg/80 max-w-[56ch]"
            >
              Before Aspora, I led content marketing at{" "}
              <span className="text-accent-2">Pocket FM</span> — a global
              audio-series company out of India, now at $400M+ ARR. I scaled
              YouTube channels into hundreds of millions of views, building
              repeatable distribution playbooks for long-form drama IPs.
            </motion.p>
          </div>

          <motion.div variants={fade}>
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="h-4 w-4 text-accent-2" />
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Channels I scaled
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pocketFmChannels.map((c) => (
                <a
                  key={c.handle}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-accent-2/50 transition-colors"
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover border border-border shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-serif italic text-lg leading-tight text-fg truncate">
                      {c.name}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-1 truncate">
                      {c.handle}
                    </div>
                    <div className="text-xs text-fg/70 mt-1.5 truncate">
                      {c.note}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent-2 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
