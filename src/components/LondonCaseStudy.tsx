import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cover from "@/assets/aspora-london/01-cover.jpeg";
import problem from "@/assets/aspora-london/02-problem.jpeg";
import audience from "@/assets/aspora-london/03-audience.jpeg";
import placement from "@/assets/aspora-london/04-placement.jpeg";
import bigidea from "@/assets/aspora-london/05-bigidea.jpeg";
import format from "@/assets/aspora-london/06-format.jpeg";
import scale from "@/assets/aspora-london/07-scale.jpeg";
import impact from "@/assets/aspora-london/08-impact.jpeg";

type Slide = {
  src: string;
  step: string;
  title: string;
  span?: string;
};

const slides: Slide[] = [
  { src: cover, step: "01", title: "How we made an Indian money transfer app go viral across London", span: "md:col-span-2" },
  { src: problem, step: "02", title: "The Problem — money transfer ads are boring" },
  { src: audience, step: "03", title: "Start with the audience" },
  { src: placement, step: "04", title: "Smart placement — Southall, Wembley, Ilford" },
  { src: bigidea, step: "05", title: "The Big Idea — NRI = Never Rip-Off Indians" },
  { src: format, step: "06", title: "Push the format — change the meaning of NRI" },
  { src: scale, step: "07", title: "The Scale — 200+ placements across London" },
  { src: impact, step: "08", title: "Boring category. Bold execution. Real-world impact." },
];

export function LondonCaseStudy() {
  return (
    <section
      id="london-case-study"
      className="px-5 md:px-10 py-28 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-5">
              ◆ 03 — Case Study · London OOH
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em] max-w-3xl"
            >
              NRI = <span className="text-accent">Never Rip-Off Indians.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md"
          >
            <p className="text-fg/75 leading-relaxed text-base md:text-lg">
              Aspora's year-end OOH wrap across London — from insight to
              placement to format to scale. The deck, page by page.
            </p>
            <a
              href="https://www.instagram.com/p/DXuSKUcjF8R/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors"
            >
              View on Instagram <ArrowUpRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {slides.map((s, i) => (
            <motion.figure
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group overflow-hidden rounded-xl border border-border bg-card ${s.span ?? ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-4 md:p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-2">
                  {s.step}
                </div>
                <div className="font-serif italic text-base md:text-lg text-fg leading-tight">
                  {s.title}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
