import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Category = "Campaigns" | "Content" | "Brand";

type Project = {
  id: string;
  title: string;
  blurb: string;
  desc: string;
  result: string;
  category: Category;
  href: string;
  span?: string; // tailwind grid spans
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
    href: "https://www.linkedin.com/posts/rohan-mukherjee-a2099b180_asporaxkbc-asporaxbigb-activity-7393611884373852162-G0kk",
    span: "md:col-span-2 md:row-span-2",
    accent: "accent",
  },
  {
    id: "B",
    title: "Nrishaala",
    blurb: "A talk show, built from zero.",
    desc: "YouTube-first IP on diaspora culture, identity, money. 69.8K subs, 338 videos, 990K+ top video.",
    result: "Top-2 NRI content property globally.",
    category: "Content",
    href: "https://www.youtube.com/@NRIShaala",
    span: "md:row-span-2",
    accent: "accent-2",
  },
  {
    id: "C",
    title: "London Year-End OOH",
    blurb: "NRI = Never Rip Off Indians.",
    desc: "Year-end London takeover with Noise Media. Tubes, buses, DOOH.",
    result: "1st NRI fintech to own London holiday season.",
    category: "Campaigns",
    href: "https://www.linkedin.com/posts/rohan-mukherjee-a2099b180_the-story-behind-asporas-year-end-takeover-activity-7274897770258743296-h5Y7",
    accent: "accent",
  },
  {
    id: "D",
    title: "Dubai Street Takeover",
    blurb: "Owning the streets of the Gulf.",
    desc: "DOOH, transit, mall media across Dubai.",
    result: "Aspora top-of-mind in UAE.",
    category: "Campaigns",
    href: "https://www.linkedin.com/posts/rohan-mukherjee-a2099b180_dubaistreettakeover-asporainthedubaiair-activity-7371095660088393728-K9dS",
    accent: "accent",
  },
  {
    id: "E",
    title: "UK Cricket Season OOH",
    blurb: "Cricket, the UK, and us.",
    desc: "First-ever NRI fintech OOH during UK cricket season.",
    result: "Category-defining moment.",
    category: "Campaigns",
    href: "https://www.linkedin.com/posts/rohan-mukherjee-a2099b180_asporaxcricket-asporauk-activity-7336527195167424512-nF4G",
    span: "md:col-span-2",
    accent: "accent",
  },
  {
    id: "F",
    title: "UAE Front-Page Gamble",
    blurb: "Front page of the UAE.",
    desc: "Full-page newspaper wraps in the UAE's biggest dailies on a peak remittance day.",
    result: "10M+ impressions, one day.",
    category: "Campaigns",
    href: "https://www.linkedin.com/posts/rohan-mukherjee-a2099b180_gulfnews-khaleejtimes-aspora-activity-7315289317988069377-76bp",
    accent: "accent",
  },
  {
    id: "G",
    title: "Ad Films",
    blurb: "Films that get it.",
    desc: "Two films capturing NRI specificity: haggling skills + '6 balls, 6 sixes' cricket tribute.",
    result: "2M+ organic views combined.",
    category: "Brand",
    href: "https://www.youtube.com/@aspora_money",
    span: "md:col-span-2",
    accent: "accent-3",
  },
  {
    id: "H",
    title: "Cultural Events",
    blurb: "Showing up where the community is.",
    desc: "Leicester Mela, BAPS Neasden Navratri, Palmer Park events.",
    result: "10K+ community touchpoints.",
    category: "Brand",
    href: "https://www.linkedin.com/in/rohan-mukherjee-a2099b180/recent-activity/all/",
    accent: "accent-3",
  },
  {
    id: "I",
    title: "Eid Gifting Campaign",
    blurb: "Eid, on us.",
    desc: "Gifting campaign around Eid remittances in UAE.",
    result: "Highest-ever campaign CTR for Aspora UAE.",
    category: "Brand",
    href: "https://www.linkedin.com/in/rohan-mukherjee-a2099b180/recent-activity/all/",
    accent: "accent-3",
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
  return (
    <motion.a
      layout
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`group relative flex flex-col justify-between bg-card border border-border rounded-2xl p-6 md:p-8 min-h-[260px] overflow-hidden hover:border-fg/30 transition-colors ${p.span ?? ""}`}
    >
      <div
        className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
        style={{
          background:
            p.accent === "accent-2"
              ? "radial-gradient(60% 80% at 30% 0%, rgba(198,255,61,0.10), transparent 70%)"
              : p.accent === "accent-3"
                ? "radial-gradient(60% 80% at 30% 0%, rgba(255,45,156,0.10), transparent 70%)"
                : "radial-gradient(60% 80% at 30% 0%, rgba(255,77,31,0.12), transparent 70%)",
        }}
      />
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border ${a.border} ${a.chipBg} ${a.text} font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} />
          {p.category}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-fg group-hover:rotate-12 transition-all" />
      </div>

      <div className="mt-10">
        <h3 className="font-serif italic text-3xl md:text-4xl leading-[1.05] text-fg">
          {p.blurb}
        </h3>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {p.title}
        </div>
        <p className="mt-5 text-sm md:text-base text-fg/75 leading-relaxed max-w-[44ch]">
          {p.desc}
        </p>
        <div className={`mt-6 font-mono text-xs uppercase tracking-[0.16em] ${a.text}`}>
          → {p.result}
        </div>
      </div>
    </motion.a>
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
              Nine moments, <span className="text-accent">one playbook.</span>
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
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-5"
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
