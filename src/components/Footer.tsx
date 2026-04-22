import confetti from "canvas-confetti";

export function Footer() {
  const fire = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.85, x: 0.1 },
      colors: ["#ff4d1f", "#c6ff3d", "#ff2d9c", "#f5f1ea"],
      ticks: 240,
    });
  };

  return (
    <footer className="px-5 md:px-10 py-10">
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <button
          onClick={fire}
          aria-label="Easter egg confetti"
          className="font-serif italic text-3xl text-fg hover:text-accent transition-colors w-fit"
        >
          RM<span className="text-accent">.</span>
        </button>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          © 2026 Rohan Mukherjee · Built in London · Last updated April 2026
        </div>
      </div>
    </footer>
  );
}
