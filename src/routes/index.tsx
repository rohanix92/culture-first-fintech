import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/components/Intro";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maya Khanna — Brand Marketer, London" },
      {
        name: "description",
        content:
          "Brand & marketing at Aspora. Building the cultural vocabulary for 32M NRIs sending money home.",
      },
      { property: "og:title", content: "Maya Khanna — Brand Marketer, London" },
      {
        property: "og:description",
        content:
          "I make fintech feel like pop culture. Brand work across the UK, UAE, and US.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Hero />
      <Marquee />
      <Intro />
      <section id="work" className="px-6 md:px-12 lg:px-20 py-32 border-t border-border">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          ◆ 02 — Selected Work
        </div>
        <h2 className="mt-6 font-serif italic text-5xl md:text-7xl leading-[1] tracking-[-0.01em] max-w-4xl">
          Coming next.
        </h2>
      </section>
      <section id="contact" className="px-6 md:px-12 lg:px-20 py-32 border-t border-border">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          ◆ 03 — Contact
        </div>
        <h2 className="mt-6 font-serif italic text-5xl md:text-7xl leading-[1] tracking-[-0.01em]">
          Say hi →
        </h2>
      </section>
    </main>
  );
}
