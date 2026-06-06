import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTag } from "./About";
import { Award, Users, TrendingUp, Globe } from "lucide-react";

const METRICS = [
  { icon: TrendingUp, value: "4+", label: "Years in production mobile dev", color: "text-violet-500" },
  { icon: Globe, value: "3+", label: "Apps live on App Store & Play Store", color: "text-cyan-500" },
  { icon: Users, value: "5", label: "Developers led & mentored", color: "text-emerald-500" },
  { icon: Award, value: "1", label: "Outstanding client management award", color: "text-amber-500" },
];

const AWARDS = [
  {
    icon: Award,
    title: "Outstanding Client Management Award",
    issuer: "Microlent System Pvt. Ltd.",
    year: "2026",
    description:
      "Recognized for exceptional client communication and consistent delivery of high-quality mobile solutions that exceeded expectations across multiple client engagements.",
  },
  {
    icon: Users,
    title: "Engineering Team Lead Promotion",
    issuer: "Microlent System Pvt. Ltd.",
    year: "2025",
    description:
      "Promoted to lead a cross-functional team of 3–5 developers for 1+ year, improving delivery velocity and establishing engineering standards that reduced bug rates.",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 lg:py-32 border-t border-border" data-testid="section-achievements">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Achievements" />
          {/* Awards */}
          <div className="flex flex-col gap-4">
            {AWARDS.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                className="surface p-5 flex items-start gap-4 hover:border-border/80 transition-colors group"
                data-testid={`card-achievement-${i}`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <award.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-heading font-bold text-foreground" data-testid={`text-achievement-title-${i}`}>{award.title}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground shrink-0">{award.year}</span>
                  </div>
                  <div className="text-xs font-semibold text-primary mb-1.5">{award.issuer}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
