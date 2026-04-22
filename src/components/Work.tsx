import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from "lucide-react";

type Category = "Campaigns" | "Content" | "Brand";

type Project = {
  id: string;
  title: string;
  blurb: string;
  desc: string;
  result: string;
  category: Category;
  src: string;
  mediaType?: "video" | "image";
  orientation: "landscape" | "portrait";
  href?: string;
  span?: string;
  accent?: "accent" | "accent-2" | "accent-3";
};

import khaleejTimes from "@/assets/khaleej-times.jpg";

const projects: Project[] = [
  {
    id: "A",
    title: "KBC × Amitabh Bachchan",
    blurb: "The Big B says Aspora.",
    desc: "Brand integration of Aspora into Kaun Banega Crorepati on Sony Entertainment Television — beamed into NRI living rooms across the diaspora.",
    result: "Cultural permission to exist.",
    category: "Campaigns",
    src: "/videos/video3.mp4",
    orientation: "landscape",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_kbc-aspora-sonyentertainmenttelevision-ugcPost-7405115787331481600-wx4R",
    span: "md:col-span-2 md:row-span-2",
    accent: "accent",
  },
  {
    id: "KT",
    title: "Khaleej Times — Front Page Takeover",
    blurb: "We bought the front page.",
    desc: "Hours after India lifted the Asia Cup 2025, Aspora landed on the Khaleej Times front page across the UAE — a full-page brand moment riding the biggest cultural high of the year for the diaspora.",
    result: "Most-talked-about NRI fintech ad of the week.",
    category: "Campaigns",
    src: khaleejTimes,
    mediaType: "image",
    orientation: "portrait",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_we-took-a-front-page-gamble-for-aspora-activity-7378322861163204608-jL9t",
    accent: "accent-2",
  },
  {
    id: "B",
    title: "Yuvraj Singh — 6 Balls, 6 Sixes",
    blurb: "Six balls. Six sixes. One Aspora.",
    desc: "Brand film: a tribute to Yuvraj's iconic over — and to the NRI moment that lives forever.",
    result: "2M+ organic views.",
    category: "Brand",
    src: "/videos/video1.mp4",
    orientation: "landscape",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_6-balls-6-sixes-fastest-fifty-that-was-ugcPost-7329376621696638976-P1ie",
    span: "md:col-span-2",
    accent: "accent-3",
  },
  {
    id: "C",
    title: "Neena Gupta — Haggling Skills",
    blurb: "Mom knows. Aspora knows.",
    desc: "Brand film celebrating the haggling skills of every desi mom and aunty — the OG cost optimisers.",
    result: "Highest brand-recall scores in category.",
    category: "Brand",
    src: "/videos/video2.mp4",
    orientation: "landscape",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_those-haggling-skills-our-mom-and-aunties-ugcPost-7326827632308682752--Ops",
    accent: "accent-3",
  },
  {
    id: "D",
    title: "The Cashpora Truck — Dubai",
    blurb: "We took over Dubai's streets.",
    desc: "First and biggest experiential marketing campaign for Aspora in the UAE — a roving Cashpora truck activation across Dubai.",
    result: "Trended across UAE social.",
    category: "Campaigns",
    src: "/videos/video4.mp4",
    orientation: "portrait",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_aspora-just-took-over-dubais-streets-with-ugcPost-7373622560493600791-wBrY",
    accent: "accent",
  },
  {
    id: "E",
    title: "London — NRI = Never Rip-Off Indians",
    blurb: "Year-end London takeover.",
    desc: "Biggest OOH wrap of Aspora's year, executed with Noise Media — across London tubes, buses, and DOOH.",
    result: "1st NRI fintech to own London Q4.",
    category: "Campaigns",
    src: "/videos/video5.mp4",
    orientation: "portrait",
    href: "https://www.linkedin.com/posts/rohan-mukherjee1_this-was-our-year-end-wrap-across-london-ugcPost-7411377090341552128-eVkr",
    accent: "accent",
  },
  {
    id: "F",
    title: "England vs India — Cricket OOH 2025",
    blurb: "Cricket, the UK, and us.",
    desc: "OOH across the UK during the India tour of England 2025 — stadium routes, city centres, and the sea of blue jerseys.",
    result: "Category-defining moment.",
    category: "Campaigns",
    src: "/videos/video6.mp4",
    orientation: "portrait",
    href: "https://www.linkedin.com/posts/get-aspora_the-sea-of-blue-jerseys-flooding-the-streets-activity-7359097482951217152-CR4y",
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
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-fg transition-colors"
          >
            View post <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
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
