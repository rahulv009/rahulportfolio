import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SectionTag } from "./About";
import { Sparkles } from "lucide-react";

const CATEGORIES: { id: string; comment: string; color: string; skills: { name: string }[] }[] = [
  {
    id: "lang",
    comment: "// Languages",
    color: "from-violet-600/10 to-violet-600/5",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
    ],
  },
  {
    id: "mobile",
    comment: "// Mobile App Development",
    color: "from-cyan-600/10 to-cyan-600/5",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "iOS" },
      { name: "Android" },
      { name: "Xcode" },
      { name: "Android SDK" },
      { name: "TestFlight" },
    ],
  },
  {
    id: "state",
    comment: "// State Management",
    color: "from-emerald-600/10 to-emerald-600/5",
    skills: [
      { name: "Redux" },
      { name: "Context API" },
    ],
  },
  {
    id: "backend",
    comment: "// Backend & API Integration",
    color: "from-blue-600/10 to-blue-600/5",
    skills: [
      { name: "REST APIs" },
      { name: "Firebase Authentication" },
      { name: "Firebase Realtime Database" },
      { name: "PayPal API" },
    ],
  },
  {
    id: "ai",
    comment: "// AI & Advanced Features",
    color: "from-amber-600/10 to-amber-600/5",
    skills: [
      { name: "AI Feature Integration" },
      { name: "Voice Cloning" },
      { name: "Prompt Engineering" },
      { name: "Context AI Engineering" },
    ],
  },
  {
    id: "tools",
    comment: "// Tools",
    color: "from-pink-600/10 to-pink-600/5",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "VS Code" },
      { name: "Expo CLI" },
    ],
  },
  {
    id: "concepts",
    comment: "// Core Concepts",
    color: "from-rose-600/10 to-rose-600/5",
    skills: [
      { name: "Cross-Platform Development" },
      { name: "Performance Optimization" },
      { name: "Debugging" },
      { name: "Responsive UI Design" },
      { name: "Agile Development" },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  function generateDescription(name: string) {
    const descriptions: Record<string, string> = {
      "JavaScript (ES6+)": "Modern JavaScript with ES6+ features for clean, scalable code.",
      "TypeScript": "Type-safe codebases and improved developer experience with TypeScript.",
      "React Native": "Cross-platform mobile apps using React Native, focusing on performance and native integrations.",
      "Expo": "Expo for rapid prototyping, OTA updates and simplified native tooling.",
      "iOS": "Native iOS development with modern frameworks and best practices.",
      "Android": "Native Android development with Kotlin/Java and Android Studio.",
      "Xcode": "Apple's integrated development environment for iOS and macOS apps.",
      "Android SDK": "Android Software Development Kit for building and testing Android applications.",
      "TestFlight": "Beta testing platform for iOS apps with real user feedback.",
      "Redux": "Predictable state management for complex applications.",
      "Context API": "React's built-in state management for simpler use cases.",
      "REST APIs": "Building and consuming RESTful APIs for backend integration.",
      "Firebase Authentication": "Secure user authentication with Firebase.",
      "Firebase Realtime Database": "Real-time data synchronization with Firebase.",
      "PayPal API": "Payment processing and integration with PayPal services.",
      "AI Feature Integration": "Integrating AI models and APIs into mobile applications.",
      "Voice Cloning": "Advanced audio processing and voice synthesis technologies.",
      "Prompt Engineering": "Crafting effective prompts for AI language models.",
      "Context AI Engineering": "Building context-aware AI features and intelligent systems.",
      "Git": "Version control system for tracking code changes.",
      "GitHub": "Cloud-based Git repository hosting and collaboration.",
      "GitLab": "DevOps platform with built-in CI/CD and repository management.",
      "VS Code": "Lightweight, powerful code editor for development.",
      "Expo CLI": "Command-line tools for Expo project management.",
      "Cross-Platform Development": "Writing code once and deploying to multiple platforms.",
      "Performance Optimization": "Techniques to improve app speed and responsiveness.",
      "Debugging": "Identifying and fixing issues in code efficiently.",
      "Responsive UI Design": "Building interfaces that work seamlessly on all screen sizes.",
      "Agile Development": "Iterative development methodology for flexible project management.",
    };
    return descriptions[name] || `${name} — experience using this technology in production applications.`;
  }

  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border" data-testid="section-skills">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag label="Skills" />
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground mb-8 mt-2">Technical Stack</h2>

          {/* Category cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                onMouseEnter={() => setActive(cat.id)}
                onMouseLeave={() => setActive(null)}
                className={`relative surface p-6 transition-all duration-300 cursor-default rounded-lg border overflow-hidden group ${
                  active === cat.id
                    ? "border-primary/50 bg-gradient-to-br " + cat.color + " shadow-xl scale-105"
                    : "border-border hover:border-primary/30 hover:scale-[1.02]"
                }`}
                data-testid={`card-skill-group-${ci}`}
              >
                {/* Gradient background glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${cat.color}`}
                />

                <div className="relative z-10">
                  {/* Category header */}
                  <motion.div
                    animate={{
                      color: active === cat.id ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.5)",
                      letterSpacing: active === cat.id ? "0.05em" : "0em",
                    }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[11px] mb-4 font-semibold"
                  >
                    {cat.comment}
                  </motion.div>

                  {/* Skills as interactive tags */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {cat.skills.map((skill, si) => {
                      const isSelected = selectedSkill === skill.name;
                      const isHovered = hoveredSkill === skill.name;
                      return (
                        <motion.button
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.1 + ci * 0.08 + si * 0.03 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium text-xs transition-all duration-200 ${
                            isSelected
                              ? "border-primary/60 bg-primary/10 text-primary shadow-lg shadow-primary/20"
                              : isHovered
                              ? "border-primary/40 bg-primary/5 text-foreground shadow-md shadow-primary/10"
                              : "border-border bg-background text-foreground/70 hover:text-foreground"
                          }`}
                          data-testid={`skill-tag-${skill.name}`}
                        >
                          <span>{skill.name}</span>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Selected skill description with enhanced animation */}
                  <AnimatePresence mode="wait">
                    {selectedSkill && cat.skills.some((s) => s.name === selectedSkill) && (
                      <motion.div
                        key={selectedSkill}
                        initial={{ opacity: 0, y: 8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pt-4 border-t border-primary/10"
                      >
                        <p className="text-xs leading-relaxed text-muted-foreground/80">
                          {generateDescription(selectedSkill)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Learning card with enhanced interactivity */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: CATEGORIES.length * 0.08 }}
              className="surface relative p-6 flex flex-col items-start justify-between gap-4 border-dashed border border-primary/20 rounded-lg group hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="font-mono text-[11px] text-muted-foreground/50">{"// always learning"}</div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-primary/60" />
                  </motion.div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "GraphQL"].map((t, idx) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: CATEGORIES.length * 0.08 + idx * 0.08 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 rounded-lg border border-primary/20 text-xs font-medium text-muted-foreground/70 group-hover:text-muted-foreground group-hover:border-primary/40 transition-all duration-200 cursor-default"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
