import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Youtube } from "lucide-react";
import { toast } from "sonner";

const rows = [
  {
    label: "Email",
    value: "rohanix93@gmail.com",
    Icon: Mail,
    accent: "accent",
    copy: true,
    href: "mailto:rohanix93@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/rohan-mukherjee1",
    Icon: Linkedin,
    accent: "accent-3",
    href: "https://www.linkedin.com/in/rohan-mukherjee1/",
  },
  {
    label: "Nrishaala",
    value: "@NRIShaala",
    Icon: Youtube,
    accent: "accent-2",
    href: "https://www.youtube.com/@NRIShaala",
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="px-5 md:px-10 py-28 md:py-40 border-b border-border">
      <div className="mx-auto max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted mb-10"
        >
          ◆ 05 — Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-5xl md:text-7xl leading-[0.98] tracking-[-0.01em]"
        >
          Let's make something <br className="hidden md:block" />
          <span className="text-accent">worth talking about.</span>
        </motion.h2>

        <div className="mt-16 text-left">
          {rows.map((r, i) => {
            const accentText =
              r.accent === "accent-2"
                ? "group-hover:text-accent-2"
                : r.accent === "accent-3"
                  ? "group-hover:text-accent-3"
                  : "group-hover:text-accent";
            const accentBar =
              r.accent === "accent-2"
                ? "bg-accent-2"
                : r.accent === "accent-3"
                  ? "bg-accent-3"
                  : "bg-accent";
            const handleClick = (e: React.MouseEvent) => {
              if ("copy" in r && r.copy) {
                e.preventDefault();
                navigator.clipboard.writeText(r.value).then(() => {
                  toast.success("Copied!", { description: r.value });
                });
              }
            };
            return (
              <motion.a
                key={r.label}
                href={r.href}
                target={r.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={handleClick}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative flex items-center justify-between gap-6 border-t border-border py-7 md:py-10 last:border-b transition-colors"
              >
                <span
                  className={`absolute left-0 bottom-0 h-px ${accentBar} w-0 group-hover:w-full transition-[width] duration-500 ease-out`}
                />
                <div className="flex items-center gap-5 md:gap-8 min-w-0">
                  <r.Icon className={`h-5 w-5 text-muted ${accentText} transition-colors`} />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] text-muted w-20 md:w-28">
                    {r.label}
                  </span>
                  <span className={`font-serif italic text-3xl md:text-5xl text-fg ${accentText} transition-colors truncate`}>
                    {r.value}
                  </span>
                </div>
                <ArrowUpRight className={`h-6 w-6 md:h-8 md:w-8 text-muted ${accentText} group-hover:rotate-12 transition-all shrink-0`} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
