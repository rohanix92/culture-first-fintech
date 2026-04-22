import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Category = "Campaigns" | "Content" | "Brand";

type Project = {
  id: string;
  title: string;
  blurb: string;
  desc: string;
  result: string;
  category: Category;
  src: string;
  orientation: "landscape" | "portrait";
  span?: string;
  accent?: "accent" | "accent-2" | "accent-3";
};

const projects: Project[] = [
  {
    id: "A",
    title: "KBC × Amitabh Bachchan",
    blurb: "The Big B says Aspora.",
    desc: "Aspora integrated into Kaun Banega Crorepati — the most-watched Indian TV show, delivered into NRI living rooms via satellite.",
    result: "Cultural permission to exist.",
    category: "Campaigns",
    src: "/videos/video3.mp4",
    orientation: "landscape",
    span: "md:col-span-2 md:row-span-2",
    accent: "accent",
  },
  {
    id: "B",
    title: "Yuvraj Singh Brand Film",
    blurb: "Six balls. Six sixes. One Aspora.",
    desc: "Brand film with Yuvraj Singh — a tribute to the NRI moment that lives forever.",
    result: "2M+ organic views.",
    category: "Brand",
    src: "/videos/video1.mp4",
    orientation: "landscape",
    span: "md:col-span-2",
    accent: "accent-3",
  },
  {
    id: "C",
    title: "Neena Gupta Brand Films",
    blurb: "Mom knows. Aspora knows.",
    desc: "Brand films with Neena Gupta capturing the emotional core of sending money home.",
    result: "Highest brand-recall scores in category.",
    category: "Brand",
    src: "/videos/video2.mp4",
    orientation: "landscape",
    accent: "accent-3",
  },
  {
    id: "D",
    title: "The Cashpora Truck — UAE",
    blurb: "We drove cash through Dubai.",
    desc: "Experiential truck campaign across the UAE — turning remittance into a street-level cultural moment.",
    result: "Trended #1 on UAE social.",
    category: "Campaigns",
    src: "/videos/video4.mp4",
    orientation: "portrait",
    accent: "accent",
  },
  {
    id: "E",
    title: "London — NRI = Never Rip-Off Indians",
    blurb: "Year-end London takeover.",
    desc: "Tubes, buses, DOOH across London. The first NRI fintech to own the holiday season.",
    result: "1st NRI fintech to own London Q4.",
    category: "Campaigns",
    src: "/videos/video5.mp4",
    orientation: "portrait",
    accent: "accent",
  },
  {
    id: "F",
    title: "England vs India — Cricket OOH 2025",
    blurb: "Cricket, the UK, and us.",
    desc: "First-ever NRI fintech OOH during the India tour of England — across stadium routes and city centres.",
    result: "Category-defining moment.",
    category: "Campaigns",
    src: "/videos/video6.mp4",
    orientation: "portrait",
    accent: "accent",
  },
];

const filters: ("All" | Category)[] = ["All", "Campaigns", "Content", "Brand"];

const accentMap = {
  accent: { text: "text-accent", bg: "bg-accent", chipBg: "bg-accent/15", border: "border-accent/30" },
  "accent-2": {
    text: "text-accent-2",
    bg: "bg-accent-2",
    chipBg: "bg-accent-2/15",
    border: "border-accent-2/30",
  },
  "accent-3": {
    text: "text-accent-3",
    bg: "bg-accent-3",
    chipBg: "bg-accent-3/15",
    border: "border-accent-3/30",
  },
} as const;

function ProjectCard({ p }: { p: Project }) {
  const a = accentMap[p.accent ?? "accent"];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Autoplay (muted) on hover, pause on leave (desktop nicety)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered && !playing) {
      v.play().catch(() => {});
    } else if (!hovered && !playing) {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered, playing]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-fg/30 transition-colors ${p.span ?? ""}`}
    >
      {/* Video */}
      <div
        className={`relative w-full bg-black overflow-hidden ${
          p.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <video
          ref={videoRef}
          src={p.src}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20 pointer-events-none" />

        {/* Controls */}
        <div className="absolute bottom-3 right-3 flex gap-2 z-10">
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="h-9 w-9 rounded-full bg-black/60 backdrop-blur border border-white/15 text-white grid place-items-center hover:bg-black/80 transition"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className={`h-9 w-9 rounded-full ${a.bg} text-bg grid place-items-center hover:scale-105 transition`}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </button>
        </div>

        {/* Category chip */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border ${a.border} bg-black/50 backdrop-blur ${a.text} font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} />
            {p.category}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h3 className="font-serif italic text-2xl md:text-3xl leading-[1.05] text-fg">
          {p.blurb}
        </h3>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {p.title}
        </div>
        <p className="mt-4 text-sm text-fg/75 leading-relaxed max-w-[52ch]">
          {p.desc}
        </p>
        <div className={`mt-5 font-mono text-xs uppercase tracking-[0.16em] ${a.text}`}>
          → {p.result}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="px-5 md:px-10 py-28 md:py-40 border-b border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-5">
              ◆ 02 — Selected Work
            </div>
            <h2 className="font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em] max-w-3xl">
              Six moments, <span className="text-accent">one playbook.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  active === f
                    ? "border-fg text-bg"
                    : "border-border text-fg/80 hover:border-fg/50"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
