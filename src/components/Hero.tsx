import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const resumePdf = "/resume.pdf";

const STATS = [
  { value: "4+", label: "Years experience" },
  { value: "3+", label: "Apps shipped" },
  { value: "5", label: "Engineers led" },
  { value: "1", label: "Award won" },
];

// App screens cycling in the phone mockup
const APP_SCREENS = [
  {
    title: "My Magic Moments",
    subtitle: "AI Storytelling App",
    accent: "#7c3aed",
    accentLight: "#a78bfa",
    icon: "✨",
    bars: [85, 60, 90, 45],
    badge: "4.8 ★",
    platform: "iOS & Android",
  },
  {
    title: "Voice Recorder Pro",
    subtitle: "Audio Recording App",
    accent: "#0891b2",
    accentLight: "#67e8f9",
    icon: "🎙️",
    bars: [70, 88, 55, 92],
    badge: "4.6 ★",
    platform: "iOS & Android",
  },
  {
    title: "Hiking Tracker",
    subtitle: "GPS Activity App",
    accent: "#059669",
    accentLight: "#6ee7b7",
    icon: "🗺️",
    bars: [92, 78, 65, 80],
    badge: "4.9 ★",
    platform: "Open Source",
  },
];

export function Hero() {
  const [screenIdx, setScreenIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setScreenIdx((i) => (i + 1) % APP_SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const screen = APP_SCREENS[screenIdx];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
      data-testid="section-hero"
    >
      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.12] dot-grid" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--background)) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-56"
          style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
        />
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Floating decorative app icons */}
        <FloatingIcons />
      </div>

      <div className="max-w-5xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ─────────────────────────────── */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-7 text-xs font-mono text-muted-foreground"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>

            {/* Name — gradient highlight */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
                className="text-5xl sm:text-6xl lg:text-[70px] font-sans font-extrabold tracking-[-0.035em] leading-[1.04]"
                data-testid="text-name"
              >
                <span className="grad">Rahul Vyas</span>
              </motion.h1>
            </div>

            {/* Title */}
            <div className="overflow-hidden mb-5">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
                className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold tracking-tight text-foreground/75"
                data-testid="text-role"
              >
                Senior Mobile Engineer
              </motion.p>
            </div>

            {/* Current role badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5"
              data-testid="badge-current-role"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary">Team Lead &amp; Sr. React Native Dev</span>
            </motion.div>

            {/* Platform badges */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex items-center gap-2 mb-6"
            >
              <PlatformBadge type="ios" />
              <PlatformBadge type="android" />
              <PlatformBadge type="rn" />
            </motion.div>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="text-[15px] text-muted-foreground leading-relaxed max-w-lg mb-8"
              data-testid="text-tagline"
            >
              4+ years of experience building iOS &amp; Android apps that millions of users love.
              From AI features and real-time data to payments and team leadership.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-8"
              data-testid="group-cta"
            >
              <a
                href={resumePdf}
                download="Rahul_Vyas_Resume.pdf"
                className="inline-flex items-center gap-2 h-9 px-5 rounded-md bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
                data-testid="button-download-resume"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-9 px-5 rounded-md border border-border text-foreground text-sm font-semibold hover:border-foreground/30 hover:bg-foreground/5 transition-colors"
                data-testid="button-contact"
              >
                Get in touch
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex items-center gap-4"
              data-testid="group-social"
            >
              {[
                { icon: Github, href: "https://github.com/rahulv009", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rahul-vyas-75aa231b0", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rv61229@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors link-underline"
                  data-testid={`link-${label.toLowerCase()}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Phone mockup ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <PhoneMockup screen={screen} screenIdx={screenIdx} />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Phone Mockup ───────────────────────────────────────── */
function PhoneMockup({ screen, screenIdx }: { screen: typeof APP_SCREENS[0]; screenIdx: number }) {
  return (
    <div className="relative">
      {/* Floating notification */}
      <PushNotification screenIdx={screenIdx} screen={screen} />

      {/* Floating platform pill */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20"
      >
        <div className="px-2.5 py-1 rounded-full bg-[#1a1a2e] border border-white/10 text-[10px] font-mono text-white/60 float-delayed whitespace-nowrap">
          iOS 17+
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#1a2e1a] border border-white/10 text-[10px] font-mono text-white/60 float whitespace-nowrap">
          Android 12+
        </div>
      </motion.div>

      {/* Phone frame */}
      <div
        className="relative w-[220px] h-[440px] rounded-[36px] overflow-hidden phone-shine phone-glow"
        style={{
          background: "#111114",
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#222] border border-[#333]" />
        </div>

        {/* Status bar */}
        <div className="absolute top-3 inset-x-0 flex items-center justify-between px-5 z-10">
          <span className="text-[9px] font-mono text-white/40">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end">
              {[2, 3, 4, 5].map((h, i) => (
                <div key={i} className="w-0.5 rounded-sm bg-white/40" style={{ height: h }} />
              ))}
            </div>
            <div className="w-3 h-1.5 rounded-sm border border-white/30 relative">
              <div className="absolute inset-y-0 left-0.5 w-1.5 rounded-sm bg-emerald-400 my-0.5" />
            </div>
          </div>
        </div>

        {/* App screen content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={screenIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col"
            style={{ background: `linear-gradient(160deg, ${screen.accent}22 0%, #111114 50%)` }}
          >
            {/* App header */}
            <div className="pt-12 px-4 pb-3">
              <div className="flex items-center justify-between mb-1">
                <div className="text-2xl">{screen.icon}</div>
                <div
                  className="px-2 py-0.5 rounded-full text-[9px] font-bold"
                  style={{ background: screen.accent + "33", color: screen.accentLight }}
                >
                  {screen.badge}
                </div>
              </div>
              <div className="text-[11px] font-bold text-white leading-tight">{screen.title}</div>
              <div className="text-[9px] text-white/40 mt-0.5">{screen.subtitle}</div>
            </div>

            {/* Mock UI card */}
            <div className="mx-3 mb-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-[9px] text-white/40 mb-2 font-mono">// stats overview</div>
              <div className="flex flex-col gap-1.5">
                {screen.bars.map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: `${w}%` }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="h-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${screen.accent}, ${screen.accentLight})` }}
                  />
                ))}
              </div>
            </div>

            {/* Mock list items */}
            <div className="px-3 flex flex-col gap-2">
              {["User session active", "Firebase sync ✓", "API calls: 142/s"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: screen.accent }} />
                  <div className="text-[9px] text-white/50 truncate">{item}</div>
                </div>
              ))}
            </div>

            {/* Bottom nav mock */}
            <div className="mt-auto mx-3 mb-4 rounded-xl flex items-center justify-around py-2.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {["⊞", "⊙", "◎", "⊕"].map((icon, i) => (
                <div key={i} className={`text-xs ${i === 0 ? "opacity-100" : "opacity-25"}`}
                  style={{ color: i === 0 ? screen.accentLight : "white" }}>
                  {icon}
                </div>
              ))}
            </div>

            {/* Platform tag */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
              <div className="text-[8px] text-white/20 font-mono">{screen.platform}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Screen dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {APP_SCREENS.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === screenIdx ? 16 : 5,
              height: 5,
              background: i === screenIdx ? "#7c3aed" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Push notification toast ────────────────────────────── */
function PushNotification({ screenIdx, screen }: { screenIdx: number; screen: typeof APP_SCREENS[0] }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 500);
    const t2 = setTimeout(() => setShow(false), 2400);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [screenIdx]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-[200px]"
        >
          <div
            className="rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
            style={{
              background: "rgba(20,20,24,0.92)",
              border: "1px solid rgba(255,255,255,0.10)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-base shrink-0">{screen.icon}</div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-white truncate">{screen.title}</div>
              <div className="text-[9px] text-white/40 truncate">New update available</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Platform badges ────────────────────────────────────── */
function PlatformBadge({ type }: { type: "ios" | "android" | "rn" }) {
  const badges = {
    ios: { label: "iOS", icon: "", bg: "bg-zinc-900 dark:bg-zinc-800", border: "border-zinc-700" },
    android: { label: "Android", icon: "", bg: "bg-zinc-900 dark:bg-zinc-800", border: "border-zinc-700" },
    rn: { label: "React Native", icon: "", bg: "bg-primary/5", border: "border-primary/20" },
  };
  const b = badges[type];
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${b.bg} ${b.border} text-xs font-medium text-foreground/70`}>
      <span className="text-[11px]">{b.icon}</span>
      {b.label}
    </div>
  );
}

/* ── Floating background icons ──────────────────────────── */
function FloatingIcons() {
  const items = [
    { emoji: "📱", x: "8%",  y: "20%", delay: 0,   size: "text-2xl", cls: "float-slow" },
    { emoji: "⚛️", x: "88%", y: "15%", delay: 0.5, size: "text-xl",  cls: "float" },
    { emoji: "🔔", x: "5%",  y: "65%", delay: 1,   size: "text-lg",  cls: "float-delayed" },
    { emoji: "🚀", x: "92%", y: "60%", delay: 0.8, size: "text-xl",  cls: "float-slow" },
    { emoji: "🍎", x: "80%", y: "80%", delay: 0.3, size: "text-base",cls: "float" },
    { emoji: "🤖", x: "12%", y: "82%", delay: 1.2, size: "text-base",cls: "float-delayed" },
  ];
  return (
    <>
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 + it.delay }}
          className={`absolute select-none pointer-events-none ${it.size} ${it.cls}`}
          style={{ left: it.x, top: it.y }}
        >
          {it.emoji}
        </motion.div>
      ))}
    </>
  );
}

/* ── Interactive Stat Card ──────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(stat.value.replace(/\D/g, ""));

  useEffect(() => {
    if (!isHovered) {
      setDisplayValue(stat.value.replace(/\D/g, ""));
      return;
    }

    const numericValue = parseInt(stat.value.replace(/\D/g, ""));
    if (isNaN(numericValue)) return;

    let current = 0;
    const increment = Math.ceil(numericValue / 20);
    const interval = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(stat.value);
        clearInterval(interval);
      } else {
        setDisplayValue(current.toString());
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered, stat]);

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-3 cursor-pointer group p-4 rounded-lg border transition-all duration-300"
      style={{
        borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--border))",
        backgroundColor: isHovered ? "hsl(var(--primary) / 0.05)" : "hsl(var(--card) / 0.5)",
        boxShadow: isHovered ? "0 0 20px hsl(var(--primary) / 0.15)" : "none",
      }}
      data-testid={`stat-${index}`}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
        }}
        transition={{ duration: 0.2 }}
        className="text-2xl font-sans font-extrabold tracking-tight relative inline-block w-fit"
      >
        {displayValue}
        {isHovered && (
          <motion.div
            layoutId={`glow-${index}`}
            className="absolute inset-0 blur-lg rounded-lg"
            style={{
              background: "hsl(var(--primary))",
              opacity: 0.2,
              zIndex: -1,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      <motion.span
        animate={{
          color: isHovered ? "hsl(var(--primary) / 0.7)" : "hsl(var(--muted-foreground))",
        }}
        transition={{ duration: 0.2 }}
        className="text-xs group-hover:translate-x-1 transition-transform"
      >
        {stat.label}
      </motion.span>
    </motion.div>
  );
}
