import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const HEADLINE = ["I", "make", "tech", "feel", "like", "pop", "culture."];
const CITIES = ["London", "Dubai", "New York", "Berlin", "Dublin"];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [cityIdx, setCityIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCityIdx((i) => (i + 1) % CITIES.length), 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    const onLeave = () => setPos(null);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain pt-24 pb-16"
    >
      {/* Drifting gradient mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -inset-[20%] opacity-60 animate-mesh-drift"
          style={{
            background:
              "radial-gradient(40% 35% at 18% 30%, rgba(255,77,31,0.35), transparent 60%), radial-gradient(35% 30% at 80% 20%, rgba(255,45,156,0.22), transparent 65%), radial-gradient(45% 40% at 60% 85%, rgba(198,255,61,0.16), transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {pos && (
          <div
            className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
            style={{
              left: pos.x,
              top: pos.y,
              background:
                "radial-gradient(circle, rgba(255,77,31,0.18), transparent 65%)",
            }}
          />
        )}
      </div>

      <div className="mx-auto max-w-[1400px] w-full px-5 md:px-10">
        {/* Available chip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-end mb-12"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22e06b] animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22e06b]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/85">
              Available for select projects
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-muted mb-8"
        >
          <span>Brand Marketer · </span>
          <span className="relative inline-block align-baseline overflow-hidden h-[1.1em] min-w-[7ch]">
            {CITIES.map((c, i) => (
              <motion.span
                key={c}
                initial={false}
                animate={{
                  y: i === cityIdx ? 0 : i === (cityIdx - 1 + CITIES.length) % CITIES.length ? "-110%" : "110%",
                  opacity: i === cityIdx ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 text-accent"
              >
                {c}
              </motion.span>
            ))}
          </span>
          
        </motion.div>

        <h1 className="font-serif italic text-fg leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,8vw,7rem)] max-w-[14ch]">
          {HEADLINE.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: "0.5em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.06,
              }}
              className="inline-block mr-[0.22em]"
            >
              {word === "pop" || word === "culture." ? (
                <span className="text-accent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 max-w-[560px] text-base md:text-lg leading-relaxed text-muted"
        >
          Brand & marketing at Aspora — building the cultural vocabulary for 32M
          NRIs sending money home. From Amitabh Bachchan on KBC to riding every
          cricket season — Asia Cup in the UAE, India's tour of England in the UK.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-bg font-semibold text-sm tracking-wide hover:opacity-90 transition-all"
          >
            See the work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-fg font-medium text-sm tracking-wide hover:border-fg hover:bg-card transition-colors"
          >
            Say hi
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mx-auto max-w-[1400px] w-full px-5 md:px-10 mt-20 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-muted"
      >
        <span className="inline-flex items-center gap-2">
          <ArrowDown className="h-3 w-3" /> Scroll
        </span>
        <span>Portfolio · Vol. 04</span>
      </motion.div>
    </section>
  );
}
