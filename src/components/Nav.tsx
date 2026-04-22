import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import confetti from "canvas-confetti";

const links = [
  { label: "Work", href: "#work" },
  { label: "Events", href: "#events" },
  { label: "Guerrilla", href: "#guerrilla" },
  { label: "About", href: "#about" },
  { label: "Nrishaala", href: "#nrishaala" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fireConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.15, x: 0.08 },
      colors: ["#ff4d1f", "#c6ff3d", "#ff2d9c", "#f5f1ea"],
      ticks: 220,
    });
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-bg/70 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-5 md:px-10 h-16">
          <button
            onClick={fireConfetti}
            aria-label="Rohan Mukherjee — confetti"
            className="font-serif italic text-2xl tracking-tight hover:text-accent transition-colors"
          >
            RM<span className="text-accent">.</span>
          </button>
          <nav className="flex items-center gap-1 md:gap-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.18em]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-2.5 md:px-3.5 py-2 rounded-full hover:bg-card hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
