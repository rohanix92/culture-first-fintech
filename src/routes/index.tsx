import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Nrishaala } from "@/components/Nrishaala";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rohan Mukherjee — Brand Marketer" },
      {
        name: "description",
        content:
          "Brand & marketing at Aspora — building the cultural vocabulary for 32M NRIs sending money home. London, 2026.",
      },
      { property: "og:title", content: "Rohan Mukherjee — Brand Marketer" },
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
    <main className="min-h-screen bg-bg text-fg">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Nrishaala />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
