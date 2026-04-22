import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dubaiScreens from "@/assets/guerrilla-dubai-walking-screens.jpg";
import ukFireworks from "@/assets/guerrilla-uk-fireworks.jpg";
import ukTruck from "@/assets/guerrilla-uk-truck-screens.jpg";
import stadiumBanner from "@/assets/guerrilla-stadium-banner.jpg";

type Item = {
  src: string;
  title: string;
  city: string;
  blurb: string;
  span?: string;
  accent: "accent" | "accent-2" | "accent-3";
};

const items: Item[] = [
  {
    src: dubaiScreens,
    title: "Walking billboards by the Dubai Frame",
    city: "Dubai, UAE",
    blurb: "Six humans, six screens — Aspora literally walked the streets at golden hour.",
    span: "md:col-span-2 md:row-span-2",
    accent: "accent",
  },
  {
    src: ukFireworks,
    title: "Diwali fireworks · mobile LED",
    city: "Wolverhampton, UK",
    blurb: "Yuvraj Singh on a moving LED, fireworks above. NRI Diwali, owned.",
    accent: "accent-2",
  },
  {
    src: ukTruck,
    title: "Truck + walking screens convoy",
    city: "Midlands, UK",
    blurb: "An LED truck, an e-rickshaw and a walking-board squad — all on one high street.",
    span: "md:col-span-2",
    accent: "accent-3",
  },
  {
    src: stadiumBanner,
    title: "Stadium takeover · Asia Cup",
    city: "Dubai, UAE",
    blurb: "20,000+ fans in Aspora caps. The flag travelled to every camera angle.",
    accent: "accent",
  },
];

const accentText = {
  accent: "text-accent",
  "accent-2": "text-accent-2",
  "accent-3": "text-accent-3",
} as const;

const accentDot = {
  accent: "bg-accent",
  "accent-2": "bg-accent-2",
  "accent-3": "bg-accent-3",
} as const;

export function Guerrilla() {
  return (
    <section
      id="guerrilla"
      className="px-5 md:px-10 py-28 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-5">
              ◆ 04 — Guerrilla
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em] max-w-3xl"
            >
              Streets first. <span className="text-accent">Feeds follow.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-fg/75 leading-relaxed text-base md:text-lg"
          >
            Walking billboards in Dubai. LED trucks down UK high streets. Diwali
            fireworks lighting up a Yuvraj Singh ad. The kind of stuff people
            stop, film, and post — earned media built on purpose.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {items.map((e, i) => (
            <motion.figure
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card ${e.span ?? ""}`}
            >
              <img
                src={e.src}
                alt={`${e.title} — ${e.city}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <div className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${accentText[e.accent]} mb-1.5`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${accentDot[e.accent]}`} />
                  <MapPin className="h-3 w-3" />
                  {e.city}
                </div>
                <div className="font-serif italic text-lg md:text-xl text-white leading-tight">
                  {e.title}
                </div>
                <div className="mt-1.5 text-xs md:text-sm text-white/75 leading-snug max-w-[44ch]">
                  {e.blurb}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
