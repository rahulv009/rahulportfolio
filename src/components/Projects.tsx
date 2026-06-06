import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionTag } from "./About";
import { Github, ArrowUpRight, Layers, Briefcase, Code2 } from "lucide-react";

const PROFESSIONAL = [
  {
    index: "01",
    name: "My Magic Moments",
    category: "AI · Mobile",
    tagline: "AI-Powered Children's Storytelling App",
    description:
      "Built an AI-powered storytelling platform delivering deeply personalized narrative experiences for children. Engineered voice cloning technology, AI personalization, and a secure PayPal payment gateway for premium subscriptions.",
    tech: ["React Native", "TypeScript", "Firebase", "PayPal API", "AI Integration"],
    metrics: ["2.5 yrs active", "iOS + Android", "Voice AI"],
    github: null,
    live: null,
    status: "Production",
  },
  {
    index: "02",
    name: "Voice Recorder Pro",
    category: "Audio · Mobile",
    tagline: "High-Fidelity Cross-Platform Recording",
    description:
      "High-quality voice recording application using Expo's native Audio API for crystal-clear capture. Built robust audio management with Firebase Cloud Storage sync and optimized for smooth performance across all devices.",
    tech: ["React Native", "Expo Audio API", "Firebase Cloud Storage"],
    metrics: ["1.5 yrs active", "iOS + Android", "Offline support"],
    github: null,
    live: null,
    status: "Production",
  },
  {
    index: "03",
    name: "Truencers",
    category: "Platform · Mobile",
    tagline: "Brand × Influencer Collaboration Platform",
    description:
      "Developed core collaboration features enabling seamless real-time workflows between brands and influencers. Elevated platform UI/UX and contributed architectural improvements that strengthened mobile scalability.",
    tech: ["React Native", "REST APIs"],
    metrics: ["7 mo sprint", "iOS + Android", "Real-time"],
    github: null,
    live: null,
    status: "Production",
  },
];

const PERSONAL = [
  {
    index: "01",
    name: "Hiking Tracker",
    category: "Fitness · GPS",
    tagline: "Real-Time Activity Tracking App",
    description:
      "Full-featured hiking and cycling tracker with live GPS route tracking via Expo Maps, trending trail search, real-time speed and distance monitoring. Designed an intuitive activity visualization dashboard.",
    tech: ["React Native", "Expo", "Expo Maps"],
    metrics: ["GPS tracking", "Open source"],
    github: "https://github.com/rahulv009/Hiker-Project-ReactNative",
    live: null,
    status: "Open Source",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    imageAlt: "Hiking trail in mountains",
  },
];

type Tab = "professional" | "personal";

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<Tab>("professional");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border" data-testid="section-projects">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Projects" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2 mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground" data-testid="heading-projects">
              Key Projects
            </h2>

            {/* Tab switcher */}
            <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-border bg-card">
              <button
                onClick={() => setTab("professional")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  tab === "professional"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="tab-professional"
              >
                <Briefcase className="w-3 h-3" />
                Professional
              </button>
              <button
                onClick={() => setTab("personal")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  tab === "personal"
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="tab-personal"
              >
                <Code2 className="w-3 h-3" />
                Personal
              </button>
            </div>
          </div>

          {/* Professional tab */}
          {tab === "professional" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-0 divide-y divide-border border border-border rounded-xl overflow-hidden"
            >
              {PROFESSIONAL.map((p, i) => (
                <ProfessionalRow
                  key={p.name}
                  project={p}
                  index={i}
                  inView={inView}
                  expanded={selectedProject === p.name}
                  onToggle={() => setSelectedProject(selectedProject === p.name ? null : p.name)}
                />
              ))}
            </motion.div>
          )}

          {/* Personal tab */}
          {tab === "personal" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {PERSONAL.map((p, i) => (
                <PersonalCard
                  key={p.name}
                  project={p}
                  index={i}
                  inView={inView}
                  expanded={selectedProject === p.name}
                  onToggle={() => setSelectedProject(selectedProject === p.name ? null : p.name)}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ProfessionalRow({ project: p, index, inView, expanded, onToggle }: { project: typeof PROFESSIONAL[0]; index: number; inView: boolean; expanded?: boolean; onToggle?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group cursor-pointer transition-all duration-200 p-5 sm:p-6 ${expanded ? "bg-card border border-primary/20 shadow-lg" : "bg-background hover:bg-card"}`}
      data-testid={`card-project-professional-${index}`}
      onClick={onToggle}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <div className="shrink-0">
          <span className={`font-mono text-[11px] font-semibold ${expanded ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/60"} transition-colors`}>{p.index}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-medium text-primary/70 uppercase tracking-wider">{p.category}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground font-medium">{p.status}</span>
              </div>
              <h3 className={`text-base font-heading font-bold ${expanded ? "text-primary" : "text-foreground group-hover:text-primary"} transition-colors`} data-testid={`text-project-name-${index}`}>{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{p.tagline}</p>
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <p className={`text-sm leading-relaxed mb-4 ${expanded ? "text-muted-foreground" : "text-muted-foreground line-clamp-3"}`}>{p.description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className={`inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded-md ${expanded ? "bg-primary/5 text-primary border border-primary/20" : "bg-muted text-muted-foreground border border-border"}`}>{t}</span>
              ))}
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex gap-3">
              {p.metrics.map((m) => (
                <span key={m} className="text-[11px] text-muted-foreground/70 flex items-center gap-1">
                  <Layers className="w-2.5 h-2.5" />{m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PersonalCard({ project: p, index, inView, expanded, onToggle }: { project: typeof PERSONAL[0]; index: number; inView: boolean; expanded?: boolean; onToggle?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`surface group transition-all duration-300 overflow-hidden flex flex-col cursor-pointer ${expanded ? "border-primary/30 shadow-lg scale-105" : "hover:border-primary/30"}`}
      data-testid={`card-project-personal-${index}`}
      onClick={onToggle}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.imageAlt}
          className={`w-full h-full object-cover transition-all duration-500 ${expanded ? "opacity-100 scale-110" : "opacity-80 group-hover:opacity-100 group-hover:scale-105"}`}
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-background/90 border border-border text-muted-foreground font-medium backdrop-blur-sm">
            {p.status}
          </span>
        </div>
        {/* Index */}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-[11px] font-semibold text-white/60">{p.index}</span>
        </div>
        {/* Expanded overlay description */}
        {expanded && (
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="text-sm font-semibold mb-1">{p.name}</div>
              <div className="text-xs opacity-90">{p.description}</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <div className="text-[10px] font-mono font-medium text-primary/70 uppercase tracking-wider mb-1">{p.category}</div>
          <h3 className={`text-sm font-heading font-bold ${expanded ? "text-primary" : "text-foreground group-hover:text-primary"} transition-colors`} data-testid={`text-personal-project-name-${index}`}>
            {p.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{p.tagline}</p>
        </div>

        {!expanded && <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">{p.description}</p>}

        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${expanded ? "bg-primary/5 text-primary border border-primary/20" : "bg-muted text-muted-foreground border border-border"}`}>{t}</span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-2">
            {p.metrics.map((m) => (
              <span key={m} className="text-[10px] text-muted-foreground/60 flex items-center gap-1">
                <Layers className="w-2.5 h-2.5" />{m}
              </span>
            ))}
          </div>
          <div className="flex gap-1.5">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-3 h-3" />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
