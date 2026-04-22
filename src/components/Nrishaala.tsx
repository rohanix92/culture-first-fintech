import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Youtube, Instagram } from "lucide-react";

const stats = [
  "250K+ subs",
  "350+ videos",
  "50M+ views",
  "Top-2 global",
];

// Single featured episode — the full library lives on YouTube/Instagram
const FEATURED_ID = "P7lchcHSPYk";

function LazyEmbed({ id, title }: { id: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-card"
    >
      {load ? (
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="h-14 w-14 rounded-full bg-accent-2/20 flex items-center justify-center">
            <Play className="h-6 w-6 text-accent-2" />
          </div>
        </div>
      )}
    </div>
  );
}

export function Nrishaala() {
  return (
    <section
      id="nrishaala"
      className="relative px-5 md:px-10 py-28 md:py-40 border-b border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 20%, rgba(198,255,61,0.6), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-10"
        >
          ◆ 05 — Spotlight · A content IP
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <h2 className="font-serif italic text-6xl md:text-8xl leading-[0.92] tracking-[-0.02em]">
              Nri<span className="text-accent-2">shaala.</span>
            </h2>
            <p className="mt-6 text-lg text-fg/80 max-w-[44ch] leading-relaxed">
              A content IP on NRI life, built from the ground up.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {stats.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-accent-2/30 bg-accent-2/10 text-accent-2 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@NRIShaala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-card hover:border-accent-2 hover:text-accent-2 transition-colors"
              >
                <Youtube className="h-4 w-4" /> YouTube <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/nrishaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-card hover:border-accent-2 hover:text-accent-2 transition-colors"
              >
                <Instagram className="h-4 w-4" /> Instagram <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LazyEmbed id={FEATURED_ID} title="Nrishaala featured episode" />
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "Tax", v: "Retire rich in India" },
                { k: "Identity", v: "Belonging across borders" },
                { k: "Money", v: "NRE / NRO / FCNR demystified" },
                { k: "Culture", v: "Festivals, food, family" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="rounded-xl border border-border bg-card/60 p-4"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-2">
                    {c.k}
                  </div>
                  <div className="mt-1.5 text-sm text-fg/85 leading-snug">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
