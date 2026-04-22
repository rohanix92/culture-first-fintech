import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import londonStage from "@/assets/event-london-stage.jpg";
import postcard from "@/assets/event-postcard.jpg";
import googleRates from "@/assets/event-google-rates.jpg";
import uaeNight from "@/assets/event-uae-night.jpg";
import mascots from "@/assets/event-mascots.jpg";
import leicesterMela from "@/assets/event-leicester-mela.jpg";
import oneInTwo from "@/assets/event-1in2-nris.jpg";
import teamBooth from "@/assets/event-team-booth.jpg";

type EventItem = {
  src: string;
  title: string;
  city: string;
  span?: string;
  accent?: "accent" | "accent-2" | "accent-3";
};

const events: EventItem[] = [
  { src: leicesterMela, title: "Leicester Mela — Headline Sponsor", city: "Leicester, UK", span: "md:col-span-2 md:row-span-2", accent: "accent" },
  { src: londonStage, title: "Summer Fair Mainstage", city: "London, UK", accent: "accent-3" },
  { src: uaeNight, title: "Cashpora Activation", city: "Dubai, UAE", accent: "accent-2" },
  { src: mascots, title: "Aspora Mascots IRL", city: "London, UK", span: "md:col-span-2", accent: "accent" },
  { src: postcard, title: "Postcards Home", city: "London, UK", accent: "accent-3" },
  { src: googleRates, title: "Google Rates. Guaranteed.", city: "London, UK", accent: "accent-2" },
  { src: teamBooth, title: "On-ground Team", city: "London, UK", span: "md:col-span-2", accent: "accent" },
  { src: oneInTwo, title: "1 in 2 NRIs Now Use Aspora", city: "Leicester, UK", accent: "accent-3" },
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

export function Events() {
  return (
    <section
      id="events"
      className="px-5 md:px-10 py-28 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-5">
              ◆ 03 — Owning the Culture
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em] max-w-3xl"
            >
              Don't sponsor the culture. <br className="hidden md:block" />
              <span className="text-accent">Own it.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-fg/75 leading-relaxed text-base md:text-lg"
          >
            Melas in Leicester. Eid nights in Dubai. Summer fairs in London. We
            don't slap a logo on a banner — we build the stage, run the booth,
            and walk home with the diaspora's trust.
          </motion.p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-10">
          {[
            { k: "30+", v: "Events activated" },
            { k: "3", v: "Continents" },
            { k: "1M+", v: "NRIs reached IRL" },
            { k: "100%", v: "Owned by us" },
          ].map((s) => (
            <div key={s.v} className="bg-bg p-6 md:p-7">
              <div className="font-serif italic text-3xl md:text-4xl text-fg">
                {s.k}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        {/* Mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {events.map((e, i) => {
            const a = e.accent ?? "accent";
            return (
              <motion.figure
                key={e.title + i}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${accentText[a]} mb-1.5`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${accentDot[a]}`} />
                    <MapPin className="h-3 w-3" />
                    {e.city}
                  </div>
                  <div className="font-serif italic text-lg md:text-xl text-white leading-tight">
                    {e.title}
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
